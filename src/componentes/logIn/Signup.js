import { collection, doc, getDocs, query, setDoc, where } from "firebase/firestore";

import Swal from "sweetalert2";
import db from "../../utils/firebaseConfig";
import { useState } from "react";

export const Signup = () => {
    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        userName: "",
        userMail: "",
        userPassword: "",
        userPhone: ""
    });
    const handleCreateUser = e => {
        setUser({
            ...user,
            [e.target.name]: e.target.value,
        })
    }
    const createUser = async (uName) => {

        const usersInFirestore = async () => {
            const newUserRef = doc(collection(db, "users"));
            await setDoc(newUserRef, user)
            return newUserRef;
        }
        const usersRef = collection(db, "users");
        const q = query(usersRef, where("userName", "==", uName));
        let querySnapshot
        querySnapshot = await getDocs(q);


        if (querySnapshot.docs.length > 0) {
            Swal.fire({
                icon: 'error',
                title: 'Usuario no disponible',
                text: 'El usuario que elegiste ya está en uso',
            })
        } else {
            usersInFirestore()
                .then(
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Tu usario ha sido creado correctamente!',
                        showConfirmButton: false,
                        timer: 1500
                    })
                )

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
                            value={user.userName}
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
                            value={user.firstName}
                            onChange={handleCreateUser}
                        />
                    </label>{" "}
                    <label>
                        Apellido: {" "}
                        <input
                            type="text"
                            name="lastName"
                            value={user.lastName}
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
                            value={user.userMail}
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
                            value={user.userPassword}
                            onChange={handleCreateUser}
                        />
                    </label> {" "}
                </div>
                <div className="newUserPhoneDiv">
                    <label>
                        Número de telefono: {" "}
                        <input
                            type="text"
                            name="userPhone"
                            value={user.userPhone}
                            onChange={handleCreateUser}
                        />
                    </label> {" "}
                </div>

                <div className="btnFormNewUser" onClick={() => createUser(user.userName)} > Registrarse </div>
            </form>
        </div>

    );
}