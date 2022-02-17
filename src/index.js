import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/App';
//import MarvelService from './services/MarvelService';

import './style/style.scss';



//marvelService.getAllCharacters().then(res => console.log(res.data.results.forEach(item => console.log(item.name))));

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

