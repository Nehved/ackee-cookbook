import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  margin: 30px 0;
`;

export const StyledImage = styled.img`
  width: 75px;
  height: 75px;
`;

export const InfoWrapper = styled.div`
  display: flex;
  width: 100%;
  margin-left: 20px;
  flex-direction: column;
  justify-content: space-around;
`;

export const Name = styled(Link)`
  font-size: 14px;
  color: blue;
  text-decoration: none;
  cursor: pointer;
`;

export const StarsWrapper = styled.div`
  display: flex;
`;

export const Clock = styled.img`
  width: 15px;
  margin-right: 5px;
`;

export const Timing = styled.div`
  font-size: 12px;
  display: flex;
`;
