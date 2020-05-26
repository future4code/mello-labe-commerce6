import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { render } from '@testing-library/react';

export const Container = styled.div`
    display: grid;
    grid-template-column: repeat(auto-fill, 200px);
`;

const Produtos = (props) => {
    const [products, setProducts] = useState([
        {
            id: 1,
            name: 'PRODUTO 1',
            value: 5,
            imageUrl: 'https://picsum.photos/200/200',
        },
        {
            id: 2,
            name: 'PRODUTO 2',
            value: 4,
            imageUrl: 'https://picsum.photos/200/200',
        },
        {
            id: 3,
            name: ' PRODUTO 3',
            value: 3,
            imageUrl: 'https://picsum.photos/200/200',
        },
        {
            id: 4,
            name: 'PRODUTO 4',
            value: 12,
            imageUrl: 'https://picsum.photos/200/200',
        },
        {
            id: 5,
            name: 'PRODUTO 5',
            value: 2,
            imageUrl: 'https://picsum.photos/200/200',
        },
    ]);
    const [search, setSearch] = useState('');
    const [sortSwitch, setSwitch] = useState(false);

    const handleSearch = (e) => {
        setSearch(`${e.target.value}`);
    };

    const sort = () => {
        if (sortSwitch) {
            const sorted = [...products].sort((a, b) => a.value - b.value);
            setProducts(sorted);
            setSwitch(false);
        } else {
            const sorted = [...products].sort((a, b) => b.value - a.value);
            setProducts(sorted);
            setSwitch(true);
        }
    };

    const renderList = () => {
        return products.map((item) => {
            if (
                item.name.includes(search) &&
                item.value < props.valMax &&
                item.value > props.valMin
            ) {
                return (
                    <div key={item.id}>
                        id: {item.id} |{item.name} | preço {item.value} |
                    </div>
                );
            }
        });
    };

    return (
        <>
            <Container>
                <label htmlFor="">
                    Ordenar por:
                    <select onChange={sort}>
                        <option> Preço crescente </option>
                        <option> Preço decrescente </option>
                    </select>
                </label>
                <input type="text" value={search} onChange={handleSearch} />
                {renderList()}
            </Container>
        </>
    );
};

export default Produtos;
