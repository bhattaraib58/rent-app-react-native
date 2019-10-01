import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    ScrollView,
    TouchableNativeFeedback
} from 'react-native';

import FlatFacilities from '../../components/flatFacilities/flatFacilities';
import TagsContainer from '../../components/tagsContainer/tagsContainer';
import FlatOffering from '../../components/flatOffering/flatOffering';
import FavoriteFlat from '../../components/favoriteFlat/favoriteFlat';
import FlatOptions from '../../components/flatOptions/FlatOptions';
import FlatRating from '../../components/flatRating/flatRating';
import MapboxView from '../mapboxView/MapboxView';
import styles from './styles';

export class FlatDetails extends Component {
    render() {
        const { navigation } = this.props;
        const flat = navigation.getParam('flatInfo');

        return (
            <ScrollView>
                <View style={styles.imageContainer}>
                    <Image source={{ uri: flat.image }} style={styles.image} />

                    <FavoriteFlat />

                    <TouchableNativeFeedback onPress={() => navigation.navigate('MapboxView', { coordinate: flat.coordinate })}>
                        <View style={styles.mapBoxView}>
                            <MapboxView coordinate={flat.coordinate} />
                        </View>
                    </TouchableNativeFeedback>
                </View>


                <View style={styles.mainInfo}>
                    <View style={styles.mainInfoLeft}>
                        <Text style={styles.price}>
                            {flat.Currency} {flat.priceMin} - {flat.priceMax}/{flat.payType}
                        </Text>
                        <Text style={styles.location}>{flat.location}</Text>
                    </View>

                    <FlatRating {...flat} />
                </View>

                <FlatOffering />

                <View style={styles.flatInfo}>
                    <FlatFacilities {...flat} />
                    <Text style={styles.details}>{flat.info}</Text>
                    <TagsContainer tags={flat.tags} />
                </View>

                <FlatOptions />
            </ScrollView >
        )
    }
}

export default FlatDetails
