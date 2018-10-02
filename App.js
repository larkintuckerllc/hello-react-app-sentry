import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Sentry from 'sentry-expo';

Sentry.enableInExpoDevelopment = true; // TODO: REMOVE ONCE WORKING
Sentry.config('https://f1a38515ee28441492a5b7e5ea4f1687@sentry.io/1292580').install();
Sentry.captureException(new Error('Oops!')); // TODO: REMOVE ONCE WORKING

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
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
