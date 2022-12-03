import { getDocs,collection,addDoc,doc,getDoc,updateDoc,deleteDoc,query } from "firebase/firestore/lite";
import { onSnapshot } from 'firebase/firestore'

class ProfessorService {
  static listar = (firestoreDB, callback) => {
    getDocs(collection(firestoreDB, 'professor'))
      .then(
        (snapshot) => {
          const professores = [];
          snapshot.forEach(
            (document) => {
              const id = document.id;
              const { nome, curso, salario } = document.data();
              professores.push({id, nome, curso, salario});
            }
          );
          callback(professores);
        }
      )
      .catch((error) => console.log(error));
  };

  static criar = (firestoreDB, callback, professor) => {
    addDoc(collection(firestoreDB, 'professor'), professor)
    .then(
        (docRef)=> {
            callback(docRef.id)
        }
    )
    .catch(error=>console.log(error))
}
static recuperar = (firestoreDB, callback, id) => {
    getDoc(doc(firestoreDB, 'professor', id))
    .then(
        (docSnap)=>{
            if(docSnap.exists()){
                callback(docSnap.data())
            }
        }
    )
    .catch(error=>console.log(error))
}
static atualizar = (firestoreDB, callback, id, professor)=>{
    updateDoc(doc(firestoreDB,'professor',id), professor)
    .then(
        ()=>{
            callback()
        }
    )
    .catch(error=>console.log(error))
}
static apagar = (firestoreDB, callback, id) => {
    deleteDoc(doc(firestoreDB,'professor', id))
    .then(()=> {
        callback(true)
    })
    .catch(error=>console.log(error))
}
}

export default ProfessorService;