import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    ScrollView
} from 'react-native';

import { landIcon, locationIcon } from '../../constants/image';
import styles from './styles';
import TagsContainer from '../tagsContainer/tagsContainer';

export class FlatDetails extends Component {
    render() {
        const { navigation } = this.props;
        const flat = navigation.getParam('flatInfo');

        return (
            <ScrollView>
                <Image source={{ uri: flat.image }} style={styles.image} />

                <Text style={styles.price}>
                    {flat.Currency} {flat.priceMin} - {flat.priceMax}/{flat.payType}
                </Text>

                <View style={styles.flatDetailIcon}>
                    <Image source={landIcon} style={styles.iconSize} />
                    <Text>{flat.area}</Text>

                    <Image source={locationIcon} style={styles.iconSize} />
                    <Text> {flat.location}</Text>
                </View>

                <Text style={styles.flatInfo}>{flat.info}</Text>

                <TagsContainer tags={flat.tags} />
            </ScrollView>
        )
    }
}

export default FlatDetails
