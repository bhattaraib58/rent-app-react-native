import React, { Component } from 'react';
import { FlatList, View, Text } from 'react-native';

import FlatInfoCardView from '../flatInfoCardView/FlatInfoCardView';
import styles from './styles';

/* eslint-disable */

/**
 *  Flat Card Carousel.
 *
 * @props {horizontal - boolean}, {_renderItem(flatInfo) - renderFunction } , {flatData -  flatInfo data array}
 * ,navigation, carouselTitleStyle, carouselContainerStyle, carouselImageStyle
 * @extends {Component}
 */
export default class FlatCardCarousel extends Component {
  /**
   *
   *
   * @param {*} Param { item, index }.
   * @returns
   */
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

  /**
   * Render.
   *
   * @returns
   * @memberof FlatCardCarousel
   */
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
