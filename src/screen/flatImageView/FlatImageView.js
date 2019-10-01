import React, { Component } from 'react';
import { View, Text, Dimensions, Image, ListView, FlatList } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import styles from './styles';

export class FlatImageView extends Component {

    constructor(props) {
        super(props)

        this.state = {
            currentIndex: 0
        };

        this.flatImages = this.props.navigation.getParam('flatImages');
        this.screenWidth = Math.round(Dimensions.get('window').width);
        this._onViewableItemsChanged = this._onViewableItemsChanged.bind(this);
        this.slideIndicatorIcon = this.slideIndicatorIcon.bind(this);
    }

    _renderItem({ item }) {
        return (<Image source={{ uri: item }} style={styles.image} />);
    }

    _onViewableItemsChanged({ viewableItems, changed }) {
        if (viewableItems[0].isViewable) {
            this.setState({
                currentIndex: viewableItems[0].key
            });
        }
    }

    _viewabilityConfig = {
        itemVisiblePercentThreshold: 50
    }

    slideIndicatorIcon(index ) {
        let activeIndexIndicator = index == this.state.currentIndex ? styles.activeIndicator : {};
        return <View style={[styles.indicator,activeIndexIndicator]} key={index}></View>
    }

    slideIndicator() {
        return (<View style={styles.slideIndicatorContainer}>
            {
                this.flatImages.map((item, index) => this.slideIndicatorIcon(index))
            }
        </View>);
    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    onViewableItemsChanged={this._onViewableItemsChanged}
                    viewabilityConfig={this._viewabilityConfig}
                    horizontal={true}
                    data={this.flatImages}
                    keyExtractor={(item, index) => index.toString()}
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                    renderItem={(image) => this._renderItem(image)}
                />

                {this.slideIndicator()}
            </View>
        )
    }
}

export default FlatImageView
