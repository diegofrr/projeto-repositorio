import RoutesApp from './routes';
import GlobalStyled from './pages/styles/global';
import { ToastContainer } from 'react-toastify';

export default function App() {
  return(
    <>
      <GlobalStyled />
      <RoutesApp />
      <ToastContainer
      position='bottom-left'
      autoClose={3000} />
    </>
  )
};
