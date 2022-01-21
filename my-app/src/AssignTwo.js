import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import { FaPlus } from 'react-icons/fa';

class AssignTwo extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            list: '',
        };
        this.handleDelete = this.handleDelete.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.setNewItem = this.setNewItem.bind(this);
        this.addItem = this.addItem.bind(this);
        this.setAndSaveItem = this.setAndSaveItem.bind(this);
    };

    setAndSaveItem(newItem){
        this.setState({list:newItem});
    };
    
    addItem (item) {
        console.log(item);
        const id = this.state.list.length ? this.state.list[this.state.list.length - 1].id + 1 : 1;
        const myNewItem = {id, item};
        const listItem = [...item, myNewItem];
        this.setAndSaveItem(listItem);
    };
    
    handleSubmit(e) {
       e.preventDefault();
       console.log(this.state.list);
       if(!this.state.list) return;
       console.log(e);
       this.addItem(e.target.value);
      // this.setNewItem('');
    };

    setNewItem(e) {
        console.log(e);
    };

    handleDelete(id) {
        const newList = this.state.list.filter((item) => item.id !== id);
        this.setAndSaveItem(newList);
    };

    render() {
        const { list }  = this.state;
        return (
            <div>
                <h1 className="title">To-do List</h1>
                <form className='addForm' onSubmit={this.handleSubmit}>
                    <label htmlFor="addItem">add</label>
                    <br></br>
                    <input 
                        autoFocus
                        id='addItem'
                        type='text'
                        placeholder='Input event'
                        required
                        value={this.state.list}
                        onChange={(e) => this.setNewItem(e.target.value)}
                    />
                    <button type='submit' aria-label='Add Item'>
                        <FaPlus />
                    </button>
                </form>
                {list.length ? (
                    <ul>
                        {list.map((item) => (
                        <li className="item" key={item.id}>
                            {item.item}
                            <FaTrashAlt 
                            onClick={()=>this.handleDelete(item.id)}
                            role="button" 
                            tabIndex="0"
                            />
                        </li>
                        ))}
                    </ul>
              ) : (
                  <p style={{ marginTop:'2rem' }}>Your List is empty</p>
              )} 
            </div>
        );
    }
}

export default AssignTwo