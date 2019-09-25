import React, { Component } from 'react';
import {
    StyleSheet,
    FlatList,
    Text
} from 'react-native';
import FlatCardView from './FlatCardView/FlatCardView';

const styles = StyleSheet.create(
    {
        container: {
            marginTop: 10,
            marginBottom: 40,
        }
    }
);

export class ViewFlat extends Component {
    render() {
        return (
            <FlatList
                data={this.props.flat.response}
                keyExtractor={flat => flat.id.toString()}
                renderItem={(flat) => <FlatCardView {...{flat}} />}
                showsVerticalScrollIndicator={false}
                style={styles.container} />
        )
    }
}

export default ViewFlat;
