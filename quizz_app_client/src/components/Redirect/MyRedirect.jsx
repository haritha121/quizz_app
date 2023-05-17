import { useNavigate } from "react-router-dom";

// ...

function MyRedirect() {
  const navigate = useNavigate();

  // Redirect to the root path
  navigate("/");

  // Or if you want to conditionally redirect
  // const shouldRedirect = true;
  // if (shouldRedirect) {
  //   navigate('/');
  // }

  return null; // or any other JSX you want to render
}
export default MyRedirect;
