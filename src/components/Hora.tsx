import React, { useEffect, useState } from 'react';
import sunIcon from '../pngegg.png'

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
        }}>
            {/* Contenedor de texto e imagen */}
            <div style={{
                display: 'flex',
                alignItems: 'center', // Alinea verticalmente la imagen y el texto
                gap: '0.5em' // Espacio entre la imagen y el texto
            }}>
                {/* Imagen */}
                <img
                    src={sunIcon}  // Cambia al path correcto si lo necesitas
                    alt="Logo Icon"
                    style={{
                        width: '24px', // Tamaño de la imagen
                        height: '24px',
                        objectFit: 'contain' // Ajusta la imagen sin distorsión
                    }}
                />
                {/* Texto */}
                <div
                    style={{
                        color: 'black',
                        fontSize: '1.5em',
                        fontWeight: 'bold',
                        fontFamily: 'Times New Roman'
                    }}
                >
                    El tiempo
                </div>
            </div>

            {/* Hora actual */}
            <div
                style={{
                    color: 'black',
                    fontSize: '1.5em',
                    fontWeight: 'bold',
                    textAlign: 'right',
                    paddingRight: '1em',
                    fontFamily: 'Times New Roman'
                }}
            >
                {currentTime}
            </div>
        </div>
    );
};

export default Clock;
