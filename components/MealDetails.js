import { StyleSheet, Text, View } from "react-native";

function MealDetails({ title }) {
  return (
    <View style={styles.container}>
      <Text style={styles.textContainer}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textContainer: {
    fontWeight: "bold",
  },
});

export default MealDetails;
