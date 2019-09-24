import React, { Component } from 'react';
import { companyLogo } from '../../Constants.js';
import {
    View,
    BackHandler,
    Image,
    TextInput,
    Keyboard,
    ActivityIndicator,
    SafeAreaView
} from 'react-native';
import { ViewFlat } from '../ViewFlat';
import styles from './styles';
import withConnect from '../../hoc/withConnect.js';

export class HomeView extends Component {

    static navigationOptions = { header: null };

    constructor(props) {
        super(props)

        this.state = {

        }
        this.props.flatInfoRequest();
    }
    render() {
        console.warn(this.props);
        return (
            <View style={{ flex: 1 }} onStartShouldSetResponder={() => Keyboard.dismiss()}>
                <View style={styles.toolbar}>
                    <Image source={companyLogo} style={styles.logo} />
                    <TextInput
                        style={styles.search}
                        placeholder='Search' />
                </View>
                {/* < SafeAreaView style={this.state.isDataLoading ? this.styles.mainContent : null}>
                    {
                        this.state.isDataLoading ?
                            <ActivityIndicator size="large" color="#00ff00" /> :
                            <ViewFlat flatData={this.state.flatData} {...this.props}></ViewFlat>
                    }
                </SafeAreaView> */}
            </View>
        );
    }

    onActionSelected() {
        BackHandler.exitApp();
    }
}

export default withConnect(HomeView);
