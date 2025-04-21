"use client";

import React, { useEffect, useRef } from "react";

import * as echarts from "echarts/core";
import { Bar3DChart } from "echarts-gl/charts";
import { Grid3DComponent } from "echarts-gl/components";
import { TooltipComponent, VisualMapComponent } from "echarts/components";
import { CanvasRenderer } from "echarts/renderers";

echarts.use([
  Bar3DChart,
  Grid3DComponent,
  TooltipComponent,
  VisualMapComponent,
  CanvasRenderer,
]);

interface ContributionData {
  week: number;
  day: number;
  value: number;
}

const GithubContributionChart = ({ data }: { data: ContributionData[] }) => {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!chartRef.current) return;

    const chart = echarts.init(chartRef.current);

    chart.setOption({
      tooltip: {},
      visualMap: {
        max: 20,
        inRange: {
          color: ["#ebedf0", "#c6e48b", "#7bc96f", "#239a3b", "#196127"],
        },
        calculable: true,
        orient: "horizontal",
        left: "center",
        bottom: 0,
      },
      xAxis3D: {
        type: "category",
        data: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      },
      yAxis3D: {
        type: "category",
        data: Array.from({ length: 52 }, (_, i) => `W${i + 1}`),
      },
      zAxis3D: {
        type: "value",
      },
      grid3D: {
        boxWidth: 200,
        boxDepth: 80,
        viewControl: {
          alpha: 30,
          beta: 60,
          autoRotate: false,
        },
        light: {
          main: {
            intensity: 1.2,
          },
          ambient: {
            intensity: 0.3,
          },
        },
      },
      series: [
        {
          type: "bar3D",
          data: data.map((item) => [item.day, `W${item.week + 1}`, item.value]),
          shading: "lambert",
          label: {
            show: false,
          },
          itemStyle: {
            opacity: 0.9,
          },
        },
      ],
    });

    return () => {
      chart.dispose();
    };
  }, [data]);

  return <div ref={chartRef} style={{ width: "100%", height: "500px" }} />;
};

export default GithubContributionChart;
