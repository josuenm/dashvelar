import { employeesData, employeesGrid } from "@assets/data/dummy";
import { Header } from "@components/index";
import {
  ColumnDirective,
  ColumnsDirective,
  GridComponent,
  Inject,
  Page,
  Search,
  Toolbar,
} from "@syncfusion/ej2-react-grids";

const Employees = () => {
  return (
    <main className="my-12 p-2 md:p-10 lg:max-w-5xl mx-auto bg-white rounded-3xl">
      <Header category="Page" title="Employees" />

      <GridComponent
        dataSource={employeesData}
        allowPaging
        allowSorting
        toolbar={["Search"]}
        width="auto"
      >
        <ColumnsDirective>
          {employeesGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>

        <Inject services={[Page, Search, Toolbar]} />
      </GridComponent>
    </main>
  );
};

export default Employees;
