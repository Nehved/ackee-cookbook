import React from 'react';

import { RECIPES } from 'constants/routes';

import {
  Wrapper, Title, SubTitle, StyledLink,
} from './styled';

const Home = () => (
  <Wrapper>
    <Title>Home page</Title>
    <SubTitle>*type somewhere to get started</SubTitle>
    <StyledLink to={RECIPES} />
  </Wrapper>
);

export default Home;
