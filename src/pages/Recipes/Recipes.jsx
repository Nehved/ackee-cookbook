import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { CREATE } from 'constants/routes';
import { getData, getIsLoading } from 'store/selectors/recipes';
import { onLoadRecipesRequest } from 'store/actions/recipes';

import { Loader } from 'components/Loader/styled';
import Card from 'components/Card';

import { InnerContainer, Separator, StyledPlus } from 'styles/common';
import { Header, Title, LoaderWrapper } from 'pages/Recipes/styled';

const Recipes = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const data = useSelector(getData);

  useEffect(() => {
    dispatch(onLoadRecipesRequest());
  }, []);

  return (
    <>
      <Header>
        <InnerContainer justifyContent="space-between" width="100%">
          <Title>Recepty</Title>
          <Link to={CREATE}>
            <StyledPlus color="blue">+</StyledPlus>
          </Link>
        </InnerContainer>
      </Header>
      <Separator />
      {isLoading ? (
        <LoaderWrapper>
          <Loader />
        </LoaderWrapper>
      ) : (
        <InnerContainer column>
          {data && data.map((item) => (
            <Card
              key={item.id}
              name={item.name}
              score={item.score}
              duration={item.duration}
              id={item.id}
            />
          ))}
        </InnerContainer>
      )}
    </>
  );
};

export default Recipes;
