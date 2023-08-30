import { Image, Pressable, StyleSheet, Text, View } from "react-native";

function MealItem({ title, imageUrl }) {

  console.log('img', imageUrl)

  return (
    <View style={styles.container}>
      <Pressable>
        <View>
          <Image style={styles.image} source={{ uri: imageUrl }} />
          <Text style={styles.textContainer}>{title}</Text>
        </View>

      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textContainer: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  image: {
    width: "100%",
    height: 200
  },
});

export default MealItem;
