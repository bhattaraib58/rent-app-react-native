import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { FlatList, View, Text } from 'react-native';

import FlatInfoCardView from '../flatInfoCardView/FlatInfoCardView';

import styles from './styles';

class FlatCardCarousel extends Component {
  _renderItem({ item }) {
    return (
      <FlatInfoCardView
        flatInfo={item}
        flatDetailNavigation={this.props.navigation}
        containerStyle={this.props.carouselContainerStyle}
        imageStyle={this.props.carouselImageStyle}
      />
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={[styles.title, this.props.carouselTitleStyle]}>{this.props.title}</Text>
        <FlatList
          horizontal={this.props.horizontal !== undefined ? this.props.horizontal : true}
          data={this.props.flatData}
          keyExtractor={(item, index) => index.toString()}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          renderItem={flatInfo => {
            const _renderItem = this.props._renderItem
              ? this.props._renderItem.bind(this)
              : this._renderItem.bind(this);

            return _renderItem(flatInfo);
          }}
        />
      </View>
    );
  }
}

FlatCardCarousel.propTypes = {
  _renderItem: PropTypes.any,
  carouselContainerStyle: PropTypes.any,
  carouselImageStyle: PropTypes.any,
  carouselTitleStyle: PropTypes.any,
  flatData: PropTypes.any,
  horizontal: PropTypes.any,
  navigation: PropTypes.any,
  title: PropTypes.any
};

export default FlatCardCarousel;
