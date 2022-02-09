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
 * @param {function} props.onClickItem
 * @param {boolean} props.left
 */
export default function Dropdown({title, itemArray, showSelected, isSelectedIndex,
  toggle, onClickItem, left}){
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
    return itemArray.map(({itemTitle, value}, index)=>(
      <li key={itemTitle}
        className={'item'+(showSelected && isSelectedIndex({itemTitle}, index) ? ' selected' : '') }
        data-value={value}
      >
        <span className='item-title'>{itemTitle}</span>
        {showSelected &&
          <span className='checkbox'>
            {showSelected && isSelectedIndex({itemTitle}, index)
              ? <CheckOnCircle />
              : <CheckOffCircle />}
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
      <ul className='item-container' onClick={(e)=>{
        const value=e.target.closest('li').getAttribute('data-value');
        onClickItem(value);
      }}>
        {getItems()}
      </ul>
    </div>
  );
}
