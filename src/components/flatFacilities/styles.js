import { StyleSheet } from 'react-native';
import { subTextColor } from '../../constants/color';

const styles = StyleSheet.create(
    {
        flatDetailIcon: {
            alignItems: 'center',
            flexDirection: 'row',
            marginVertical: 8,
        },
        facilitiesContainer: {
            alignItems:'baseline',
            flexDirection: 'row',
            marginRight: 15,
        },
        textStyle: {
            color: subTextColor,
            fontSize: 16,
            marginHorizontal: 10
        }
    }
);

export default styles;