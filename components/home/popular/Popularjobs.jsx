import React, { useState } from 'react'
import { View, Text,TouchableOpacity, FlatList, ActivityIndicator } from 'react-native'
import { useRouter } from 'expo-router';
import styles from './popularjobs.style'
import {COLORS, SIZES} from "../../../constants";
import PopularJobCard from "../../common/cards/popular/PopularJobCard";
import useFetch from "../../../hook/useFetch";


const Popularjobs = () => {
  const router = useRouter();
  // const Loading = false;
  // const error = false;

  const { data, loading, error } = useFetch("search", {
    query: "Python developer in Texas, USA",
    num_pages: "1",
    page: "1"
  });
  console.log("this is data coming from ", data);
  
  const [selectedjob, setSelectedJob] = useState();

  const handleonPress = () => {
    router.push(`/jobdetails/${item.job_id}`);
    setSelectedJob(item.job_id);

  }

 
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular Jobs</Text>
        <TouchableOpacity style={styles.headerBtn}>
          <Text>Show All</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
        {loading ? (
          <ActivityIndicator size="large" colors={COLORS.primary} />
        ) : error ? (
          <Text>Something went wrong !</Text>
        ) : (
          <FlatList
            data={data}
            renderItem={({ item }) => (
              <PopularJobCard
                item={item}
                handleonPress={handleonPress}
                selectedJob={selectedjob}
              />
            )}
            keyExtractor={(item) => item?.job_id}
            contentContainerStyle={{ columnGap: SIZES.medium }}
            showsHorizontalScrollIndicator={false}
            horizontal
          />
        )}
      </View>
    </View>
  );
}

export default Popularjobs