import React, { useRef } from 'react';
import './styles/useRef.css';

const UseRefExample: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const focusInput = () => {
    inputRef.current?.focus();
  };

  return (
    <div className="container">
      <h1 className="title">useRef</h1>
      <p className="description">
        Permite referenciar elementos DOM diretamente.
      </p>
      <input ref={inputRef} className="input" placeholder="Digite algo..." />
      <button className="button" onClick={focusInput}>
        Focar no input
      </button>
      <p className="explanation">
        O <code>useRef</code> é um hook que permite acessar diretamente
        elementos DOM ou manter valores persistentes entre renderizações sem
        causar uma nova renderização. Neste exemplo, foi utilizado o{' '}
        <code>useRef</code> para criar uma referência ao campo de input,
        permitindo que, ao clicar no botão, o campo de input receba o foco
        automaticamente.
      </p>
    </div>
  );
};

export default UseRefExample;
