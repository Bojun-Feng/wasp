import { useMemo } from "react";
import { Bar } from "@visx/shape";
import { Group } from "@visx/group";
import { scaleBand, scaleLinear } from "@visx/scale";
import { AxisBottom, AxisLeft } from "@visx/axis";

function generateLast24HoursData(projects) {
  const buckets = [];
  const now = new Date();
  const last24Hours = new Date(now.getTime() - 24 * 60 * 60 * 1000);
  for (let i = 0; i < 24; i++) {
    const bucketStart = new Date(last24Hours.getTime() + i * 60 * 60 * 1000);
    const bucket = {
      date: bucketStart,
      displayValue: bucketStart.getHours() + 1,
      count: 0,
    };
    buckets.push(bucket);
  }
  projects.forEach((project) => {
    const createdAt = new Date(project.createdAt);
    // Difference in hours between now and when the project was created
    const bucketIndex = Math.floor(
      (now.getTime() - createdAt.getTime()) / (60 * 60 * 1000)
    );
    const reverseBucketIndex = buckets.length - bucketIndex - 1;
    // Count only projects that were created in the last 24 hours
    if (bucketIndex >= 0 && bucketIndex < 24) {
      buckets[reverseBucketIndex].count++;
    }
  });
  return buckets;
}

function generateLast30DaysData(projects) {
  const buckets = [];
  const now = new Date();
  const last30Days = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
  for (let i = 0; i < 30; i++) {
    const bucketStart = new Date(
      last30Days.getTime() + i * 24 * 60 * 60 * 1000
    );
    const bucket = {
      date: bucketStart,
      displayValue: bucketStart.getDate(),
      count: 0,
    };
    buckets.push(bucket);
  }
  projects.forEach((project) => {
    const createdAt = new Date(project.createdAt);
    // Difference in days between now and when the project was created
    const bucketIndex = Math.floor(
      (now.getTime() - createdAt.getTime()) / (24 * 60 * 60 * 1000)
    );
    const reverseBucketIndex = buckets.length - bucketIndex - 1;
    // Count only projects that were created in the last 30 days
    if (bucketIndex >= 0 && bucketIndex < 30) {
      buckets[reverseBucketIndex].count++;
    }
  });
  return buckets;
}

const verticalMargin = 50;
const margins = {
  left: 0,
};

export function BarChart({ projects, chartType, width, height }) {
  const data = useMemo(() => {
    if (chartType === "last24Hours") {
      return generateLast24HoursData(projects);
    }
    return generateLast30DaysData(projects);
  }, [chartType, projects]);
  // bounds
  const xMax = width - margins.left;
  const yMax = height - verticalMargin;

  // scales, memoize for performance
  const xScale = useMemo(
    () =>
      scaleBand({
        range: [0, xMax],
        round: true,
        domain: data.map((bucket) => bucket.displayValue),
        padding: 0.4,
      }),
    [data, xMax]
  );
  const yScale = useMemo(
    () =>
      scaleLinear({
        range: [yMax, 0],
        round: true,
        domain: [0, Math.max(...data.map((bucket) => bucket.count))],
      }),
    [data, yMax]
  );

  return width < 10 ? null : (
    <svg width={width} height={height}>
      <rect width={width} height={height} className="fill-slate-100" rx={14} />
      <Group top={verticalMargin / 2} left={margins.left}>
        {data.map((d) => {
          const barWidth = xScale.bandwidth();
          const barHeight = yMax - (yScale(d.count) ?? 0);
          const barX = xScale(d.displayValue);
          const barY = yMax - barHeight;
          return (
            d.count > 0 && (
              <Group>
                <Bar
                  key={`bar-${d.date}`}
                  x={barX}
                  y={barY}
                  width={barWidth}
                  height={barHeight}
                  className="fill-pink-300"
                />

                <text
                  x={barX + barWidth / 2}
                  y={yMax - barHeight}
                  fill="black"
                  fontSize={12}
                  dy={"-.33em"}
                  style={{ fontFamily: "arial", textAnchor: "middle" }}
                >
                  {d.count}
                </text>
              </Group>
            )
          );
        })}
        <AxisBottom
          numTicks={data.length}
          top={yMax}
          scale={xScale}
          tickLabelProps={() => ({
            fill: "#333",
            fontSize: 11,
            textAnchor: "middle",
          })}
        />
      </Group>
    </svg>
  );
}
