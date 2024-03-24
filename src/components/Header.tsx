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

  const selectedKeys = useMemo<string[]>(
    () => (location?.pathname ? [location.pathname] : []),
    [location?.pathname]
  );

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
