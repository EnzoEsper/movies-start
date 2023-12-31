import { View, Text } from 'react-native';
import React from 'react';
import { Stack } from 'expo-router';
import { colorTokens } from '@tamagui/themes';
import { DrawerToggleButton } from '@react-navigation/drawer';
import { useTheme } from 'tamagui';

export default function Layout() {
  const theme = useTheme();

  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.blue7.get(),
        },
        headerTintColor: '#fff',
      }}>
      <Stack.Screen
        name="index"
        options={{
          title: 'Moviestart',
          headerLeft: () => <DrawerToggleButton tintColor="#fff" />,
        }}
      />
      <Stack.Screen
        name="movie/[id]"
        options={{
          title: '',
        }}
      />
    </Stack>
  );
}
