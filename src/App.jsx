import {
  Route,
  BrowserRouter as Router,
  Routes
} from 'react-router-dom';
import IssueList from './component/IssueList';
import {RecoilRoot} from 'recoil';
import {Suspense} from 'react';

export default function App(){
  return (
    <RecoilRoot>
      <Suspense fallback={<div>Loading...</div>}>
        <Router>
          <Routes>
            <Route path='/' element={<IssueList />}/>
            <Route path='*' element={null}/>
          </Routes>
        </Router>
      </Suspense>
    </RecoilRoot>
  );
}
