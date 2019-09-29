import { StyleSheet } from 'react-native';


const styles = StyleSheet.create(
    {
        flatContent: {
            marginHorizontal: 10,
            marginBottom: 20,
        },
        card: {
            padding: 10,
            paddingBottom:5
        },
        container: {
            marginTop: 10,
            marginBottom: 40,
        },
        flatDetailIcon: {
            flexDirection: 'row',
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
        }
    }
);

export default styles;