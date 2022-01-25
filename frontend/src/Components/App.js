import "./App.css";
import LoginButton from "./Login";
import LogoutButton from "./Login/Log Out";
import Profile from "./Login/profile";

function App() {
  return (
    <div>
      <LoginButton />
      <Profile />
      <LogoutButton />
    </div>
  );
}

export default App;
