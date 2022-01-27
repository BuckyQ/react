import { useState } from 'react';
import ItemList from './ItemList';
import AddItem from './AddItem';
import { FaCentercode } from 'react-icons/fa';
const AssignTwo = () =>{
    const [items, setItems]=useState([])
    const [newItem, setNewItem] = useState('');

    const handleDelete = (id) =>{ 
        const listItems = items.filter((item) => item.id !== id);
        setItems(listItems);
    }
    const addItem = (item) =>{
        const id = items.length ? items[items.length - 1].id + 1 : 1;
        const myNewItem = {id, item};
        const listItems = [...items, myNewItem];
        setItems(listItems);
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if(!newItem) return;
        console.log(newItem);
        addItem(newItem);
        setNewItem('');
    }

    return (
        <div>
            <h1>To-do List:</h1>
            <AddItem 
                newItem={newItem}
                setNewItem={setNewItem}
                handleSubmit={handleSubmit}
            />
            {items.length ? (
                <ItemList
                    items={items}
                    handleDelete={handleDelete}
                />
            ):(
                <p style={{marginTop:'2rem' }}>Empty List.</p>
            )}
        </div>   
    );

}

export default AssignTwo