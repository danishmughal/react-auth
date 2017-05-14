import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';

import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyDPSlonPIsFEYpOaRoCAd2l58fc3hRrALM',
      authDomain: 'react-auth-b06fa.firebaseapp.com',
      databaseURL: 'https://react-auth-b06fa.firebaseio.com',
      projectId: 'react-auth-b06fa',
      storageBucket: 'react-auth-b06fa.appspot.com',
      messagingSenderId: '63100178731'
    });
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
}

export default App;
