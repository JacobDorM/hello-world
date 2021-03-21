import React from 'react';
import UserCreate from './UserCreate';
import { LanguageStore } from '../contexts/LanguageContext';
import ColortContext from '../contexts/ColorContext';
import LanguageSelector from './LanguageSelector';

class App extends React.Component {

    render() {
        return (
        <div className="ui container">
            <LanguageStore>
                <LanguageSelector />

                <ColortContext.Provider value="red">
                    <UserCreate />
                </ColortContext.Provider>
            </LanguageStore>
        </div>
        );
    }
}

export default App;