import React, { useState } from 'react';

import { Container, ProductCard, ProductName } from './produtos_styles';

const Produtos = () => {
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
            if (item.name.includes(search)) {
                return (
                    <ProductCard key={item.id}>
                        <ProductName>{item.name}</ProductName>
                        <img src={item.imageUrl} alt="" />
                        R${item.value}
                    </ProductCard>
                );
            }
        });
    };

    return (
        <>
            <label htmlFor="">
                Ordenar por:
                <select onChange={sort}>
                    <option> Preço crescente </option>
                    <option> Preço decrescente </option>
                </select>
            </label>
            <input type="text" value={search} onChange={handleSearch} />
            <Container>{renderList()}</Container>
        </>
    );
};

export default Produtos;
