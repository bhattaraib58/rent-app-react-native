import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    FlatList,
    Image
} from 'react-native'



const styles = StyleSheet.create(
    {
        container: {
            marginHorizontal: 10,
            marginTop: 10,
            marginBottom: 40,
        },
        flatContent: {
            marginBottom: 20,
        },
        image: {
            backgroundColor: 'white',
            borderRadius: 10,
            width: '100%',
            height: 250
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

    render() {
        return (
            <FlatList
                data={this.props.flatData}
                keyExtractor={flat => flat.id.toString()}
                renderItem={(flat) => <FlatInfo flat={flat} />}
                showsVerticalScrollIndicator={false}
                style={styles.container} />
        )
    }
}

function FlatInfo({ flat }) {
    return (
        <View style={styles.flatContent}>
            <Image source={{ uri: flat.item.image }} style={styles.image} />
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

export default ViewFlat;
