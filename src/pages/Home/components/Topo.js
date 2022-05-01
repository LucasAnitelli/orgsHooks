import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import logo from '../../../assets/logo.png';
import { loadTopo } from '../../../services/loadData'

const Topo = () => {
  const [top, setTop] = useState({});

  useEffect(() => {
    const result = loadTopo();
    if (result) {
      setTop(result);
    }
  }, [])

  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.image} />
      <Text style={styles.welcome}>{top.welcome}</Text>
      <Text style={styles.legend}>{top.legend}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F6F6F6',
    padding: 16,
  },
  image: {
    width: 70,
    height: 28,
  },
  welcome: {
    marginTop: 24,
    fontSize: 26,
    lineHeight: 42,
    fontWeight: 'bold',
    color: '#464646'
  },
  legend: {
    fontSize: 16,
    lineHeight: 26,
    color: '#A3A3A3'
  }
})

export default Topo;