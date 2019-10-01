import React from 'react';
import { View, Text } from 'react-native';
import { CONTACT, BOOK } from '../../constants/text';
import { selectedTextColor } from '../../constants/color';
import styles from './styles';
import Button from '../button/Button';

export default function FlatOptions() {
    return (
        <View style={styles.container}>
            <Button
                title={CONTACT}  style={styles.normalButtonStyle} />
            <Button
                title={BOOK}  style={styles.buttonStyle} textStyle={styles.buttonTextStyle} />
        </View>
    )
}
