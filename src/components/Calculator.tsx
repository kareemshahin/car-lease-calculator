import React from 'react';
import { Section } from "./Section"

interface Props {
  sections: Section[]
  handleInputChange(event: React.ChangeEvent): any;
}

const Calculator: React.FC<Props> = ({sections, handleInputChange}) => {
    return (
      <div className="calculator">
        {
          sections.map((section) => {
            return <Section key={section.input.id} section={section} handleInputChange={handleInputChange}/>
          })
        }
      </div>
    );
};

export default Calculator;
