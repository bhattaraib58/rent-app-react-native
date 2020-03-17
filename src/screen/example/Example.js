import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import auth, { firebase } from '@react-native-firebase/auth';

export class Example extends Component {
  logoutUser() {
    firebase
      .auth()
      .signOut()
      .then(() => {
        console.log('logouted');
      })
      .catch(() => {
        console.log('some error occured');
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
