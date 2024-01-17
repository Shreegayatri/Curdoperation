import {View, Text, Button} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Button
        title="Go to the crud"
        onPress={() => navigation.navigate('Crud')}
      />
    </View>
  );
};

export default Home;
