import {StyleSheet} from 'react-native';


const styles = StyleSheet.create(
    {
        mainContainer:{
            flex:1
        },
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
        searchBar: {
            marginVertical:10,
            marginHorizontal:20,
            borderRadius:10,
            backgroundColor : "#0000",
            shadowColor: 'black',
            shadowOpacity: 5,
            elevation: 3,
        },
        inputBar:{
            backgroundColor: 'white',
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