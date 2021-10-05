import React from 'react';
import styled from 'styled-components';

export const Header = (props) => (<StyledHeader {...props} />);

const StyledHeader = styled.header`
  width: 100%;
  padding: 28px 0 32px 8px;
  box-sizing: border-box;
  border-bottom: 1px solid rgba(84, 84, 84, 0.7);

  @media ${(props) => props.device.device.tablet} {
    padding: 45px 0 41px 27px;
  }

  @media ${(props) => props.device.device.desktop} {
    padding: 45px 0 41px 0;
  }
`;
