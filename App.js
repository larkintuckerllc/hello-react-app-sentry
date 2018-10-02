import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Sentry from 'sentry-expo';
import Hello from './Hello';

// Sentry.enableInExpoDevelopment = true;
Sentry.config('https://f1a38515ee28441492a5b7e5ea4f1687@sentry.io/1292580').install();
// Sentry.captureException(new Error('Oops!'));

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Hello />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
