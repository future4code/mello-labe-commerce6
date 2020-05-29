import React from 'react';
import Produtos from './../Produtos/produtos';
import { Container } from './filter_styles';

class Filter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search: '',
            HigherValue: 100000,
            LesserValue: 1,
        };
    }

    handleSearch = (e) => {
        this.setState({ search: e.target.value });
    };

    minValue = (e) => {
        this.setState({ LesserValue: Number(e.target.value) });
    };

    maxValue = (e) => {
        this.setState({ HigherValue: Number(e.target.value) });
    };

    render() {
        return (
            <>
                <Container>
                    <label htmlFor="">Busca por Nome</label>
                    <input onChange={this.handleSearch} type="text" />
                    <label htmlFor="">Filtrar Valor Mínimo</label>
                    <input onChange={this.minValue} type="number" min={0} />
                    <label htmlFor="">Filtrar Valor Máximo</label>
                    <input
                        onChange={this.maxValue}
                        type="number"
                        min={this.state.LesserValue}
                    />
                </Container>

                <Produtos
                    Parameters={this.state.search}
                    valMax={this.state.HigherValue}
                    valMin={this.state.LesserValue}
                />
            </>
        );
    }
}

export default Filter;
