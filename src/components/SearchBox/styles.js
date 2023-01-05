import styled from 'styled-components';

export const Box = styled.div`
  margin: 10px;
  display: ${props => props.searchVisible ? 'flex' : 'none'};
  justify-content: center;
  align-items: center;
`;

export const SearchInput = styled.input`
  width: 300px;
  outline: 0;
  border-radius: 5px;
  padding: 10px;
`;
