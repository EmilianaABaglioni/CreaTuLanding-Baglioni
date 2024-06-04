import React, { useState, useRef, useEffect } from 'react'
import { listCategory } from '../../utils/data'
import styles from './Styles/MenuCategories.module.css'

const MenuCategories = () => {

    const [open, setOpen] = useState(false)

    const categoriesRef = useRef()
    const listCategoriesRef = useRef()

    useEffect(() => {

        const handleClick = (e) => {
            if (e.target !== listCategoriesRef.current && e.target !== categoriesRef.current) {
                setOpen(false);
            }
        }

        window.addEventListener('click', handleClick)

        return () => {
            window.removeEventListener('click', handleClick)
        }

    }, [])

    return (
        <>
            <div className={styles.categories}>

                <div className={styles.menuCategories}>
                    <p onClick={() => setOpen(!open)} ref={categoriesRef}>PRODUCTOS</p>
                </div>

                {
                    open && (
                        <ul className={styles.listCategories}>
                            {listCategory.map((category, id) => (
                                <li className={styles.liListCategories} key={id} onClick={() => setOpen(false)} ref={listCategoriesRef}>
                                    {category}
                                </li>
                            ))}
                        </ul>
                    )
                }

            </div>
        </>
    )
}

export default MenuCategories
