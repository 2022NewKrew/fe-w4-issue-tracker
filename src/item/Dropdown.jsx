import {useEffect, useRef} from 'react';
import CheckOffCircle from '../svg/CheckOffCircle.svg';
import CheckOnCircle from '../svg/CheckOnCircle.svg';

/**
 * @param {object} props
 * @param {any} props.title
 * @param {{label: any, onClick: Function}[]} props.itemArray
 * @param {boolean} props.showSelected
 * @param {number|undefined} props.selectedIndex
 * @param {Function} props.hide
 * @param {boolean} props.left
 */
export default function Dropdown({title, itemArray, showSelected, selectedIndex, toggle, left}){
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

  function isSelectedIndex(index){
    return showSelected && selectedIndex===index;
  }

  function getItems(){
    return itemArray.map(({label, onClick}, index)=>(
      <li key={label}
        className={'item'+(isSelectedIndex(index) ? ' selected' : '') }
        onClick={onClick}
      >
        <span className='label'>{label}</span>
        {showSelected &&
          <span className='checkbox'>
            {selectedIndex===index ? <CheckOnCircle /> : <CheckOffCircle />}
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
