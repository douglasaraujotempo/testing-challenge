import React from 'react'
import { Box, SearchInput } from './styles'

export default function SearchBox({ showSearch, search =  '', setSearch }) {

  return (
    <Box searchVisible={showSearch}>
      <SearchInput placeholder="Type something to search" value={search} onChange={(e) => setSearch(e.target.value)} />
    </Box>
  )
}