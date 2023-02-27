import { StyleSheet, View } from "react-native";
import {
  Provider as PaperProvider,
  MD3LightTheme,
  MD3DarkTheme,
  Button,
} from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Categories from "./src/components/screens/Categories";
import Flyers from "./src/components/screens/Flyers";
import { SafeAreaProvider } from "react-native-safe-area-context";
import FullscreenFlyer from "./src/components/screens/FullscreenFlyer";
import React from "react";
import Splash from "./src/components/Splash";

const Stack = createNativeStackNavigator();

const theme = {
  ...MD3DarkTheme, // or MD3DarkTheme
  roundness: 5,
  colors: {
    ...MD3LightTheme.colors,
    // primary: "#112D4E",
    primary: "rgb(165, 200, 255)",
    onPrimary: "rgb(0, 49, 94)",
    primaryContainer: "rgb(0, 71, 133)",
    onPrimaryContainer: "rgb(212, 227, 255)",
    secondary: "rgb(188, 199, 220)",
    onSecondary: "rgb(38, 49, 65)",
    secondaryContainer: "rgb(61, 71, 88)",
    onSecondaryContainer: "rgb(216, 227, 248)",
    tertiary: "rgb(218, 189, 226)",
    onTertiary: "rgb(61, 41, 70)",
    tertiaryContainer: "rgb(85, 63, 94)",
    onTertiaryContainer: "rgb(247, 217, 255)",
    error: "rgb(255, 180, 171)",
    onError: "rgb(105, 0, 5)",
    errorContainer: "rgb(147, 0, 10)",
    onErrorContainer: "rgb(255, 180, 171)",
    background: "rgb(26, 28, 30)",
    onBackground: "rgb(227, 226, 230)",
    surface: "rgb(26, 28, 30)",
    onSurface: "rgb(227, 226, 230)",
    surfaceVariant: "rgb(67, 71, 78)",
    onSurfaceVariant: "rgb(195, 198, 207)",
    outline: "rgb(141, 145, 153)",
    outlineVariant: "rgb(67, 71, 78)",
    shadow: "rgb(0, 0, 0)",
    scrim: "rgb(0, 0, 0)",
    inverseSurface: "rgb(227, 226, 230)",
    inverseOnSurface: "rgb(47, 48, 51)",
    inversePrimary: "rgb(29, 95, 166)",
    elevation: {
      level0: "transparent",
      level1: "rgb(33, 37, 41)",
      level2: "rgb(37, 42, 48)",
      level3: "rgb(41, 47, 55)",
      level4: "rgb(43, 49, 57)",
      level5: "rgb(46, 52, 62)",
    },
    surfaceDisabled: "rgba(227, 226, 230, 0.12)",
    onSurfaceDisabled: "rgba(227, 226, 230, 0.38)",
    backdrop: "rgba(45, 49, 56, 0.4)",
  },
};

const styles = StyleSheet.create({
  appBar: {
    backgroundColor: theme.colors.primaryContainer,
  },
});

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Categories"
            screenOptions={{
              headerStyle: styles.appBar,
              headerTintColor: theme.colors.onPrimaryContainer,
              headerShadowVisible: false,
              headerTitleStyle: {
                fontWeight: "bold",
                fontSize: 30,
              },
            }}
          >
            <Stack.Group>
              <Stack.Screen
                name="Categories"
                component={Categories}
                options={{
                  title: "FLY",
                  headerLeft: () => <View></View>,
                }}
              />
              <Stack.Screen
                name="Flyers"
                component={Flyers}
                options={({ route }) => ({
                  title: route.params.categorie.name.toUpperCase(),
                })}
              />
              <Stack.Screen
                name="Splash"
                component={Splash}
                options={{
                  title: "",
                }}
              />
            </Stack.Group>
            <Stack.Group screenOptions={{ presentation: "modal" }}>
              <Stack.Screen
                name="Flyer"
                component={FullscreenFlyer}
                options={({ route }) => ({
                  title: route.params.flyer.orgnization.name.toUpperCase(),
                })}
              />
            </Stack.Group>
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </PaperProvider>
  );
}
