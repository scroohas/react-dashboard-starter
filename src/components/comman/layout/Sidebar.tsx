import { useNavigate } from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate();

  function handleClick(route: string) {
    navigate(route);
  }

  return (
    <>
      <button onClick={() => handleClick("/")}>dashboard</button>
      <button onClick={() => handleClick("/devices")}>devices</button>
      <button onClick={() => handleClick("/login")}>devices</button>
    </>
  );
}

export default Sidebar;
