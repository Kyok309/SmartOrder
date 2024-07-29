import { Table, ConfigProvider } from "antd";
import '../../globals.css'
const dataSource = [
    {
      key: '1',
      id: '2406191225289701296',
      state: 'Шинэ',
      supplier: 'Волтам',
      orderDate: '2024/06/19',
      deliveryDate: '2024/6/21',
      paymentType: '',
      amount: '20',
      totalPrice: 55000,
    },
  ];
  
  const columns = [
    {
        title: '#',
        dataIndex: 'id',
        key: 'id',
        fixed: 'left',
        width: 220,
        className: "text-blue-500 hover:underline cursor-pointer",
    },
    {
        title: 'Төлөв',
        dataIndex: 'state',
        key: 'state',
        fixed: 'left',
    },
    {
        title: 'Бэлтгэн нийлүүлэгч',
        dataIndex: 'supplier',
        key: 'supplier',
        fixed: 'left',
    },
    {
        title: 'Захиалгын огноо',
        dataIndex: 'orderDate',
        key: 'orderDate',
    },
    {
        title: 'Хүргэх огноо',
        dataIndex: 'deliveryDate',
        key: 'deliveryDate',
    },
    {
        title: 'Төлбөрийн хэлбэр',
        dataIndex: 'paymentType',
        key: 'paymentType',
    },
    {
        title: 'Тоо',
        dataIndex: 'amount',
        key: 'amount',
    },
    {
        title: 'Нийт үнэ',
        dataIndex: 'totalPrice',
        key: 'totalPrice',
    },
    {
        title: 'Action',
        key: 'operation',
        fixed: 'right',
        render: () => <a className='text-blue-500'>Устгах</a>,
    },
  ];
export default function OrderTable(){
    return(
        <ConfigProvider theme={{
            components: {
                Table: {
                    headerBg: '#ffffff',
                    fontSize: 14,
                    fontFamily: 'Lato, sans-serif',
                    cellFontSize: 16,
                    rowHoverBg: '#F2FAFF',
                    headerSplitColor: 'transparent',
                    algorithm: true,
                },
            },
        }}>
            <Table dataSource={dataSource} columns={columns} scroll={{ x: 1200 }} className="w-full text-center custom-table"/>
        </ConfigProvider>
    );
}