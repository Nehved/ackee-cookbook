import styled from 'styled-components';
import { sizes } from 'styles/theme';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
`;

export const CommonWrapper = styled.div`
  width: ${sizes.mainWidth};
  height: ${sizes.mainHeight};
  box-shadow: 0 0 10px;
  overflow: auto;
`;

export const InnerContainer = styled.div`
  padding: 0 25px;
  display: flex;
  flex-direction: ${({ column }) => (column ? 'column' : 'row')};
  width: ${({ width }) => width};
  align-items: ${({ alignItems }) => (alignItems || 'center')};
  justify-content: ${({ justifyContent }) => justifyContent};
  height: ${({ height }) => height};
`;

export const Separator = styled.div`
  display: block;
  height: 1px;
  border: 0;
  border-top: 1px solid #ccc;
  padding: 0;
  width: 100%;
`;

export const StyledPlus = styled.div`
  font-size: 40px;
  color: ${({ color }) => color};
  cursor: pointer;
`;
