import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Page404() {
  const redirect = useNavigate();

  const Go_Home = () => {
    redirect("/");
  };
  return (
    <div>
      <Link to="*" className="flex items-center">
        <img
          src="https://wpdaddy.com/wp-content/uploads/2017/04/Best-Coming-Soon-and-404-Error-Page-Templates-for-Your-Unique-Websites-512x384.jpg"
          width={389}
          className="mr-3 h-16"
          alt="Logo"
        />
      </Link>
      <button onClick={Go_Home}>Go to Home</button>
    </div>
  );
}

export default Page404;
