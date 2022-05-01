import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Star from './Star';


const Stars = ({ quantify: quantifyOld, edit = false, big = false }) => {
  const [quantify, setQuantify] = useState(quantifyOld);

  const RenderStar = () => {
    const listStar = [];
    for (let i = 0; i < 5; i++) {
      listStar.push(
        <Star
          key={i}
          onPress={() => setQuantify(i + 1)}
          disabled={!edit}
          filled={i < quantify}
          big={big}
        />
      )
    }
    return listStar;
  }

  return (
    <View style={styles.stars}>
      <RenderStar />
    </View>
  );
}

const styles = StyleSheet.create({
  stars: {
    flexDirection: 'row'
  }
})

export default Stars;