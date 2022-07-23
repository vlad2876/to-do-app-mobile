import React, {useState} from 'react';
import {Alert, Modal, StyleSheet, Text, Pressable, View, TextInput, Image} from 'react-native';
import {Picker} from "@react-native-picker/picker";
import RNDateTimePicker from "@react-native-community/datetimepicker";

export const AddToDoModal = ({onSubmit}) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('Учеба');
    const [show, setShow] = useState(false);
    const [date, setDate] = useState(new Date(Date.now()));
    const placeholderTitle = 'Запиши свое дело тут...';

    const onAddButtonClick = () => {
        if (title.trim()) {
            onSubmit(title, category, date.toLocaleDateString());
            setTitle('');
            setDate(new Date(Date.now()));
            setModalVisible(!modalVisible);
        } else {
            Alert.alert('Вы не ввели название дела');
        }
    }

    const onDateChange = (event, date) => {
        setShow(false);
        if (event.type !== 'dismissed') {
            setDate(date);
        }
    };

    return (
        <View style={styles.centeredView}>
            <Modal
                animationType='fade'
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Pressable
                            style={styles.exitButton}
                            onPress={() => setModalVisible(!modalVisible)}>
                            <Image style={styles.exitImage} source={require('../../assets/exit.png')}/>
                        </Pressable>
                        <View
                            style={styles.pickerView}
                        >
                            <Picker
                                style={styles.picker}
                                selectedValue={category}
                                prompt={'Выберите категорию дела...'}
                                onValueChange={(itemValue) =>
                                    setCategory(itemValue)
                                }>
                                <Picker.Item label="Учеба" value="Учеба"/>
                                <Picker.Item label="Личное" value="Личное"/>
                                <Picker.Item label="Покупки" value="Покупки"/>
                                <Picker.Item label="Медицина" value="Медицина"/>
                                <Picker.Item label="События" value="События"/>
                            </Picker>
                            <View>
                                {show && (
                                    <RNDateTimePicker
                                        value={date}
                                        display="default"
                                        disabled={show}
                                        onChange={onDateChange}
                                    />
                                )}
                            </View>

                            <Pressable onPress={() => setShow(true)}>
                                <Text style={styles.date}>{date.toLocaleDateString()}</Text>
                            </Pressable>
                        </View>

                        <View style={styles.addToDo}>
                            <TextInput
                                onChangeText={setTitle}
                                value={title}
                                placeholder={placeholderTitle}
                                style={styles.input}/>
                            <Pressable
                                style={[styles.button, styles.addButton]}
                                onPress={onAddButtonClick}>
                                <Text style={styles.textStyle}>Добавить</Text>
                            </Pressable>
                        </View>
                    </View>
                </View>
            </Modal>
            <Pressable
                style={[styles.button, styles.buttonOpen]}
                onPress={() => setModalVisible(true)}>
                <Text style={styles.textStyle}>Добавить дело</Text>
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
        borderBottomWidth: 0.5,
        borderBottomColor: 'black',
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
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
    addButton: {
        padding: 10,
        backgroundColor: '#96F5B2',
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
        width: '65%',
        borderBottomColor: '#A2E3C3',
        borderBottomWidth: 1,
        padding: 5,
        marginRight: 20
    },
    pickerView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 10
    },
    picker: {
        width: 200,
    },
    exitImage: {
        width: 25,
        height: 25
    },
    exitButton: {
        alignItems: 'flex-end'
    },
    date: {
        fontSize: 17,
        fontWeight: 'bold',
        textDecorationLine: 'underline'
    }
});