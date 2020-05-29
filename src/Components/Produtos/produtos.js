import React, { useState, useEffect } from 'react';
import {
    Container,
    ProductCard,
    ProductName,
    Inputs,
    PhotoFrame,
    CartBtn,
    Cart,
} from './produtos_styles';

function Produtos(props) {
    const [products, setProducts] = useState([
        {
            id: 1,
            name: 'martello',
            value: 10,
            qntd: 0,

            imageUrl:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAWcTavNxcVlFf9pUC8ivTy0cCGqPSkEOvtSGvj5Zndd0-zGq1uN_Tpt8y_5Z3VrHGXEyQwPtCTWcUc59INw&s=19',
        },
        {
            id: 2,
            name: 'appendiabiti',
            value: 10,
            qntd: 0,

            imageUrl:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF9OE1CIdkzivHdhH9kze-vP9PKhwuQ5HlqvyH5yvZ0q0QLqOiyMAGXS9kIlNNOLwOX0zEumXn6og02rmQrw&s=19',
        },
        {
            id: 3,
            name: 'barca a vela',
            value: 142,
            qntd: 0,

            imageUrl:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrW-bZ6FZl-GKSNgyKA93UCLcCYCoLnn86mI2dl1k5G_iv751Q9klmQyra230PhsNvgGoUU2pTIJ13-6io&s=19',
        },
        {
            id: 4,
            name: 'catena',
            value: 512,
            qntd: 0,

            imageUrl:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpy3_bUgUZWREYAuc6V7ftAQLLcJPywd0meJwKZE9y0amg2O-xFb4-hcoImQ_ZcdIz54l7F_5XwuH0cREW&s=19',
        },
        {
            id: 5,
            name: 'casa degli uccelli',
            value: 162,
            qntd: 0,

            imageUrl:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQylGdyG9TH8XTr90mNYH5DOtRdkfRlEC1xk27eVYNQOlsfqiES5QISQA00inCDzcU6_WRRvt0zmdwHcoeEsA&s=19',
        },
        {
            id: 6,
            name: 'dentifricio',
            value: 12,
            qntd: 0,

            imageUrl:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN144t9-K94CYezwvBq6wHX-JGHuai3AN0TuIAysk8vuyCiSd2JHloF19sw9cHoE9soGmQaetJLd2gTe3Taw&s=19',
        },
        {
            id: 7,
            name: 'orecchino',
            value: 612,
            qntd: 0,
            imageUrl:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPbxvx_HctymgnwmVDFVh18i---71QnY5KEyr2zh5ICKJM_CIF414VYRqm9O-IxVKjE3ISj0s30_iEhyoQIg&s=19',
        },
        {
            id: 8,
            name: 'burro',
            value: 512,
            qntd: 0,
            imageUrl:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRleT4UnZ0v-qfGuSYaVxCqaehszLsCZ233010RUFm2Q_jqwZ-akoaZu-4ZPYQeZ2Q5y8leVFArdj8PFpfczA&s=19',
        },
        {
            id: 9,
            name: 'libro di storie',
            value: 10,
            qntd: 0,
            imageUrl: 'https://picsum.photos/200/200',
        },
    ]);
    const [search, setSearch] = useState(props.Parameters);
    const [sortSwitch, setSwitch] = useState(false);
    const [HigherValue, setHigher] = useState(props.valMax);
    const [LesserValue, setLesser] = useState(props.ValMin);
    const [cartItems, setCart] = useState(
        JSON.parse(localStorage.getItem('cart')) || [],
    );
    const [toggle, setToggle] = useState(false);

    //////////////////////////////// Ordenar por valor

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

    useEffect(() => {
        setSearch(props.Parameters);
        setLesser(props.valMin);
        setHigher(props.valMax);
    }, [props]);

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartItems));
    }, [cartItems]);

    //////////////////// Adiciona o produto no carrinho

    const addToCart = (id) => {
        const findProduct = products.findIndex((p) => p.id === id);
        console.log(findProduct);

        const findProductInCart = cartItems.findIndex((p) => p.id === id);

        if (findProductInCart !== -1) {
            cartItems[findProductInCart].qntd += 1;
            setCart([...cartItems]);
        } else {
            products[findProduct].qntd += 1;
            setCart([...cartItems, products[findProduct]]);
        }
    };

    ////////////////// Deleta um produto do carrinho

    const deleteItem = (id) => {
        const findProductInCart = cartItems.findIndex((p) => p.id === id);
        cartItems.splice(cartItems[findProductInCart], 1);

        console.log(findProductInCart, id);
        setCart([...cartItems]);
    };

    ////////////////// Adicionar mais um item existente no carrinho

    const addItem = (id) => {
        const findProductInCart = cartItems.findIndex((p) => p.id === id);
        cartItems[findProductInCart].qntd += 1;

        setCart([...cartItems]);
    };

    ////////////////// Remover um  da quantidade de um item já existente no carrinho

    const decreaseItem = (id) => {
        const findProductInCart = cartItems.findIndex((p) => p.id === id);

        if (cartItems[findProductInCart].qntd === 1) {
            cartItems.splice(cartItems[findProductInCart], 1);
        } else {
            cartItems[findProductInCart].qntd -= 1;
        }
        setCart([...cartItems]);
    };

    const Capitalize = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    };

    const cartSum = cartItems.reduce(
        (accumulator, currentValue) =>
            Number(accumulator) +
            Number(currentValue.value) * Number(currentValue.qntd),
        0,
    );

    const mySearchParameter = new RegExp(search, 'gi');

    const toggleCart = () => {
        setToggle(!toggle);
    };

    //// Renderização Condicional do Carrinho

    const cartShow = () => {
        if (toggle === true) {
            return cartItems.map((item) => (
                <ProductCard key={item.id}>
                    <ProductName>{Capitalize(item.name)}</ProductName>
                    <PhotoFrame>
                        <img src={item.imageUrl} alt="" />
                    </PhotoFrame>
                    <p>Quantidade: {item.qntd}</p>
                    <p> R$ {item.value * item.qntd}</p>

                    <button onClick={() => addItem(item.id)}>
                        Aumentar Quantidade
                    </button>
                    <button onClick={() => decreaseItem(item.id)}>
                        Diminuir Quantidade
                    </button>
                    <button onClick={() => deleteItem(item.id)}>Remover</button>
                </ProductCard>
            ));
        }
    };

    ///////////////////////////////////////////////////////////////

    return (
        <>
            <Inputs>
                <label htmlFor="">Ordenar por:</label>
                <select onChange={sort}>
                    <option> Preço crescente </option>
                    <option> Preço decrescente </option>
                </select>
            </Inputs>

            <Cart>
                {toggle === true ? <h1>Carrinho:</h1> : ''}
                {cartShow()}
            </Cart>
            <Container>
                {products.map((item) => {
                    if (
                        item.name.match(mySearchParameter) &&
                        Number(item.value) > LesserValue &&
                        Number(item.value) < HigherValue
                    ) {
                        return (
                            <ProductCard key={item.id}>
                                <ProductName>
                                    {Capitalize(item.name)}
                                </ProductName>
                                <PhotoFrame>
                                    <img src={item.imageUrl} alt="" />
                                </PhotoFrame>
                                R${item.value}
                                <button onClick={() => addToCart(item.id)}>
                                    Adicionar ao Carrinho
                                </button>
                            </ProductCard>
                        );
                    }
                })}
            </Container>

            <div>
                <CartBtn onClick={toggleCart}>
                    {toggle === true ? 'Fechar Carrinho' : 'Abrir Carrinho'}
                    <p>Total do carrinho: R${cartSum}</p>
                </CartBtn>
            </div>
        </>
    );
}

export default Produtos;
