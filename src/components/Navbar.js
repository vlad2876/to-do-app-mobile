import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

export const Navbar = () => {
    const title = 'ToDo';

    return (
        <View style={styles.navbar}>
            <Text style={styles.title}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    navbar: {
        height: 100,
        alignItems: 'center',
        justifyContent: 'flex-end',
        backgroundColor: '#A2E3C3',
        borderBottomWidth: 0.5,
        borderBottomColor: 'black'
    }, title: {
        textAlign: 'center',
        minWidth: 100,
        fontSize: 30,
        color: 'white',
        paddingBottom: 10,
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 10,
    }
});
