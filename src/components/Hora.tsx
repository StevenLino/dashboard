import React, { useEffect, useState } from 'react';

const Clock: React.FC = () => {
    const [currentTime, setCurrentTime] = useState<string>(() => new Date().toLocaleTimeString());

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(new Date().toLocaleTimeString());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div style={{
            display: 'flex', // Usa Flexbox
            justifyContent: 'space-between', // Distribuye los elementos
            alignItems: 'center', // Alinea los elementos verticalmente
            padding: '1em', // Añade algo de espacio
            border: '1px solid black', // (opcional) Un borde para visualizar el área
            borderRadius: '5px',
            backgroundColor: 'white'
        }}
        >
            <div
                style={{
                    color: 'black',
                    fontSize: '1.5em',
                    fontWeight: 'bold',
                    textAlign: 'left', // Alinea el texto a la derecha
                    paddingRight: '1em', // Espaciado desde el borde derecho
                    fontFamily: 'Times New Roman'
                }}
            >
                El tiempo
            </div>
            <div
                style={{
                    color: 'black',
                    fontSize: '1.5em',
                    fontWeight: 'bold',
                    textAlign: 'right', // Alinea el texto a la derecha
                    paddingRight: '1em', // Espaciado desde el borde derecho
                    fontFamily: 'Times New Roman',
                    //textShadow: '0.2px black'   sombra
                }}
            >
            {currentTime}
        </div>
        </div >
    );
};

export default Clock;
