import { AlignLeftOutlined } from "@ant-design/icons";
import "./Header.css";

const DashHeader = () => {
  return (
    <section className="contentWrapper">
      <div>{<AlignLeftOutlined />}</div>
      <h1>Dashboard</h1>
    </section>
  );
};
export default DashHeader;
