import { Button, Image } from "antd";
import Layout, { Content } from "antd/lib/layout/layout";
import { Header } from "antd/lib/layout/layout";
import Title from "antd/lib/skeleton/Title";
import classes from "./Landing.css";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();
  return (
    <section style={{ backgroundColor: "#EFF2F5" }}>
      <Layout
        style={{
          dispaly: "flex",
          flexDirection: "column",
          alignItems: "baseline",
          width: "80%",
          height: "100vh",
          margin: "auto",
          gap: "7rem",
          justifyContent: "space-evenly",
        }}
      >
        <NavLink>
          <Image
            src="https://redux-toolkit-jobster.netlify.app/static/media/logo.35bb8e1d9b5745af32ff148cbee51dfa.svg"
            alt="logoImage"
          />
        </NavLink>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            alignItems: "center",
          }}
        >
          <div
            style={{ display: "flex", flexDirection: "column", gap: "2rem" }}
          >
            <h2
              style={{
                fontSize: "3rem",
                fontWeight: "700",
                lineHeight: "63.4816px",
                color: "rgb(16, 42, 67)",
                letterSpacing: "3px",
                wordSpacing: "1rem",
              }}
            >
              Job
              <span
                style={{
                  fontSize: "48.832px",
                  fontWeight: "700",
                  lineHeight: "63.4816px",
                  color: "rgb(59, 130, 246)",
                }}
              >
                Tracking
              </span>
              App
            </h2>
            <h4
              style={{
                fontSize: "16px",
                fontWeight: "400",
                lineHeight: "28px",
                color: "rgb(72, 101, 129)",
                maxWidth: "40em",
              }}
            >
              Crucifix narwhal street art asymmetrical, humblebrag tote bag
              pop-up fixie raclette taxidermy craft beer. Brunch bitters synth,
              VHS crucifix heirloom meggings bicycle rights.
            </h4>
            <Button
              onMouseOver={{ backgroundColor: "#005BBB" }}
              style={{
                width: "9rem",
                height: "2.5rem",
                color: "white",
                fontSize: "8.rem",
                fontWeight: "bold",
                textAlign: "center",
                letterSpacing: ".5px",
                justifyContent: "center",
              }}
              onClick={() => {
                navigate("/login");
              }}
              type="primary"
            >
              Login/Register
            </Button>
          </div>
          <Image
            src="https://redux-toolkit-jobster.netlify.app/static/media/main.17b316de742b3a1202078c5ae18c8261.svg"
            alt="jobster"
          />
        </div>
      </Layout>
    </section>
  );
};
export default Landing;
