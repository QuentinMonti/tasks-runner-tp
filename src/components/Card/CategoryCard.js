import React from "react";
import PropTypes from "prop-types";
import { View, Text, StyleSheet, Image } from "react-native";

export const CategoryCard = (props) => {
  const { name, infos } = props;
  return (
    <View style={styles.main_container}>
      <Image
        style={styles.avatar}
        source={require("../../../assets/users.png")}
      />
      <Text style={styles.textSearched}>{name}</Text>
      <Text style={styles.infos}>{infos}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  main_container: {
    backgroundColor: "white",
    width: "100%",
    height: 256,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 6,
    marginTop: 16,
  },
  avatar: {
    height: 64,
    width: 64,
    borderRadius: "50%"
  },
  textSearched: {
    marginTop: 16,
    fontSize: 24,
    color: "black",
  },
  infos: {
    marginTop: 16,
    fontSize: 16,
  },
});

CategoryCard.propTypes = {
  title: PropTypes.string,
};

export default CategoryCard