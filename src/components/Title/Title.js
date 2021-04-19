import React from "react";
import PropTypes from "prop-types";
import { View, Text, StyleSheet } from "react-native";

export const Title = (props) => {
  const { title, subtitle } = props;
  return (
    <View style={styles.heading}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    width: "100%",
    marginTop: 16,
  },
  title: {
    fontSize: 48,
    fontWeight: "bold",
    color: "black",
    textAlign: "left",
  },
  subtitle: {
    fontSize: 20,
    color: "black",
    textAlign: "left",
  },
});

Title.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string
};

export default Title;
