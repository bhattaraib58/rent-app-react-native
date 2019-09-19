import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    FlatList,
    Image,
    TouchableNativeFeedback,
} from 'react-native'



const styles = StyleSheet.create(
    {
        container: {
            marginTop: 10,
            marginBottom: 40,
        },
        flatContent: {
            margin: 5,
            marginBottom: 20,
        },
        image: {
            backgroundColor: 'white',
            borderRadius: 10,
            width: '100%',
            height: 200
        },
        tags: {
            backgroundColor: '#d2d2d2',
            fontSize: 18,
            fontWeight: 'bold',
            padding: 5,
            margin: 3,
            borderRadius: 10
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
        }
    }
);

export class ViewFlat extends Component {
    constructor(props) {
        super(props);
    }



    FlatInfo({ flat }) {
        return (
            <View style={styles.flatContent} >
                <View onStartShouldSetResponder={() => this.props.navigation.navigate(
                    'Details',
                    {
                        flatInfo: flat.item
                    })}>
                    <Image source={{ uri: flat.item.image }} style={styles.image} />
                </View>
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
            </View>
        );
    }

    render() {
        return (
            <FlatList
                data={this.props.flatData}
                keyExtractor={flat => flat.id.toString()}
                renderItem={(flat) => this.FlatInfo({ flat })}
                showsVerticalScrollIndicator={false}
                style={styles.container} />
        )
    }
}

export default ViewFlat;
