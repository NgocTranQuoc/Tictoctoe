import React, {memo} from 'react';
import {Pressable, Image, StyleSheet, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;

const CellComponent = ({marker, onPress, index}) => {
  console.log('marker', marker);
  return (
    <Pressable
      style={styles.cell}
      onPress={() => onPress(index)}
      disabled={marker}>
      {marker === 'X' && (
        <Image
          source={require('../assets/icons/ic_X.png')}
          style={styles.icon}
        />
      )}
      {marker === 'O' && (
        <Image
          source={require('../assets/icons/ic_O.png')}
          style={styles.icon}
        />
      )}
    </Pressable>
  );
};

export default memo(CellComponent);

const styles = StyleSheet.create({
  cell: {
    width: windowWidth / 3.33,
    height: windowWidth / 3.33,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.5,
  },
  icon: {
    height: 62,
    width: 62,
  },
});
