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
export const ProductCardinCart = styled.div`
    background-color: white;
    border-radius: 5%;
    height: 60px;
    width: 800px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    * {
        margin: 30px 15px;
    }

    button {
        background: none;
        border: none;
        border-bottom: 1px solid green;
        font-weight: bold;
    }
`;
export const ProductCard = styled.div`
    width: 200px;
    height: 300px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    border: 5px solid;
    border-image: conic-gradient(red, white, green, red, white, green, red) 1;
    border-radius: 5%;
    flex-direction: column;
    margin: 50px 50px;
    background-color: #bbaa99;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='200' viewBox='0 0 160 80'%3E%3Cg fill='%23B0A090' %3E%3Cpolygon points='0 10 0 0 10 0'/%3E%3Cpolygon points='0 40 0 30 10 30'/%3E%3Cpolygon points='0 30 0 20 10 20'/%3E%3Cpolygon points='0 70 0 60 10 60'/%3E%3Cpolygon points='0 80 0 70 10 70'/%3E%3Cpolygon points='50 80 50 70 60 70'/%3E%3Cpolygon points='10 20 10 10 20 10'/%3E%3Cpolygon points='10 40 10 30 20 30'/%3E%3Cpolygon points='20 10 20 0 30 0'/%3E%3Cpolygon points='10 10 10 0 20 0'/%3E%3Cpolygon points='30 20 30 10 40 10'/%3E%3Cpolygon points='20 20 20 40 40 20'/%3E%3Cpolygon points='40 10 40 0 50 0'/%3E%3Cpolygon points='40 20 40 10 50 10'/%3E%3Cpolygon points='40 40 40 30 50 30'/%3E%3Cpolygon points='30 40 30 30 40 30'/%3E%3Cpolygon points='40 60 40 50 50 50'/%3E%3Cpolygon points='50 30 50 20 60 20'/%3E%3Cpolygon points='40 60 40 80 60 60'/%3E%3Cpolygon points='50 40 50 60 70 40'/%3E%3Cpolygon points='60 0 60 20 80 0'/%3E%3Cpolygon points='70 30 70 20 80 20'/%3E%3Cpolygon points='70 40 70 30 80 30'/%3E%3Cpolygon points='60 60 60 80 80 60'/%3E%3Cpolygon points='80 10 80 0 90 0'/%3E%3Cpolygon points='70 40 70 60 90 40'/%3E%3Cpolygon points='80 60 80 50 90 50'/%3E%3Cpolygon points='60 30 60 20 70 20'/%3E%3Cpolygon points='80 70 80 80 90 80 100 70'/%3E%3Cpolygon points='80 10 80 40 110 10'/%3E%3Cpolygon points='110 40 110 30 120 30'/%3E%3Cpolygon points='90 40 90 70 120 40'/%3E%3Cpolygon points='10 50 10 80 40 50'/%3E%3Cpolygon points='110 60 110 50 120 50'/%3E%3Cpolygon points='100 60 100 80 120 60'/%3E%3Cpolygon points='110 0 110 20 130 0'/%3E%3Cpolygon points='120 30 120 20 130 20'/%3E%3Cpolygon points='130 10 130 0 140 0'/%3E%3Cpolygon points='130 30 130 20 140 20'/%3E%3Cpolygon points='120 40 120 30 130 30'/%3E%3Cpolygon points='130 50 130 40 140 40'/%3E%3Cpolygon points='120 50 120 70 140 50'/%3E%3Cpolygon points='110 70 110 80 130 80 140 70'/%3E%3Cpolygon points='140 10 140 0 150 0'/%3E%3Cpolygon points='140 20 140 10 150 10'/%3E%3Cpolygon points='140 40 140 30 150 30'/%3E%3Cpolygon points='140 50 140 40 150 40'/%3E%3Cpolygon points='140 70 140 60 150 60'/%3E%3Cpolygon points='150 20 150 40 160 30 160 20'/%3E%3Cpolygon points='150 60 150 50 160 50'/%3E%3Cpolygon points='140 70 140 80 150 80 160 70'/%3E%3C/g%3E%3C/svg%3E");
    img {
        height: 100%;
        width: 100%;
    }
    button {
        background: none;
        border: none;
        border-bottom: 1px solid green;
        font-weight: bold;
    }
`;

export const PhotoFrame = styled.div`
    overflow: hidden;
    width: 120px;
    height: 120px;

    border-radius: 50%;
`;

export const ProductName = styled.p`
    background: none;
`;

export const Inputs = styled.p`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
`;

export const CartBtn = styled.button`
    position: fixed;
    right: 50px;
    bottom: 50px;
    width: 200px;
    height: 200px;
    overflow: hidden;
    border-radius: 100%;
`;

export const Cart = styled.div`
    width: auto;
    background-color: white;
    border-radius: 5%;
    display: flex;
    position: fixed;
    top: 150px;
    right: 150px;
    bottom: 150px;
    left: 150px;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    overflow-y: scroll;

    h3 {
        color: black;
    }

    ::-webkit-scrollbar {
        display: none;
    }
`;
