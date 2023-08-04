import React, { useEffect } from "react";
import { styled } from "styled-components";
import avatar from "../../imgs/avatar.png";
import { menuItems } from "../../utils/MenuItems";
import { dollar, signout } from "../../utils/Icons";
import { GlobalStyle } from "../../styles/GlobalStyles";
import { useWindowSize } from "../../utils/UseWindowSize";
import { useState } from "react";
import { useGlobalContext } from "../../context/GlobalContext";

function Navigation({ active, setActive }) {
  const { width, height } = useWindowSize();
  const { totalBalance } = useGlobalContext();
  return (
    <NavStyled>
      <div className="user-con">
        <img src={avatar} alt="" />
        <div className="text">
          <h2>Alem</h2>
          <p>
            {dollar}
            {totalBalance()}
          </p>
        </div>
      </div>
      <ul className="menu-items">
        {menuItems.map((item) => {
          return (
            <li
              key={item.id}
              onClick={() => setActive(item.id)}
              className={active === item.id ? "active" : ""}
            >
              {item.icon}
              <span>{item.title}</span>
            </li>
          );
        })}
      </ul>
      <div className="bottom-nav">
        <li>
          {signout} <span>Sign Out</span>
        </li>
      </div>
    </NavStyled>
  );
}

const NavStyled = styled.nav`
  padding: 2rem 1.5rem;
  /* width: 374px; */
  width: width;
  height: 100%;
  background: rgba(252, 246, 249, 0.78);
  border: 3px solid #fff;
  backdrop-filter: blur(4.5px);
  border-radius: 32px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 2rem;
  .user-con {
    height: 100px;
    display: flex;
    align-items: center;
    gap: 1rem;
    img {
      width: 80px;
      height: 80px;
      border-radius: 50%;
      object-fit: cover;
      background: #fcf6f9;
      border: 2px solid #ffffff;
      padding: 0.2rem;
      box-shadow: 0px 1px 17px rgba(0, 0, 0, 0.06);
    }
    h2 {
      color: rgba(34, 34, 96, 1);
    }
    p {
      color: rgba(34, 34, 96, 0.6);
    }
  }

  .menu-items {
    display: flex;
    flex: 1;
    flex-direction: column;
    li {
      display: grid;
      grid-template-columns: 40px auto;
      align-items: center;
      margin: 0.6rem 0;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.4s ease-in-out;
      color: rgba(34, 34, 96, 0.6);
      padding-left: 1rem;
      position: relative;
      i {
        color: rgba(34, 34, 96, 0.6);
        font-size: 1.4rem;
        transition: all 0.4s ease-in-out;
      }
    }
  }

  .active {
    color: rgba(34, 34, 96, 1) !important;
    i {
      color: rgba(34, 34, 96, 1) !important;
    }
    &::before {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      width: 4px;
      height: 100%;
      background: #222260;
      border-radius: 0 10px 10px 0;
    }
  }

  @media (max-width: 1200px) {
    width: 200px;
  }

  @media (max-width: 900px) {
    padding: 1rem 1rem;
    width: 120px;
    .menu-items li span {
      visibility: hidden;
    }
    .user-con {
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin-top: 2rem;
    }
  }

  @media (max-width: 720px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    // Adjust widths
    width: 100%;
    height: 60px;

    // Spacing
    gap: 1rem;

    // User section to row
    .user-con {
      position: relative;
      top: -15px;
      flex-direction: row;
      align-items: center;
      height: 50px;
      gap: 10px;

      // Adjust image
      img {
        height: 50px;
        width: 50px;
        margin-right: 10px;
      }
    }

    .menu-items {
      flex-direction: row;
      justify-content: space-between;

      li {
        height: 50px;
        width: 50px;
      }
    }

    // Hide menu text
    .menu-items li span {
      visibility: hidden;
    }

    // Adjust active indicator
    .active::before {
      top: 50px;
      width: 50%;
      height: 4px;
      position: absolute;
      top: 40px;
      left: 15px;
    }

    .bottom-nav {
      display: flex;
      li {
        display: flex;
        flex-direction: row-reverse;
        align-items: center;
        justify-content: flex-end;
        span {
          visibility: hidden;
        }
      }
    }
  }
`;

export default Navigation;
