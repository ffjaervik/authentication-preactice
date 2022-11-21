import "./App.css";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import Profile from "./Profile";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { user, isAuthenticated, isLoading } = useAuth0();
  return (
    <div className="App">
    {isLoading && <h1>Yo! Hold up a sec!</h1>
    }
 <Profile />
      {!user && <LoginButton />}
      {user && <LogoutButton />}
    </div>
  );
}

export default App;
