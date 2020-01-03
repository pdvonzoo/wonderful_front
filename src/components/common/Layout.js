import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';

const Header = styled.header`
  display: flex;
  align-items: center;
  height: 40px;
  background-color: #17234c;
`;

const BaseItem = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-size: 0.9rem;
`;

const Layout = () => {
  return (
    <>
      <Header>
        <BaseItem style={{ marginLeft: '10px' }} to={{ pathname: "/" }}>Logo</BaseItem>
        <BaseItem style={{ marginLeft: '10px' }} to={{ pathname: "/signin" }}>sign in</BaseItem>
        <BaseItem style={{ marginLeft: '10px' }} to={{ pathname: "/signup" }}>sign up</BaseItem>
        <BaseItem style={{ marginLeft: '10px' }} to={{ pathname: "/userhistory" }}>My</BaseItem>
        <BaseItem style={{ marginLeft: '10px' }} to={{ pathname: "/error" }}>Error</BaseItem>
        <BaseItem style={{ marginLeft: '10px' }} to={{ pathname: "/admin" }}> admin</BaseItem>
      </Header>
      {/* {children} */}
    </>
  );
};

export default Layout;
