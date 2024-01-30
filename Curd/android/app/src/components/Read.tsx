import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {API_URL} from '../Constants/url';
import axios from 'axios';

export default function Read() {
  const [readvalue, setReadValue] = useState([]);

  const callGetAPI = async () => {
    const resp = await axios.get(API_URL);
    setReadValue(resp.data);
    // console.log(setReadValue);
  };

  useEffect(() => {
    callGetAPI();
  }, []);

  return (
    <View style={styles.table}>
      <View style={styles.row}>
        <Text style={styles.cell}>Name</Text>
        <Text style={styles.cell}>Age</Text>
      </View>
      <View style={styles.row}>
        {readvalue.map(data => (
          <View key={data}>
            <Text style={styles.cell}>{data.name}</Text>
            <Text style={styles.cell}>{data.age}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  table: {
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
    marginTop: 30,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  cell: {
    flex: 1,
    padding: 10,
    borderWidth: 1,
    width: 200,
    height: 200,
    textAlign: 'center',
    fontSize: 18,
    color: 'black',
    borderColor: 'black',
  },
});
