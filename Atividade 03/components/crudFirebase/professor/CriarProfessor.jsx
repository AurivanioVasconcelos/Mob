import { useState } from "react";
import { View,Text,Button,TextInput } from "react-native";
import { estilos } from "../css/meuCSS";

import ProfessorService from "../service/ProfessorService";
import { firestoreDB } from "../firebase/firebase_config"


const CriarProfessor = (props)=> {

    const [nome,setNome] = useState('')
    const [curso,setCurso] = useState('')
    const [salario,setSalario] = useState('')

    const acaoBotaoSubmeter = ()=> {
        ProfessorService.criar(
            firestoreDB,
            (id)=>{
                alert(`Professor ${nome} inserido!`)
                props.navigation.navigate('ListarProfessor')
            },
            {nome, curso, alario}
        )
    }

    return (
        <View style={estilos.container}>
            <Text style={estilos.cabecalho}>Criar Professor</Text>
            <TextInput
                style={estilos.input}
                placeholder="Nome" 
                value={nome}
                onChangeText={(nome)=>setNome(nome)}
            />

            <TextInput
                style={estilos.input}
                placeholder="Curso" 
                value={curso}
                onChangeText={(curso)=>setCurso(curso)}
            />

            <TextInput
                style={estilos.input}
                placeholder="Salario"
                value={salario}
                keyboardType='numeric'
                onChangeText={(salario)=>setSalario(salario)} 
            />

            <View style={estilos.botao}>
                <Button
                    title="SUBMETER" 
                    onPress={acaoBotaoAtualizar}
                />
            </View>
        </View>
    )
}

export default CriarProfessor;