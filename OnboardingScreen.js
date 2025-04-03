import React from 'react';
import { View, Text, Button } from 'react-native';
import { doc, setDoc } from 'firebase/firestore';
import { db, auth } from './firebaseConfig';

const OnboardingScreen = ({ navigation }) => {
  const completeOnboarding = async () => {
    const uid = auth.currentUser.uid;

    // Kullanıcının Firestore kaydına isOnboarded: true ekliyoruz
    await setDoc(doc(db, 'users', uid), {
      isOnboarded: true
    }, { merge: true });

    // Onboarding tamamlandıktan sonra MatchScreen'e yönlendirme
    navigation.replace('Match');
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Welcome to GamerMatch!</Text>
      <Text>Buraya onboarding adımlarını ekleyeceğiz.</Text>
      <Button title="Onboarding Tamamla" onPress={completeOnboarding} />
    </View>
  );
};

export default OnboardingScreen;
