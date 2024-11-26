import React, { createContext, ReactNode, useContext, useState } from 'react';
import './styles/useContext.css';

const ThemeContext = createContext<{ theme: string; toggleTheme: () => void }>({
  theme: 'light',
  toggleTheme: () => {},
});

interface ThemeProviderProps {
  children: ReactNode;
}

const UseContextExample: React.FC = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className={`container ${theme}`}>
      <h1 className="title">useContext</h1>
      <p className="description">
        Gerencia o contexto da aplicação, como tema, usuário, etc.
      </p>
      <h2 className="current-theme">Tema atual: {theme}</h2>
      <button className="button" onClick={toggleTheme}>
        Trocar Tema
      </button>
      <p className="explanation">
        O <code>useContext</code> permite que você compartilhe dados entre
        componentes sem precisar passar props manualmente em cada nível da
        árvore de componentes. Neste exemplo, o contexto gerencia o tema da
        aplicação, e qualquer componente que use o <code>useContext</code> pode
        acessar o valor do tema e também disparar a mudança de tema através da
        função <code>toggleTheme</code>.
      </p>
    </div>
  );
};

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<string>('light');

  const toggleTheme = () =>
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default UseContextExample;
