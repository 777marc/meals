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
      {displayMeals.map((dm, index) => {

        const { title,
          imageUrl,
          affordability,
          complexity,
          duration,
        } = dm;

        const mealProps = {
          title,
          imageUrl,
          affordability,
          complexity,
          duration,
        }

        return <MealItem key={index} {...mealProps} />;
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
