import { Component } from 'react';
import { Label } from './Filter.styled';

export const Filter = ({ value, onChange }) => {
  return (
    <Label>
      <span>Find contacts by name</span>

      <input type="text" value={value} onChange={onChange} />
    </Label>
  );
};
