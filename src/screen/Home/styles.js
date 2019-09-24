import {StyleSheet} from 'react-native';


const styles = StyleSheet.create(
    {
        toolbar: {
            height: 50,
            backgroundColor: '#123',
            alignItems: 'center',
            justifyContent: 'flex-start',
            flexDirection: 'row',
            padding: 10
        },
        logo: {
            height: 35,
            width: 35,
            marginRight: 15,
        },
        search: {
            flex: 1,
            backgroundColor: 'white',
            padding: 5,
            paddingLeft: 15,
            borderRadius: 20
        },
        mainContent:{
            justifyContent:'center',
            alignContent:'center',
            alignItems:'center',
            flex:1
        }

    }
);

export default styles;