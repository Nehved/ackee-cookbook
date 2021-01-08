import React, { useEffect, useCallback } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  get, map, times, isEmpty, isNull,
} from 'lodash/fp';

import { RECIPES, CREATE } from 'constants/routes';

import Clocks from 'components/Icons/Clocks';
import Back from 'components/Icons/Back';
import Star from 'components/Icons/Star';
import { Loader } from 'components/Loader/styled';

import { onLoadSingleRecipeRequest, onSetActiveId, onRateRequest } from 'store/actions/recipes';
import { getActiveRecipe, getIsLoading, getIsPassVoting } from 'store/selectors/recipes';

import { StyledPlus, InnerContainer } from 'styles/common';
import { StarsWrapper } from 'components/Card/styled';
import {
  Header, Navigation, CommonInfo, Info, Title, StyledPoint, RatingContainer,
  RatingTitle, LoaderWrapper, Name, Timer, WrapperRate,
} from 'pages/SingleRecipe/styled';
import ReactStars from 'react-rating-stars-component';

// eslint-disable-next-line
const isRated = localStorage.getItem('isRated');

const SingleRecipe = () => {
  const params = useParams();
  const id = get(['id'], params);
  const dispatch = useDispatch();
  const recipe = useSelector(getActiveRecipe);
  const isLoading = useSelector(getIsLoading);
  const passVoting = useSelector(getIsPassVoting);

  useEffect(() => {
    dispatch(onSetActiveId(id));
    dispatch(onLoadSingleRecipeRequest(id));
  }, [id]);

  const onHandleClick = useCallback(
    (num) => dispatch(onRateRequest(num)), [],
  );

  return (isLoading || isEmpty(recipe)) ? (
    <LoaderWrapper>
      <Loader />
    </LoaderWrapper>
  ) : (
    <>
      <Header>
        <InnerContainer justifyContent="space-between" column height="100%">
          <Navigation>
            <Link to={RECIPES}>
              <Back />
            </Link>
            <Link to={CREATE}>
              <StyledPlus color="white">+</StyledPlus>
            </Link>
          </Navigation>
          <Name>
            {recipe.name}
          </Name>
        </InnerContainer>
      </Header>
      <CommonInfo>
        <InnerContainer justifyContent="space-between" width="100%">
          <StarsWrapper>
            {times((index) => ((index + 1) > recipe.score
              ? (<Star key={index} color="grey" />) : (<Star key={index} color="white" />)), 5)}
          </StarsWrapper>
          <Timer>
            <Clocks color="white" />
            {recipe.duration}
            <span> min</span>
          </Timer>
        </InnerContainer>
      </CommonInfo>
      <InnerContainer column alignItems="flex-start">
        <Info>
          {recipe.info}
        </Info>
        <Title>Ingedience</Title>
        <ul>
          {map((item) => (
            <StyledPoint key={item}>{item}</StyledPoint>
          ), recipe.ingredients)}
        </ul>
        <Title>Priprava djidla</Title>
        <Info>
          {recipe.description}
        </Info>
      </InnerContainer>
      <RatingContainer>
        {(isNull(isRated) && !passVoting) ? (
          <>
            <RatingTitle mTop="40px">Rate this recipe please</RatingTitle>
            <WrapperRate>
              <ReactStars
                size={28}
                onChange={onHandleClick}
              />
            </WrapperRate>
          </>
        ) : (
          <RatingTitle>Thanks for your vote :)</RatingTitle>
        )}
      </RatingContainer>
    </>
  );
};

export default SingleRecipe;
