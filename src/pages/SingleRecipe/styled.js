import styled from 'styled-components';
import img from '../../images/big.png';

export const Header = styled.div`
  background-image: url(${img});
  height: 300px;
  background-size: cover;
`;

export const Navigation = styled.div`
  height: 45px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
`;

export const Name = styled.div`
  color: white;
  font-size: 20px;
  margin-bottom: 20px;
  font-weight: 600;
`;

export const CommonInfo = styled.div`
  height: 45px;
  background-color: #ff00bc;
  display: flex;
`;

export const Timer = styled.div`
  display: flex;
  color: white;
`;

export const Info = styled.p`
  margin: 25px 0;
`;

export const Title = styled.h4`
  font-size: 22px;
  color: blue;
  margin-top: 25px;
  margin-bottom: 10px;
`;

export const StyledPoint = styled.li`
  margin: 5px 0 5px 15px;
`;

export const RatingContainer = styled.div`
  height: 170px;
  background-color: blue;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
`;

export const RatingTitle = styled.h5`
  color: white;
  font-size: 24px;
  font-weight: 400;
  margin-top: ${({ mTop }) => mTop};
  text-align: center;
`;

export const LoaderWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const WrapperRate = styled.div`
  height: 50px;
`;
