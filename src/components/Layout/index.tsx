import React from "react";
import { Layout, Menu } from "antd";
import { useHistory } from "react-router-dom";
const { Header, Content } = Layout;

export const LayoutMain: React.FC<any> = ({ children }) => {
  const history = useHistory();
  const handleMenu = ({ key }) => {
    switch (key) {
      case "home":
        history.push("/");
        break;
      default:
        break;
    }
  };
  return (
    <>
      <Layout>
        <Header className="header">
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["todo-list"]}
            onClick={handleMenu}
          >
            <Menu.Item key="home">Home</Menu.Item>
          </Menu>
        </Header>
        <Layout style={{ padding: "0 24px 24px" }}>
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: "100vh",
            }}
          >
            {children}
          </Content>
        </Layout>
      </Layout>
    </>
  );
};
