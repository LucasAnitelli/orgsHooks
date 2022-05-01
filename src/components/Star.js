import React from 'react';
import { Image, TouchableOpacity, StyleSheet } from 'react-native';
import star from '../assets/estrela.png';
import starGray from '../assets/estrelaCinza.png';

const Star = ({ onPress, disabled = true, filled, big = false }) => {
  const styles = stylesFunction(big)
  const getImage = () => {
    if (filled) {
      return star;
    }
    return starGray; 
  }

  return <TouchableOpacity onPress={onPress} disabled={disabled}>
  <Image source={getImage()} style={styles.star}/>
</TouchableOpacity>;
}

const stylesFunction = (big) => StyleSheet.create({
  star: {
    width: big ? 36 : 12,
    height: big ? 36 : 12,
    marginRight: 2
  }
})

export default Star;