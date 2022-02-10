import {lazy, Suspense} from 'react';
import {
  Route,
  HashRouter as Router,
  Routes
} from 'react-router-dom';
import {RecoilRoot} from 'recoil';

const IssueList=lazy(()=>import('./component/IssueList'));
const IssueDetail=lazy(()=>import('./component/IssueDetail'));

export default function App(){
  return (
    <RecoilRoot>
      <Suspense fallback={<div>Loading...</div>}>
        <Router>
          <Routes>
            <Route path='/' element={<IssueList />}/>
            <Route path='/issue/:issueID' element={<IssueDetail />}/>
          </Routes>
        </Router>
      </Suspense>
    </RecoilRoot>
  );
}
