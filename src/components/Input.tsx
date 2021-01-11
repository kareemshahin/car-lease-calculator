import React from 'react';

interface Props {
  input: InputField;
  handleInputChange(event: React.ChangeEvent): any;
}

export const Input: React.FC<Props> = ({ input, handleInputChange }) => {
  return (
    <input id={input.id} type="text" value={input.value} onChange={handleInputChange}></input>
  );
};
