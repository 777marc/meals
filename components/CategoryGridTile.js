import { Platform, Pressable, StyleSheet, Text, View } from "react-native";

function CategoryGridTile({ title, color, onPress }) {
    return (
        <View style={styles.outerContainer}>
            <Pressable style={({ pressed }) => pressed ? styles.buttonPressed : styles.button} onPress={onPress}>
                <View style={[styles.innerContainer, { backgroundColor: color }]}>
                    <Text style={styles.title}>{title}</Text>
                </View>
            </Pressable>
        </View >
    )
}

const styles = StyleSheet.create({
    outerContainer: {
        flex: 1,
        margin: 16,
        height: 150,
        borderRadius: 8,
        elevation: 4,
        backgroundColor: "white",
        shadowColor: "black",
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        overflow: Platform.OS === "android" ? "hidden" : "visible",
    },
    button: {
        flex: 1
    },
    buttonPressed: {
        flex: 1,
        opacity: 0.5,
    },
    innerContainer: {
        flex: 1,
        borderRadius: 8,
        padding: 16,
        justifyContent: "center",
        alignItems: "center"
    },
    title: {
        fontWeight: "bold",
        fontSize: 16,
    }
});

export default CategoryGridTile;