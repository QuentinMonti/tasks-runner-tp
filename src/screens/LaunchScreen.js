import React, { useLayoutEffect, useState, useEffect } from "react";
import { SafeAreaView } from "react-native";
import { View, StyleSheet, Text, TextInput } from "react-native";
import CategoryCard from "../components/Card/CategoryCard";
import Title from "../components/Title/Title"
import { getUsers } from "../services/jsonplaceholder"

export const LaunchScreen = (props) => {
  const { route, navigation } = props;
  const  [users, setUsers]  = useState(null);

  useLayoutEffect(() => {
    navigation.setOptions({
      title:
        route && route.params && route.params.title
          ? route.params.title
          : "Liste des utilisateurs",
    });
  });

  useEffect(() => {
    getUsers().then(setUsers)
  }, []);

  if (!users) {
    return null;
  }

  function handlePress() {
    if (users) {
      Linking.canOpenURL(users.id).then((supported) => {
        if (supported) {
          Linking.openURL(users.id);
        } else {
          console.log("Don't know how to open URI: " + users.id);
        }
      });
    }
  }

  function renderUsers() {
    if (users.length > 0) {
      return (
        <SafeAreaView style={styles.cards_container}>
          {users.map((user, index) => (
            <CategoryCard key={index} name={user.name} infos={user.address.city} />
          ))}
        </SafeAreaView>
      );
    } else {
      return (
        <Text style={styles.not_found}>No user have been found :(</Text>
      );
    }
  }

  const filterUsers = (text) => {
    console.log(text)
  }

  return (
    <SafeAreaView>
      <View style={styles.main_container}>
        <Title title="Task Runner" subtitle="Liste des utilisateurs"></Title>
        <TextInput
          style={styles.search_bar}
          placeholder="Search users"
          onChangeText={filterUsers}
        />
        {renderUsers()}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "column",
    paddingVertical: 50,
    paddingHorizontal: 20,
    overflow: "scroll",
  },
  cards_container: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    width: "100%",
  },
  not_found: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    width: "100%",
    marginTop: 16,
  },
  search_bar: {
    height: 50,
    margin: 12,
    padding: 16,
    backgroundColor: 'white',
    borderRadius: 6,
    width: "100%"
  },
});
