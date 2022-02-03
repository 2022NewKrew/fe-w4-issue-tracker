import {atom} from 'recoil';

const issueFilterState=atom({
  key: 'IssueFilterState',
  default: ''
});

export default issueFilterState;
