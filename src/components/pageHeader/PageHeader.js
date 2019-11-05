import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';
import { companyLogo } from '../../constants/image';

/**
 * Header for screen pages.
 *
 * @param {*} { ShowCompanyLogo = false, headerInfo = null }.
 * @returns
 */
const PageHeader = ({ showCompanyLogo = false, headerInfo = null }) => {
  return (
    <View style={styles.container}>
      {showCompanyLogo ? <Image source={companyLogo} style={styles.logoStyle} /> : null}
      <Text style={styles.companyName}>{headerInfo}</Text>
    </View>
  );
};

export default PageHeader;
