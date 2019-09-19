import React, { Component } from 'react';
import { 
    View, 
    Text ,
    Image,
    StyleSheet,
    ScrollView
} from 'react-native';


const styles = StyleSheet.create(
    {
        image: {
            backgroundColor: 'white',
            width: '100%',
            height: 400,
            marginBottom:30,
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
            marginVertical: 10,
            marginBottom:10
        },
        flatInfo:{
            fontSize:16,
            margin:10
        }
    }
);

export class ViewFlatDetails extends Component {
    render() {
        const { navigation } = this.props;
        const flat = navigation.getParam('flatInfo');
        return (
            <ScrollView>
                <Image source={{ uri: flat.image }} style={styles.image} />

                <Text style={styles.price}>
                    {flat.Currency} {flat.priceMin} - {flat.priceMax}/{flat.payType}
                </Text>

                <View style={{ flexDirection: 'row' }}>
                    <Image source={require("../img/land.png")} style={styles.iconSize} />
                    <Text>{flat.area}</Text>

                    <Image source={require("../img/location.png")} style={styles.iconSize} />
                    <Text> {flat.location}</Text>
                </View>

                <Text style={styles.flatInfo}>{flat.info}</Text>

                <View style={styles.tagsContainer}>
                    {
                        flat.tags.map((tag, key) => {
                            return (
                                <Text key={key} style={styles.tags}>{tag}</Text>
                            )
                        })
                    }
                </View>
            </ScrollView>
        )
    }
}

export default ViewFlatDetails
