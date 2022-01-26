export default function LabelSmall({title, textColor, backgroundColor}){
  return (
    <span className='LabelSmall margin-right'
      style={{backgroundColor: backgroundColor, color: textColor}}>
      {title}
    </span>
  );
}
