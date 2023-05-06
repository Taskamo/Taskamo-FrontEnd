import React, { useEffect, useState } from "react";
import { PieChart, Pie, Cell } from "recharts";

export const useIsServerSide = () => {
  const [isServerSide, setIsServerSide] = useState(true);

  useEffect(() => {
    setIsServerSide(false);
  }, [setIsServerSide]);

  return isServerSide;
};

const PieChartComponent = (props: any) => {
  const data = [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 300 },
  ];
  const COLORS = ["#FF5454", "#7FFFB2"];

  useEffect(() => {
    console.log(props.text);
  }, [props.text]);

  const isServerSide = useIsServerSide();
  if (isServerSide) return null;

  return (
    <div className="relative w-fit h-fit flex items-center justify-center">
      <p className="text-white absolute m-auto">{`${
        props.data.filter((item: any) => item.status === "done").length
      } / ${props.data.length}`}</p>
      <PieChart width={111} height={111}>
        <Pie
          data={[
            {
              name: "unseved",
              value:
                props.data.length -
                props.data.filter((item: any) => item.status === "done").length,
            },
            {
              name: "done",
              value: props.data.filter((item: any) => item.status === "done")
                .length,
            },
          ]}
          cx={50}
          cy={50}
          innerRadius={40}
          outerRadius={50}
          fill="#8884d8"
          stroke={"transparent"}
          cornerRadius={3}
          paddingAngle={5}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </div>
  );
};

export default PieChartComponent;
