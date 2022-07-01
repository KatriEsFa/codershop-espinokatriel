import { collection, doc, getDoc, getDocs, orderBy, query, where } from "firebase/firestore";

import db from "./firebaseConfig";

export const firestoreFetch = async (idCategory) => {
    let q;
    if (idCategory) {
        q = query(collection(db, "ItemCollection"), where('category.id', '==', Number(idCategory)));
    } else {
        q = query(collection(db, "ItemCollection"), orderBy('name'));
    }

    const querySnapshot = await getDocs(q);
    const dataFromFirestore = querySnapshot.docs.map(document => ({
        id: document.id,
        ...document.data()

    }));
    return dataFromFirestore
}


export const firestoreFetchOne = async (idItem) => {
    const docRef = doc(db, "ItemCollection", idItem);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        return {
            id: idItem,
            ...docSnap.data()
        }
    } else {
        console.log("No hay documento!");
    }
}

export const firestoreFetchUser = async (uName) => {
    const userRef = doc(db, "users", uName);
    const userSnap = await getDoc(userRef);
    console.log(userSnap)

    if (userSnap.exists()) {
        return {
            name: uName,
            ...userSnap.data()//esto probablemente también devuelva la contraseña, falta manejar esa excepcion
        }
    } else {
        console.log("No hay usuario!")
    }
}

