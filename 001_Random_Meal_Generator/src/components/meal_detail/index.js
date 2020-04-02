/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';

import './styles.css';

export default function MealDetail(props) {
    function getVideoEmbed(url) {
        if (typeof url !== 'undefined') {
            var embed = url.replace('https://www.youtube.com/watch?v=', '');
            return 'https://www.youtube.com/embed/' + embed;
        }
        
        return '';
    }

    function createIngredient(i) {
        var prop = "props.data.strIngredient" + i.toString();
        // eslint-disable-next-line no-eval
        var x = eval(prop);

        if (x !== '') {
            return (
                <li key={i}>{x}</li>
            );
        };
    }

    return (
        <div class="meal-container">
            <div className="column1">
                <img src={props.data.strMealThumb} alt={props.data.strMeal} />
            </div>
            <div className="column2">
                <h3>{props.data.strMeal}</h3>
                <p>{props.data.strInstructions}</p>
            </div>
            <div className="column3">
                <h3>Ingredients</h3>
                <ul>
                    {
                        [1,2,3,4,5,6,7,8,9,10].map((i) => createIngredient(i))
                    }
                </ul>
            </div>
            <div className="column4">
                <h3>Video Recipe</h3>
                <iframe width="560" height="315" src={getVideoEmbed(props.data.strYoutube)} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
        </div>
    );
}