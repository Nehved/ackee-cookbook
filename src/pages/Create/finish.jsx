import React from 'react';
import { Link } from 'react-router-dom';

import { RECIPES } from 'constants/routes';

import { InnerContainer } from 'styles/common';
import { FinishTitle, FinishWrapper, StyledBack } from 'pages/Create/styled';

const Finish = () => (
  <FinishWrapper>
    <InnerContainer column>
      <FinishTitle>Thanks for your recipe</FinishTitle>
      <Link to={RECIPES}>
        <StyledBack>Back to recipes</StyledBack>
      </Link>
    </InnerContainer>
  </FinishWrapper>
);

export default Finish;
