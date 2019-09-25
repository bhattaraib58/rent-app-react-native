import React from 'react';
import CardView from 'react-native-cardview';
import styles from './styles';
import * as Images from '../../Constants/image';

import {
    Text,
    View,
    Image,
    TouchableWithoutFeedback
} from 'react-native';
import TagsContainer from '../TagsContainer/TagsContainer';

export default function ContentCardView({flat}) {
    return (
        <View style={styles.flatContent} >
            <CardView
                cardElevation={3}
                cardMaxElevation={3}
                cornerRadius={5} style={styles.card}>

                <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate(
                    'Details',
                    {
                        flatInfo: flat.item
                    })}>
                    <Image source={{ uri: flat.item.image }} style={styles.image} />
                </TouchableWithoutFeedback>
                
                <Text style={styles.price}>
                    {flat.item.Currency} {flat.item.priceMin} - {flat.item.priceMax}/{flat.item.payType}
                </Text>

                <View style={{ flexDirection: 'row' }}>
                    <Image source={Images.landIcon} style={styles.iconSize} />
                    <Text>{flat.item.area}</Text>

                    <Image source={Images.locationIcon} style={styles.iconSize} />
                    <Text> {flat.item.location}</Text>
                </View>

                <TagsContainer {...{tags:flat.item.tags}} />
            </CardView>
        </View>
    )
}
