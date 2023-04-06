import { Routes, Route } from "react-router-dom";
import Layout from "./component/Layout/Index";
import Home from "./Pages/Home/Index";
import Todos from "./Pages/Todos/Index";
import Nopage from "./Pages/Nopage/Index";
import Edit from "./component/Edit/Index";
import Delete from "./component/Delete/Index";
import { UserContext } from "./component/Table/ThemeContext";
import { useState } from "react";

function App() {
  const [theme, setTheme] = useState(false);

  return (
    <>
      <UserContext.Provider value={{theme, setTheme}}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/todos" element={<Todos />} />
            <Route path="/todos/:id" element={<Todos />} />
            <Route path="/edit" element={<Edit />} />
            <Route path="/delete" element={<Delete />} />
            <Route path="*" element={<Nopage />} />
          </Route>
        </Routes>
      </UserContext.Provider>
    </>
  );
}

export default App;
