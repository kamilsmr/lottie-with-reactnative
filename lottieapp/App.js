import React from 'react';
import {Text, Flatlist, View} from 'react-native';

function Card() {
  return (
    <View
      style={{
        flex: 1,
        height: 280,
        backgroundColor: 'lightgray',
        marginHorizontal: 16,
        marginVertical: 8,
        borderRadius:12,
      }}>
      <Text>Card</Text>
    </View>
  );
}

export default function App() {
  return (
    <Flatlist
      data={[1, 2, 3, 4, 5]}
      renderItem={({item}) => <Card />}
      keyExtractor={item => item}
    />
  );
}
