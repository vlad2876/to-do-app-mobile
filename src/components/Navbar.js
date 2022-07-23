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
        backgroundColor: '#56F58E'
    }, title: {
        fontSize: 30,
        color: 'white',
        paddingBottom: 10
    }
});
