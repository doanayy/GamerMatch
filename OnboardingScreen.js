import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { doc, updateDoc } from 'firebase/firestore';
import { auth, db } from './firebaseConfig';

export default function OnboardingScreen() {
  const navigation = useNavigation();

  const handleFinishOnboarding = async () => {
    const user = auth.currentUser;

    if (user) {
      try {
        const userRef = doc(db, 'users', user.uid);
        await updateDoc(userRef, {
          isOnboarded: true,
        });
        navigation.replace('Match'); // Artık onboarding bitti, kaydırma ekranına geçiyoruz
      } catch (error) {
        console.error('Onboarding update error:', error);
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to GamerMatch!</Text>
      <Text style={styles.text}>Let's set up your gaming preferences 🕹️</Text>
      {/* Buraya onboarding adımları, avatar seçimi vs. eklenebilir */}
      <Button title="Finish Onboarding" onPress={handleFinishOnboarding} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
});
