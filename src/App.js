import React, {Component} from 'react';
import {Text,View} from 'react-native'
import AppContaier from '../navigation/Router'
class App extends Component{

    render(){
        console.disableYellowBox = true;
                return(
            <AppContaier/>
        );
    }
}

export default App;