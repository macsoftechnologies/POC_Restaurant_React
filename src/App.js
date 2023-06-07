import './App.css';
import data from './data.json';
import { useState } from 'react';
import { Input } from "antd";
import { StarFilled } from '@ant-design/icons';
function App() {
 
const [fetchEl, setFetchEl] = useState([])
const { Search } = Input;
const categories = ['hotel','visiting', 'place', 'restaurant']
const categoriesList = {hotel:'hotels',restaurant:'restaurants',place:'visiting places', visiting:'visiting places'}

const onSearch = (value) => {
  
  const filtercategories = [];
  categories.map(category=>(value.toLowerCase().includes(category)?filtercategories.push(categoriesList[category]):null));
  
  console.log(value,"valueeeee")
  if(value !== ''){
        const filterData = data.filter((item)=>filtercategories.indexOf(item.category.toLowerCase())!= -1)
         //item.category.toLowerCase().includes(value.toLowerCase())||item.name.toLowerCase().includes(value.toLowerCase()))
        console.log(filterData);
         setFetchEl(filterData);
      }
      else{
        setFetchEl([])
      }
};
// const getInputHandler =(e)=>{
//  console.log(e.target.value) 

//  setInputEl(e.target.value)
//   console.log('Before if')
//   
// }

  return (
    <div className="App body">
      <div>
        <h1>Project X</h1>
     {/* <input className='input' type='text' value={inputEl} onChange={getInputHandler}/> */}
     <Search
        size="medium"
        placeholder="Type to search"
        allowClear
        style={{ width: 800, paddingBottom: 30, paddingTop: 5 }}
        onSearch={onSearch}
       
        
      />
    <div className='container'>
      <div className='row rowStyle'>
        
    <div className='col-md-12'><ul className='ul'>{fetchEl.map((el)=>{
      return(<li className='li' key={el.id}>
        <img src={el.image} alt='Image could not loaded'/>
        <div className='detailContainer'>
        <h4>{el.name}</h4>
        <p className='fontSpace'>{el.contactInfo}</p>
        <p>{el.address}</p>
        <p>{el.rating}<StarFilled style={{color:'#ffb000'}} /></p>
        </div>
        
      </li>)
     })}</ul>
     </div>
     </div>
     </div> 
    </div>
    </div>
  );
}

export default App;
