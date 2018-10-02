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
          color="#FFFFFF"
          accessibilityLabel="Learn more about this red button"
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
