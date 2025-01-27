import React from 'react';
import { useState } from 'react';
import {StyleSheet, TextInput} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const TextInputExample = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [address, setAddress] = useState('');
  const [school, setSchool] = useState('');
  const [course, setCourse] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  
  
  const handleSubmit = () => {
    console.log({
      name,
      age,
      address,
      school,
      course,
      email,
      contact
    })
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <TextInput
          style={styles.input}
          onChangeText={setName}
          value={name}
          placeholder="Name: "
          keyboardType="text"
        />
        <TextInput
          style={styles.input}
          onChangeText={setAge}
          value={age}
          placeholder="Age: "
          keyboardType="text"
        />
        <TextInput
          style={styles.input}
          onChangeText={setAddress}
          value={address}
          placeholder="Address: "
          keyboardType="text"
        />
        <TextInput
          style={styles.input}
          onChangeText={setSchool}
          value={school}
          placeholder="School: "
          keyboardType="text"
        />
        <TextInput
          style={styles.input}
          onChangeText={setCourse}
          value={course}
          placeholder="Course: "
          keyboardType="text"
        />
        <TextInput
          style={styles.input}
          onChangeText={setEmail}
          value={email}
          placeholder="Email: "
          keyboardType="text"
        />        
  
        <TextInput
          style={styles.input}
          onChangeText={setContact}
          value={setContact}
          placeholder="Contact: "
          keyboardType="phone-pad"
        />

      </SafeAreaView>
    </SafeAreaProvider>
  );
};


const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,

  },
});

export default TextInputExample;