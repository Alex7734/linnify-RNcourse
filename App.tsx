/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 

import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import  MyButton  from './src/components/button';
import FancyButton from './src/components/fancyButton';
import {MyCard} from './src/components/MyCard';
import { Scroll }  from './src/components/MyScrollView';

function App(): JSX.Element {  
  return (
    <Scroll></Scroll>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
},
});



export default App;
*/

import React from 'react';
import { View, ScrollView, Text, Image, FlatList } from 'react-native';

const DATA = [
  {
    title: 'Fruits',
    data: [
      { id: '1', image: require('./src/assets/images/apple.png') },
      { id: '2', image: require('./src/assets/images/banana.png') },
      { id: '3', image: require('./src/assets/images/orange.png') },
    ],
  },
  {
    title: 'Vegetables',
    data: [
      { id: '4', image: require('./src/assets/images/carrot.png') },
      { id: '5', image: require('./src/assets/images/tomato.png') },
      { id: '6', image: require('./src/assets/images/potato.png') },
    ],
  },
];


const Item = ({ title, data }: any) => (
  <View style={{ marginBottom: 20 }}>
    <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 10 }}>{title}</Text>
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <Image source={item.image} style={{ width: 200, height: 200, marginRight: 10 }} />}
    />
  </View>
);

const App = () => {
  return (
    <ScrollView>
      {DATA.map((item) => (
        <Item title={item.title} data={item.data} key={item.title} />
      ))}
    </ScrollView>
  );
};

export default App;