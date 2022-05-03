import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button, Image, FlatList, ActivityIndicator, TextInput } from 'react-native';

import firebase from '../../services/connectionFirebase';


export default function App() {
    const [nome, setNome] = useState('');
    const [categoria, setCategoria] = useState('');
    const [valor, setValor] = useState('');
    const [descricao, setDescricao] = useState('');

    useEffect(() => {
        //listar dados ao cadastrar
        async function dados() {

        }

        dados();
    }, []);

    async function cadastrar() {
        if (nome !== '' & categoria !== '' & valor !== '' & descricao !== '') {
            let produtos = await firebase.database().ref('produtos');
            let chave = produtos.push().key;

            produtos.child(chave).set({
                nome: nome,
                categoria: categoria,
                valor: valor,
                descricao: descricao
            });

            alert('Produto Cadastrado!');
            setNome('');
            setCategoria('');
            setValor('');
            setDescricao('');
        } else {
            if (nome == '') {
                alert('Nome do produto deve ser preenchido!');

            }
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.texto}>Nome</Text>
            <TextInput
                maxLength={40}
                right={<TextInput.Icon name="watch" />}
                style={styles.input}
                underlineColorAndroid="transparent"
                onChangeText={(texto) => setNome(texto)}
                value={nome}
            />

            <Text style={styles.texto}>Categoria</Text>
            <TextInput
                style={styles.input}
                underlineColorAndroid="transparent"
                onChangeText={(texto) => setCategoria(texto)}
                value={categoria}
            />

            <Text style={styles.texto}>Valor R$</Text>
            <TextInput
                style={styles.input}
                underlineColorAndroid="transparent"
                onChangeText={(texto) => setValor(texto)}
                value={valor}
            />

            <Text style={styles.texto}>Descricao</Text>
            <TextInput
                style={styles.input}
                underlineColorAndroid="transparent"
                onChangeText={(texto) => setDescricao(texto)}
                value={descricao}
            />

            <Button
                title="Cadastrar"
                color="#FFD32D"
                onPress={cadastrar}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10,
    },

    texto: {
        fontSize: 15,
    },

    input: {
        marginBottom: 10,
        padding: 10,
        borderWidth: 1,
        borderColor: '#121212',
        height: 30,
        fontSize: 15,
        borderRadius: 10
    },

    icon: {
        position: 'absolute',
        right: 10,
    }
});
