"use client"
import { Dropdown, Menu, Button } from "antd";
import { React, useState } from "react";
import { DownOutlined } from '@ant-design/icons';

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
export default function StateDropdown(){

    const [selectedLabel, setSelectedLabel] = useState(items[0].label);

    const handleMenuClick = (e) => {
        const selectedOption = items.find(item => item.key === e.key);
        setSelectedLabel(selectedOption.label);
    };

    const menu = (
        <Menu onClick={handleMenuClick}>
            {items.map(item => (
                <Menu.Item key={item.key}>
                    {item.label}
                </Menu.Item>
            ))}
        </Menu>
    );
    const menuProps = {
        items,
        onClick: handleMenuClick,
      };

    return (
        <Dropdown menu={menuProps}>
            <Button>
                {selectedLabel}
                <DownOutlined/>
            </Button>
        </Dropdown>
    );
}