import React, { useState } from 'react';

/* {
	id: 1,
	name: "Foguete da Missão Apollo 11",
	value: 10000.0,
	imageUrl: "https://picsum.photos/200/200",
} */

const Produtos = (props) => {
    const [products, setProducts] = useState([
        {
            id: 1,
            name: 'Foguete da Missão Apollo 11',
            value: 10000.0,
            imageUrl: 'https://picsum.photos/200/200',
        },
        {
            id: 2,
            name: 'Foguete da Missão Apollo 12',
            value: 10000.0,
            imageUrl: 'https://picsum.photos/200/200',
        },
    ]);

    return (
        <>
            <ul>
                {products.map((item) => (
                    <li key={item.id}>
                        {item.name} {item.value}
                    </li>
                ))}
            </ul>
        </>
    );
};
