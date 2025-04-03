import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { registerRootComponent } from 'expo';
import { auth, db } from './firebaseConfig';
import { doc, getDoc } from 'firebase/firestore';

// Ekranlar
import LoginScreen from './LoginScreen';
import SignUpScreen from './SignUpScreen';
import MatchScreen from './MatchScreen';
import OnboardingScreen from './OnboardingScreen';

const Stack = createNativeStackNavigator();

function App() {
  const [user, setUser] = useState(null);
  const [isOnboarded, setIsOnboarded] = useState(null); // null = loading

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      setUser(user);
      if (user) {
        const userDoc = await getDoc(doc(db, 'users', user.uid));
        const data = userDoc.exists() ? userDoc.data() : {};
        setIsOnboarded(data.isOnboarded || false);
      } else {
        setIsOnboarded(null); // logout olunca sıfırla
      }
    });

    return unsubscribe;
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {user ? (
          isOnboarded === false ? (
            <Stack.Screen name="Onboarding" component={OnboardingScreen} />
          ) : (
            <Stack.Screen name="Match" component={MatchScreen} />
          )
        ) : (
          <>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="SignUp" component={SignUpScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

registerRootComponent(App);
