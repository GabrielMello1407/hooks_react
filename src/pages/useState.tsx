import { useState } from 'react';
import './styles/useState.css';

const UseState = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <h1 className="title">UseState</h1>
      <p className="description">Gerencia estados em componentes funcionais.</p>
      <hr className="divider" />
      <p className="counterLabel">Aqui temos um contador</p>
      <p className="counterValue">Contador: {count}</p>
      <button className="incrementButton" onClick={() => setCount(count + 1)}>
        Incrementar
      </button>
    </div>
  );
};

export default UseState;
