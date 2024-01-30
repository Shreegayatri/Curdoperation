import React, {useEffect, useState} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {API_URL} from '../Constants/url';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

export default function Read() {
  const [readvalue, setReadValue] = useState([]);

  const navigate = useNavigate();
  const deleteCell = async (id: any) => {
    // console.log('delete');
    const respDel = await axios.delete(API_URL + id);
    console.log('delete+1', respDel);
    callGetAPI();
  };

  const UpdateCell = () => {
    navigate('/Update');
  };

  const callGetAPI = async () => {
    const resp = await axios.get(API_URL);
    setReadValue(resp.data);
  };

  useEffect(() => {
    callGetAPI();
  }, []);

  return (
    <View style={styles.table}>
      <View style={styles.row}>
        <Text style={styles.cell}>ID</Text>
        <Text style={styles.cell}>Name</Text>
        <Text style={styles.cell}>Age</Text>
        <Text style={styles.cell}>Delete</Text>
        <Text style={styles.cell}>Update</Text>
      </View>
      {readvalue &&
        readvalue.map((data: any) => (
          <View style={styles.row} key={data.id}>
            <Text style={styles.cell}>{data.id}</Text>
            <Text style={styles.cell}>{data.name}</Text>
            <Text style={styles.cell}>{data.age}</Text>
            <Text style={styles.cell}>
              <Button
                title="Delete"
                onPress={() => {
                  deleteCell(data.id);
                }}
              />
            </Text>
            <Text style={styles.cell}>
              <Button
                title="Update"
                onPress={() => {
                  UpdateCell();
                }}
              />
            </Text>
          </View>
        ))}
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
  },
  cell: {
    // flexDirection: 'row',
    flex: 1,
    padding: 10,
    borderWidth: 1,
    width: 200,
    // height: 200,
    textAlign: 'center',
    fontSize: 18,
    color: 'black',
    borderColor: 'black',
  },
});
