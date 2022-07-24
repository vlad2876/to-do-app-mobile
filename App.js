import {FlatList, SafeAreaView, StatusBar, StyleSheet, View} from 'react-native';
import {Navbar} from "./src/components/Navbar";
import {useState} from "react";
import {ToDo} from "./src/components/ToDo";
import {AddToDoModal} from "./src/components/AddToDoModal";

export default function App() {
    const [id, setId] = useState(0);
    const [toDos, setToDos] = useState([]);

    const addToDo = (title, category, date) => {
        setId(id => ++id);
        setToDos(toDos => [...toDos, {
            id: id.toString(),
            date: date,
            title: title,
            category: category
        }]);
    }

    const removeToDo = id => {
        setToDos(toDos => toDos.filter(toDo => toDo.id !== id));
    }

    return (
        <SafeAreaView style={styles.safeArea}>
                <Navbar/>
                <View style={styles.container}>
                    <AddToDoModal onSubmit={addToDo}/>
                </View>
                <FlatList
                    style={styles.toDoList}
                    keyExtractor={item => item.id.toString()}
                    data={toDos}
                    renderItem={({item}) => <ToDo category={item.category} toDo={item} onRemove={removeToDo}/>}/>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
    }, toDoList: {
        paddingHorizontal: 30,
        paddingVertical: 30
    }, safeArea: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
    }
});
