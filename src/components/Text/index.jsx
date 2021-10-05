import React from 'react';
import styled from 'styled-components';

export const Text = (props) => (<StyledText {...props}>{props.children}</StyledText>);

const StyledText = styled.p`
  font-weight: ${(props) => props.weight || 'normal'};
  font-size: ${(props) => props.size || '14px'};
  line-height: ${(props) => props.height || '1.2'};
  color: ${(props) => props.color || '#fff'};
  margin: 0;

  @media ${(props) => props.laptops} {
    font-size: 18px;
  }

`;