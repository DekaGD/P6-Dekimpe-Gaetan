import React from 'react';
import Card from '../Card/Cards';
import "../../Styles/home.css"
import '../../Styles/index.css'

export default function Home() {
  return (
    <div className="cards">
    <div className="HomeFond">
      <h1>Chez vous, partout et ailleurs</h1>
      </div>
      <div className="card-container">
        <Card />
    </div>
    </div>
  );
}