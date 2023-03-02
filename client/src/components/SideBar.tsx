import React, { useState } from "react";
import styled from "@emotion/styled";
import { space, layout, color } from "styled-system";

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

const Sidebar = styled.div`
  ${layout}
  ${space}
  background-color: #333;
  color: #fff;
  transition: width 0.5s ease;
  overflow: hidden;
  margin-top: 30px;
`;

const SidebarItem = styled.div`
  ${space}
  cursor: pointer;
  &:hover {
    background-color: #555;
  }
  padding: 8px;
`;

const SidebarLink = styled.a`
  ${color}
  ${space}
  text-decoration: none;
`;

const MainContent = styled.div`
  ${layout}
  ${space}
  background-color: #eee;
`;

const SidebarToggle = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  padding: 6px;
  background-color: #555;
  color: #fff;
  cursor: pointer;
  text-align: center;
  font-size: 24px;
`;

const SidebarContainer = styled.div`
  position: relative;
`;

function CollapsibleSidebar({ children }): JSX.Element {
  const [collapsed, setCollapsed] = useState(false);

  const handleToggle = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Container>
      <SidebarContainer>
        <SidebarToggle onClick={handleToggle}>
          {collapsed ? "☰" : "✖"}
        </SidebarToggle>
        <Sidebar width={collapsed ? "64px" : "200px"} height="100vh" p={3}>
          <SidebarItem mb={3}>
            <SidebarLink color="#fff" href="/">
              Home
            </SidebarLink>
          </SidebarItem>
          <SidebarItem mb={3}>
            <SidebarLink color="#fff" href="/addSong">
              Add Song
            </SidebarLink>
          </SidebarItem>
          <SidebarItem mb={3}>
            <SidebarLink color="#fff" href="/About">
              About
            </SidebarLink>
          </SidebarItem>
          <SidebarItem mb={3}>
            <SidebarLink color="#fff" href="/Total">
              Total Statistics
            </SidebarLink>
          </SidebarItem>
        </Sidebar>
      </SidebarContainer>
      <MainContent width="100%" p={3}>
        <h1>Main Content</h1>
        {children}
      </MainContent>
      {/* {children} */}
    </Container>
  );
}

export default CollapsibleSidebar;
