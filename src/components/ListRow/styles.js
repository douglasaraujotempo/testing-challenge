import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  margin-left: 5px;
  margin-right: 5px;
  flex-wrap: nowrap;
  cursor: pointer;
  text-align: center;
  &:hover{
    background: #ddd;
  }
`;
export const Item = styled.div`
  flex: 1;
  border: 1px solid #ccc;
  padding: 10px;
`;
