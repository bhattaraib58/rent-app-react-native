import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    FlatList,
    Image,
    TouchableNativeFeedback,
    TouchableWithoutFeedback
} from 'react-native';

import CardView from 'react-native-cardview';



const styles = StyleSheet.create(
    {
        card:{
            padding:5
        },
        container: {
            marginTop: 10,
            marginBottom: 40,
        },
        flatContent: {
            margin: 10,
        },
        image: {
            backgroundColor: 'white',
            borderRadius: 10,
            width: '100%',
            height: 200
        },
        price: {
            fontWeight: 'bold',
            fontSize: 20,
            marginHorizontal: 10
        },
        iconSize: {
            height: 15,
            width: 15,
            marginHorizontal: 10
        },
        tagsContainer: {
            flexDirection: "row",
            flexWrap: 'wrap',
            marginVertical: 10
        },
        tags: {
            backgroundColor: '#d2d2d2',
            fontSize: 12,
            fontWeight: 'bold',
            padding: 5,
            margin: 3,
            borderRadius: 10,
            paddingHorizontal: 10
        }
    }
);

export class ViewFlat extends Component {
    constructor(props) {
        super(props);
    }



    showFlatInfo({ flat }) {
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
                        <Image source={require("../img/land.png")} style={styles.iconSize} />
                        <Text>{flat.item.area}</Text>

                        <Image source={require("../img/location.png")} style={styles.iconSize} />
                        <Text> {flat.item.location}</Text>
                    </View>

                    <View style={styles.tagsContainer}>
                        {
                            flat.item.tags.map((tag, key) => {
                                return (
                                    <Text key={key} style={styles.tags}>{tag}</Text>
                                )
                            })
                        }
                    </View>

            </CardView>
                </View>

        );
    }

    render() {
        return (
            <FlatList
                data={this.props.flatData}
                keyExtractor={flat => flat.id.toString()}
                renderItem={(flat) => this.showFlatInfo({ flat })}
                showsVerticalScrollIndicator={false}
                style={styles.container} />
        )
    }
}

export default ViewFlat;