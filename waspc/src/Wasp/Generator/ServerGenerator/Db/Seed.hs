module Wasp.Generator.ServerGenerator.Db.Seed
  ( genDbSeed,
    getPackageJsonPrismaSeedField,
    dbSeedNameEnvVarName,
    getDbSeeds,
  )
where

import Data.Aeson (object, (.=))
import qualified Data.Aeson as Aeson
import Data.Maybe (maybeToList)
import StrongPath (Dir, File, Path, Path', Posix, Rel, reldirP, relfile, (</>))
import Wasp.AppSpec (AppSpec)
import qualified Wasp.AppSpec.App as AS.App
import qualified Wasp.AppSpec.App.Db as AS.Db
import Wasp.AppSpec.ExtImport (ExtImport, importIdentifier)
import Wasp.AppSpec.Valid (getApp)
import Wasp.Generator.FileDraft (FileDraft)
import Wasp.Generator.Monad (Generator)
import qualified Wasp.Generator.ServerGenerator.Common as C
import Wasp.Generator.ServerGenerator.JsImport (extImportToImportJson)

genDbSeed :: AppSpec -> Generator [FileDraft]
genDbSeed spec = do
  maybeTmplData <- dbSeedsToTemplateData (getDbSeeds spec)
  let maybeDbSeedsFds = genDbSeeds <$> maybeTmplData
  return $ maybeToList maybeDbSeedsFds
  where
    genDbSeeds :: Aeson.Value -> FileDraft
    genDbSeeds tmplData =
      C.mkTmplFdWithData
        (C.srcDirInServerTemplatesDir </> dbSeedScriptInServerTmplSrcDir)
        (Just tmplData)

dbSeedScriptInServerTmplSrcDir :: Path' (Rel C.ServerTemplatesSrcDir) (File ())
dbSeedScriptInServerTmplSrcDir = [relfile|dbSeed.ts|]

pathFromDbSeedScriptToServerSrc :: Path Posix (Rel ()) (Dir C.ServerSrcDir)
pathFromDbSeedScriptToServerSrc = [reldirP|./|]

getPackageJsonPrismaSeedField :: AppSpec -> Maybe String
getPackageJsonPrismaSeedField spec =
  case getDbSeeds spec of
    Just (_ : _) -> Just "npm run db-seed"
    _ -> Nothing

getDbSeeds :: AppSpec -> Maybe [ExtImport]
getDbSeeds spec = AS.Db.seeds =<< AS.App.db (snd $ getApp spec)

dbSeedsToTemplateData :: Maybe [ExtImport] -> Generator (Maybe Aeson.Value)
dbSeedsToTemplateData Nothing = return Nothing
dbSeedsToTemplateData (Just []) = return Nothing
dbSeedsToTemplateData (Just seeds) = do
  dbSeeds <- mapM dbSeedToTemplateData seeds
  return $
    Just $
      object
        [ "dbSeeds" .= dbSeeds,
          "dbSeedNameEnvVarName" .= dbSeedNameEnvVarName
        ]
  where
    dbSeedToTemplateData :: ExtImport -> Generator Aeson.Value
    dbSeedToTemplateData extImport = do
      seedFn <- extImportToImportJson pathFromDbSeedScriptToServerSrc (Just extImport)
      return $
        object
          [ "name" .= importIdentifier extImport,
            "seedFn" .= seedFn
          ]

dbSeedNameEnvVarName :: String
dbSeedNameEnvVarName = "WASP_DB_SEED_NAME"
