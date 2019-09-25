import React from 'react';
import styles from './style';
import {Text} from 'react-native';

export default function Tag(tag,key) {
    console.log(tag,key);
    return (
        <Text style={styles.tags}>{tag}</Text>
    )
}
