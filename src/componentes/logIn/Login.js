import { collection, getDocs, query, where } from "firebase/firestore";

import Swal from "sweetalert2";
import db from "../../utils/firebaseConfig";
import { firestoreFetchUser } from "../../utils/firestoreFetch";
import { useState } from "react";

export const Login = () => {
    const [userLog, setUserLog] = useState({
        userNameLogIn: "",
        userPassLogIn: ""
    });



    const handleLogInUser = e => {
        setUserLog({
            ...userLog,
            [e.target.name]: e.target.value,
        })
    };

    const logInUser = async (uName, uPass) => {
        const userRef = collection(db, "users");
        const q = query(userRef, where("userName", "==", uName), where("userPassword", "==", uPass));
        let querySnapshot = await getDocs(q);

        const setCurrentUser = (logedUser) => {
            localStorage.setItem("currentUser", JSON.stringify(logedUser))
        }


        if (querySnapshot.docs.length > 0) {
            firestoreFetchUser(uName)
                .then(result => setCurrentUser(result), Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Tu usario ha sido creado correctamente!',
                    showConfirmButton: false,
                    timer: 1500
                }))
                .catch(err => console.log(err))

        } else {
            Swal.fire({
                icon: 'error',
                title: 'Usuario o contraseña incorrectos',
                text: 'Debe ingresar un usario/contraseña válidos',
            })
        }
    };



    return (
        <div className="logInDiv">

            <form className="formLogIn">

                <label>
                    Usuario: {""}
                    <input
                        type="text"
                        name="userNameLogIn"
                        value={userLog.userNameLogIn}
                        onChange={handleLogInUser}
                    />
                </label>{""}
                <label>
                    Contraseña: {""}
                    <input
                        type="password"
                        name="userPassLogIn"
                        value={userLog.userPassLogIn}
                        onChange={handleLogInUser}
                    />
                </label>
                <div className="btnFormLogedUser" onClick={() => logInUser(userLog.userNameLogIn, userLog.userPassLogIn)} > Log In </div>

            </form>

        </div>
    );


}
