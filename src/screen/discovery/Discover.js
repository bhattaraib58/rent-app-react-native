import React, { Component } from 'react';
import { ScrollView, RefreshControl } from 'react-native';

import FlatCategoryCardView from '../../components/flatCategoryCardView/FlatCategoryCardView';
import FlatCardCarousel from '../../components/flatCardCarousel/FlatCardCarousel';
import withConnect from '../../hoc/withConnect';
import styles from './styles';
export class Discover extends Component {
  _renderItem({ item, index }) {
    return (
      <FlatCategoryCardView
        flatInfo={item}
        flatDetailNavigation={this.props.navigation}
        containerStyle={this.props.carouselContainerStyle}
        imageStyle={this.props.carouselImageStyle}
      />
    );
  }

  render() {
    return (
      <ScrollView
        style={styles.container}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={this.props.flat.isLoading} onRefresh={this.props.flatInfoRequest} />
        }
      >
        <FlatCardCarousel
          title={'Best Picks'}
          flatData={this.props.flat.response}
          navigation={this.props.navigation}
          _renderItem={this._renderItem}
          carouselTitleStyle={styles.carouselTitleStyle}
          carouselContainerStyle={styles.bestPickContainerStyle}
          carouselImageStyle={styles.bestPickImageStyle}
        />

        <FlatCardCarousel
          title={'Trending'}
          flatData={this.props.flat.response}
          navigation={this.props.navigation}
          carouselContainerStyle={styles.carouselContainerStyle}
          carouselImageStyle={styles.trendingImageStyle}
        />

        <FlatCardCarousel
          title={'Categories'}
          horizontal={false}
          flatData={this.props.flat.response}
          navigation={this.props.navigation}
          _renderItem={this._renderItem}
          carouselTitleStyle={styles.carouselTitleStyle}
          carouselContainerStyle={styles.carouselContainerStyle}
          carouselImageStyle={styles.categoryImageStyle}
        />
      </ScrollView>
    );
  }
}

export default withConnect(Discover);
