import { StyleSheet } from 'react-native';

const styles = StyleSheet.create(
    {
        image: {
            backgroundColor: 'white',
            width: '100%',
            height: 400,
            marginBottom:30,
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
        flatDetailIcon: {
            flexDirection: 'row',
        },
        tagsContainer: {
            flexDirection: "row",
            flexWrap: 'wrap',
            marginVertical: 10,
            marginBottom:10
        },
        tags: {
            backgroundColor: '#d2d2d2',
            fontSize: 12,
            fontWeight: 'bold',
            padding: 5,
            margin: 3,
            borderRadius: 10,
            paddingHorizontal:10
        },
        flatInfo:{
            fontSize:16,
            margin:10
        }
    }
);

export default styles;