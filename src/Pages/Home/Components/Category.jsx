const Category = ({ category }) => {
    const { strCategory, strCategoryThumb } = category
    return (
            <div className="shadow-xl rounded-lg relative overflow-hidden transition duration-200 hover:-translate-y-2 bg-white">
                <img className=" transition-all z-10 hover:-z-10 w-full  duration-300 rounded-lg" src={strCategoryThumb} alt="" />
                <div className="w-full h-full bg-opacity-70 duration-75 absolute inset-0 opacity-0 hover:opacity-100 p-2 gap-5  bg-black flex  justify-center items-center flex-col">
                    <p className="text-white text-center">Lamb</p>
                    <button className="text-white btn bg-transparent hover:bg-orange-400 rounded-full shadow-inner shadow-black capitalize">See Recipies</button>
                </div>
            </div>
    );
}

export default Category;