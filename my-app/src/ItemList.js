import { FaTrashAlt } from 'react-icons/fa';

const ItemList = ({ items, handleDelete }) => {
    return (
        <ul>
            {items.map((item) => (
                <li className="item" key={item.id}>
                    <label>{item.item}</label>
                    <FaTrashAlt
                        onClick={() => handleDelete(item.id)}
                        role="button"
                        tabIndex="0"
                        aria-label={`Delete${item.item}`}
                    />
                </li>
            ))}
        </ul>
    )
}

export default ItemList
