import React from 'react'

const person = {
    name: 'Gregorio Y. Zara',
    theme: {
      backgroundColor: 'black',
      color: 'pink'
    }
  };

const SomeJs = () => {
    return (
        <div style={person.theme}>
            <h1>Tareas Pendientes de {person.name}</h1>
            <img
                className="avatar"
                src="https://i.imgur.com/7vQD0fPs.jpg"
                alt="Gregorio Y. Zara"
            />
            <ul>
                <li>Mejorar el videoteléfono</li>
                <li>Preparar clases de aeronáutica</li>
                <li>Trabajar en el motor de alcohol</li>
            </ul>
        </div>


    )
}

export default SomeJs
