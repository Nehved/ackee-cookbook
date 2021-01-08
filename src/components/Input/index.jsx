import React from 'react';
import { string, func, bool } from 'prop-types';

import { StyledInput, Container, Label } from 'components/Input/styled';

const Input = ({
  placeholder, onChange, floatLabel, mBot, name, value, type,
}) => (
  <Container mBot={mBot}>
    <StyledInput
      onChange={onChange}
      floatLabel={floatLabel}
      name={name}
      value={value}
      type={type}
    />
    <Label
      value={value.length}
      floatLabel={floatLabel}
    >
      {placeholder}
    </Label>
  </Container>
);

Input.propTypes = {
  placeholder: string,
  onChange: func.isRequired,
  floatLabel: bool,
  mBot: string,
  type: string,
  value: string,
  name: string,
};

Input.defaultProps = {
  placeholder: '',
  floatLabel: true,
  mBot: '',
  type: '',
  value: '',
  name: '',
};

export default Input;
