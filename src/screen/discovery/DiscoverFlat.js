import React, { Component } from 'react';
import { View, Text } from 'react-native';


import FlatCarousel from '../../components/flatCarousel/FlatCarousel';
import withConnect from '../../hoc/withConnect';
import styles from './styles';

export class DiscoverFlat extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Trending</Text>
                <FlatCarousel flat={this.props.flat.response} flatDetailNavigation={this.props.navigation} />
            </View>
        )
    }
}

export default withConnect(DiscoverFlat);
