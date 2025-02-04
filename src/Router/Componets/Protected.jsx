import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Protected(props) {
  const navigate = useNavigate();
  const { Component } = props;
  useEffect(() => {
    let login = JSON.parse(localStorage.getItem("information"));
    if (!login) {
      navigate("/login");
    }
    if (login[0].role === "admin") {
      navigate("/admin");
    } else {
      navigate("/user");
    }
  }, []);

  return (
    <div>
      <Component />
    </div>
  );
}

export default Protected;
