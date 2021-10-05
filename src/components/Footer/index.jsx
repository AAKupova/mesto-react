import React from 'react';
import styled from 'styled-components';

import { Text } from '../Text';

export const Footer = (props, { device }) => (
  <StyledFooter {...props}>
    <Text device={device} color="#545454">&copy; 2021 Mesto Russia</Text>
  </StyledFooter>
);

const StyledFooter = styled.footer`
  margin: 0 0 36px 0;
  width: 282px;

  @media ${(props) => props.device.tablet} {
    margin: 0 0 36px 27px;
  }

  @media ${(props) => props.device.laptops} {
    margin: 0 0 60px 0;
  }
`;
