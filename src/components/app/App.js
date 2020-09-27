import React, {useEffect, useState} from 'react';
import './App.css';
import Main from '../main/Main';
import Footer from '../footer/Footer';
import languages from '../data/languages.json'
import PersonalDataModal from "../main/modal";
import {useSelector} from 'react-redux'

function App() {
    const [lang, setLang] = useState(languages.ua)
    const showModal = useSelector(state => state.app.policyConfirm)

    useEffect(() => {
        if (localStorage.getItem('pro-lang') === 'ru') {
            setLang(languages.ru)
        }
    })

    const setLangHandler = (lang) => {
        if (lang === 'ru') {
            setLang(languages.ru)
            localStorage.setItem('pro-lang', 'ru')
        } else {
            setLang(languages.ua)
            localStorage.setItem('pro-lang', 'ua')
        }
    }

    return (
        <div className="App">
            {showModal && <PersonalDataModal btn={lang.policySubmit} text={lang.policy} />}
            <Main
                lang={lang}
                setLang={setLangHandler}
            />
            <Footer lang={lang.footer}/>
        </div>
    );
}

export default App;
