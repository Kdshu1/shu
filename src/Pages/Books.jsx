import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'

const Books = () => {
    const [books,setBooks] = useState([

        useEffect(()=>{
            const fetchAllBooks = async ()=>{
                try{
                    const res = await axios.get("http://localhost:8880/books")
                    setBooks(res.data);
                }catch(err){
                    console.log(err);
            }
        }
        fetchAllBooks();
        },[])
    ])
    return <div>
        <h1>Lama Book Shop</h1>
    <div className="books" key={book.id}>
        {books.map(book=>(
            <div className="book">
                {book.cover && <img src={book.cover} alt="" />}
                <h2>{book.title}</h2>
                <p>{book.desc}</p>
                <span>{book.price}</span>
                <button className="delete">Delete</button>
                <button className="update">update</button>
            </div>
        ))}
    </div>
    <button>
        <link> to="/add" Add new Book </link>
        </button>
        </div>
};
export default Books