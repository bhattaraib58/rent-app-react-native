import { FlatList, RefreshControl } from 'react-native';
import React, { useEffect } from 'react';
import firestore from '@react-native-firebase/firestore';

import FlatInfoCardView from '../flatInfoCardView/FlatInfoCardView';

export default function FlatListView(props) {
  // its like component did mount
  useEffect(() => {
    props.flatInfoRequest();
  }, []);

  return (
    <FlatList
      refreshControl={<RefreshControl refreshing={props.flat.isLoading} onRefresh={props.flatInfoRequest} />}
      data={props.flat.response}
      keyExtractor={flat => flat.id.toString()}
      renderItem={flat => <FlatInfoCardView flatInfo={flat.item} flatDetailNavigation={props.navigation} />}
      showsVerticalScrollIndicator={false}
    />
  );
}
