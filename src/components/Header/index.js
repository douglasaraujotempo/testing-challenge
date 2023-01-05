import React from 'react'
import SearchBox from '../SearchBox';
import { Link } from 'react-router-dom';

import { Container, Logo, Spacer } from './styles';

export default function Header({ showSearch, search, setSearch }) {
  return (
    <Container>
      <Link to="/">
        <Logo src={"/assets/users.png"} />
      </Link>
      <SearchBox
        showSearch={showSearch}
        search={search}
        setSearch={setSearch} />
      <Spacer></Spacer>
    </Container>)
}