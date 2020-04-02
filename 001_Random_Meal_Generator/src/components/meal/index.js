import React, { useState } from 'react';
import MealDetail from '../../components/meal_detail';
import api from '../../services/api';

import './styles.css';

export default function Meal() {
    const [meal, setMeal] = useState(null);

    function handleMealGeneratorButton(e) {
        api.get('/api/json/v1/1/random.php')
            .then(function(response) {
                setMeal(response.data.meals[0]);
            });
    }
    
    return (
        <section>
            <button type="button" className="generate-meal-btn" onClick={() => handleMealGeneratorButton()}>Get meal</button>
            { meal != null ? <MealDetail data={meal} /> : null }
        </section>
    );
}