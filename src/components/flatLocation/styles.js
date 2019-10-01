import { StyleSheet } from 'react-native';
import { iconColor } from '../../constants/color';

const styles = StyleSheet.create(
    {
        container: {
            position: 'absolute',
            left: 15,
            bottom: 15,

            borderRadius: 50,
            backgroundColor: iconColor,

            paddingHorizontal: 10,
            paddingVertical: 10,
            minWidth: '50%',

            flexDirection: 'row',
            alignItems: 'center',

            opacity: 0.8,

            shadowColor: 'black',
            shadowOpacity: 5,
            elevation: 3,
        },
        textStyle: {
            color: "white",
            fontWeight:"bold",
            fontSize: 15,
            paddingLeft: 5
        },
    }
);

export default styles;