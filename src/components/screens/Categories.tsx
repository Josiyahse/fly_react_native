import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  BackHandler,
  Alert,
} from "react-native";
import fetchFunction from "../../api/fetch";
import DisplayCard from "../itemsDisplay/DisplayCard";
import { useTheme } from "react-native-paper";
import { Button } from "react-native-paper";

const Categories = ({ navigation }: any) => {
  const [categoriesList, setCategoriesList] = useState([]);
  const [load, setLoad] = useState(false);
  const theme = useTheme();
  const [width, setWidth] = useState(160);
  const [icon, setIcon] = useState("format-list-bulleted");

  if (!load) {
    // Consumer
    fetchFunction<any>("https://i47zwcnf.directus.app/items/category")
      .then((response) => {
        setCategoriesList(response.data);
      })
      .catch((error) => {
        /* show error message */
      });
    setLoad(!load);
  }

  const mapCategories = () => {
    if (categoriesList.length > 0) {
      return categoriesList.map((categorie: any) => {
        return (
          <DisplayCard
            key={`categorie${categorie.id}`}
            item={categorie}
            navigation={navigation}
            width={width}
          />
        );
      });
    } else {
      return null;
    }
  };

  // * styles
  const styles = StyleSheet.create({
    containerRow: {
      // flex: 2,
      flexWrap: "wrap",
      // rowGap: 60,
      flexDirection: "row",
      justifyContent: "flex-start",
      height: "100%",
      width: "100%",
    },
    scroll: {
      // backgroundColor: "pink",
      flexWrap: "wrap",
      flexDirection: "row",
      justifyContent: "flex-start",
      marginVertical: 10,
      marginBottom: 60,
      paddingBottom: 10,
    },
    container: {
      flex: 1,
      width: "100%",
      backgroundColor: theme.colors.primaryContainer,
    },
    text: {
      fontSize: 20,
      paddingTop: 3,
      color: theme.colors.onPrimaryContainer,
    },
    littleRow: {
      height: 60,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      paddingLeft: "4%",
      paddingRight: "4%",
    },
  });

  useEffect(() => {
    const backAction = () => {
      Alert.alert("Un instant!", "Voulez vous quitter l'application 🥲?", [
        {
          text: "Cancel",
          onPress: () => null,
          style: "cancel",
        },
        { text: "YES", onPress: () => BackHandler.exitApp() },
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.littleRow}>
        <Text style={styles.text}>CATEGORIES</Text>
        <Button
          icon={icon}
          compact={true}
          textColor={theme.colors.onPrimaryContainer}
          onPress={() => {
            if (width === 160) {
              setWidth(360);
              setIcon("view-grid");
            } else {
              setWidth(160);
              setIcon("format-list-bulleted");
            }
          }}
        />
      </View>
      <ScrollView contentContainerStyle={styles.scroll}>
        {mapCategories()}
      </ScrollView>
    </View>
  );
};

export default Categories;
