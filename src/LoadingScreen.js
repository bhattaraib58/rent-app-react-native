import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Animated } from 'react-native';
import { companyLogo } from './Constants';

export class LoadingScreen extends Component {
    constructor(props) {
        super(props)

        this.state = {
            fadeIn: new Animated.Value(0),
            fadeOut: new Animated.Value(1),
        }
    }

    componentDidMount() {
        this.fadeIn();
    }

    fadeIn() {
        this.state.fadeIn.setValue(0);
        Animated.timing(
            this.state.fadeIn,
            {
                toValue: 1,
                duration: 0,
                useNativeDriver:true,
            }
        ).start(() => this.fadeOut());
    }

    fadeOut() {
        Animated.timing(
            this.state.fadeIn,
            {
                toValue: 0,
                duration: 2500,
                useNativeDriver:true,
            }
        ).start();
    }


    styles = StyleSheet.create({
        logoStyle: {
            height: 200,
            width: 200,
            borderRadius: 200 / 2,
            marginBottom: 20
        },
        companyName: {
            color: '#325181',
            fontSize: 40,
            fontWeight: 'bold'
        },
        container: {
            backgroundColor: '#fac182',
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        }
    });


    render() {
        return (
            <View style={this.styles.container}>
                <Animated.View style={{ opacity: this.state.fadeIn }}>
                    <View style={this.styles.container}>
                        <Image source={companyLogo} style={this.styles.logoStyle} />
                        <Text style={this.styles.companyName}>Rent App</Text>
                    </View>
                </Animated.View>
            </View>
        )
    }
}

export default LoadingScreen;
