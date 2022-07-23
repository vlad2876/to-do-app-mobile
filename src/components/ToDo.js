import {StyleSheet, Text, TouchableOpacity, View} from "react-native";

export const ToDo = ({toDo, onRemove}) => {
    return (
        <TouchableOpacity
            onLongPress={() => onRemove(toDo.id)}
        >
            <View style={styles.toDo}>
                <View style={styles.info}>
                    <Text style={styles.textStyle}>{toDo.category}</Text>
                    <Text style={styles.textStyle}>{toDo.date}</Text>
                </View>
                <View style={styles.toDoTitle}>
                    <Text style={styles.textStyle}>{toDo.title}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    toDo: {
        height: 200,
        borderWidth: 1,
        borderColor: '#CBE3B1',
        backgroundColor: '#CBE3B1',
        borderRadius: 20,
        marginBottom: 10,
        padding: 30
    }, info: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 0.5,
        borderBottomColor: 'black',
        paddingBottom: 10
    }, toDoTitle: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'center',
    }, textStyle: {
        fontSize: 20,
        fontWeight: 'bold'
    }
})