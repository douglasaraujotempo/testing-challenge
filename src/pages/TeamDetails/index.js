import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from "react-router-dom";
import List from '../../components/List';
import Header from '../../components/Header';
import { getUsersFromTeam } from "../../helpers/Api";
import BackButton from '../../components/BackButton';
import { Container, Title, Wrapper, Spacer, LoadingContainer } from './styles';

export default function TeamDetailPage() {
  const { id } = useParams();
  const history = useHistory();
  const [users, setUsers] = useState([]);
  const [team, setTeam] = useState('');
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const json = await getUsersFromTeam(id);
      setUsers(json.users);
      setTeam(json.name);
      setLoading(false);
    })();
  }, [id]);
  if(loading){
    return <LoadingContainer>Loading...</LoadingContainer>
  }
  return (
    <>
      <Header
        showSearch={true}
        search={search}
        setSearch={setSearch} />
      <Container>
        <Wrapper>
          <BackButton history={history} />
          <Title>Users from {team}</Title>
          <Spacer />
        </Wrapper>
        <List
          data={users}
          columns={['First Name', 'Last Name', 'Display Name', 'Location', 'Team Leader']}
          columnsData={['firstName', 'lastName', 'displayName', 'location', 'leader']}
          navigateTo="userDetail"
          search={search} 
          history={history}/>
      </Container>
    </>
  )
}