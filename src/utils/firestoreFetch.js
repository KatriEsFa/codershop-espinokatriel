import { doc, getDoc, getDocs, query, collection, where, orderBy } from "firebase/firestore";

import db from "./firebaseConfig";

export const firestoreFetch = async (idCategory) => {
    let q;
    if (idCategory) {
        q = query(collection(db, "ItemCollection"), where('id', '==', idCategory));
    } else {
        q = query(collection(db, "products"), orderBy('name'));
    }

    const querySnapshot = await getDocs(q);
    console.log(querySnapshot)
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