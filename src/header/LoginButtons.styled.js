import React from 'react';
import styled from 'styled-components';

export const Link = styled.a`
  color: #fff;
  display: flex;
  justify-content: flex-start;
  place-items: center;
  width: 100%;
  margin-top: 1em;
  background-color: ${(props) => props.backgroundColor || '#000'};
  border-radius: 4px;
  text-decoration: none;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 2px 10px 2px rgb(0 0 0 / 35%);
  }
`;

export const Svg = styled.div`
  padding: ${(props) => props.svgPadding || '1em'};
  background-color: ${(props) => props.svgIconBackground || '#fff'};
  width: 3em;
  height: 3em;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
`;

export const Text = styled.span`
  margin: 0 auto;
  font-size: 1rem;
  letter-spacing: 0.05rem;
  color: #ffffff;
`;

export const LoginButton = ({
  svgPath,
  text,
  href,
  backgroundColor,
  svgIconBackground,
  svgPadding,
}) => {
  return (
    <>
      <Link href={href} backgroundColor={backgroundColor}>
        <Svg svgIconBackground={svgIconBackground} svgPadding={svgPadding}>
          {svgPath}
        </Svg>
        <Text>{text}</Text>
      </Link>
    </>
  );
};
