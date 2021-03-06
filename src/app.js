import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';

import { Header, Button, CardSection, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = { loggedIn: null }

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyDPSlonPIsFEYpOaRoCAd2l58fc3hRrALM',
      authDomain: 'react-auth-b06fa.firebaseapp.com',
      databaseURL: 'https://react-auth-b06fa.firebaseio.com',
      projectId: 'react-auth-b06fa',
      storageBucket: 'react-auth-b06fa.appspot.com',
      messagingSenderId: '63100178731'
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
        console.log(this.state.loggedIn);
      } else {
        this.setState({ loggedIn: false });
        console.log('logged out');
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <CardSection>
            <Button onPress={() => firebase.auth().signOut()}>
              Log Out
            </Button>
          </CardSection>
        );
      case false:
        return <LoginForm />;
      default: 
        return <CardSection><Spinner size="large" /></CardSection>;
    }
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
          {this.renderContent()}
      </View>
    );
  }
}

export default App;
