import React, {useCallback, useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Pressable,
  Image,
  Alert,
} from 'react-native';

import Cell from './src/components/Cell';

const App = () => {
  const [active_player, setActive_player] = useState('X');
  const [markers, setMarkers] = useState([
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ]);

  const resetMarkers = () => {
    setMarkers([null, null, null, null, null, null, null, null, null]);
  };

  const marPosition = useCallback(
    position => {
      let temp = [...markers];
      temp[position] = active_player;
      setMarkers(temp);
      if (active_player === 'X') {
        setActive_player('O');
      } else {
        setActive_player('X');
      }
    },
    [active_player, markers],
  );

  const calculateWinner = squares => {
    const line = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < line.length; i++) {
      const [a, b, c] = line[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  };

  useEffect(() => {
    const winner = calculateWinner(markers);
    if (winner === 'X') {
      Alert.alert('Winner', 'Player X Won!', [
        {text: 'OK', onPress: () => resetMarkers()},
      ]);
    } else if (winner === 'O') {
      Alert.alert('Winner', 'Player Y Won!', [
        {text: 'OK', onPress: () => resetMarkers()},
      ]);
    }
  }, [markers]);

  return (
    <SafeAreaView style={styles.body}>
      <View
        style={[
          styles.playerInfo,
          {backgroundColor: active_player === 'X' ? '#007FF4' : '#F40075'},
        ]}>
        <Text style={styles.playerTxt}>Player: {active_player}</Text>
      </View>
      <View style={styles.mainContainer}>
        <Cell marker={markers[0]} onPress={marPosition} index={0} />
        <Cell marker={markers[1]} onPress={marPosition} index={1} />
        <Cell marker={markers[2]} onPress={marPosition} index={2} />
        <Cell marker={markers[3]} onPress={marPosition} index={3} />
        <Cell marker={markers[4]} onPress={marPosition} index={4} />
        <Cell marker={markers[5]} onPress={marPosition} index={5} />
        <Cell marker={markers[6]} onPress={marPosition} index={6} />
        <Cell marker={markers[7]} onPress={marPosition} index={7} />
        <Cell marker={markers[8]} onPress={marPosition} index={8} />
      </View>
      <Pressable style={styles.cancelBtn} onPress={resetMarkers}>
        <Image
          source={require('./src/assets/icons/ic_reset.png')}
          style={styles.icon}
        />
      </Pressable>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#fff',
  },
  playerInfo: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
    paddingVertical: 20,
    marginTop: 30,
  },
  playerTxt: {
    fontSize: 20,
    fontWeight: '700',
    letterSpacing: 1.2,
    color: '#fffÏ',
  },
  mainContainer: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 50,
  },
  icon: {
    height: 62,
    width: 62,
  },
  cancelBtn: {
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
});
