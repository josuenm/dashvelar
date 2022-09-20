import {
  Inject,
  SparklineComponent,
  SparklineTooltip,
} from "@syncfusion/ej2-react-charts";

interface SparkLineProps {
  currentColor: string;
  id: string;
  type: "Line" | "Column" | "WinLoss" | "Pie" | "Area" | undefined;
  width: string;
  height: string;
  data: {
    x: number;
    yval: number;
  }[];
  color: string;
}

const SparkLine = ({
  id,
  width,
  height,
  color,
  currentColor,
  data,
  type,
}: SparkLineProps) => {
  return (
    <SparklineComponent
      id={id}
      width={width}
      height={height}
      lineWidth={1}
      fill={color}
      valueType="Numeric"
      border={{ color: currentColor, width: 2 }}
      dataSource={data}
      xName="xval"
      yName="yval"
      type={type}
      tooltipSettings={{
        visible: true,
        format: "${x}: data ${y}",
        trackLineSettings: {
          visible: true,
        },
      }}
    >
      <Inject services={[SparklineTooltip]} />
    </SparklineComponent>
  );
};

export default SparkLine;
