import React, { Component } from 'react';
import {
    StyleSheet,
    FlatList,
    Text
} from 'react-native';

import ContentCardView from './contentCardView';

const styles = StyleSheet.create(
    {
        container: {
            marginTop: 10,
            marginBottom: 40,
        }
    }
);

export class FlatCardView extends Component {
    render() {
        return (
            <FlatList
                data={this.props.flat.response}
                keyExtractor={flat => flat.id.toString()}
                renderItem={(flat) => <ContentCardView {...this.props} flatInfo={{flat}} />}
                showsVerticalScrollIndicator={false}
                style={styles.container} />
        )
    }
}

export default FlatCardView;
