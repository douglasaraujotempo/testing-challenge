import React, { useState } from 'react';
import { useHistory, useParams } from "react-router-dom";
import { getUserInformation } from "../../helpers/Api";
import BackButton from '../../components/BackButton';
import Header from '../../components/Header';

import { LoadingContainer, Container, Avatar, Wrapper, Spacer, Title, Row, UserInformation, UserText } from './styles';
export default function UserDetails() {
  const { id } = useParams();
  const history = useHistory();
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(true);

  React.useEffect(() => {
    (async () => {
      const json = await getUserInformation(id);
      setUserData(json);
      setLoading(false);
    })();
  }, [id]);
  if(loading){
    return <LoadingContainer>Loading...</LoadingContainer>
  }
  return (
    <>
      <Header showSearch={false} />
      <Container>
        <Wrapper space>
          <BackButton history={history} />
          <Title>User information</Title>
          <Spacer />
        </Wrapper>
        {userData.firstName &&
          <UserInformation>
            {userData.avatarUrl && <Avatar src={userData.avatarUrl} />}
            <Row>
              <UserText>Name: {userData.firstName + ' ' + userData.lastName}</UserText>
              <UserText>Display Name: {userData.displayName}</UserText>
              <UserText>Location: {userData.location}</UserText>
            </Row>
          </UserInformation>
        }
      </Container>
    </>
  )
}