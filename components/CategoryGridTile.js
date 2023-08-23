import { Pressable, StyleSheet, Text, View } from "react-native";

function CategoryGridTile({ title, color }) {
    return (
        <View>
            <Pressable>
                <View>
                    <Text>{title}</Text>
                </View>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})

export default CategoryGridTile;