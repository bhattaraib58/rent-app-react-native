import React, {Component} from 'react';
import {View, Text, Image, Animated} from 'react-native';

import {companyLogo} from '../../constants/image';
import styles from './style';

export class AppLoading extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fadeIn: new Animated.Value(0),
      fadeOut: new Animated.Value(1),
    };
  }

  componentDidMount() {
    this.fadeIn();
  }

  fadeIn() {
    this.state.fadeIn.setValue(0);
    Animated.timing(this.state.fadeIn, {
      toValue: 1,
      duration: 0,
      useNativeDriver: true,
    }).start(() => this.fadeOut());
  }

  fadeOut() {
    Animated.timing(this.state.fadeIn, {
      toValue: 0,
      duration: 2500,
      useNativeDriver: true,
    }).start();
  }

  render() {
    return (
      <View style={styles.container}>
        <Animated.View style={{opacity: this.state.fadeIn}}>
          <View style={styles.container}>
            <Image source={companyLogo} style={styles.logoStyle} />
            <Text style={styles.companyName}>Rent App</Text>
          </View>
        </Animated.View>
      </View>
    );
  }
}

export default AppLoading;
