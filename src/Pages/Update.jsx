import React from 'react'


const Update = () => {
    const [book,setBook] = useState({
        title:"",
        desc:"",
        price:"null",
        cover:"",
    })

const navigate = useNavigate()

const handleChange = (e) =>{
    setBook(prev=>({...prev, [e.target.name]: e.target.value }))
};

const handleClick = async e =>{
    e.preventDefault()
try{
    await axios.post("https://localhost:8880/books", book)
    navigate("/")
}catch(err){

    }
}

    console.log(book)
    return (
        <div className='form'>
            <h1>Add New Book</h1>
            <input type="text" placeholder='title' onChange={handleChange} name="title"/>
            <input type="text" placeholder='desc' onChange={handleChange} name="desc"/>
            <input type="number" placeholder='price' onChange={handleChange} name="title"/>
            <input type="text" placeholder='cover' onChange={handleChange} name="cover"/>


            <buttom> onClick={handleClick}Add</buttom>

        </div>

        
    );
};

export default Update