import React from "react";
import { MenuList } from "../helpers/MenuList";
import MenuItem from "../components/MenuItem";
import "../styles/Menu.css";
import BannerImage from "../assets/ploca.jpg";

function Menu() {
  return (
    <div className="menu"  style={{ backgroundImage: `url(${BannerImage})` }}>
      <h1 className="menuTitle">Live stream's</h1>
      <div className="menuList">
        {MenuList.map((menuItem, key) => {
          return (
            <MenuItem
              key={key}
              image={menuItem.image}
              name={menuItem.name}
              price={menuItem.price}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Menu;
