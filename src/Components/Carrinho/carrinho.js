import React from "react";
import Produtos from "../Produtos/produtos"
import styled from 'styled-components';

const Container = styled.div `

    display: flex;
    flex-direction: column;
    flex-wrap: wrap;

    h1{
        text-align: center;
        color: orange;
    }

`

export class Carrinho extends React.Component {

    
    render(){

        return(

            <Container>
                <h1>Carrinho</h1>
        <h3>Total: R$ </h3>


            </Container>
        )
    }


}

export default Carrinho