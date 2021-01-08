import React, { useState, useCallback } from 'react';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';

import useCreateForm from 'pages/Create/hooks';

import { getIsLoading } from 'store/selectors/recipes';
import { onCreateRequest } from 'store/actions/recipes';

import BackArrow from 'components/Icons/Back';
import Input from 'components/Input';

import { Loader } from 'components/Loader/styled';
import { StyledPlus, InnerContainer, Separator } from 'styles/common';
import { Header, LoaderWrapper } from 'pages/Recipes/styled';
import {
  FormWrapper, Title, SubTitle, StyledAdd, Error,
} from 'pages/Create/styled';

const Create = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const isLoading = useSelector(getIsLoading);
  const [ingredients, setIngredients] = useState(['', '']);
  const [error, setError] = useState(false);

  const { inputs, handleInputChange } = useCreateForm({
    name: '', description: '', duration: '', info: '',
  });

  const onIngredientsChange = (e, index) => {
    const { value } = e.target;
    ingredients[index] = value;
    setIngredients([...ingredients]);
  };

  const handleCreate = useCallback(
    () => {
      if (!inputs.name.includes('ackee')) {
        setError(true);
      }
      dispatch(onCreateRequest(inputs, ingredients));
    },
    [inputs],
  );

  return isLoading ? (
    <LoaderWrapper>
      <Loader />
    </LoaderWrapper>
  ) : (
    <>
      <Header>
        <InnerContainer width="100%" justifyContent="space-between">
          {/* eslint-disable-next-line */}
          <div onClick={() => history.goBack()}>
            <BackArrow
              color="black"
            />
          </div>
          <Title>Create new recipe</Title>
          {/* eslint-disable-next-line */}
          <div onClick={handleCreate}>
            <StyledPlus color="blue">+</StyledPlus>
          </div>
        </InnerContainer>
      </Header>
      <Separator />
      <InnerContainer>
        <FormWrapper>
          {/* eslint-disable-next-line */}
          {error && (<Error>Name must obtain word 'ackee'.</Error>)}
          <Input
            placeholder="Name"
            onChange={handleInputChange}
            name="name"
            value={inputs.name}
          />
          <Input
            placeholder="Description"
            onChange={handleInputChange}
            name="description"
            value={inputs.description}
          />
          <SubTitle>ingredients</SubTitle>
          {ingredients.map((item, index) => (
            <Input
              // eslint-disable-next-line
              key={index} // I cant use 'item', cause there is empty string.
              placeholder="Type ingredient"
              onChange={(e) => onIngredientsChange(e, index)}
              value={ingredients[index]}
              floatLabel={false}
            />
          ))}
          <StyledAdd
            onClick={(e) => {
              e.preventDefault();
              setIngredients([...ingredients, '']);
            }}
          >
            + Add new
          </StyledAdd>
          <Input
            placeholder="Info"
            onChange={handleInputChange}
            name="info"
            value={inputs.info}
          />
          <Input
            placeholder="Duration"
            onChange={handleInputChange}
            name="duration"
            value={inputs.duration}
            mBot="30px"
            type="number"
          />
        </FormWrapper>
      </InnerContainer>
    </>
  );
};

export default Create;
