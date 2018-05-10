import React from 'react';
import styled from 'styled-components';

const Menu = styled.div`
  background: #1f1f1f;
  width: 100%;
  height: 10vh;
  padding: 0 6%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
const LinkBar = styled.ul`
  height: 100%;
  width: 50%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin: 0;
  padding: 0;
`;
const LinkItem = styled.li`
  height: 100%;
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
  &:last-of-type {
    background: red;
  }
`;
const Link = styled.a`
  padding: 14px;
  font-weight: 600;
  height: 100%;
  font-size: 12px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  -webkit-font-smoothing: antialiased;
  &:hover {
    cursor: pointer;
  }
`;
const TopMenu = () => {
  return (
    <Menu>
      <LinkBar>
        <LinkItem>
          <Link> Support</Link>
        </LinkItem>
        <LinkItem>
          <Link> About us</Link>
        </LinkItem>
        <LinkItem>
          <Link> Donate now</Link>
        </LinkItem>
      </LinkBar>
    </Menu>
  );
};

export default TopMenu;
