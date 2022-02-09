export default function Tap({icon, title, onClick}){
  return (
    <li onClick={onClick} className='Tap'>
      {icon}{icon && <span className='margin-right'></span>}
      {title}
    </li>
  );
}
