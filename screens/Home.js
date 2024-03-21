import React, { useState } from 'react';
import { Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { StyleSheet, Text, TextInput, View } from 'react-native';

const Home = () => {
    return (
        <View>
            
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    inputContainer: {
        marginBottom: 10,
    },
    inputLabel: {
        fontWeight: 'bold',
    },
    input: {
        width: 250,
        height: 40,
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#c1c1c1',
        backgroundColor: '#e8e8e8',
        borderWidth: 1,
        borderRadius: 5,
        padding: 5,
    },
    textInput: {
        flex: 1,
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    btn_entrar: {
        width: 150,
        height: 40,
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        margin: 10,
        backgroundColor: '#1670f7'
    },
    btn_cadastro: {
        width: 150,
        height: 40,
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        margin: 10,
        backgroundColor: '#ff1516'
    },
    btnText: {
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
    }
});

export default Home;