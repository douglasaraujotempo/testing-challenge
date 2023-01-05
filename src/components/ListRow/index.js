import React from 'react';
import { Container, Item } from './styles';

export default function ListRow({ data, onClick, columnsData }) {
  return (

    <Container onClick={() => onClick()}>
      {columnsData.length > 0 && columnsData.map((column, index) => (
        <Item key={index}>
          {data[column]}
        </Item>
      ))}
    </Container>
  )
}