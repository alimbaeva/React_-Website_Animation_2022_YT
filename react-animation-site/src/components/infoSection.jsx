import React from 'react';
import styled from 'styled-components';
import { Button } from './Button';

const Section = styled.section``;
const Container = styled.div``;
const ColumnLeft = styled.div``;
const ColumnRight = styled.div``;

const infoSection = () => {
    return (
        <Section>
            <Container>
                <ColumnLeft>
                    <h1>heading</h1>
                    <p>paragrah</p>
                    <p>paragrah</p>
                    <Button to='/homes'>labal</Button>
                </ColumnLeft>
                <ColumnRight>
                    <img src='' alt='home' />
                </ColumnRight>
            </Container>
        </Section>
    )
}

export default infoSection