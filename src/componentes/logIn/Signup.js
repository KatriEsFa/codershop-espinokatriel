import { collection, doc, getDoc, setDoc } from "firebase/firestore";
import { query, where } from "firebase/firestore";

import Swal from "sweetalert2";
import db from "../../utils/firebaseConfig";
import { useState } from "react";

export const Signup = () => {
    const [newUser, setNewUser] = useState({
        firstName: "",
        lastName: "",
        userName: "",
        userMail: "",
        userPassword: ""
    });
    const handleCreateUser = e => {
        setNewUser({
            ...newUser,
            [e.target.name]: e.target.value,
        })
    }
    const createUser = async (uName) => {

        const usersInFirestore = async () => {
            const newUserRef = doc(collection(db, "users"));
            await setDoc(newUserRef, newUser)
            return newUserRef;
        }
        const usersRef = collection(db, "users");
        const q = query(usersRef, where("userName", "===", uName));
        let querySnapshot
        try { querySnapshot = await getDoc(q); }
        catch (exception) { console.log(exception) }


        console.log(querySnapshot.userName)

        if (newUser.userName === querySnapshot.userName) {
            Swal.fire({
                icon: 'error',
                title: 'Usuario no disponible',
                text: 'El usuario que elegiste ya está en uso',
            })
        } else {
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Tu usario ha sido creado correctamente!',
                showConfirmButton: false,
                timer: 1500
            })
            usersInFirestore()
        }

    }


    return (

        <div>
            <form className="formCreateUser">
                <label>
                    Elija su nombre de Usuario: {" "}
                    <div className="divNameNewUser">
                        <input
                            type="text"
                            name="userName"
                            value={newUser.userName}
                            onChange={handleCreateUser}
                        />
                    </div>
                </label>{" "}
                <div className="completeNameNewUserDiv">
                    <label>
                        Nombre:{" "}
                        <input
                            type="text"
                            name="firstName"
                            value={newUser.firstName}
                            onChange={handleCreateUser}
                        />
                    </label>{" "}
                    <label>
                        Apellido: {" "}
                        <input
                            type="text"
                            name="lastName"
                            value={newUser.lastName}
                            onChange={handleCreateUser}
                        />
                    </label>{" "}
                </div>

                <div className="newUserMailDiv">
                    <label>
                        Email:{" "}
                        <input
                            type="email"
                            name="userMail"
                            value={newUser.userMail}
                            onChange={handleCreateUser}
                        />
                    </label> {" "}
                </div>
                <div className="newUserPassDiv">
                    <label>
                        Contraseña: {" "}
                        <input
                            type="password"
                            name="userPassword"
                            vlaue={newUser.userPassword}
                            onChange={handleCreateUser}
                        />
                    </label> {" "}
                </div>

                <div className="btnFormNewUser" onClick={() => createUser(newUser.userName)} > Registrarse </div>
            </form>
        </div>

    );
}