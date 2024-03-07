import React from 'react'
import { View, Text,TouchableOpacity, FlatList, ActivityIndicator } from 'react-native'
import { useRouter } from 'expo-router';

import styles from './popularjobs.style'
import {COLORS, SIZES} from "../../../constants";
import PopularJobCard from "../../common/cards/popular/PopularJobCard";

const Popularjobs = () => {
  const Loading = false;
  const error = false;
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular Jobs</Text>
        <TouchableOpacity style={styles.headerBtn}>
          <Text>Show All</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
       {Loading ? (
        <ActivityIndicator size="large" colors={COLORS.primary}/>
       ): error ? (
        <Text>Something went wrong !</Text>
       ) : (
        <FlatList
        data={[2,3,4,5,6,8,9]}
        renderItem={({ item }) => (
          <PopularJobCard item={item}/>
        )}
        keyExtractor={item => item?._id}
        contentContainerStyle={{columnGap: SIZES.medium }}
        showsHorizontalScrollIndicator={false}
        horizontal
        />
       )
      }
      </View>
    </View>
  );
}

export default Popularjobs