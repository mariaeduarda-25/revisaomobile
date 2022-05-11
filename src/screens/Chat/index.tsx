import React from "react";
import {
  FlatList,
  SafeAreaView,
  TextInput,
  View,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import styles from "./styles";
import data from "../../services/data";
import Card from "../../components/Card";

export default function Chat() {
  const renderItem = ({ item }: any) => <Card data={item} />;
  return (
      <SafeAreaView style={styles.container}>
        <View style={styles.rowSearch}>
          <FontAwesome5 name="search" style={styles.icon} />
          <TextInput placeholder="Pesquisar chat"  style={styles.input}/>
        </View>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => String(item.id)}
          style = {styles.list}
        />
      </SafeAreaView>
  
  );
}