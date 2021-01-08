import styled from 'styled-components';

export const Title = styled.h3`
  font-size: 22px;
  font-weight: 400;
`;

export const FormWrapper = styled.form`
  margin-top: 30px;
  width: 100%;
`;

export const SubTitle = styled.div`
  text-transform: uppercase;
  color: blue;
  font-size: 20px;
  margin: 30px 0 10px 0;
`;

export const StyledAdd = styled.button`
  border: 2px solid purple;
  padding: 5px 10px;
  border-radius: 5px;
  background-color: white;
  color: purple;
  margin-top: 10px;
  cursor: pointer;
  
  &:hover {
    background-color: purple;
    color: white;
  }
`;

export const Error = styled.span`
  color: red;
  font-size: 16px;
`;

export const FinishWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: #52ab9e;
`;

export const FinishTitle = styled.h2`
  color: white;
  margin-top: 40px;
  font-size: 24px;
`;

export const StyledBack = styled.p`
  color: white;
  cursor: pointer;
  margin-top: 15px;
  
  &:hover {
    text-decoration: underline;
  }
`;
