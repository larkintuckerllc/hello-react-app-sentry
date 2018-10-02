import React from 'react';
import { Button, Text, View } from 'react-native';
import Sentry from 'sentry-expo';

export default class RenderCaught extends React.Component {
  state = {
    flag: false,
  };

  render() {
    const { flag } = this.state;
    return (
      <View>
        <Button
          onPress={this.handleOnPress}
          title="Render Caught"
          color="#000000"
          accessibilityLabel="Learn more about this green button"
        />
        <Text>{ flag && <div>{flag.busted.bogus}</div> }</Text>
      </View>
    );
  }

  handleOnPress = () => {
    this.setState({
      flag: true,
    });
  }
}
