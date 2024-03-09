import React from 'react'
import { View, Text, TouchableOpacity } from "react-native";

import styles from './popularjobcard.style'

const PopularJobCard = ({ item, handleonPress, selectedJob }) => {

  console.log("This is inside Popular card", item, handleonPress, selectedJob);
  return (
    <TouchableOpacity>
      <Text>PopularJobCard</Text>
    </TouchableOpacity>
  );
};

export default PopularJobCard