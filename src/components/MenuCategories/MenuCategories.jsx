import React, { useState, useRef, useEffect } from 'react'
import { listCategory } from '../../utils/data'
import styles from './Styles/MenuCategories.module.css'

const MenuCategories = () => {

    const [open, setOpen] = useState(false)

    const categoriesRef = useRef()
    const listCategoriesRef = useRef()
    
    useEffect(() => {
  
      window.addEventListener('click', (e) => {
        if (e.target !== listCategoriesRef.current && e.target !== categoriesRef.current) {
          setOpen(false);
        }
      })
  
    }, [])

    return (
        <>
            <div className={styles.categories}>

                <div className={styles.menuCategories}>
                    <p onClick={() => setOpen(!open)} ref={categoriesRef}>Productos</p>
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
