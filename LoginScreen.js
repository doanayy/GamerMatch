import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // giriş işlemi yapılacak
    console.log('Giriş yapıldı:', email);
  };

  return (
    <View style={{ padding: 20 }}>
      <Text>Email</Text>
      <TextInput value={email} onChangeText={setEmail} placeholder="Email" />
      <Text>Password</Text>
      <TextInput value={password} onChangeText={setPassword} placeholder="Password" secureTextEntry />
      <Button title="Login" onPress={handleLogin} />
      <Button title="Sign Up" onPress={() => navigation.navigate('SignUp')} />
    </View>
  );
}
