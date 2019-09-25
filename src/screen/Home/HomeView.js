import React, { Component } from 'react';
import { companyLogo } from '../../Constants/image';
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
        return (
            <View style={{ flex: 1 }} onStartShouldSetResponder={() => Keyboard.dismiss()}>
                <View style={styles.toolbar}>
                    <Image source={companyLogo} style={styles.logo} />
                    <TextInput
                        style={styles.search}
                        placeholder='Search' />
                </View>
                < SafeAreaView style={this.props.flat.isLoading ? styles.mainContent : null}>
                    {
                        this.props.flat.isLoading  ?
                            <ActivityIndicator size="large" color="#00ff00" /> :
                            <ViewFlat {...this.props}></ViewFlat>
                    }
                </SafeAreaView>
            </View>
        );
    }

    onActionSelected() {
        BackHandler.exitApp();
    }
}

export default withConnect(HomeView);
