import React from 'react';
import styled from 'styled-components';

const StyledFlexContainer = styled.div`
  display: flex;
  justifyContent: ${props =>  props.justify || 'space-between'};
  flexDirection: ${props =>  props.direction || 'row'};
  alignItems: ${props =>  props.direction || 'center'};
`

export const FlexContainer = (props) => (
  <StyledFlexContainer { ...props }/>
);
