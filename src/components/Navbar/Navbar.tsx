import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Navbar.module.css";

export const Navbar = () => {
  return (
    <nav className={s.nav}>
      <ul>
        <li className={s.item}>
          <NavLink
            className={({ isActive }) =>
              isActive ? `${s.active}` : `${s.navLink}`
            }
            to="/profile"
          >
            Profile
          </NavLink>
        </li>
        <li className={s.item}>
          <NavLink
            className={({ isActive }) =>
              isActive ? `${s.active}` : `${s.navLink}`
            }
            to="/messages"
          >
            Messages
          </NavLink>
        </li>
        <li className={s.item}>
          <NavLink
            className={({ isActive }) =>
              isActive ? `${s.active}` : `${s.navLink}`
            }
            to="/news"
          >
            News
          </NavLink>
        </li>
        <li className={s.item}>
          <NavLink
            className={({ isActive }) =>
              isActive ? `${s.active}` : `${s.navLink}`
            }
            to="/music"
          >
            Music
          </NavLink>
        </li>
        <li className={s.item}>
          <NavLink
            className={({ isActive }) =>
              isActive ? `${s.active}` : `${s.navLink}`
            }
            to="/settings"
          >
            Settings
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
