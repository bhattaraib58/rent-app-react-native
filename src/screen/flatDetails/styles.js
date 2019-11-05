import { StyleSheet } from 'react-native';
import { subTextColor } from '../../constants/color';

const styles = StyleSheet.create(
    {
        container:{
            paddingBottom: 60
        },
        imageContainer: {
            position: 'relative'
        },
        image: {
            backgroundColor: 'white',
            width: '100%',
            height: 400,
        },
        mainInfo: {
            flexDirection: "row",
            justifyContent: 'space-between',
            alignItems: 'center',
            height: 100,
            paddingHorizontal: 10,
            paddingVertical: 20,

            width: '80%',
            marginHorizontal:'10%',

            borderRadius: 3,
            backgroundColor: "#0000",
            shadowColor: 'black',
            shadowOpacity: 2,
            elevation: 1,
        },
        price: {
            fontWeight: 'bold',
            fontSize: 20,
        },
        location: {
            fontWeight: 'bold',
            fontSize: 16,
        },
        mapBoxView: {
            height: 170,
            width: '80%',
            position: 'absolute',
            bottom: 0,
            left: '10%',
            right: '10%'
        },
        flatInfo: {
            marginHorizontal: 20,
            marginVertical: 10
        },
        details: {
            color: subTextColor,
            width: '100%',
            fontSize: 16,
            textAlign: 'justify',
            alignSelf: 'stretch'
        }
    }
);

export default styles;