import React, { useContext, useState } from 'react'
import style from './Style/Checkout.module.css'
import Context from '../../context/CartContext';
import { db } from "../../config/firebase";
import { addDoc, collection, Timestamp } from 'firebase/firestore';

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

    const updateUser = (event) => {
        setUser((user) => ({
            ...user,
            [event.target.name]: event.target.value
        }))
    }

    const getOrder = async (event) => {
        event.preventDefault();
        setLoading(true);
        
        const coleccion = collection(db, 'orders')
        
        try {

            const order = {
                buyer: user,
                cart: cart,
                total: total(),
                fecha: Timestamp.now()
            }

            const orderRef = await addDoc(coleccion, order)

        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false);
        }
    }

    return (
        <>
            <form className={style.form}>
                <div className={style.formInfo}>
                    <label className={style.label}>Nombre: <input type="text" name='name' className={style.inputInfo} onChange={updateUser} /></label>
                    <label className={style.label}>Email: <input type="text" name='email' className={style.inputInfo} onChange={updateUser} /></label>
                    <label className={style.label}>Repetir email: <input type="text" name='repeatEmail' className={style.inputInfo} onChange={updateUser} /></label>
                    <label className={style.label}>Telefono: <input type="text" name='phone' className={style.inputInfo} onChange={updateUser} placeholder='+54 354 ...' /></label>
                </div>

                <button className={style.buy} onClick={getOrder}>Comprar</button>
            </form>
        </>
    )
}

export default Checkout
