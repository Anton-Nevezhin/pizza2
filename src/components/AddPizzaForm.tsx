import React, { ChangeEvent, FormEvent, FC, useState } from 'react';
import Pizza from '../models/Pizza';
import './styles.css';

interface AddPizzaFormProps {
    addPizza: (newPizza: Pizza) => void //Потому что метод ничего не возвращает
}

const initState = {
    title: '',
    price: '',
    img: ''
}

const AddPizzaForm: FC<AddPizzaFormProps> = ({ addPizza }) => {
    const [newPizza, setNewPizza] =
        useState<{title: string, price: string, img: string}>(initState)

        const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
  
            const { name, value } = e.target
            console.log(name)
            console.log(value)
            setNewPizza({
                ...newPizza,
                [name]: value
            })
        }

        const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
            e.preventDefault() //Запрет обновления страницы при нажатии кнопки
            
            const {title, price, img} = newPizza

            if (title && price && img) {
                addPizza({
                    title,
                    img,
                    price: Number(price), //преобразуем введенную строку в число
                    id: Date.now() //Используем в качестве id
                })
                setNewPizza(initState)
            }

        }

        console.log(newPizza)

    return(
        <form onSubmit={handleSubmit}>
            <input
            name = 'title'
            type = 'text'
            placeholder = 'Название'
            onChange={handleChange}
            value = {newPizza.title}
            />
            <input
            name = 'price'
            type = 'text'
            placeholder = 'Стоимость'
            onChange={handleChange}
            value = {newPizza.price}
            />
            <input
            name = 'img'
            type = 'text'
            placeholder = 'Изображение'
            onChange={handleChange}
            value = {newPizza.img}
            />
            <button type = 'submit'>
                + Добавить в меню
            </button>
        </form>
    )
}

export default AddPizzaForm;