// import { Layout, Sider, Header, Content, Footer } from "antd/lib/layout/layout";
import { Layout } from "antd";
import React from "react";
import SideBar from "./sideBar/SideBar";
import "./DashIndex.module.css";
import DashHeader from "./header/DashHeader";
import DashContent from "./content/DashContent";
import { PageHeader } from "antd";

const { Content, Sider } = Layout;

const DashIndex = () => {
  return (
    <Layout hasSider style={{ height: "100vh" }}>
      <Sider collapsed="false" theme="light">
        <SideBar />
      </Sider>

      <Layout>
        <PageHeader className="navBar">
          <DashHeader />
        </PageHeader>
        <Content className="content">
          <DashContent />
        </Content>
      </Layout>
    </Layout>
  );
};

export default DashIndex;
