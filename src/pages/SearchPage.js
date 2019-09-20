import React, { Component } from 'react';
import { companyLogo } from '../Constants.js';
import {
    View,
    Text,
    StyleSheet,
    BackHandler,
    Image,
    TextInput,
    Keyboard,
    TouchableWithoutFeedback,
    ActivityIndicator,
    SafeAreaView
} from 'react-native';
import { ViewFlat } from './ViewFlat';
import { flatURL } from "../Constants";

export class SearchPage extends Component {

    static navigationOptions={header:null};

    constructor(props) {
        super(props)

        this.state = {
            isDataLoading: true,
            flatData: null,
        }
    }


    styles = StyleSheet.create(
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


    componentDidMount() {
        fetch(flatURL).then(data => data.json())
            .then(flatData => this.setState({
                isDataLoading: false,
                flatData
            }))
    }


    render() {
        return (
                <View style={{flex: 1 }} onStartShouldSetResponder={() => Keyboard.dismiss()}>
                    <View style={this.styles.toolbar}>
                        <Image source={companyLogo} style={this.styles.logo} />
                        <TextInput
                            style={this.styles.search}
                            placeholder='Search' />
                    </View>
                    < SafeAreaView style={this.state.isDataLoading?this.styles.mainContent:null}>
                        {
                            this.state.isDataLoading ?
                                <ActivityIndicator size="large" color="#00ff00" /> :
                                <ViewFlat flatData={this.state.flatData} {...this.props}></ViewFlat>
                        }
                    </SafeAreaView>
                </View>
        );
    }

    onActionSelected() {
        BackHandler.exitApp();
    }
}

export default SearchPage
