import { createDrawerNavigator } from "@react-navigation/drawer";

import HomeEstudante from "./estudante/HomeEstudante";
import CriarEstudante from "./estudante/CriarEstudante";
import ListarEstudante from "./estudante/ListarEstudante";
import EditarEstudante from "./estudante/EditarEstudante";

import HomeProfessor from "./professor/HomeProfessor";
import CriarProfessor from "./professor/CriarProfessor";
import ListarProfessor from "./professor/ListarProfessor";
import EditarProfessor from "./professor/EditarProfessor";

const Drawer = createDrawerNavigator();

const RoutesCrud = ()=> {
    return (
        <Drawer.Navigator>
            <Drawer.Screen 
                name='HomeEstudante' 
                component={HomeEstudante} 
                options={{title:'Home'}}/>
            <Drawer.Screen 
                name='CriarEstudante' 
                component={CriarEstudante} 
                options={{title:'Criar Estudante'}}/>
            <Drawer.Screen 
                name='ListarEstudante' 
                component={ListarEstudante} 
                options={{title:'Listar Estudantes'}}/>
            <Drawer.Screen 
                name='EditarEstudante' 
                component={EditarEstudante} 
                options={{title:'Editar Estudante'}}/>

            <Drawer.Screen 
                name='HomeProfessor' 
                component={HomeProfessor} 
                options={{title:'Home'}}/>
            <Drawer.Screen 
                name='CriarProfessor' 
                component={CriarProfessor} 
                options={{title:'Criar Professor'}}/>
            <Drawer.Screen 
                name='ListarProfessor' 
                component={ListarProfessor} 
                options={{title:'Listar Professores'}}/>
            <Drawer.Screen 
                name='EditarProfessor' 
                component={EditarProfessor} 
                options={{title:'Editar Professor'}}/>
        </Drawer.Navigator>
    )
}

export default RoutesCrud