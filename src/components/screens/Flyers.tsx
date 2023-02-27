import React, { useState } from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import fetchFunction from "../../api/fetch";
import DisplayCard from "../itemsDisplay/DisplayCard";
import { useTheme } from "react-native-paper";
import { Button } from "react-native-paper";

const Flyers = ({ route, navigation }: any) => {
  const [flyerList, setFlyerList] = useState([]);
  const [load, setLoad] = useState(false);
  const theme = useTheme();
  const { categorie } = route.params;
  const [width, setWidth] = useState(160);
  const [icon, setIcon] = useState("format-list-bulleted");

  // navigation.setOptions({ title: categorie.name.toUpperCase() });

  if (!load) {
    // Consumer
    fetchFunction<any>(
      `https://i47zwcnf.directus.app/items/flyer?filter[orgnization][_eq]=${categorie.id}&fields=orgnization.name,orgnization.profile_picture,*`
    )
      .then((response) => {
        setFlyerList(response.data);
      })
      .catch((error) => {
        /* show error message */
      });
    setLoad(!load);
  }

  const mapFlyer = () => {
    if (flyerList.length > 0) {
      return flyerList.map((flyer: any) => {
        return (
          // <View></View>
          <DisplayCard
            key={`flyer${flyer.id}`}
            item={flyer}
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

  return (
    <View style={styles.container}>
      <View style={styles.littleRow}>
        <Text style={styles.text}>FLYERS</Text>
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
        {mapFlyer()}
      </ScrollView>
    </View>
  );
};

export default Flyers;
