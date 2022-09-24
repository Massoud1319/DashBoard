import { Button, Card, Image, Layout } from "antd";
import { Link, useNavigate } from "react-router-dom";
const Register = () => {
  const navigate = useNavigate();
  const navigateHandler = (event) => {
    event.preventDefault();
    navigate("/login");
  };
  return (
    <Layout
      className="card"
      style={{
        display: "flex",
        width: "100%",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <span
        style={{
          borderRadius: "7px",
          width: "396px",
          height: "7px",
          backgroundColor: "#1890ff",
          content: "",
          display: "inline-block",
          marginBottom: "-2px",
          borderRadius: "5px",
        }}
      ></span>
      <Card
        style={{
          width: 400,
          height: 600,
          display: "flex",
          justifyContent: "center",
          borderRadius: "5px",
          textAlign: "center",
          boxShadow: "1px -3px 15px -2px grey",
        }}
      >
        <Image
          src="https://redux-toolkit-jobster.netlify.app/static/media/logo.35bb8e1d9b5745af32ff148cbee51dfa.svg"
          alt="logoImage"
        />
        <h1
          style={{
            fontSize: "2rem",
            letterSpacing: "3px",
            marginTop: "1.5rem",
          }}
        >
          Register
        </h1>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "baseline",
            gap: "1rem",
            marginBottom: "1.5rem",
          }}
        >
          <label
            style={{
              display: "flex",
              fontSize: "16px",
              fontWeight: "400",
              letterSpacing: "1px",
            }}
            htmlFor="name"
          >
            Name
          </label>
          <input
            style={{
              width: "300px",
              margin: "auto",
              backgroundColor: "F0F4F8",
              height: "2.2rem",
              border: "1px solid #d3cece",
              borderRadius: "3px",
              backgroundColor: "#F0F4F8",
            }}
            id="name"
          />
          <label
            style={{
              display: "flex",
              fontSize: "16px",
              fontWeight: "400",
              letterSpacing: "1px",
            }}
            htmlFor="email"
          >
            Email
          </label>
          <input
            style={{
              width: "300px",
              margin: "auto",
              backgroundColor: "F0F4F8",
              height: "2.2rem",
              border: "1px solid #d3cece",
              borderRadius: "3px",
              backgroundColor: "#F0F4F8",
            }}
            id="email"
            required
          />
          <label
            style={{
              display: "flex",
              fontSize: "16px",
              fontWeight: "400",
              letterSpacing: "1px",
            }}
            htmlFor="password"
          >
            Password
          </label>
          <input
            style={{
              width: "300px",
              margin: "auto",
              backgroundColor: "F0F4F8",
              height: "2.2rem",
              border: "1px solid #d3cece",
              borderRadius: "3px",
              backgroundColor: "#F0F4F8",
            }}
            id="password"
            type="password"
            required
          />
        </div>
        <div style={{ gap: "1rem", display: "flex", flexDirection: "column" }}>
          <Button type="primary">Submit</Button>
          <Button
            onClick={(event) => {
              event.preventDefault();
              navigate("/dashboard");
            }}
            style={{
              backgroundColor: "#BFDBFE",
              color: "#3C81F6",
              border: "none",
            }}
          >
            Demo App
          </Button>
        </div>
        <p style={{ margin: "revert" }}>
          Already a member? <Link onClick={navigateHandler}>Login</Link>
        </p>
      </Card>
    </Layout>
  );
};

export default Register;
