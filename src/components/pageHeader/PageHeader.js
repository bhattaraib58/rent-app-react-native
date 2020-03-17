import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, Image } from 'react-native';

import { companyLogo } from '../../constants/image';

import styles from './styles';

/**
 * Header for screen pages.
 *
 * @param {*} { ShowCompanyLogo = false, headerInfo = null }.
 * @returns
 */
function PageHeader({ showCompanyLogo = false, headerInfo = null }) {
  return (
    <View style={styles.container}>
      {showCompanyLogo ? <Image source={companyLogo} style={styles.logoStyle} /> : null}
      <Text style={styles.companyName}>{headerInfo}</Text>
    </View>
  );
}

PageHeader.propTypes = {
  showCompanyLogo: PropTypes.bool,
  headerInfo: PropTypes.string
};

export default PageHeader;
