import React from "react";
import style from "./style.module.scss";

const Navbar = ({ data }) => {
  return (
    <nav className={style.container}>
      <div className={style.navbar_box}>
        {data.map((item) => (
          <div key={item.id} className={style.box}>
            <img src={item.img} alt={item.title || "icon"} />
            <h4>{item.title}</h4>
          </div>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
