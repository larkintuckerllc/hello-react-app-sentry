import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Sentry from 'sentry-expo';
import Caught from './Caught';
import ErrorBoundary from './ErrorBoundary';
import Uncaught from './Uncaught';
import RenderCaught from './RenderCaught';
import RenderUncaught from './RenderUncaught';

Sentry.config('https://f1a38515ee28441492a5b7e5ea4f1687@sentry.io/1292580').install();

export default class App extends React.Component {
  render() {
    return (
        <View style={styles.container}>
          <Text>Open up App.js to start working on your app!</Text>
          <Caught />
          <Uncaught />
          <ErrorBoundary>
            <RenderCaught />
          </ErrorBoundary>
          <RenderUncaught />
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
