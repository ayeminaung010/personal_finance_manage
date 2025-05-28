import { Ionicons } from '@expo/vector-icons'
import { Tabs } from 'expo-router'
import React from 'react'

const TabLayout = () => {
  return (
    <Tabs
        screenOptions={{
        tabBarActiveTintColor: '#000',
        tabBarInactiveTintColor: '#999',
        tabBarStyle: {
          backgroundColor: '#fff',
        },
        headerShown: false,
      }}
    >
        <Tabs.Screen name="home" 
        options={{
            title: 'Home',
            tabBarIcon: ({ color }) => <Ionicons name="home" size={28} color={color} />,
          }}
        />
        <Tabs.Screen name="insights" options={{
          title: 'Insights',
          tabBarIcon: ({ color }) => <Ionicons name="analytics" size={28} color={color} />,
        }} />
        <Tabs.Screen name="add" options={{
          title: '',
          tabBarIcon: ({ color }) => <Ionicons name="add-circle" size={28} color={color} />,
        }} />
        <Tabs.Screen name="budget" options={{
          title: 'Budget',
          tabBarIcon: ({ color }) => <Ionicons name="wallet" size={28} color={color} />,
        }} />
        <Tabs.Screen name="setting" options={{
          title: 'Settings',
          tabBarIcon: ({ color }) => <Ionicons name="settings" size={28} color={color} />,
        }} />
    </Tabs>
  )
}

export default TabLayout