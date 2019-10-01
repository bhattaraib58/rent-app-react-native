import { StyleSheet } from 'react-native';

const styles = StyleSheet.create(
    {
        container: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-evenly'
        },
        buttonStyle: {
            borderRadius:30,
            paddingVertical:15,
            paddingHorizontal:30,
            width:100,
            height:50,
            fontWeight:'bold',
        }
    }
);

export default styles;