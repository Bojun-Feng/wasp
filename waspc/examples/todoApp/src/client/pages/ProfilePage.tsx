import React, { useEffect, useRef, useState } from 'react'
import { Link, routes } from '@wasp/router'
import { User } from '@wasp/auth/types'
import api from '@wasp/api'
import {
  useSocket,
  useSocketListener,
  ServerToClientPayload,
} from '@wasp/webSocket'

async function fetchCustomRoute() {
  const res = await api.get('/foo/bar')
  console.log(res.data)
}

export const ProfilePage = ({ user }: { user: User }) => {
  const [messages, setMessages] = useState<
    ServerToClientPayload<'chatMessage'>[]
  >([])
  const { socket, isConnected } = useSocket()
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    fetchCustomRoute()
  }, [])

  useSocketListener('chatMessage', (msg) =>
    setMessages((priorMessages) => [msg, ...priorMessages])
  )

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    if (inputRef.current !== null) {
      socket.emit('chatMessage', inputRef.current.value)
      inputRef.current.value = ''
    }
  }

  const messageList = messages.map((msg) => (
    <li key={msg.id}>
      <em>{msg.username}</em>: {msg.text}
    </li>
  ))
  const connectionIcon = isConnected ? '🟢' : '🔴'

  const identity = user.auth?.identities[0]

  const userId = identity?.providerUserId

  const isVerified =
    identity?.providerData && 'isEmailVerified' in identity?.providerData
      ? identity?.providerData.isEmailVerified
      : false

  return (
    <>
      <h2>Profile page</h2>
      <div>
        Hello <strong>{userId}</strong>! Your status is{' '}
        <strong>{isVerified ? 'verfied' : 'unverified'}</strong>.
      </div>
      <br />
      <Link to="/task/:id" params={{ id: 3 }}>
        Task 3
      </Link>
      <p>
        Route is{' '}
        {routes.TaskRoute.build({
          params: { id: 5 },
          search: { google: 'true' },
          hash: 'Miho',
        })}
      </p>
      <div>
        <form onSubmit={handleSubmit}>
          <div className="flex space-x-4 place-items-center">
            <div>{connectionIcon}</div>
            <div>
              <input type="text" ref={inputRef} />
            </div>
            <div>
              <button className="btn btn-primary" type="submit">
                Submit
              </button>
            </div>
          </div>
        </form>
        <ul>{messageList}</ul>
      </div>
    </>
  )
}
