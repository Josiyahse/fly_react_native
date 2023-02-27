import { View, StyleSheet, ImageBackground } from "react-native";
import { useTheme } from "react-native-paper";

const Splash = ({ navigation }: any) => {
  //   const { flyer } = route.params;
  //   const [load, setLoad] = useState(false);
  const theme = useTheme();

  setTimeout(() => {
    navigation.navigate("Categories");
  }, 2000);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.primaryContainer,
      padding: 90,
    },
    container2: {
      flex: 1,
      backgroundColor: theme.colors.primaryContainer,
    },
    image: {
      flex: 2,
      justifyContent: "center",
    },
  });
  const image = {
    uri: "https://i47zwcnf.directus.app/assets/0b842716-8e90-4923-9759-ff35f503dd76",
  };
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.image}
        source={image}
        resizeMode="contain"
      ></ImageBackground>
      <View style={styles.container2}></View>
    </View>
  );
};

export default Splash;
