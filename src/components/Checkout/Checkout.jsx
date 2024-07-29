import React, { useContext, useState } from 'react'
import Swal from 'sweetalert2'
import style from './Style/Checkout.module.css'
import Context from '../../context/CartContext';
import { db } from "../../config/firebase";
import { addDoc, collection, Timestamp } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
    const [user, setUser] = useState({
        name: '',
        email: '',
        repeatEmail: '',
        phone: ''
    });
    const [error, setError] = useState({});
    const [loading, setLoading] = useState(false);

    const { cart, total, clearCart } = useContext(Context)

    const navigate = useNavigate()

    const updateUser = (event) => {
        setUser((user) => ({
            ...user,
            [event.target.name]: event.target.value
        }))
    }

    const validateForm = () => {
        const errors = {}
        if (!user.name) {
            errors.name = 'Tenes que agregar un nombre'
        } else if (user.name.length < 4) {
            errors.name = 'Debe tener al menos 4 caracteres'
        }

        if (!user.email) {
            errors.email = 'Tenés que agregar un email'
        } else if (!/\S+@\S+\.\S+/.test(user.email)) {
            errors.email = 'El email no es válido'
        }

        if (!user.repeatEmail) {
            errors.repeatEmail = 'Tenés que repetir el email';
        } else if (user.email !== user.repeatEmail) {
            errors.repeatEmail = 'Los emails no coinciden';
        }

        if (!user.phone) {
            errors.phone = 'Tenés que agregar un número de teléfono';
        } else if (!/^\+?\d{10,15}$/.test(user.phone)) {
            errors.phone = 'El número de teléfono no es válido';
        }

        setError(errors)
        return Object.keys(errors).length === 0
    }

    const getOrder = async (event) => {

        event.preventDefault();
        setLoading(true);

        if (!validateForm()) {
            return
        }



        const coleccion = collection(db, 'orders')

        try {

            const order = {
                buyer: user,
                cart: cart,
                total: total(),
                fecha: Timestamp.now()
            }

            const orderRef = await addDoc(coleccion, order)

            Swal.fire({
                position: "top-end",
                icon: "success",
                text: `Gracias por tu compra! Tu número de orden es: ${orderRef.id}`,
                showConfirmButton: false,
                timer: 100000
            }).then(() => {
                clearCart();
                navigate('/');
            });

        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false);
        }
    }

    return (
        <>
            <div className={style.boxForm}>
                <form className={style.form}>
                    <h1 className={style.h1}>Datos de Facturación</h1>
                    <div className={style.formInfo}>
                        <label className={style.label}>Nombre: <input type="text" name='name' className={style.inputInfo} onChange={updateUser} /></label>
                        <p className={style.error}>{error.name}</p>
                        <label className={style.label}>Email: <input type="text" name='email' className={style.inputInfo} onChange={updateUser} /></label>
                        <p className={style.error}>{error.email}</p>
                        <label className={style.label}>Repetir email: <input type="text" name='repeatEmail' className={style.inputInfo} onChange={updateUser} /></label>
                        <p className={style.error}>{error.repeatEmail}</p>
                        <label className={style.label}>Telefono: <input type="text" name='phone' className={style.inputInfo} onChange={updateUser} placeholder='+54 354 ...' /></label>
                        <p className={style.error}>{error.phone}</p>
                    </div>
                    <button className={style.buy} onClick={getOrder}>Comprar</button>
                </form>
            </div>
        </>
    )
}

export default Checkout
