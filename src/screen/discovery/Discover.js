import React, {Component} from 'react';
import {View, Text} from 'react-native';

import FlatCardCarousel from '../../components/flatCardCarousel/FlatCardCarousel';
import withConnect from '../../hoc/withConnect';
import styles from './styles';

export class Discover extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Trending</Text>
        <FlatCardCarousel
          horizontal={true}
          data={this.props.flat.response}
          flatDetailNavigation={this.props.navigation}
        />
      </View>
    );
  }
}

export default withConnect(Discover);
