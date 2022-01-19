import ItemList from "./ItemList"

function ToDoList( { items, handleDelete} ) {
  return (
    <ul>
      {ItemList.map(item =>{
        <ItemList 
          key={item.id}
          item={item}
          handleDelete={handleDelete}
        />
      })}
    </ul>
  )
}

export default ToDoList
