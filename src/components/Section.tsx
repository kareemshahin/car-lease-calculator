import React from 'react';
import { Label } from "./Label"
import { Input } from "./Input"

interface Props {
  section: Section
  handleInputChange(event: React.ChangeEvent): any;
}

export const Section: React.FC<Props> = ({ section, handleInputChange }) => {
  return (
    <div className='calc-input-section'>
      <Label label={section.label}/>
      <Input input={section.input} handleInputChange={handleInputChange}/>
    </div>
  );
};
