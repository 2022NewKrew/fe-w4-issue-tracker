import {useEffect, useRef} from 'react';
import CheckOffCircle from '../svg/CheckOffCircle.svg';
import CheckOnCircle from '../svg/CheckOnCircle.svg';

/**
 * @param {object} props
 * @param {any} props.title
 * @param {{itemTitle: any, onClick: function}[]} props.itemArray
 * @param {boolean} props.showSelected
 * @param {function} props.isSelectedIndex
 * @param {function} props.toggle
 * @param {boolean} props.left
 */
export default function Dropdown({title, itemArray, showSelected, isSelectedIndex, toggle, left}){
  const dropdownRef=useRef(null);

  useEffect(()=>{
    function toggler(e){
      if(dropdownRef.current && !dropdownRef.current.contains(e.target)){
        toggle();
      }
    }
    document.addEventListener('click', toggler);
    return ()=>document.removeEventListener('click', toggler);
  }, [toggle]);

  function getItems(){
    return itemArray.map(({itemTitle, onClick}, index)=>(
      <li key={itemTitle}
        className={'item'+(isSelectedIndex({itemTitle}, index) ? ' selected' : '') }
        onClick={onClick}
      >
        <span className='item-title'>{itemTitle}</span>
        {showSelected &&
          <span className='checkbox'>
            {isSelectedIndex({itemTitle}, index) ? <CheckOnCircle /> : <CheckOffCircle />}
          </span>
        }
      </li>
    ));
  }

  return (
    <div ref={dropdownRef} className={`Dropdown ${left ? 'left' : 'right'}`}>
      <h2 className='title'>
        {title}
      </h2>
      <ul className='item-container'>
        {getItems()}
      </ul>
    </div>
  );
}
