import React from 'react';
import styled from 'styled-components';

const StyledFlexContainer = styled.div`
  display: flex;
  justify-content: ${props => props.justify || 'space-between'};
  flex-direction: ${props => props.direction || 'row'};
  align-items: ${props => props.direction || 'center'};
  gap: ${props => props.gap || '0'};
`

export const FlexContainer = (props) => (
  <StyledFlexContainer {...props}/>
);
