import Carousel from 'react-native-snap-carousel';

import React, { Component } from 'react'
import { View, Text, Dimensions } from 'react-native';
import CardViewFlatInfo from '../cardViewFlatInfo/cardViewFlatInfo';

export class FlatCarousel extends Component {

    constructor(props) {
        super(props)
        this.screenWidth = Math.round(Dimensions.get('window').width);
    }

    _renderItem({ item, index }) {
        return (<CardViewFlatInfo flatInfo={item} flatDetailNavigation={this.props.flatDetailNavigation} />);
    }

    render() {
        return (
            <Carousel
                ref={(c) => { this._carousel = c; }}
                data={this.props.flat}
                renderItem={this._renderItem.bind(this)}
                sliderWidth={this.screenWidth}
                itemWidth={this.screenWidth - 150} />
        )
    }
}

export default FlatCarousel
