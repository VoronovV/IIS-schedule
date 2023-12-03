import "./App.css";
import { Layout } from "antd";
import SideBar from "./components/SideBar/SideBar";
import Table from "./components/Table/Table";

function App() {
  const { Content } = Layout;
  return (
    <>
      <Layout>
        <SideBar></SideBar>
        <Layout>
          <Content>
            <Table />
          </Content>
        </Layout>
      </Layout>
    </>
  );
}

export default App;
