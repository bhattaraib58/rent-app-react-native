import React from 'react';
import styles from './style';
import Tag from '../Tag/tag';
import { View } from 'react-native';

export default function TagsContainer({ tags }) {
    return (
        <View style={styles.tagsContainer}>
            {
                tags.map((tag, key) => {
                    <Tag {...tag} />
                })
            }
        </View>
    )
}
