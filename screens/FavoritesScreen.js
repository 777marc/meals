import { useContext } from "react";
import { StyleSheet, View } from "react-native";
import { MEALS } from "../data/dummy-data";
import { FavoritesContext } from "../store/context/favorites-context";
import MealItem from "../components/MealItem";

function FavoritesScreen({ navigation }) {
  const FavoriteMealCtx = useContext(FavoritesContext);

  const displayMeals = MEALS.filter((meal) => {
    return FavoriteMealCtx.ids.includes(meal.id);
  });

  return (
    <View style={styles.container}>
      {displayMeals.map((dm, index) => {
        const { id, title, imageUrl, affordability, complexity, duration } = dm;

        const mealProps = {
          id,
          title,
          imageUrl,
          affordability,
          complexity,
          duration,
        };

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

export default FavoritesScreen;
