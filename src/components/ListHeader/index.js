import React from 'react';
import { Container, Item } from './styles';

export default function ListHeader({ columns }) {
  return (

    <Container>
      {columns.length > 0 && columns.map((column, index) => (
        <Item key={index}>
          {column}
        </Item>
      ))}
    </Container>
  )
}