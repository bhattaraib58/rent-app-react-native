import { StyleSheet } from 'react-native';
import { subTextColor } from '../../constants/color';

const styles = StyleSheet.create(
    {
        container: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent:'space-evenly',
            marginVertical:20
        },
        infoContainer: {
            flexDirection: 'column',
            alignItems: 'center'
        },
        iconContainer:{
            padding:20,
            marginBottom:5,
            borderRadius:50,
            backgroundColor : "#0000",
            shadowColor: 'black',
            shadowOpacity: 2,
            elevation: 1,
        },
        textStyle: {
            fontWeight:"bold",
            fontSize: 15,
            color:subTextColor
        },
    }
);

export default styles;