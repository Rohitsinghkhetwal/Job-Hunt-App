import React from 'react'
import { View, Text, TouchableOpacity } from "react-native";

import styles from './popularjobcard.style'

const PopularJobCard = ({ item, handleonPress, selectedJob }) => {

  console.log("This is inside Popular card", item, handleonPress, selectedJob);
  return (
    <TouchableOpacity style={styles.container(selectedJob, item)}
    onPress={() => handleonPress(item)}>

      <TouchableOpacity style={styles.logoContainer(selectedJob, item)}>
        <Image 
        source={{uri:item.employer_logo}}
        resizeMode="contain"
        style={styles.logoImage}
        />
        <Text style={styles.companyName}>{item.employer_name}</Text>


      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default PopularJobCard