import styled from 'styled-components';

export const Container = styled.div`
    margin: 5px;
`;

export const Wrapper = styled.div`
    display: flex;
    justify-content: ${props =>props.space ? 'space-between': 'start'};
`;

export const UserInformation = styled.div`
    display: flex;
    justify-content: ${props =>props.space ? 'space-between': 'start'};
`;

export const Spacer = styled.div``;

export const Title = styled.h3`
    margin: 5px;
`;

export const UserText = styled.h3`
    margin: 5px;
`;

export const Avatar = styled.img``;

export const Row = styled.div`
    display:flex;
    flex-direction: column;
`;

export const LoadingContainer = styled.div`
    display: flex;
    justify-content:center;
    align-items: center;
    flex: 1;
    font-weight:bold;
    font-size: 18px;
`;