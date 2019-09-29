import React, { Component } from 'react';
import {
    View,
    Image,
    TextInput,
    Keyboard,
    ActivityIndicator,
    SafeAreaView
} from 'react-native';


import FlatCardView from '../flatCardView/flatCardView';
import { companyLogo } from '../../constants/image';
import withConnect from '../../hoc/withConnect';
import styles from './styles';


export class HomeView extends Component {

    static navigationOptions = { header: null };

    componentDidMount() {
        this.props.flatInfoRequest();
    }

    render() {
        return (
            <View style={styles.mainContainer} onStartShouldSetResponder={() => Keyboard.dismiss()}>
                <View style={styles.toolbar}>
                    <Image source={companyLogo} style={styles.logo} />
                    <TextInput
                        style={styles.search}
                        placeholder='Search' />
                </View>
                < SafeAreaView style={this.props.flat.isLoading ? styles.mainContent : null}>
                    {
                        this.props.flat.isLoading ?
                            <ActivityIndicator /> :
                            <FlatCardView {...this.props} />
                    }
                </SafeAreaView>
            </View>
        );
    }
}

export default withConnect(HomeView);
