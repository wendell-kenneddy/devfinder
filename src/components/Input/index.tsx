import React from 'react';
import { Container } from './styles';

interface SearchInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
  id: string;
  name: string;
}

export function Input({ placeholder, id, name, ...rest }: SearchInputProps) {
  return (
    <Container
      placeholder={placeholder}
      id={id}
      name={name}
      autoComplete="off"
      {...rest}
    />
  );
}
