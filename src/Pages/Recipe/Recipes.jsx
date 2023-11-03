import { useState } from "react";
import Category from "../Home/Components/Category";
import axios from "axios";
import Recipe from "./Recipe";

const Recipes = () => {

    const [recipeCategories, setRecipeCategories] = useState([])

    axios.get("http://localhost:5000/recipes")
        .then(res => {
            console.log(res.data)
            setRecipeCategories(res.data)
        }
        )
    return (
        <div className="relative top-28">
            <div className="bg-white p-10 ">
                <div className="text-3xl font-bold pb-12 gap-3 relative">
                    <div className="h-16 w-4 bg-orange-400"></div>
                    <div>
                        <div className="flex  flex-row relative">
                            <p>Recipes</p>
                        </div>
                        <div className="absolute -top-2 text-center -translate-x-20">
                            <p className="text-7xl opacity-10 translate-x-32">Recipes</p>
                        </div>

                    </div>
                </div>
                <div className=" pt-10 grid grid-cols-3 z-40 max-w-[80vw] mx-auto gap-6">
                    {
                        recipeCategories.map(recipe =>
                            <Recipe key={recipe._id}
                                recipe={recipe}></Recipe>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Recipes;