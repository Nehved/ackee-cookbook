import React from 'react';
import { string, number } from 'prop-types';
import { times } from 'lodash/fp';

import Clocks from 'components/Icons/Clocks';
import Star from 'components/Icons/Star';

import {
  Wrapper, StyledImage, InfoWrapper, Name, Timing, StarsWrapper,
} from 'components/Card/styled';
import { Separator } from 'styles/common';
import Image from '../../images/small.png';

const Card = ({
  name, duration, score, id,
}) => (
  <>
    <Wrapper>
      <StyledImage src={Image} />
      <InfoWrapper>
        <Name to={`single_recipe/${id}`}>
          {name}
        </Name>
        <StarsWrapper>
          {times((index) => ((index + 1) > score
            ? (<Star key={index} color="grey" />) : (<Star key={index} color="red" />)), 5)}
        </StarsWrapper>
        <Timing>
          <Clocks />
          {duration}
          <span> min</span>
        </Timing>
      </InfoWrapper>
    </Wrapper>
    <Separator />
  </>
);

Card.propTypes = {
  name: string,
  duration: number,
  score: number,
  id: string.isRequired,
};

Card.defaultProps = {
  name: '',
  duration: 10,
  score: 0,
};

export default Card;
