import React from 'react'
import { useState, useEffect } from 'react'


const NewRecipe = () => {

    const [title, setTitle] = useState()
    const [description, setDescription] = useState()
    const [carbohydrates, setCarbohydrates] = useState()
    const [calories, setCalories] = useState()
    const [image_url, setImage] = useState()

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    }

    const handleDescriptionChange = (e) => {
        setDescription(e.target.value);
    }

    const handleSugarChange = (e) => {
        setCarbohydrates(e.target.value);
    }

    const handleCalorieChange = (e) => {
        setCalories(e.target.value);
    }

    const handleImageChange = (e) => {
        setImage(e.target.value);
    }
    const handleSubmit = (e) => {
       
        const data = {title, description, carbohydrates, calories, image_url}
    
        fetch("http://localhost:3001/recipes", {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                 "Content-Type" : "application/json" 
            }
        })};

  return (
    <div>Ajouter une recette
        <form onSubmit={handleSubmit}> 
                <label>Titre:</label>
                <label htmlFor="titre"></label>
                <input
                  className="textarea"
                  type="text"
                  required value={title} onChange={handleTitleChange}
                  placeholder="titre de la recette"
                ></input>

<label>Description</label>
                <label htmlFor="description"></label>
                <textarea
                  className=""
                  type="text"
                  required value={description} onChange={handleDescriptionChange}
                  placeholder="tapez votre recette"
                ></textarea>

<label>Glucides</label>
                <label htmlFor="glucides"></label>
                <input
                  type="number"
                  required value={carbohydrates} onChange={handleSugarChange}
                ></input>

<label>Calories</label>
                <label htmlFor="calories"></label>
                <input
                  type="number"
                  required value={calories} onChange={handleCalorieChange}  
                ></input>


<label>URL Image</label>
                <label htmlFor="image"></label>
                <input type="text" 
                  className=""
                  required value={image_url} onChange={handleImageChange}
                 
                ></input>
                <button type="submit" value="poster recette">Sauvegarder</button>
            </form>
    </div>
    
    
  )
}

export default NewRecipe;