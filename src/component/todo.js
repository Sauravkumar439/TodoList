import React, { useState, useEffect } from "react";
import todo from "../images/todo.svg";
import "../App.css";
const getLocalData  =()=>{
    const lists = localStorage.getItem("mytodolist");
    if (lists){
        return JSON.parse(lists);   
    }
    else {
        return []; 
    }
}
const Todo = () => {
    const [inputData, SetInputData] = useState("");
    const [items, setItems] = useState(getLocalData());
    const addItem = () => {
        if (!inputData) {

        }
        else {

            setItems([...items, inputData]);
            SetInputData('');
        }

    }
    const deleteItem =(id) => {
        const updateditems  =items.filter((elem,ind) =>{
            return ind !== id;

        })
        setItems(updateditems);
        
             
        


    }
    const removeAll =() =>{
        setItems([]);
    }
    useEffect (()=>{
        localStorage.setItem("mytodolist", JSON.stringify(items))
    },[items]);
    return (
        <>
            <div className="main-div">
                <div className="child-div">
                    <figure>
                        <img src={todo} alt="todologo" />
                        <figcaption> Add Your List Here ✌</figcaption>
                    </figure>
                    <div className="addItems">
                        <input type="text" placeholder="✍ Add Items..." value={inputData} onChange={(e) => SetInputData(e.target.value)} />
                        <i className="fa fa-plus add-btn" title="Add item" onClick={addItem}></i>
                    </div>
                    <div className="showItems">
                        {
                            items.map((elem, ind) => {
                                return (
                                    <div className="eachItem" key={ind}>
                                        <h3> {elem} </h3>
                                        <i className="far fa-trash-alt add-btn" title="Delete item" onClick={()=>deleteItem(ind)}></i>
                                    </div>
                                )

                            })
                        }

                    </div>
                    <div className="showItems">
                        <button className="btn effect04" data-sm-link-text="Remove All" onClick={removeAll}>
                            
                            <span> CHECK LIST</span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Todo;
