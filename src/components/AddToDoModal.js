import React, {useState} from 'react';
import {Alert, Modal, StyleSheet, Text, Pressable, View, TextInput} from 'react-native';

export const AddToDoModal = ({onSubmit}) => {
    const [modalVisible, setModalVisible] = useState(false);
    const placeholderTitle = 'You can add your ToDo here'
    const [title, setTitle] = useState('');

    const onAddButtonClick = () => {
        if (title.trim()) {
            onSubmit(title);
            setTitle('')
        } else {
            Alert.alert('ToDo title is empty')
        }
    }
    return (
        <View style={styles.centeredView}>
            <Modal
                animationType='fade'
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                    setModalVisible(!modalVisible);
                }}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <View style={styles.addToDo}>
                            <TextInput
                                onChangeText={setTitle}
                                value={title}
                                placeholder={placeholderTitle}
                                style={styles.input}/>
                            <Pressable
                                onPress={onAddButtonClick}>
                                <Text style={styles.addButtonText}>Add</Text>
                                </Pressable>
                        </View>
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => setModalVisible(!modalVisible)}>
                            <Text style={styles.textStyle}>Close</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
            <Pressable
                style={[styles.button, styles.buttonOpen]}
                onPress={() => setModalVisible(true)}>
                <Text style={styles.textStyle}>Add To Do</Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 40,
        borderBottomWidth: 2,
        borderBottomColor: 'black',
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    addToDo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 30
    },
    button: {
        borderRadius: 20,
        elevation: 2,
        justifyContent: 'center',
    },
    buttonOpen: {
        backgroundColor: '#96F5B2',
        height: 50,
        width: 100
    },
    buttonClose: {
        padding: 10,
        backgroundColor: '#96F5B2',
    },
    addButtonText: {
        color: '#96F5B2'
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        justifyContent: 'center'
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
    input: {
        width: '80%',
        borderBottomColor: '#96F5B2',
        borderBottomWidth: 1,
        padding: 5,
        marginRight: 20
    }
});