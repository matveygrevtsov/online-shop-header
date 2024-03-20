import React, { useMemo } from "react";
import { Badge, Button, Flex, Menu } from "antd";
import {
  UserAddOutlined,
  LoginOutlined,
  ShoppingOutlined,
  ShoppingCartOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { ItemType, MenuItemType } from "antd/es/menu/hooks/useItems";
import { useLocation } from "react-router-dom";

const Header = ({ navigate }: { navigate: any }) => {
  const location = useLocation();

  const selectedKeys = useMemo<string[]>(
    () => (location?.pathname ? [location.pathname] : []),
    [location?.pathname]
  );

  const items: ItemType<MenuItemType>[] = useMemo(
    () => [
      {
        label: "ONLINE-SHOP",
        key: "/main",
        icon: <ShoppingOutlined />,
      },
      {
        label: "Корзина",
        key: "/cart",
        icon: (
          <Badge count={5} size="small">
            <ShoppingCartOutlined />
          </Badge>
        ),
      },

      // Данные вкладки нужно показывать только неавторизованному юзеру:
      {
        label: "Зарегистрироваться",
        key: "/sign-up",
        icon: <UserAddOutlined />,
      },
      {
        label: "Войти",
        key: "/sign-in",
        icon: <LoginOutlined />,
      },
    ],
    []
  );

  const handleMenuClick = ({ key }: { key: string }) => {
    navigate(key);
  };

  const handleLogoutClick = () => {
    alert(
      "На этом моменте, по-сути, должен происходить логаут, но авторизация пока что не работает :)"
    );
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

      <Button danger type="primary" onClick={handleLogoutClick}>
        <LogoutOutlined />
        Выйти
      </Button>
    </Flex>
  );
};

export default Header;
