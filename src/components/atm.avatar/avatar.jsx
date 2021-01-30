import React from 'react';
import { AvatarStyled } from './avatar.styled';

export const Avatar = (props) => {
  return (
    <AvatarStyled alt={props.alt} src={props.image} />
  );
}
