import "./App.css";
import ContenidoPrivado from "./components/ContenidoPrivado";
import Header from "./components/Header";
import Login from "./components/Login";
import { UserProvider } from "./context/UserContext";

function App() {
  return (
    <UserProvider>
      <Header />
      <Login />
      <ContenidoPrivado />
    </UserProvider>
  );
}

export default App;
