import { Navigate } from 'react-router-dom';

function ProtectedRoute({ children }) {
  const storedInfo = localStorage.getItem('storedInfo');

  // Verifica se o storedInfo existe no localStorage
  if (storedInfo && storedInfo.length > 0) {
    return children;
  }

  // Redireciona para a página inicial se o storedInfo não estiver presente
  return <Navigate to="/" replace />;
}

export default ProtectedRoute;
