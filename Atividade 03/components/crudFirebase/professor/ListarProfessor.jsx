import { View, Text, SafeAreaView, FlatList, Button } from "react-native"
import { useEffect, useState } from "react"
import { estilos } from "../css/meuCSS"

import ProfessorService from "../service/ProfessorService"
import { firestoreDB } from "../firebase/firebase_config"

const ListarProfessor = (props) => {

    const [professores,setProfessores] = useState([])

    useEffect(
        () => {
            ProfessorService.listar(
                firestoreDB,
                (professores) => {
                    setProfessores(professores)
                }
            )
        }
        ,
        []
    )

    const apagarProfessor = (id)=>{
        ProfessorService.apagar(
            firestoreDB,
            (resultado)=>{
                let professoresResultado = professores.filter(
                    (professor)=>professor.id !== id
                )
                setProfessores(professoresResultado)
            },
            id
        )
    }

    return (
        <View style={estilos.container}>
            <Text style={estilos.cabecalho}>Listar Professores</Text>
            {console.log(professores)}
            <SafeAreaView>
                <FlatList 
                    data={professores}
                    renderItem={
                        ({item})=>{
                            return (
                                <View
                                    style={{
                        
                                        flexDirection:'row',
                                        justifyContent:'center'
                                    }}
                                >
                                    <Text style={{width:'20%',fontWeight:'bold'}}>{item.nome}</Text>
                                    <Text style={{width:'25%'}}>{item.curso}</Text>
                                    <Text style={{margin:5}}>{item.salario}</Text>
                                    <View style={{margin:5}}>
                                        <Button 
                                            title="Editar" 
                                            onPress={()=>props.navigation.navigate('EditarProfessor',{id:item.id})}
                                            />
                                    </View>
                                    <View style={{margin:5}}>
                                        <Button 
                                            title="Apagar"
                                            onPress={()=>apagarProfessor(item.id)} 
                                            />
                                    </View>
                                </View>
                            )
                        }
                    }
                    keyExtractor={professor => professor.id}
                />
            </SafeAreaView>
            <View  style={estilos.botao}>
                <Button 
                    title='Criar Professor'
                    onPress={()=>props.navigation.navigate('CriarProfessor')}
                />
            </View>
            <View style={estilos.botao}>
                <Button 
                    title='Home'
                    onPress={()=>props.navigation.navigate('HomeProfessor')}
                />
            </View>
        </View>
    )
}

export default ListarProfessor;