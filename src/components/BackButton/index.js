import React from 'react';
import { Container } from './styles';

export default function BackButton({ history }) {

    return (
        <Container onClick={() => { history.goBack() }}>Return</Container>
    )
}