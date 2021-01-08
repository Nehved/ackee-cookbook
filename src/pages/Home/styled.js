import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: darkslateblue;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  flex-direction: column;
  position: relative;
`;

export const Title = styled.h1`
  color: white;
`;

export const SubTitle = styled.p`
  color: white;
  font-size: 12px;
`;

export const StyledLink = styled(Link)`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 5;
`;
