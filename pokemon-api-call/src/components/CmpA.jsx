import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CmpA = () => {
    const [num, setNum] = useState(25);
    const [name, setName] = useState('');
    const [moves, setMoves] = useState();

    useEffect(
        () => {
            async function getData() {
                // await means jab tak hame axios se call api ka data mil ni jata ye wait karega.
                // isliye async ke sath await ka use karna imp hai. 
                const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
                console.log(res);
                setName(res.data.name);
                setMoves(res.data.moves.length);
            };

            getData();
        }, [num]);

    return (
        <div>
            <h1>Pokemon id <span style={{color: 'red'}}>{num }</span>.</h1>
            <h1>My name is <span style={{color: 'red'}}>{name}</span>.</h1>
            <h1>I have <span style={{color: 'red'}}>{moves}</span> moves.</h1>
            <select value={num} onChange={ (event) => {setNum(event.target.value); } }>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="25">25</option>
            </select>
        </div>
    )
}

export default CmpA;