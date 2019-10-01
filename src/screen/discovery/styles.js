import { StyleSheet } from 'react-native';
import { textColor } from '../../constants/color';

const styles = StyleSheet.create(
    {
        container: {
            margin: 15,
        },
        title: {
            fontSize: 28,
            fontWeight: 'bold',
            color: textColor,
            marginBottom:10
        }
    }
);

export default styles;