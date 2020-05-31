import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    width: 100%;
    gap: 10px;
    align-content: center;
    margin-top: 30px;
    min-height: 1000px;
`;
export const ProductCardinCart = styled.div`
    background-color: white;
    border-radius: 5%;
    height: 60px;
    width: 300px;
    margin: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    * {
        margin: auto;
    }
`;
export const ProductCard = styled.div`
    width: 200px;
    height: 300px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    border-radius: 5%;
    flex-direction: column;
    margin: 50px 50px;
    background-color: #ffffff75;
    border: 2px solid;
    border-image: conic-gradient(red, white, green, red, white, green, red) 1;

    img {
        height: 100%;
        width: 100%;
    }
    button {
        color: white;
        background-color: #292d3e;
        border: none;
        border-radius: 4px;
        text-align: center;
        padding: 15px 20px 30px 20px;
        cursor: pointer;
        height: 32px;
        font-size: 14px;
        box-shadow: 0 0 4px #999;
        background-position: center;
        transition: background 0.8s;
    }
    button:hover {
        background: green radial-gradient(circle, transparent 1%, red 1%)
            center/15000%;
        color: white;
    }
    button:active {
        background-color: #292d3e;
        background-size: 1s00%;
        transition: background 0s;
    }
`;

export const PhotoFrame = styled.div`
    overflow: hidden;
    width: 120px;
    height: 120px;
    border-radius: 50%;

    /* img {

    } */
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
    color: white;
    background-color: #292d3e;
    border: none;
    text-align: center;
    padding: 15px 20px 30px 20px;
    cursor: pointer;
    font-size: 14px;
    box-shadow: 0 0 4px #999;
    background-position: center;
    transition: background 0.8s;

    :hover {
        background: green radial-gradient(circle, transparent 1%, red 1%)
            center/15000%;
        color: white;
    }
    :active {
        background-color: #292d3e;
        background-size: 100%;
        transition: background 0s;
    }
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
    color: black;
    background-color: #292d3e;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow-y: scroll;
    font-size: 0.8rem;

    div {
        display: flex;
        flex-wrap: wrap;
        margin: 10px 30px;
    }

    button {
        background: none;
        border-radius: 5%;
        border: none;
        font-weight: bold;
        font-size: 0.8rem;
        color: white;
    }
    h3 {
        color: white;
    }
    h1 {
        color: white;
    }

    ::-webkit-scrollbar {
        display: none;
    }
`;

export const PopUp = styled.span`
    border-radius: 100%;
    width: 50px;
    height: 50px;
    color: white;
    font-weight: bold;
    background-color: red;
    padding: 25px 30px;
    position: relative;
    top: 35px;
`;

export const Red = styled.p`
    color: red;
    display: inline;
`;

export const Green = styled.p`
    color: green;
    display: inline;
`;

export const White = styled.p`
    color: white;
    display: inline;
`;
