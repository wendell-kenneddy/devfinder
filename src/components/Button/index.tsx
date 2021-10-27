import { Container } from './styles';
import { FiSearch } from 'react-icons/fi';
import { COLORS } from '../../theme/theme';
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export function Button({ ...rest }: ButtonProps) {
  return (
    <Container {...rest}>
      <FiSearch size="24" color={COLORS.WHITE} />
    </Container>
  );
}
