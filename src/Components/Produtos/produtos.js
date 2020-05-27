import React, { useState } from 'react';
import { Container, ProductCard, ProductName } from './produtos_styles';

function Produtos() {
    const [products, setProducts] = useState([
        {
            id: 1,
            name: 'martello',
            value: 225,
            imageUrl:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAWcTavNxcVlFf9pUC8ivTy0cCGqPSkEOvtSGvj5Zndd0-zGq1uN_Tpt8y_5Z3VrHGXEyQwPtCTWcUc59INw&s=19',
        },
        {
            id: 2,
            name: 'appendiabiti',
            value: 24,
            imageUrl:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF9OE1CIdkzivHdhH9kze-vP9PKhwuQ5HlqvyH5yvZ0q0QLqOiyMAGXS9kIlNNOLwOX0zEumXn6og02rmQrw&s=19',
        },
        {
            id: 3,
            name: 'barca a vela',
            value: 33,
            imageUrl:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrW-bZ6FZl-GKSNgyKA93UCLcCYCoLnn86mI2dl1k5G_iv751Q9klmQyra230PhsNvgGoUU2pTIJ13-6io&s=19',
        },
        {
            id: 4,
            name: 'catena',
            value: 12,
            imageUrl:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpy3_bUgUZWREYAuc6V7ftAQLLcJPywd0meJwKZE9y0amg2O-xFb4-hcoImQ_ZcdIz54l7F_5XwuH0cREW&s=19',
        },
        {
            id: 5,
            name: 'casa degli uccelli',
            value: 12,
            imageUrl:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQylGdyG9TH8XTr90mNYH5DOtRdkfRlEC1xk27eVYNQOlsfqiES5QISQA00inCDzcU6_WRRvt0zmdwHcoeEsA&s=19',
        },
        {
            id: 6,
            name: 'dentifricio',
            value: 2,
            imageUrl:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN144t9-K94CYezwvBq6wHX-JGHuai3AN0TuIAysk8vuyCiSd2JHloF19sw9cHoE9soGmQaetJLd2gTe3Taw&s=19',
        },
        {
            id: 7,
            name: 'orecchino',
            value: 2,
            imageUrl:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPbxvx_HctymgnwmVDFVh18i---71QnY5KEyr2zh5ICKJM_CIF414VYRqm9O-IxVKjE3ISj0s30_iEhyoQIg&s=19',
        },
        {
            id: 8,
            name: 'burro',
            value: 22,
            imageUrl:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRleT4UnZ0v-qfGuSYaVxCqaehszLsCZ233010RUFm2Q_jqwZ-akoaZu-4ZPYQeZ2Q5y8leVFArdj8PFpfczA&s=19',
        },
        {
            id: 9,
            name: 'libro di storie',
            value: 42,
            imageUrl: 'https://picsum.photos/200/200',
        },
    ]);
    const [search, setSearch] = useState('');
    const [sortSwitch, setSwitch] = useState(false);
    const [HigherValue, setHigher] = useState({ max: 100000 });
    const [LesserValue, setLesser] = useState({ min: 1 });

    const sort = () => {
        if (sortSwitch) {
            const sorted = [...products].sort((a, b) => a.value - b.value);
            setProducts(sorted);
            setSwitch(false);
            console.log(LesserValue.min, setLesser.max);
        } else {
            const sorted = [...products].sort((a, b) => b.value - a.value);
            setProducts(sorted);
            setSwitch(true);
            console.log(LesserValue.min, setLesser.max);
        }
    };

    const Capitalize = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    };

    const handleSearch = (e) => {
        setSearch(e.target.value);
    };

    const mySearch = new RegExp(search, 'gi');

    const minValue = (e) => {
        setLesser({ min: Number(e.target.value) });
    };

    const maxValue = (e) => {
        setHigher({ max: Number(e.target.value) });
    };

    return (
        <>
            <label htmlFor="">Procurar por nome:</label>
            <input onChange={handleSearch} type="text" />
            <label htmlFor="">
                Ordenar por:
                <select onChange={sort}>
                    <option> Preço crescente </option>
                    <option> Preço decrescente </option>
                </select>
            </label>
            <label htmlFor="">Filtrar</label>
            <label htmlFor="">Valor Mínimo</label>
            <input onChange={minValue} type="number" min={0} />
            <label htmlFor="">Valor Máximo</label>
            <input onChange={maxValue} type="number" />
            <Container>
                {products.map((item) => {
                    if (
                        item.name.match(mySearch) &&
                        Number(item.value) > LesserValue.min &&
                        Number(item.value) < HigherValue.max
                    ) {
                        return (
                            <ProductCard key={item.id}>
                                <ProductName>
                                    {Capitalize(item.name)}
                                </ProductName>
                                <img src={item.imageUrl} alt="" />
                                R${item.value}
                                <button>Adicionar ao Carrinho</button>
                            </ProductCard>
                        );
                    }
                })}
            </Container>
        </>
    );
}

export default Produtos;
