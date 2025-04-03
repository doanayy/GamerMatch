import MatchScreen from './MatchScreen';
import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { onAuthStateChanged } from 'firebase/auth';
import { auth, db } from './firebaseConfig';
import { doc, getDoc } from 'firebase/firestore';
import { registerRootComponent } from 'expo';

// Ekranlar
import LoginScreen from './LoginScreen';
import SignUpScreen from './SignUpScreen';
import MatchScreen from './MatchScreen';
import OnboardingScreen from './OnboardingScreen';

const Stack = createStackNavigator();

function App() {
  const [user, setUser] = useState(null);
  const [isOnboarded, setIsOnboarded] = useState(null); // null = loading

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setUser(user);
      if (user) {
        const userDoc = await getDoc(doc(db, 'users', user.uid));
        const data = userDoc.exists() ? userDoc.data() : {};
        setIsOnboarded(data?.isOnboarded || false);
      } else {
        setIsOnboarded(null); // Kullanıcı çıkış yapınca sıfırla
      }
    });

    return unsubscribe;
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {!user ? (
          <>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Signup" component={SignUpScreen} />
          </>
        ) : isOnboarded === false ? (
          <Stack.Screen name="Onboarding" component={OnboardingScreen} />
        ) : (
          <Stack.Screen name="Match" component={MatchScreen} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

registerRootComponent(App);
