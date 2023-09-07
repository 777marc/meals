import { Image, Platform, Pressable, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

function MealItem({ id, title, imageUrl, complexity, affordability, duration }) {

  const navigation = useNavigation("MealsDetail");

  function onPress() {
    navigation.navigate("MealsDetail", {
      mealId: id,
      title,
    });
  }

  return (
    <View>
      <Pressable style={({ pressed }) => pressed ? styles.containerPressed : styles.container} onPress={onPress}>
        <View style={styles.innerContainer}>
          <View>
            <Image style={styles.image} source={{ uri: imageUrl }} />
            <Text style={styles.textContainer}>{title}</Text>
            <View style={styles.details}>
              <Text style={styles.detailItem}>{complexity}</Text>
              <Text style={styles.detailItem}>{affordability}</Text>
              <Text style={styles.detailItem}>{duration} minutes</Text>
            </View>
          </View>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 16,
    borderRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
    backgroundColor: "white",
    shadowColor: "black",
    shadowOpacity: 0.5,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
  },
  containerPressed: {
    opacity: .5
  },
  innerContainer: {
    borderRadius: 8,
    overflow: "hidden",
  },
  textContainer: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    padding: 8
  },
  details: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 8
  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 12,
  },
  image: {
    width: "100%",
    height: 200
  },
});

export default MealItem;
