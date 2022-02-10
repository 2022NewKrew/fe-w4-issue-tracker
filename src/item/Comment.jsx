import AuthorIndicator from './AuthorIndicator';
import EmojiIcon from '../svg/Emoji.svg';
import {getPrettyDate} from '../global';

/**
 * @param {object} props
 * @param {string} props.authorID
 * @param {boolean} props.isIssueAuthor
 * @param {string} props.timestamp
 */
export default function Comment({authorID, timestamp, isIssueAuthor, body}){
  return (
    <div className='Comment'>
      <div className='info'>
        <div className='align-left'>
          <span className='user-id'>{authorID}</span>
          <span className='timestamp'>{getPrettyDate(timestamp)}</span>
        </div>
        <div className='align-right'>
          {isIssueAuthor && <AuthorIndicator />}
          <button className='emoji-button'><EmojiIcon /></button>
        </div>
      </div>
      <div className='body'>
        {body}
      </div>
    </div>
  );
}
