import {Image, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View} from "react-native";
import {BoxShadow} from "react-native-shadow";

export const ToDo = ({category, toDo, onRemove}) => {
    const categoryStyle = (category) => {
        if (category === 'Учеба') {
            return {
                ...styles.toDo,
                backgroundColor: '#CBE3B1'
            }
        } else if (category === 'Медицина') {
            return {
                ...styles.toDo,
                backgroundColor: '#6BD8F5'
            }
        } else if (category === 'Личное') {
            return {
                ...styles.toDo,
                backgroundColor: '#EBE07F'
            }
        } else if (category === 'События') {
            return {
                ...styles.toDo,
                backgroundColor: '#F08B7C'
            }
        } else if (category === 'Покупки') {
            return {
                ...styles.toDo,
                backgroundColor: '#EBB575'
            }
        }
    }

    const categoryStyleShadow = (category) => {
        if (category === 'Учеба') {
            return {
                ...styles.shadowOpt,
                color: "#CBE3B1",
            }
        } else if (category === 'Медицина') {
            return {
                ...styles.shadowOpt,
                color: "#6BD8F5",
            }
        } else if (category === 'Личное') {
            return {
                ...styles.shadowOpt,
                color: "#EBE07F",
            }
        } else if (category === 'События') {
            return {
                ...styles.shadowOpt,
                color: "#F08B7C",
            }
        } else if (category === 'Покупки') {
            return {
                ...styles.shadowOpt,
                color: "#EBB575",
            }
        }
    }

    const getImageName = (category) => {
        if (category === 'Учеба') {
            return (
                <Image style={styles.image} source={require('../../assets/studies.png')}/>
            )
        } else if (category === 'Медицина') {
            return (
                <Image style={styles.image} source={require('../../assets/medicine.png')}/>
            )
        } else if (category === 'Личное') {
            return (
                <Image style={styles.image} source={require('../../assets/personal.png')}/>
            )
        } else if (category === 'События') {
            return (
                <Image style={styles.image} source={require('../../assets/events.png')}/>
            )
        } else if (category === 'Покупки') {
            return (
                <Image style={styles.image} source={require('../../assets/shopping.png')}/>
            )
        }
    }

    return (
        <BoxShadow setting={categoryStyleShadow(category)}>
            <TouchableOpacity
                onLongPress={() => onRemove(toDo.id)}
            >
                <View style={categoryStyle(category)}>
                    <View style={styles.info}>
                        <View style={styles.category}>
                            {getImageName(category)}
                            <Text style={styles.categoryTitle}>{toDo.category}</Text>
                        </View>
                        <Text style={styles.textStyle}>{toDo.date}</Text>
                    </View>
                    <View style={styles.toDoTitle}>
                        <Text style={styles.textStyle}>{toDo.title}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </BoxShadow>
    )
}

const styles = StyleSheet.create({
    toDo: {
        height: 100,
        borderWidth: 1,
        borderColor: 'black',
        borderBottomRightRadius: 100,
        marginBottom: 10,
        paddingVertical: 20,
        paddingHorizontal: 30
    }, info: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 0.5,
        borderBottomColor: 'black',
        paddingBottom: 5,
    }, toDoTitle: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'center',
    }, textStyle: {
        fontSize: 13,
    }, shadowOpt: {
        width: 350,
        height: 100,
        color: "#CBE3B1",
        border: 10,
        radius: 20,
        opacity: 0.4,
        x: 3,
        y: 2,
        style: {marginTop: 3, marginBottom: 15}
    }, image: {
        width: 20,
        height: 20
    }, category: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    }, categoryTitle: {
        fontSize: 13,
        marginLeft: 7,
        fontWeight: 'bold'
    }
})