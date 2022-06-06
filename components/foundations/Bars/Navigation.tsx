//Package imports
import styled from "styled-components";
import React, { useEffect, useState } from "react";

import Link from "next/link";

//Style for navigation bar background
const StyledNavigation = styled.nav`
  background-color: transparent;
  display: flex;
  width:100%;
  flex-direction:column;
`;

//Logic for navigation bar
const Navigation = () => {
  return (
    <StyledNavigation>
        {/* <Link href="/">
          <Button>Homepage</Button>
        </Link> */}
    </StyledNavigation>
  );
};

export default Navigation;
