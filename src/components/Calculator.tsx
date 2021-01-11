import React from 'react';
import { Section } from "./Section"

interface Props {
  sections: Section[]
  handleInputChange(event: React.ChangeEvent): any;
}

class Calculator extends React.Component<Props, CalcState> {

  render () {
    return (
      <div className="Calculator">
        {
          this.props.sections.map((section) => {
            return <Section key={section.input.id} section={section} handleInputChange={this.props.handleInputChange}/>
          })
        }
      </div>
    );
  }
};

export default Calculator;
