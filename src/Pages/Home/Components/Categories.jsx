import axios from "axios";
import { useState } from "react";

const Categories = () => {
    const [categories,setCategories] = useState([])
    axios.get('http://localhost:5001/categories')
    .then(data=>setCategories(data.data))
    return (
        <div>
            <h2 className="text-center text-2xl font-bold pb-12">Categories {categories.length}</h2>
        </div>
    );
};

export default Categories;