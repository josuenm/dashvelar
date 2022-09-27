import { customersData, customersGrid } from "@assets/data/dummy";
import { Header } from "@components/index";
import {
  ColumnDirective,
  ColumnsDirective,
  Edit,
  Filter,
  GridComponent,
  Inject,
  Page,
  Selection,
  Sort,
  Toolbar,
} from "@syncfusion/ej2-react-grids";

const Customers = () => {
  return (
    <main className="min-h-screen my-12 p-2 md:p-10 lg:max-w-5xl mx-auto bg-white rounded-3xl">
      <Header category="Page" title="Customers" />

      <GridComponent
        dataSource={customersData}
        allowPaging
        allowSorting
        toolbar={["Delete"]}
        editSettings={{ allowDeleting: true, allowEditing: true }}
        width="auto"
      >
        <ColumnsDirective>
          {customersGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>

        <Inject services={[Page, Toolbar, Selection, Edit, Sort, Filter]} />
      </GridComponent>
    </main>
  );
};

export default Customers;
