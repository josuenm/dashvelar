import {
  areaCustomSeries,
  AreaPrimaryXAxis,
  AreaPrimaryYAxis,
} from "@assets/data/dummy";
import { Header } from "@components/index";
import { useStateContext } from "@contexts/ContextProvider";
import {
  ChartComponent,
  DateTime,
  Inject,
  Legend,
  SeriesCollectionDirective,
  SeriesDirective,
  SplineAreaSeries,
  ValueType,
} from "@syncfusion/ej2-react-charts";

const Area = () => {
  const { currentMode } = useStateContext();

  return (
    <main className="min-h-screen">
      <div className="lg:max-w-5xl mt-24 mx-auto p-10 bg-white rounded-3xl">
        <Header category="Area" title="Inflation Rate in Percentage" />
        <div className="w-full">
          <ChartComponent
            id="line-chart"
            height="420px"
            primaryXAxis={AreaPrimaryXAxis as { valueType: ValueType }}
            primaryYAxis={AreaPrimaryYAxis}
            chartArea={{ border: { width: 0 } }}
            tooltip={{ enable: true }}
            background={currentMode === "Dark" ? "#fff" : "#fff"}
          >
            <Inject services={[SplineAreaSeries, DateTime, Legend]} />
            <SeriesCollectionDirective>
              {areaCustomSeries.map((item, index) => (
                <SeriesDirective key={index} {...item} />
              ))}
            </SeriesCollectionDirective>
          </ChartComponent>
        </div>
      </div>
    </main>
  );
};

export default Area;
