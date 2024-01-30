import {View, Button} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Button
        title="Go to the crud"
        onPress={() => navigation.navigate('Create')}
      />
    </View>
  );
};

export default Home;
