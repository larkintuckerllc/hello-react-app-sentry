import React from 'react';
import { Button, Text, View } from 'react-native';
import Sentry from 'sentry-expo';

export default class Hello extends React.Component {
  state = {
    text: '',
  };
  render() {
    const { text } = this.state;
    return (
      <View>
        <Button
          onPress={this.handleOnPress}
          title="Hello"
          color="#00FF00"
          accessibilityLabel="Learn more about this green button"
        />
        <Text>{text}</Text>
      </View>
    );
  }

  handleOnPress = () => {
    this.setState({
      text: 'Hello World',
    });
    try {
      throw new Error('Caught');
    } catch (err) {
      Sentry.captureException(err);
    }
  }
}
