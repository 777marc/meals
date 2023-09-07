import { StyleSheet, Text, View } from "react-native";

function MealLists({ title, list }) {
    return (
        <View>
            <Text style={styles.textHeader}>{title}:</Text>
            {list.map((detail, index) => {
                return <Text key={index} style={styles.textContainer}>{detail}</Text>
            })}
        </View>
    )
}

const styles = StyleSheet.create({
    textHeader: {
        fontSize: 18,
        fontWeight: "bold",
        paddingVertical: 10,
        color: "white",
    },
    textContainer: {
        color: "white",
        paddingBottom: 5,
    },
});

export default MealLists;