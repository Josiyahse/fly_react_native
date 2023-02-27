// import React, { useState } from "react";
import { View, StyleSheet, ImageBackground, Text, Linking } from "react-native";
import { useTheme } from "react-native-paper";
import { Button } from "react-native-paper";

const FullscreenFlyer = ({ navigation, route }: any) => {
  const { flyer } = route.params;
  const theme = useTheme();

  const links = () => {
    return (
      <View style={styles.littleRow}>
        {flyer.web ? (
          <Button
            icon="web"
            onPress={() => Linking.openURL(flyer.web)}
            style={styles.button}
            {...buttonProps()}
          >
            Site Web
          </Button>
        ) : null}
        {flyer.facebook ? (
          <Button
            icon="facebook"
            onPress={() => Linking.openURL(flyer.facebook)}
            style={styles.button}
            {...buttonProps()}
          >
            Facebook
          </Button>
        ) : null}
        {flyer.twitter ? (
          <Button
            icon="twitter"
            onPress={() => Linking.openURL(flyer.twitter)}
            style={styles.button}
            {...buttonProps()}
          >
            Twitter
          </Button>
        ) : null}
        {flyer.instagram ? (
          <Button
            icon="instagram"
            onPress={() => Linking.openURL(flyer.instagram)}
            style={styles.button}
            {...buttonProps()}
          >
            Instagram
          </Button>
        ) : null}
      </View>
    );
  };

  const buttonProps = () => {
    return {
      buttonColor: theme.colors.primary,
      variant: "contained-tonal",
      textColor: theme.colors.onPrimary,
    };
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      // paddingTop: 30,
      backgroundColor: theme.colors.primaryContainer,
    },
    container2: {
      flex: 1,
      backgroundColor: theme.colors.primaryContainer,
    },
    image: {
      flex: 3,
      justifyContent: "center",
      zIndex: 10,
    },
    text: {
      paddingTop: 10,
      paddingBottom: 20,
      fontSize: 20,
      lineHeight: 30,
      fontWeight: "bold",
      textAlign: "center",
      color: theme.colors.onPrimaryContainer,
    },
    frame: {
      flex: 2,
      backgroundColor: "rgba(0,0,0,0.1)",

      padding: 10,
    },
    littleRow: {
      flex: 1,
      flexWrap: "wrap",
      flexDirection: "row",
      justifyContent: "space-around",
      paddingLeft: "6%",
      paddingRight: "6%",
    },
    button: {
      // flex: 1,
      margin: 7,
      padding: 5,
      width: "40%",
      // height: 60,
    },
  });

  const image = {
    uri: `https://i47zwcnf.directus.app/assets/${flyer.flyer_image}`,
  };

  return (
    <View style={styles.container}>
      <View style={styles.frame}>
        <ImageBackground
          style={styles.image}
          source={image}
          resizeMode="contain"
        ></ImageBackground>
      </View>
      <View style={styles.container2}>
        <Text style={styles.text}>{flyer.description}</Text>
        {links()}
      </View>
    </View>
  );
};

export default FullscreenFlyer;
