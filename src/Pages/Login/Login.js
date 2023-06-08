import { signInWithGoogle } from "../../firebase";
const Login = () => {
  return (
    <div>
      <button onClick={signInWithGoogle}>Sign in with google</button>
    </div>
  );
};

export default Login;
