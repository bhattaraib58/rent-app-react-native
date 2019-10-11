import Icon from 'react-native-vector-icons/Ionicons';
import Snackbar from 'react-native-snackbar';
import React, {Component} from 'react';
import {View} from 'react-native';

import styles from './styles';

export class FavoriteFlat extends Component {
  constructor(props) {
    super(props);

    this.state = {
      added: false,
    };

    this.favoriteIcon = {
      notAdded: 'ios-star-outline',
      added: 'ios-star',
    };

    this.setFavouriteAdded = this.setFavouriteAdded.bind(this);
    this.showFavouriteAddedInfo = this.showFavouriteAddedInfo.bind(this);
  }

  setFavouriteAdded() {
    this.setState(
      {
        added: !this.state.added,
      },
      this.showFavouriteAddedInfo,
    );
  }

  showFavouriteAddedInfo() {
    Snackbar.show({
      title: this.state.added ? 'Added To Favorites' : 'Removed From Favorites',
      color: 'white',
      duration: Snackbar.LENGTH_SHORT,
      action: {
        title: 'UNDO',
        color: 'green',
        onPress: this.setFavouriteAdded,
      },
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Icon
          name={
            this.state.added
              ? this.favoriteIcon.added
              : this.favoriteIcon.notAdded
          }
          style={styles.iconStyle}
          onPress={this.setFavouriteAdded}
        />
      </View>
    );
  }
}

export default FavoriteFlat;
