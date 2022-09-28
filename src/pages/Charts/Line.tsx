import { Header, LineChart } from "@components/index";

const Line = () => {
  return (
    <main className="min-h-screen">
      <div className="lg:max-w-5xl mt-24 mx-auto p-10 bg-white rounded-3xl">
        <Header category="Chart" title="Inflation Rate" />
        <div className="w-full">
          <LineChart />
        </div>
      </div>
    </main>
  );
};

export default Line;
