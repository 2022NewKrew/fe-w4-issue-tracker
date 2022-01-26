import {useState} from 'react';

export default function InputeMedium({title='', type='text', value, setValue}){
  const [isFocused, setIsFocused]=useState(false);
  return (
    <div className='InputMedium'>
      <input type={type}
        onChange={(e)=>setValue(e.target.value)}
        onFocus={()=>setIsFocused(true)}
        onBlur={()=>setIsFocused(false)} />
      <div className={'title'+(isFocused || value.length>0 ? ' focused' : '')}>{title}</div>
    </div>
  );
}
