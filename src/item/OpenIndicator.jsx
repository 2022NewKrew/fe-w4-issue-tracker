export default function OpenIndicator({isOpen}){
  return (
    <div className={'OpenIndicator '+(isOpen ? 'open' : 'close')}>
      {isOpen ? '열린 이슈' : '닫힌 이슈'}
    </div>
  );
}
