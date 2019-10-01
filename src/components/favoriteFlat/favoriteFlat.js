import React, { Component } from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';
import Snackbar from 'react-native-snackbar';


export class FavoriteFlat extends Component {

    constructor(props) {
        super(props)

        this.state = {
            added: false,
        }

        this.favoriteIcon = {
            notAdded: "ios-star-outline",
            added: "ios-star"
        }

        this.setFavouriteAdded = this.setFavouriteAdded.bind(this);
        this.addFavorite = this.addFavorite.bind(this);
    }

    setFavouriteAdded() {
        this.setState({
            added: !this.state.added
        })
    }

    addFavorite() {
        this.setFavouriteAdded();

        Snackbar.show({
            title: 'Added To Favorites',
            color:'white',
            duration: Snackbar.LENGTH_SHORT,
            action: {
                title: 'UNDO',
                color: 'green',
                onPress: () => { this.setFavouriteAdded() },
            }
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <Icon name={this.state.added ? this.favoriteIcon.added : this.favoriteIcon.notAdded}
                    style={styles.iconStyle}
                    onPress={
                        () => {
                            // this.props.addToFavorite()
                            this.addFavorite()
                        }} />
            </View>
        )
    }
}

export default FavoriteFlat

