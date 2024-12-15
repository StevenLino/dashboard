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
        <div
            style={{
                color: 'black',
                fontSize: '1.5em',
                fontWeight: 'bold',
                textAlign: 'right', // Alinea el texto a la derecha
                paddingRight: '1em', // Espaciado desde el borde derecho
            }}
        >
            {currentTime}
        </div>
    );
};

export default Clock;
