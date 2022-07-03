//Package imports
import styled from "styled-components";
import React, { useEffect, useState } from "react";

import Link from "next/link";

//Style for navigation bar background
const StyledNavigation = styled.nav`
  background-color: transparent;
  display: flex;
  flex-direction:column;
  background-color:pink;
`;

const Button = styled.button`
  background-color:lime;
  /* border:none; */
  font-size:1.5em;
  margin:0.10em;
  padding-right:2em;
`;

//Logic for navigation bar
const Navigation = () => {
  return (
    <StyledNavigation>
        <Link href="/">
          <Button>Homepage</Button>
        </Link>
        <Link href="/profile">
          <Button>Profile</Button>
        </Link>
        <Link href="/login">
          <Button>Login</Button>
        </Link>
        <Link href="/explore">
          <Button>Explore</Button>
        </Link>
    </StyledNavigation>
  );
  //TODO Make Profile/Login statebased display
};

export default Navigation;
