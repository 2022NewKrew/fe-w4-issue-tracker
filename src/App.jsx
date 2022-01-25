import {
  Route,
  BrowserRouter as Router,
  Routes
} from 'react-router-dom';
import IssueList from './component/IssueList';

export default function App(){
  return (
    <Router>
      <Routes>
        <Route path='/' element={<IssueList />}/>
        <Route path='*' element={null}/>
      </Routes>
    </Router>
  );
}
