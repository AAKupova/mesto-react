import React from 'react';
import styled from 'styled-components';

import logo from './assets/logo.svg';

export const Logo = (props) => <StyledLogo {...props} />;  

const StyledLogo = styled.div`
    width: 104px;
    height: 25px;
    background-image: url(${logo});;
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;

  @media ${(props) => props.device.iPads} {
    width: 142px;
    height: 33px;
  }
`;