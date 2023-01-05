const BASEAPI = "https://cgjresszgg.execute-api.eu-west-1.amazonaws.com";

const apiFetchGet = async (endpoint, body = []) => {
  const res = await fetch(`${BASEAPI + endpoint}`);
  const json = await res.json();

  return json;
};


const getAllTeams = async () => {
  const json = await apiFetchGet('/teams');
  return json;
};

const getUserInformation = async (id) => {
  const json = await apiFetchGet(`/users/${id}`);
  return json;
};

const getUsersFromTeam = async (teamId) => {
  let json = await apiFetchGet(`/teams/${teamId}`);
  let usersInformation = [];
  usersInformation.push(apiFetchGet(`/users/${json.teamLeadId}`));
  for (let userId of json.teamMemberIds) {
    usersInformation.push(apiFetchGet(`/users/${userId}`));
  }
  let response = await Promise.all(usersInformation);
  response = response.map((v) => {
    return { ...v, leader: (v.id === json.teamLeadId ? 'Yes' : 'No') }
  });
  json = { ...json, users: response };
  return json;
}
export { getAllTeams, getUserInformation, getUsersFromTeam };