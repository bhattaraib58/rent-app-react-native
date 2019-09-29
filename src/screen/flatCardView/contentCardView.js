import React from 'react';
import CardView from 'react-native-cardview';
import {
    Text,
    View,
    Image,
    TouchableWithoutFeedback
} from 'react-native';


import TagsContainer from '../../components/tagsContainer/tagsContainer';
import * as Images from '../../constants/image';
import styles from './styles';


export default function ContentCardView(props) {
    let flatInfo = props.flatInfo.flat.item;
    return (
        <View style={styles.flatContent} >
            <CardView
                cardElevation={3}
                cardMaxElevation={3}
                cornerRadius={5} style={styles.card}>

                <TouchableWithoutFeedback onPress={() => props.navigation.navigate(
                    'FlatDetails',
                    {
                        flatInfo: flatInfo
                    })}>
                    <Image source={{ uri: flatInfo.image }} style={styles.image} />
                </TouchableWithoutFeedback>

                <Text style={styles.price}>
                    {flatInfo.Currency} {flatInfo.priceMin} - {flatInfo.priceMax}/{flatInfo.payType}
                </Text>

                <View style={styles.flatDetailIcon}>
                    <Image source={Images.landIcon} style={styles.iconSize} />
                    <Text>{flatInfo.area}</Text>

                    <Image source={Images.locationIcon} style={styles.iconSize} />
                    <Text> {flatInfo.location}</Text>
                </View>

                <TagsContainer tags={flatInfo.tags} />
            </CardView>
        </View>
    )
}
