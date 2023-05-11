import React from 'react';

import '../Card/Card.css';

export default function Card({character}) {

    return (
        <div className='card text-center bg-dark m-10 p-10'>
            <img src={character.image} alt="rick and morty characters" />
            <div className='card-body text-light'>
            <h5 className='card-title'>{character.name}</h5>
            <p className='card-text'>Status: {character.status}</p>
            <p className='card-text'>Species: {character.species}</p>
            <a href='https://rickandmorty.fandom.com/wiki/Category:Characters' className='btn btn-outline-secondary'>
                More Info
            </a>
            </div>   
        </div>
    )
} 