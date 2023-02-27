import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useTheme } from "react-native-paper";
import Categories from "./screens/Categories";

// import CustomAppBar from "./CustomAppbar";

const AppEntry = () => {
  const theme = useTheme();
  // **Styles
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.surface,
      alignItems: "center",
      padding: 10,
    },
  });

  return <View style={styles.container}></View>;
};

export default AppEntry;
