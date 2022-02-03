export default function ButtonMedium({title, onClick}){
  return (
    <button className='ButtonMedium' onClick={onClick}>
      {title}
    </button>
  );
}
