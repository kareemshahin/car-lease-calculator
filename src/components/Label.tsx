import React from 'react';

interface Props {
  label: InputLabel;
}

export const Label: React.FC<Props> = ({ label }) => {
  return (
    <p>{label.text}</p>
  );
};
