import { AuthorizationForm } from "./components/AuthorizationForm";
import { UsersModule } from "./components/UsersModule";
import "./styles.css";

export default function App() {
  return (
    <>
      <div className="Reg"><UsersModule /></div>
      <div className="Auth">
        <AuthorizationForm />
      </div>
    </>

  );
}