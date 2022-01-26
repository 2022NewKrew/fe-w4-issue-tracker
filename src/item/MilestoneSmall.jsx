import MilestoneIcon from '../svg/Milestone.svg';

export default function MilestoneSmall({title}){
  return (
    <span className='MilestoneSmall'>
      <MilestoneIcon className='margin-right' />
      {title}
    </span>
  );
}
