import Expo from 'expo';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import firebase from 'firebase';
import SignUpForm from './components/SignUpForm';
import SignInForm from './components/SignInForm';

class App extends React.Component {
  componentDidMount() {
    const config = {
      apiKey: "AIzaSyAhdT6xY4HjvyF4ZdvCjMbLmRSDql8Nt-Y",
      authDomain: "one-time-password-246c7.firebaseapp.com",
      databaseURL: "https://one-time-password-246c7.firebaseio.com",
      projectId: "one-time-password-246c7",
      storageBucket: "one-time-password-246c7.appspot.com",
      messagingSenderId: "1065213145156"
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <View style={styles.container}>
        <SignUpForm />
        <SignInForm />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});

Expo.registerRootComponent(App);
