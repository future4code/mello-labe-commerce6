import React from 'react';
import Filter from './Components/Filtro/filter';
import { GlobalStyle } from './GlobalStyles/GlobalStyles_styles';
import { Red, Green, White } from './Components/Produtos/produtos_styles';
function App() {
    return (
        <>
            <h1>
                <Green>Il </Green>
                <White>nego</White>
                <Red>zio !</Red>
            </h1>
            <GlobalStyle />
            <Filter />
            <p>
                <b>Eduardo Pezzi | Késsia Lopes | Victor Gutierrez </b>
            </p>
        </>
    );
}

export default App;
