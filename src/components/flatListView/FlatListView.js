import { FlatList, RefreshControl } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import FlatInfoCardView from '../flatInfoCardView/FlatInfoCardView';

/**
 * Flat List View.
 *
 * @param {*} Props { flat, flatInfoRequest, navigation }.
 * @returns
 */
function FlatListView({ flat, flatInfoRequest, navigation }) {
  // its like component did mount
  useEffect(() => {
    flatInfoRequest();
  }, []);

  return (
    <FlatList
      refreshControl={<RefreshControl refreshing={flat.isLoading} onRefresh={flatInfoRequest} />}
      data={flat.response}
      keyExtractor={flat => flat.id.toString()}
      renderItem={flat => <FlatInfoCardView flatInfo={flat.item} flatDetailNavigation={navigation} />}
      showsVerticalScrollIndicator={false}
    />
  );
}

FlatListView.propTypes = {
  flat: PropTypes.object,
  flatInfoRequest: PropTypes.func,
  navigation: PropTypes.object
};

export default FlatListView;
