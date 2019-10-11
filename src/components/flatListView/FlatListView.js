import {FlatList, RefreshControl} from 'react-native';
import React, {useEffect} from 'react';

import FlatInfoCardView from '../flatInfoCardView/FlatInfoCardView';
import styles from './styles';

export default function FlatListView(props) {
  //its like component did mount
  useEffect(() => {
    props.flatInfoRequest();
  }, []);

  return (
    <FlatList
      contentContainerStyle={styles.contentStyle}
      refreshControl={
        <RefreshControl
          refreshing={props.flat.isLoading}
          onRefresh={props.flatInfoRequest}
        />
      }
      data={props.flat.response}
      keyExtractor={flat => flat.id.toString()}
      renderItem={flat => (
        <FlatInfoCardView
          flatInfo={flat.item}
          flatDetailNavigation={props.navigation}
        />
      )}
      showsVerticalScrollIndicator={false}
    />
  );
}
