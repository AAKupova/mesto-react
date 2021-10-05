import React from 'react';
import styled from 'styled-components';

import { Text } from './Text';

export const Footer = (props) => (<StyledFooter {...props}><Text /></StyledFooter>);

const StyledFooter = styled.footer`
  margin: 0 0 36px 0;
  width: 282px;

  @media ${(props) => props.device.device.tablet} {
    margin: 0 0 36px 27px;
  }

  @media ${(props) => props.device.device.laptops} {
    margin: 0 0 60px 0;
  }
`;