// Simple close button X for
import React from 'react';
import styled from 'styled-components';

export const Button = styled.button`
  display: block;
  width: 40px;
  padding: 10px;
  cursor: pointer;
  background-color: transparent;
  border: none;
  /* position: absolute;
  top: 13px;
  right: 13px; */
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
  transform: translateY(6px) rotateZ(-135deg);
  background-color: #192634;
  animation: none;
  position: sticky;
`;
export const Line2 = styled(MenuLines)`
  opacity: 0;
  background-color: #192634;
  animation: none;
`;
export const Line3 = styled(MenuLines)`
  width: 100%;
  transform: translateY(-6px) rotateZ(135deg);
  background-color: #192634;
  position: sticky;
`;

export const SimpleColoseBtn = ({ className }) => {
  return (
    <React.Fragment>
      <Button className={className}>
        <Line1></Line1>
        <Line2></Line2>
        <Line3></Line3>
      </Button>
    </React.Fragment>
  );
};
