import { useContext } from "react/cjs/react.development";
import DataContext from "../data/DataContext";
import Item from "./Item";
import './Transaction.css'

const Transaction = (props)=>{
    const {items} = props
    const {income,expense} = useContext(DataContext)
    return (
      <div>
      <ul className='item-list'>
        {items.map((element)=>{
            return <Item {...element} key = {element.id}/>
        })}
      </ul>
      <p>รายรับ : {income}</p>
      <p>รายจ่าย : {expense}</p>
      </div>
    );
  }

  export default Transaction