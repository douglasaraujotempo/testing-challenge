import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import List from '../../components/List';
import Header from '../../components/Header';
import { getAllTeams } from "../../helpers/Api";
import { Container, Title, LoadingContainer } from './styles';

export default function TeamsPage({ loadingStatus = true }) {
  const history = useHistory();
  const [teams, setTeams] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(loadingStatus);

  useEffect(() => {
    (async () => {
      const json = await getAllTeams();
      setTeams(json);
      setLoading(false);
    })();
  }, []);
  if (loading) {
    return <LoadingContainer>Loading...</LoadingContainer>
  }
  return (
    <>
      <Header
        showSearch={true}
        search={search}
        setSearch={setSearch} />
      <Container>
        <Title>Teams</Title>
        <List
          data={teams}
          navigateTo="teamDetail"
          search={search}
          history={history} />
      </Container>
    </>
  )
}