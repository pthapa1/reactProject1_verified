import React from 'react';
import styled from 'styled-components';

export const Link = styled.a`
  color: #fff;
  display: flex;
  justify-content: flex-start;
  place-items: center;
  width: 100%;
  margin-top: 1em;
  background-color: #4285f4;
  border: transparent;
  border-radius: 4px;
  text-decoration: none;
`;

export const Svg = styled.div`
  padding: 1em;
  background-color: #fff;
  line-height: 0;
  width: 3em;
  height: 3em;
`;

export const Text = styled.span`
  margin: 0 auto;
  font-size: 1rem;
  letter-spacing: 0.05rem;
  color: #ffffff;
`;

export const LoginButton = ({ svgPath, text, href }) => {
  return (
    <>
      <Link href={href}>
        <Svg>{svgPath}</Svg>
        <Text>{text}</Text>
      </Link>
    </>
  );
};
