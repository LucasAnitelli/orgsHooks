import React, { useReducer, useMemo } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Stars from '../../../components/Stars';

const distanceInMeters = (distance) => {
  return `${distance}m`
}

const Producer = ({ name, image, distance, star }) => {
  const [select, invertSelect] = useReducer((selected) => !selected, false)

  
  const distanceText = useMemo(() => 
    distanceInMeters(distance), 
  [distance]);

  return (
    <TouchableOpacity style={styles.card} onPress={invertSelect}>
      <Image source={image} accessibilityLabel={name} style={styles.image}/>
      <View style={styles.information}>
        <View>
          <Text style={styles.name}>{name}</Text>
          <Stars quantify={star} edit={select} big={select} />
        </View>
        <Text style={styles.distante}>{distanceText}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#F6F6F6',
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 6,
    flexDirection: 'row',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
  },
  image: {
    width: 48,
    height: 48,
    borderRadius: 6,
    marginVertical: 16,
    marginLeft: 16
  },
  information: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 8,
    marginVertical: 16,
    marginRight: 16
  },
  name: {
    fontSize: 14,
    lineHeight: 22,
    fontWeight: 'bold',
  },
  distante: {
    fontSize: 12,
    lineHeight: 19
  }
})

export default Producer;