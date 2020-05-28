import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    width: 100%;
    gap: 10px;
    align-content: center;
    margin-top: 30px;
`;

export const ProductCard = styled.div`
    background-color: wheat;
    width: 200px;
    height: 400px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
    margin: 50px 30px;
    border-radius: 5%;

    img {
        height: 50%;
        width: 100%;
    }
`;

export const ProductName = styled.p`
    color: black;
    font-weight: bold;
    padding: 5px;
    background: white;
    border-radius: 15%;
    text-align: center;
`;

export const Inputs = styled.p`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
`;
