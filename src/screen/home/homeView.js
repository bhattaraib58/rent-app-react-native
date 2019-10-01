import React, { Component } from 'react';
import {
    View,
    Image,
    TextInput,
    Keyboard,
    ActivityIndicator,
    SafeAreaView
} from 'react-native';
import { SearchBar } from 'react-native-elements';


import FlatCardView from '../flatCardView/flatCardView';
import { companyLogo } from '../../constants/image';
import withConnect from '../../hoc/withConnect';
import styles from './styles';


export class HomeView extends Component {

    constructor(props) {
        super(props)

        this.state = {
            search: '',
        }

        this.updateSearch = this.updateSearch.bind(this);
    }

    updateSearch(search) {
        this.setState({ search });
    }

    componentDidMount() {
        this.props.flatInfoRequest();
    }

    render() {
        return (
            <View style={styles.mainContainer} onStartShouldSetResponder={() => Keyboard.dismiss()}>
                <SearchBar
                    placeholder="Type address, city, postal"
                    containerStyle={styles.searchBar}
                    inputContainerStyle={styles.inputBar}
                    platform="default"
                    lightTheme={true}
                    round={true}
                    onChangeText={this.updateSearch}
                    value={this.state.search} />
                    
                < SafeAreaView style={this.props.flat.isLoading ? styles.mainContent : null}>
                    {
                        this.props.flat.isLoading ?
                            <ActivityIndicator size="large"/> :
                            <FlatCardView {...this.props} />
                    }
                </SafeAreaView>
            </View >
        );
    }
}

export default withConnect(HomeView);
