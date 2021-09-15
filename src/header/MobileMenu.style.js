import React from 'react';
import styled from 'styled-components';

export const Button = styled.button`
  display: none;
  @media screen and (max-width: 767px) {
    display: block;
    z-index: 4;
    width: 50px;
    padding: 10px;
    cursor: pointer;
    background-color: transparent;
    border: none;
    margin-top: 10px;
    margin-right: 10px;
  }
  .button-clear:foucus {
    outline: 0px;
  }
`;

export const MenuLines = styled.span`
  display: block;
  height: 2px;
  width: 100%;
  background-color: black;
  margin-bottom: 4px;
  border-radius: 2px;
  transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275),
    opacity 0.2s ease-out;
`;
export const Line1 = styled(MenuLines)`
  .line-1-active {
    transform: translateY(6px) rotateZ(-135deg);
    background-color: #192634;
    animation: none;
    position: sticky;
  }
`;
export const Line2 = styled(MenuLines)`
  width: 80%;
  margin-left: auto;
  .line-2-active {
    opacity: 0;
    background-color: #192634;
    animation: none;
  }
`;
export const Line3 = styled(MenuLines)`
  width: 60%;
  margin-left: auto;

  &.line-3-active {
    width: 100%;
    transform: translateY(-6px) rotateZ(135deg);
    background-color: #192634;
    animation: none;
    position: sticky;
  }
`;

export const MobileMenu = ({ xline, makeX }) => {
  return (
    <React.Fragment>
      <Button onClick={() => makeX()}>
        <Line1 className={`${xline ? 'line-1-active' : ''}`}></Line1>
        <Line2 className={`${xline ? 'line-2-active' : ''}`}></Line2>
        <Line3 className={`${xline ? 'line-3-active' : ''}`}></Line3>
      </Button>
    </React.Fragment>
  );
};

// onClick={makeX}
