import React from "react";
import { css } from "@emotion/css";
import { color } from "styled-system";
import NavBox from "../styles/Box";
function NavBar() {
  return (
    // <div>
    //   <section
    //     className={css`
    //       padding: 32px;
    //       background-color: hotpink;
    //       font-size: 24px;
    //       border-radius: 4px;
    //     `}
    //   >
    //     <h1>hello</h1>
    //   </section>
    // </div>
    <>
      <NavBox bg="primary" color="white" width={[4, 1 / 2, 1 / 4]}>
        Thanks for Visiting!
      </NavBox>
    </>
  );
}

export default NavBar;
