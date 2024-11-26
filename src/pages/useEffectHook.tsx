import React, { useEffect, useState } from 'react';
import './styles/useEffectHook.css';

interface UseEffectHooksProps {
  prevSeconds?: number | string;
}

const UseEffectHook: React.FC<UseEffectHooksProps> = ({ prevSeconds }) => {
  const initialSeconds =
    typeof prevSeconds === 'number'
      ? prevSeconds
      : parseInt(prevSeconds as string, 10) || 0;

  const [seconds, setSeconds] = useState<number>(initialSeconds);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container">
      <h1 className="title">UseEffect</h1>
      <p className="description">
        O useEffect é usado para lidar com efeitos colaterais, como buscar
        dados, configurar timers ou sincronizar o DOM.
      </p>
      <p className="timeDisplay">Segundos: {seconds}</p>
      <p className="explanation">
        O valor de seconds está sendo atualizado a cada segundo sem mudar o
        estado da página porque o React lida com a reatividade do estado de
        forma eficiente. O hook useEffect configura um intervalo com a função
        setInterval, que executa a função de atualização de estado (setSeconds)
        a cada 1000 milissegundos (1 segundo). Quando setSeconds é chamado, ele
        atualiza o valor de seconds, mas não causa uma re-renderização completa
        do componente. O React apenas re-renderiza a parte da interface que
        depende do estado atualizado, no caso, o valor de seconds, que é
        mostrado na tela. Portanto, a interface (ou a página inteira) não é
        recarregada, apenas o conteúdo relevante é atualizado, proporcionando
        uma experiência suave de contagem de tempo.
      </p>
    </div>
  );
};

export default UseEffectHook;
