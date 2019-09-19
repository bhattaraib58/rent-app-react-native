import React, { Component } from 'react';
import { View, Text, Image,StyleSheet } from 'react-native';
import {companyLogo} from './Constants';

export class LoadingScreen extends Component {

    styles=StyleSheet.create({
        logoStyle:{
            height:200,
            width:200,
            backgroundColor:'white',
            borderRadius:50,
        },
        companyName:{
            color:'#000',
            fontSize:18,

        },
        container:{
            backgroundColor:'#fac182',
            flex:1,
            alignItems:'center',
            alignContent:'space-between',
        }
    })
    render() {
        console.warn(companyLogo);
        return (
            <View style={this.styles.container}>
        <Image source={companyLogo} style={this.styles.logoStyle}/>
                <Text style={this.styles.companyName}>Rent App</Text>
            </View>
            )
        }
    }
    
    export default LoadingScreen;
