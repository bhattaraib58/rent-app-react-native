import React from 'react';
import { View, Text, Button } from 'react-native';
import { CONTACT, BOOK } from '../../constants/text';
import { selectedTextColor } from '../../constants/color';
import styles from './styles';

export default function FlatOptions() {
    return (
        <View style={styles.container}>
            <Button style={styles.buttonStyle}
                title={CONTACT}
                color="white"
                type="outline"
                raised={true}
                buttonStyle={styles.buttonStyle}
                containerStyle={styles.buttonStyle} />
            <Button style={styles.buttonStyle}
                title={BOOK}
                color={selectedTextColor}
                type="solid"
                raised={true}
                buttonStyle={styles.buttonStyle}
                containerStyle={styles.buttonStyle} />
        </View>
    )
}
