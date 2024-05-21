import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import IntroPage from './pages/IntroPage/IntroPage.jsx'
import GamePage from './pages/GamePage/GamePage.jsx';
import ProtectedRoute from './ProtectedRoute.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<IntroPage/>} />
        <Route
          exact path="/jogo"
          element={(
            <ProtectedRoute>
              <GamePage />
            </ProtectedRoute>
          )}
        />
      </Routes>
    </Router>
  )
}

export default App;