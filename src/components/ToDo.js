import {StyleSheet, Text, TouchableHighlight, TouchableOpacity, View} from "react-native";
import {BoxShadow} from "react-native-shadow";

export const ToDo = ({toDo, onRemove}) => {
    return (
        <BoxShadow setting={styles.shadowOpt}>
            <TouchableHighlight
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
            </TouchableHighlight>
        </BoxShadow>
    )
}

const styles = StyleSheet.create({
    toDo: {
        height: 100,
        borderWidth: 1,
        borderColor: 'black',
        backgroundColor: '#CBE3B1',
        borderRadius: 20,
        marginBottom: 10,
        paddingVertical: 20,
        paddingHorizontal: 30
    }, info: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 0.5,
        borderBottomColor: 'black',
        paddingBottom: 5
    }, toDoTitle: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'center',
    }, textStyle: {
        fontSize: 10,
    }, shadowOpt: {
        width: 350,
        height: 100,
        color: "#000",
        border: 1,
        radius: 20,
        opacity: 0.2,
        x: 2,
        y: 3,
        style: {marginVertical: 5}
    }
})