import {useState} from 'react';

export default function InputeMedium({title='', type='text', value, onChange}){
  const [isFocused, setIsFocused]=useState(false);
  return (
    <div className={'InputMedium'
    + (value.length ? ' filled' : '')
    + (isFocused ? ' focused' : '')}>
      <input type={type}
        onChange={(e)=>onChange(e.target.value)}
        onFocus={()=>setIsFocused(true)}
        onBlur={()=>setIsFocused(false)} />
      <div className='title'>{title}</div>
    </div>
  );
}
