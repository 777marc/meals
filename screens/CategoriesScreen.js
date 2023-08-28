import { StyleSheet, SafeAreaView, FlatList, Text, View } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";


function CategoryScreen({ navigation }) {

    function renderCategoryItem(itemData) {

        function handlePress() {
            navigation.navigate("MealsOverview", {
                categoryId: itemData.item.id,
                title: itemData.item.title,
            });
        }

        return (
            <CategoryGridTile
                title={itemData.item.title}
                color={itemData.item.color}
                onPress={handlePress}
            />
        );
    }

    return (
        <SafeAreaView>
            <FlatList
                data={CATEGORIES}
                renderItem={renderCategoryItem}
                keyExtractor={(item) => item.id}
                numColumns={2}
            />
        </SafeAreaView>
    )

}
const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

export default CategoryScreen;