import React from 'react';

//Components
import Card from './Card/Card';

export default function Cards(props) {
    const { characters } = props;

    return (
        <div className='container d-flex justify-content-center align-items-center mt-10'>
            <div className='row'>
            {characters.map(character => (
          <div className='col-md-4' key={character.id}>
            <Card character={character} />
          </div>
        ))}
            </div>
        </div>
    )
} 