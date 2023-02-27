import * as React from "react";
import { Avatar, Button, Card, Text } from "react-native-paper";
import { View, StyleSheet } from "react-native";
import { useTheme } from "react-native-paper";
import { LinearGradient } from "expo-linear-gradient";

const DisplayCard = ({ item, width, navigation }: any) => {
  const theme = useTheme();

  // * styles
  const styles = StyleSheet.create({
    containerCard: {
      width: width,
      height: 160,
      dropShadow: 0,
      // marginBottom: 30,
      // padding: 10,
      // margin: 10,
    },
    cardCover: {
      width: width,
      height: 160,
    },
    cardContent: {
      bottom: 59,
      // ²
      // backgroundColor: "rgba(0, 71, 133, 0.8)",
      borderBottomLeftRadius: 15,
      borderBottomRightRadius: 15,
      paddingLeft: 0,
      marginLeft: 0,

      // width: "110%",
    },
    text: {
      color: theme.colors.onPrimaryContainer,
    },
    gradient: {
      paddingTop: 20,
      paddingLeft: 5,
      width: width,
      height: 60,
      borderBottomLeftRadius: 15,
      borderBottomRightRadius: 15,
    },
  });
  const navigate = () => {
    if (item.type === "category") {
      navigation.navigate("Flyers", { categorie: item });
    } else if (item.type === "flyer") {
      navigation.navigate("Flyer", { flyer: item });
    }
  };

  return (
    <View style={{ padding: "4%" }}>
      <Card
        style={styles.containerCard}
        onPress={() => {
          navigate();
        }}
      >
        <Card.Cover
          style={styles.cardCover}
          source={{
            uri:
              item.type == "flyer"
                ? `https://i47zwcnf.directus.app/assets/${item.orgnization.profile_picture}`
                : `https://i47zwcnf.directus.app/assets/${item.thumbnail}`,
          }}
        />
        <Card.Content style={styles.cardContent}>
          <LinearGradient
            style={styles.gradient}
            colors={["rgba(17, 45, 78,1)", "transparent"]}
            start={{ x: 1, y: 1 }}
            end={{ x: 1, y: 0.01 }}
          >
            <Text style={styles.text} variant="titleLarge">
              {item.type == "flyer"
                ? item.orgnization.name.toUpperCase()
                : item.name.toUpperCase()}
            </Text>
          </LinearGradient>
        </Card.Content>
      </Card>
    </View>
  );
};

export default DisplayCard;
