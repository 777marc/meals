import { StyleSheet, Text, View } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";

function MealsOverviewScreen({ route }) {
  const { categoryId, title } = route.params;

  const displayMeals = MEALS.filter((meal) => {
    return meal.categoryIds.includes(categoryId);
  });

  return (
    <View style={styles.container}>
      <Text>
        {title} - id: {categoryId}
      </Text>
      {displayMeals.map((dm) => {
        return <MealItem key={dm.categoryIds} title={dm.title} imageUrl={dm.imageUrl} />;
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

export default MealsOverviewScreen;
