import React from 'react';
import Kursus from './state/State';
import Materi from './props/Prop'
import './props/style.css';

function App() {
  return (
    <div className="wraperapp">
      <Kursus/>
      <p><h2>contoh state</h2></p>
      <hr/>
      
      <Materi img={require('./props/hinata1.jpg')} des="Hinata" harga="Clan Hiyuga" />
      <Materi img={require('./props/itachi.jpg')} des="Itachi" harga="Clan Uciha" />
      <Materi img={require('./props/hinata.jpg')} des="Hinata" harga="Clan Hiyuga" />
        
    </div>
  );
}

export default App;
