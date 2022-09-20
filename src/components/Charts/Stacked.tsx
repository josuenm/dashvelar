import {
  stackedCustomSeries,
  stackedPrimaryXAxis,
  stackedPrimaryYAxis,
} from "@assets/data/dummy";
import {
  AxisModel,
  Category,
  ChartComponent,
  Inject,
  Legend,
  SeriesCollectionDirective,
  SeriesDirective,
  StackingColumnSeries,
  Tooltip,
} from "@syncfusion/ej2-react-charts/src";

interface StackedProps {
  width: string;
  height: string;
}

const Stacked = ({ width, height }: StackedProps) => {
  return (
    <ChartComponent
      width={width}
      height={height}
      id="charts"
      primaryXAxis={stackedPrimaryXAxis as AxisModel}
      primaryYAxis={stackedPrimaryYAxis as AxisModel}
      chartArea={{ border: { width: 0 } }}
      tooltip={{ enable: true }}
      legendSettings={{ background: "white" }}
    >
      <Inject services={[Legend, Category, StackingColumnSeries, Tooltip]} />
      <SeriesCollectionDirective>
        {stackedCustomSeries.map((item, index) => (
          <SeriesDirective key={index} {...item} />
        ))}
      </SeriesCollectionDirective>
    </ChartComponent>
  );
};

export default Stacked;
