import React, { useState } from 'react';
import './App.css';
import Main from '../main/Main';
import Footer from '../footer/Footer';
import languages from '../data/languages.json'

function App() {
  const [lang, setLang] = useState(languages.ua)

  return (
    <div className="App">
      <Main lang={lang} setLang={setLang} />
      <Footer lang={lang.footer} />
    </div>
  );
}

export default App;
