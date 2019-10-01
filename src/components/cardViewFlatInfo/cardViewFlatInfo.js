import React from 'react';
import CardView from 'react-native-cardview';
import {
    Text,
    View,
    Image,
    TouchableWithoutFeedback
} from 'react-native';


import TagsContainer from '../tagsContainer/tagsContainer';
import styles from './styles';
import FavoriteFlat from '../favoriteFlat/favoriteFlat';
import FlatLocation from '../flatLocation/flatLocation';
import FlatFacilities from '../flatFacilities/flatFacilities';


export default function CardViewFlatInfo({ flatInfo, flatDetailNavigation }) {
    return (
        <View style={styles.flatContent} >
            <CardView
                cardElevation={3}
                cardMaxElevation={3}
                cornerRadius={5} style={styles.card}>

                <View style={{ position: 'relative' }}>
                    <TouchableWithoutFeedback onPress={() => flatDetailNavigation.navigate(
                        'FlatDetails', { flatInfo: flatInfo })}>
                        <Image source={{ uri: flatInfo.image }} style={styles.image} />
                    </TouchableWithoutFeedback>

                    <FavoriteFlat />
                    <FlatLocation locationName={flatInfo.location} />
                </View>

                <View style={styles.flatInfo}>
                    <Text style={styles.price}>
                        {flatInfo.Currency} {flatInfo.priceMin} - {flatInfo.priceMax}/{flatInfo.payType}
                    </Text>

                    <FlatFacilities {...flatInfo} />

                    <TagsContainer tags={flatInfo.tags} />
                </View>
            </CardView>
        </View>
    )
}
