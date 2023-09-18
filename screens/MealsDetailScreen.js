import { useContext, useLayoutEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealLists from "../components/MealLists";
import IconButton from "../components/IconButton";
import { FavoritesContext } from "../store/context/favorites-context";

function MealsDetailScreen({ route, navigation }) {
  const { mealId, title } = route.params;
  const favoriteMealsCtx = useContext(FavoritesContext);
  const mealIsFavorite = favoriteMealsCtx.ids.includes(mealId);

  const displayMeal = MEALS.filter((meal) => {
    return meal.id.includes(mealId);
  });

  const { ingredients, steps } = displayMeal[0];

  function handleSavePressed() {
    if (mealIsFavorite) {
      favoriteMealsCtx.removeFavorite(mealId);
    } else {
      favoriteMealsCtx.addFavorite(mealId);
    }
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            color="white"
            icon={mealIsFavorite ? "star" : "star-outline"}
            onPress={handleSavePressed}
          />
        );
      },
    });
  }, [navigation, handleSavePressed]);

  return (
    <View style={styles.container}>
      <Text style={styles.textHeader}>{title}</Text>
      <MealLists
        title={"Ingredients"}
        list={ingredients}
        showNumbering={false}
      />
      <MealLists title={"Directions"} list={steps} showNumbering={true} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  textContainer: {
    color: "white",
    paddingBottom: 5,
  },
  textHeader: {
    fontSize: 18,
    fontWeight: "bold",
    paddingVertical: 10,
    color: "white",
  },
});

export default MealsDetailScreen;
