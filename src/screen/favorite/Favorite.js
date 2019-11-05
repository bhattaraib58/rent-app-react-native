import React, { Component } from 'react';
import { Text, View, FlatList } from 'react-native';
import FlatInfoCardView from '../../components/flatInfoCardView/FlatInfoCardView';
import withConnect from '../../hoc/withConnect';
import styles from './styles';

class Favorite extends Component {
  render() {
    return (
      <View style={styles.mainContainer}>
        <FlatList
          data={this.props.favoriteFlat.favoriteFlat}
          keyExtractor={flat => flat.id.toString()}
          renderItem={flat => <FlatInfoCardView flatInfo={flat.item} flatDetailNavigation={this.props.navigation} />}
          showsVerticalScrollIndicator={false}
        />
      </View>
    );
  }
}

export default withConnect(Favorite);
