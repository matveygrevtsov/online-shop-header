import React, { useMemo } from "react";
import { Button, Flex, Menu } from "antd";
import { LogoutOutlined } from "@ant-design/icons";
import { ItemType, MenuItemType } from "antd/es/menu/hooks/useItems";
import { useLocation, useNavigate } from "react-router-dom";

interface HeaderProps {
  items: ItemType<MenuItemType>[];
  onLogout: (() => void) | undefined;
}

const Header = ({ items, onLogout }: HeaderProps) => {
  const location = useLocation();
  const navigate = useNavigate();

  const selectedKeys = useMemo<string[]>(() => {
    const allKeys = items
      .map((item) => (item?.key ? `${item.key}` : ""))
      .filter((key) => key);

    if (allKeys.length === 0) return [];

    if (allKeys.includes(location?.pathname)) {
      return [location.pathname];
    }

    return [allKeys[0]];
  }, [location?.pathname, items]);

  const handleMenuClick = ({ key }: { key: string }) => {
    navigate(key);
  };

  return (
    <Flex align="center">
      <Menu
        theme="dark"
        onClick={handleMenuClick}
        selectedKeys={selectedKeys}
        mode="horizontal"
        items={items}
        style={{
          width: "100%",
        }}
      />

      {onLogout && (
        <Button danger type="primary" onClick={onLogout}>
          <LogoutOutlined />
          Выйти
        </Button>
      )}
    </Flex>
  );
};

export default Header;
