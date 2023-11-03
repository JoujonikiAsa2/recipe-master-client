import axios from "axios";
import { useEffect, useState } from "react";
import Category from "./Category";

const Categories = () => {

    const [categories, setCategories] = useState([])
    axios.get('http://localhost:5000/categories')
        .then(data => setCategories(data.data))
        .catch(error => {
            console.log(error.code)
        })

    // useEffect(() => {
    //     fetch("categories.json")
    //         .then(res => res.json())
    //         .then(data => setCategories(data))
    // }, [])

    return (
        <div className=" bg-white rounded-lg py-6 p-6">
            <div className="text-3xl font-bold pb-12 gap-3 relative">
                <div className="h-16 w-4 bg-orange-400"></div>
                <div>
                    <div className="flex  flex-row relative">
                        <p>Categories</p>
                    </div>
                    <div className="absolute -top-2 text-center -translate-x-20">
                        <p className="text-7xl opacity-10 translate-x-32">Categories</p>
                    </div>

                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[80vw] mx-auto">
                {
                    categories.map(category => <Category key={category._id} category={category}></Category>)
                }
            </div>
        </div>
    );
};

export default Categories;