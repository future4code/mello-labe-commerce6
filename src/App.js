import React from 'react';
import Filter from './Components/Filtro/filter';
import { GlobalStyle } from './GlobalStyles/GlobalStyles_styles';

function App() {
    return (
        <>
            <h1>Il negozio !</h1>
            <GlobalStyle />
            <Filter />
            <p>
                <b>Eduardo Pezzi | Késsia Lopes | Victor Gutierrez </b>
            </p>
        </>
    );
}

export default App;
