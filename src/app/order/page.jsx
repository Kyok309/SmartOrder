"use client"
import React from 'react';
import { Header } from '../components/Header';
import { Table, Dropdown, DatePicker, ConfigProvider, Button, Space } from "antd";
import { DownOutlined } from '@ant-design/icons';
import { FaLeftLong } from 'react-icons/fa6';


export default function Order(){
    const handleMenuClick = (e) => {
        message.info('Click on menu item.');
        console.log('click', e);
      };
    const items = [
        {
          label: 'Шинэ',
          key: '1',
        },
        {
          label: 'Баталгаажсан',
          key: '2',
        },
        {
          label: 'Хүргэлтэнд гарсан',
          key: '3',
        },
        {
          label: 'Хүргэгдсэн',
          key: '4',
        },
        {
            label: 'Цуцлагдсан',
            key: '5',
        },
    ];
    const menuProps = {
        items,
        onClick: handleMenuClick,
      };
    const StateDropdown = () => {
        return(
            <Dropdown menu={menuProps}>
                <Button>
                    <Space>
                        Шинэ
                        <DownOutlined />
                    </Space>
                </Button>
            </Dropdown>
        );
    }
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
            width: 200,
            fixed: 'left',
        },
        {
            title: 'Төлөв',
            dataIndex: 'state',
            key: 'state',
            width: 200,
            fixed: 'left',
        },
        {
            title: 'Бэлтгэн нийлүүлэгч',
            dataIndex: 'supplier',
            key: 'supplier',
            width: 200,
            fixed: 'left',
        },
        {
            title: 'Захиалгын огноо',
            dataIndex: 'orderDate',
            key: 'orderDate',
            width: 200,
        },
        {
            title: 'Хүргэх огноо',
            dataIndex: 'deliveryDate',
            key: 'deliveryDate',
            width: 180,
        },
        {
            title: 'Төлбөрийн хэлбэр',
            dataIndex: 'paymentType',
            key: 'paymentType',
            width: 180,
        },
        {
            title: 'Тоо',
            dataIndex: 'amount',
            key: 'amount',
            width: 150,
        },
        {
            title: 'Нийт үнэ',
            dataIndex: 'totalPrice',
            key: 'totalPrice',
            width: 150,
        },
        {
            title: 'Action',
            key: 'operation',
            fixed: 'right',
            width: 200,
            render: () => <a className='text-blue-500'>Устгах</a>,
        },
      ];
      const OrderTable = () => {
        return(
            <ConfigProvider theme={{
                components: {
                    Table: {
                        headerBg: '#ffffff',
                        algorithm: true,
                    },
                },
            }}>
                <Table dataSource={dataSource} columns={columns} scroll={{ x: 800 }}/>
            </ConfigProvider>
        );
      }
    return(
        <main className="bg-white mt-18 md:mt-24 2xl:mt-28 flex justify-center">
            <Header/>
            <div className="flex flex-col gap-4 w-11/12 border p-8">
                <div className="text-xl font-semibold">Захиалгын жагсаалт</div>
                <div className="flex gap-8">
                    <StateDropdown/>
                    <DatePicker/>
                </div>
                <div className="w-full flex justify-center items-center">
                <OrderTable/>
                </div>
            </div>
        </main>
    );
}