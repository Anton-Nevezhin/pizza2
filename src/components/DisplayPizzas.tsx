import React, { FC } from 'react';
import Pizza from '../models/Pizza';
import SinglePizza from '../components/SinglePizza';

interface DisplayPizzasProps {
    pizzasList: Pizza[];
    updatePizza: (newPizza: Pizza) => void; //сохраняем редактирование
    deletePizza: (id: number) => void; //удаляем пиццу
// </div>
}

const DisplayPizzas: FC<DisplayPizzasProps> = ({ pizzasList, updatePizza, deletePizza }) => {
    return (
        <div className='container'>
            {pizzasList.map((pizza) => {
                return <SinglePizza
                    key={pizza.id}
                    deletePizza = {deletePizza}
                    updatePizza = {updatePizza}//сохраняем редактирование
                    pizza={pizza} />
            })}
        </div>
    )
}

export default DisplayPizzas