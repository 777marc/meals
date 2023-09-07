import { StyleSheet, Text, View } from "react-native";

function MealsDetailScreen({ route, navigation }) {

    const { mealId, title } = route.params;

    return (
        <View style={styles.container}>
            <Text style={styles.textContainer}>MealsDetailScreen : {title} : {mealId}</Text>
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
    }

});

export default MealsDetailScreen;