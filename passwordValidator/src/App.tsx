
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import PasswordValidator from './components/PasswordValidator';

const App: React.FC = () => {

  console.log('test')
  return (
    <Router>
      
        <Routes>
          
          <Route path="/password-validator" element={<PasswordValidator />} />
        </Routes>
      
    </Router>
  );
};

export default App;
