import React, { useEffect, useState } from 'react';
import { Text, FlatList, StyleSheet } from 'react-native';
import useProducers from '../../../hooks/useProducers';

import Producer from './Producer';

const Producers = ({ top: Top }) => {
  const [title, producers] = useProducers()
  const Header = () => {
    return (
      <>
        <Top />
        <Text style={styles.title}>{title}</Text>
      </>
    )
  }

  return (
    <FlatList
      data={producers}
      keyExtractor={(item) => item.name}
      renderItem={({ item }) => <Producer {...item} />}
      ListHeaderComponent={Header}
    />
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    lineHeight: 32,
    marginHorizontal: 16,
    marginTop: 16,
    fontWeight: 'bold',
    color: '#464646'
  }
})

export default Producers;