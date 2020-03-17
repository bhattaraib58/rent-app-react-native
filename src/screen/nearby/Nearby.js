import React, { Component } from 'react';
import { View, Keyboard } from 'react-native';
import { SearchBar } from 'react-native-elements';

import FlatListView from '../../components/flatListView/FlatListView';

import withConnect from '../../hoc/withConnect';

import styles from './styles';

export class Nearby extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: ''
    };
  }

  updateSearch(search) {
    this.setState({ search });
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
          value={this.state.search}
        />

        <FlatListView {...this.props} />
      </View>
    );
  }
}

export default withConnect(Nearby);
