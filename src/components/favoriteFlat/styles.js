import { StyleSheet } from 'react-native';
import { textColor, iconColor } from '../../constants/color';


const styles = StyleSheet.create(
    {
        container:{
            position:'absolute',
            right:15,
            top:12
        },
        iconStyle:{
            color:iconColor,
            fontSize:45,
            fontWeight:'bold'
        }
    }
);

export default styles;