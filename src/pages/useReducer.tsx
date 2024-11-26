import React, { useReducer } from 'react';
import './styles/useReducer.css';

type State = { count: number };
type Action = { type: 'increment' | 'decrement' };

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      return state;
  }
};

const UseReducerExample: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div className="container">
      <h1 className="title">useReducer</h1>
      <p className="description">
        Gerencia estados complexos de forma mais estruturada.
      </p>
      <h2 className="counter">Contador: {state.count}</h2>
      <button
        className="button"
        onClick={() => dispatch({ type: 'increment' })}
      >
        Incrementar
      </button>
      <button
        className="button decrement"
        onClick={() => dispatch({ type: 'decrement' })}
      >
        Decrementar
      </button>
      <p className="explanation">
        O <code>useReducer</code> é um hook que gerencia estados mais complexos
        e é uma alternativa ao <code>useState</code>. Ele é especialmente útil
        quando o estado da aplicação envolve múltiplos valores ou quando as
        mudanças de estado são mais complexas. O hook recebe um{' '}
        <code>reducer</code>, que é uma função que define como o estado é
        alterado, e um estado inicial. O <code>dispatch</code> é usado para
        disparar ações que modificam o estado.
      </p>
    </div>
  );
};

export default UseReducerExample;
