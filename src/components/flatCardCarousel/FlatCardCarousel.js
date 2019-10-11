import React, {Component} from 'react';
import {FlatList} from 'react-native';
import FlatInfoCardView from '../flatInfoCardView/FlatInfoCardView';

/**
 *
 * @props {horizontal - boolean}, {_renderItem(flatInfo) - renderFunction } , {data -  flatInfo data array}
 * @export
 * @class FlatCardCarousel
 * @extends {Component}
 */
export default class FlatCardCarousel extends Component {
  _renderItem({item, index}) {
    return (
      <FlatInfoCardView
        flatInfo={item}
        flatDetailNavigation={this.props.flatDetailNavigation}
      />
    );
  }

  render() {
    return (
      <FlatList
        horizontal={this.props.horizontal}
        data={this.props.data}
        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        renderItem={flatInfo =>
          this.props._renderItem
            ? this.props._renderItem(flatInfo)
            : this._renderItem(flatInfo)
        }
      />
    );
  }
}
