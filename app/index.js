import { View, Text, ScrollView, SafeAreaView } from "react-native";
import React from 'react';
import { Router, Stack } from 'expo-router';
import {COLORS, SIZES, images, icons} from "../constants/index";
import {Nearbyjobs, Popularjobs, Welcome,ScreenHeaderBtn} from "../components"


const Home = () => {
  return (
    <SafeAreaView>
      <Stack.Screen
        options={{
          headerTitle: "",
          headerStyle: {
            backgroundColor: COLORS.lightWhite,
          },
          headerShadowVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%" />
          ),
          headerRight: () => (
            <ScreenHeaderBtn iconUrl={images.profile} dimension="100%" />
          ),
        }}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ flex: 1, padding: SIZES.medium }}>
          <Welcome/>
          <Popularjobs />
          <Nearbyjobs />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Home