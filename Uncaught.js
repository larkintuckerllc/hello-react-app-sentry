import React from 'react';
import { Button } from 'react-native';

export default class Uncaught extends React.Component {
  render() {
    return (
      <Button
        onPress={this.handleOnPress}
        title="Uncaught"
        color="#FF0000"
        accessibilityLabel="Learn more about this red button"
      />
    );
  }

  handleOnPress = () => {
    throw new Error('Uncaught');
  }
}
