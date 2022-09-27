import { ordersData, ordersGrid } from "@assets/data/dummy";
import { Header } from "@components/index";
import {
  ColumnDirective,
  ColumnsDirective,
  ContextMenu,
  Edit,
  ExcelExport,
  Filter,
  GridComponent,
  Inject,
  Page,
  PdfExport,
  Resize,
  Sort,
} from "@syncfusion/ej2-react-grids";

const Orders = () => {
  return (
    <main className="min-h-screen my-12 p-2 md:p-10 lg:max-w-5xl mx-auto bg-white rounded-3xl">
      <Header category="Page" title="Orders" />

      <GridComponent
        id="gridcomp"
        dataSource={ordersData}
        allowPaging
        allowSorting
      >
        <ColumnsDirective>
          {ordersGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>

        <Inject
          services={[
            Resize,
            Sort,
            ContextMenu,
            Filter,
            Page,
            ExcelExport,
            Edit,
            PdfExport,
          ]}
        />
      </GridComponent>
    </main>
  );
};

export default Orders;
