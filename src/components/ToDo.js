import {StyleSheet, Text, TouchableOpacity, View} from "react-native";

export const ToDo = ({toDo, onRemove}) => {
    return (
        <TouchableOpacity
        onLongPress={() => onRemove(toDo.id)}
        >
            <View style={styles.toDo}>
                <Text>{toDo.title}</Text>
                <Text>{toDo.date}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    toDo: {
        height: 200,
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#96F5B2',
        backgroundColor: '#96F5B2',
        borderRadius: 5,
        marginBottom: 10
    }
})