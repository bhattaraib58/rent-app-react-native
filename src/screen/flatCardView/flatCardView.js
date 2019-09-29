import React, { Component } from 'react';
import {
    StyleSheet,
    FlatList,
    Text
} from 'react-native';


import CardViewFlatInfo from '../../components/cardViewFlatInfo/cardViewFlatInfo';
import styles from './styles';

export class FlatCardView extends Component {
    render() {
        return (
            <FlatList
                data={this.props.flat.response}
                keyExtractor={flat => flat.id.toString()}
                renderItem={(flat) => <CardViewFlatInfo flatInfo={flat.item} flatDetailNavigation={this.props.navigation} />}
                showsVerticalScrollIndicator={false}
                style={styles.container} />
        )
    }
}

export default FlatCardView;
