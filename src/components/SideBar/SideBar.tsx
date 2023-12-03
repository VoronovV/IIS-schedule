import { Layout, Menu } from "antd";
import React from "react";
import { useState } from "react";
import Table from "../Table/Table";

export default function SideBar() {
  const { Content, Sider } = Layout;
  const [collapsed, setCollapsed] = useState(true);
  return (
    <Layout>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={() => setCollapsed(!collapsed)}
        width={collapsed ? 300 : 500}
        style={{
          overflow: "auto",
          height: "100vh",
          position: "sticky",
          top: 0,
          left: 0,
          zIndex: 1,
        }}
      >
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["4"]}>
          <Menu.Item key="1">
            <span className="nav-text">nav 1</span>
          </Menu.Item>
          <Menu.Item key="2">
            <span className="nav-text">nav 2</span>
          </Menu.Item>
          <Menu.Item key="3">
            <span className="nav-text">nav 3</span>
          </Menu.Item>
          <Menu.Item key="4">
            <span className="nav-text">nav 4</span>
          </Menu.Item>
          <Menu.Item key="5">
            <span className="nav-text">nav 5</span>
          </Menu.Item>
          <Menu.Item key="6">
            <span className="nav-text">nav 6</span>
          </Menu.Item>
          <Menu.Item key="7">
            <span className="nav-text">nav 7</span>
          </Menu.Item>
          <Menu.Item key="8">
            <span className="nav-text">nav 8</span>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Content>
          <Table />
        </Content>
      </Layout>
    </Layout>
  );
}
