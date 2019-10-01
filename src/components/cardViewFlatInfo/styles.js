import { StyleSheet } from 'react-native';


const styles = StyleSheet.create(
    {
        container: {
            marginHorizontal: 20,
            marginBottom: 20,
            borderRadius:8,
            shadowColor: 'black',
            shadowOpacity: 5,
            elevation: 2,
        },
        flatDetailIcon: {
            flexDirection: 'row',
            marginVertical:5
        },
        image: {
            width: '100%',
            height: 300,
        },
        flatInfo:{
            margin:10
        }, 
        price: {
            fontWeight: 'bold',
            fontSize: 20,
            margin: 5
        },
        iconSize: {
            height: 15,
            width: 15,
            marginHorizontal: 10
        }
    }
);

export default styles;