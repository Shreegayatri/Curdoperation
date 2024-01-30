import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  Button,
  // SafeAreaView,
} from 'react-native';
import React, {useState} from 'react';
import {API_URL} from '../Constants/url';
import axios from 'axios';
import {useNavigation} from '@react-navigation/native';

const Create = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  console.log('->', name);
  const submitPress = async () => {
    await axios.post(API_URL, {
      name,
      age,
    });
  };
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.textContainer}>Add Student Details</Text>

      <View style={styles.formDesign}>
        <TextInput
          style={styles.inputField}
          placeholderTextColor={'#000'}
          placeholder="Enter the name"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={styles.ageField}
          placeholderTextColor={'#000'}
          placeholder="Enter the age"
          value={age}
          onChangeText={setAge}
          keyboardType="numeric"
        />
        <View style={styles.outBtn}>
          <Pressable style={styles.btnCreate} onPress={submitPress}>
            <Text style={styles.textDesign}>Add +</Text>
          </Pressable>
        </View>
        <View>
          <Button
            title="Go to the crud"
            onPress={() => navigation.navigate('Read')}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 20,
  },
  textContainer: {
    color: '#000',
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputField: {
    borderWidth: 2,
    color: '#000',
    fontSize: 15,
  },
  ageField: {
    paddingTop: 10,
    borderWidth: 2,
    color: '#000',
    fontSize: 15,
  },
  formDesign: {
    paddingTop: 20,
  },
  btnCreate: {
    padding: 10,
    width: 100,
    borderColor: '#000',
    borderWidth: 1,
    backgroundColor: '#141754',
  },
  outBtn: {
    paddingTop: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textDesign: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default Create;
