import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Router from "./components/Router/Router";
import Main from "./components/default/Main/Main";
import toast, { Toaster } from 'react-hot-toast';
function App() {
  return (
    <>
      <Router />
    </>
  );
}

export default App;
