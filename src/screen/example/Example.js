import React, { Component } from 'react';
import { firebase } from '@react-native-firebase/auth';
import { View, Text, TouchableOpacity } from 'react-native';

export class Example extends Component {
  logoutUser() {
    firebase
      .auth()
      .signOut()
      .then(() => {
        // eslint-disable-next-line no-console
        console.warn('logouted');
      })
      .catch(err => {
        // eslint-disable-next-line no-console
        console.warn('some error occured', err);
      });
  }

  render() {
    return (
      <View>
        <TouchableOpacity onPress={this.logoutUser}>
          <Text>Click here to logout</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Example;
