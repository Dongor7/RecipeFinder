import React from 'react';
import axios from 'axios';

export default class Main extends React.PureComponent {

    state = {
        recipes: [],
    };

    fetchRecipes = () => {
        axios.get('http://localhost:5000/api/recipe')
            .then(responce => {
                this.setState({recipes: responce.data});
            })
    };

    componentDidMount =() => {
        this.fetchRecipes();
    };

    render() {
        return (
            <main className="container">
                <ul>
                {
                    this.state.recipes.map(recipe => {
                        return (
                            <li key={recipe._id}>
                                <div>{recipe.ingredients.join(',')}</div>
                                <div>{recipe.description}</div>
                            </li>
                        )
                    })
                }
                </ul>
            </main>
        )
    }

}
