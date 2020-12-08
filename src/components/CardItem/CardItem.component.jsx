import React from 'react';
import { CustomButton } from '../CustomButton/CustomButton.component';

export const CardItem = ({ card }) => (
  <div>
    <span>{card.name}</span>
    <CustomButton />
  </div>
);
