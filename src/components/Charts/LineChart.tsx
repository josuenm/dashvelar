import {
  lineCustomSeries,
  LinePrimaryXAxis,
  LinePrimaryYAxis,
} from "@assets/data/dummy";
import { useStateContext } from "@contexts/ContextProvider";
import {
  ChartComponent,
  ChartRangePadding,
  DateTime,
  Inject,
  Legend,
  LineSeries,
  SeriesCollectionDirective,
  SeriesDirective,
  Tooltip,
  ValueType,
} from "@syncfusion/ej2-react-charts";

const LineChart = () => {
  const { currentMode } = useStateContext();

  return (
    <ChartComponent
      id="line-chart"
      height="420px"
      primaryXAxis={LinePrimaryXAxis as { valueType: ValueType }}
      primaryYAxis={LinePrimaryYAxis as { rangePadding: ChartRangePadding }}
      chartArea={{ border: { width: 0 } }}
      tooltip={{ enable: true }}
      background={currentMode === "Dark" ? "#fff" : "#fff"}
    >
      <Inject services={[LineSeries, DateTime, Legend, Tooltip]} />
      <SeriesCollectionDirective>
        {lineCustomSeries.map((item, index) => (
          <SeriesDirective key={index} {...item} />
        ))}
      </SeriesCollectionDirective>
    </ChartComponent>
  );
};

export default LineChart;
