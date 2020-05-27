import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    width: 100vw;
    gap: 10px;
    align-content: center;
    margin-top: 30px;
`;

export const ProductCard = styled.div`
    background-color: wheat;
    width: 200px;
    height: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export const ProductName = styled.p`
    color: black;
    padding: 5px;
    background: gray;
    border-radius: 15%;
    text-align: center;
`;
