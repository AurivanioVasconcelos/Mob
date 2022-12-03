import { View, Text, SafeAreaView, FlatList, Button } from "react-native"
import { useEffect, useState } from "react"
import { estilos } from "../css/meuCSS"

import EstudanteService from "../service/EstudanteService"
import { firestoreDB } from "../firebase/firebase_config"

const ListarEstudante = (props) => {

    const [estudantes,setEstudantes] = useState([])
    const [flag,setFlag] = useState(false)

    useEffect(
        () => {
            EstudanteService.listar(
                firestoreDB,
                (estudantes) => {
                    setEstudantes(estudantes)
                }
            )
        }
        ,
        []
    )

    const apagarEstudanteV2 = (id)=>{
        EstudanteService.apagar(
            firestoreDB,
            (resultado)=>{
               let estudanteResultado = estudantes
               for(let i=0;i<estudanteResultado.length;i++){
                if(estudanteResultado[i].id === id){
                    estudanteResultado.splice(i,1)
                    break;
                }
               }
               setEstudantes(estudanteResultado)
               setFlag(!flag)
            },
            id)
    }

    const apagarEstudante = (id)=>{
        EstudanteService.apagar(
            firestoreDB,
            (resultado)=>{
                let estudantesResultado = estudantes.filter(
                    (estudante)=>estudante.id !== id
                )
                setEstudantes(estudantesResultado)
            },
            id
        )
    }

    return (
        <View style={estilos.container}>
            <Text style={estilos.cabecalho}>Listar estudantes</Text>
            {console.log(estudantes)}
            <SafeAreaView>
                <FlatList 
                    data={estudantes}
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
                                    <Text style={{margin:5}}>{item.ira}</Text>
                                    <View style={{margin:5}}>
                                        <Button 
                                            title="Editar" 
                                            onPress={()=>props.navigation.navigate('EditarEstudante',{id:item.id})}
                                            />
                                    </View>
                                    <View style={{margin:5}}>
                                        <Button 
                                            title="Apagar"
                                            onPress={()=>apagarEstudanteV2(item.id)} 
                                            />
                                    </View>
                                </View>
                            )
                        }
                    }
                    keyExtractor={estudante => estudante.id}
                />
            </SafeAreaView>
            <View  style={estilos.botao}>
                <Button 
                    title='Criar Estutante'
                    onPress={()=>props.navigation.navigate('CriarEstudante')}
                />
            </View>
            <View style={estilos.botao}>
                <Button 
                    title='Home'
                    onPress={()=>props.navigation.navigate('HomeEstudante')}
                />
            </View>
        </View>
    )
}

export default ListarEstudante;