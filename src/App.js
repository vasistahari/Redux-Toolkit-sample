import "./App.css";
import Cart from "./components/Cart";
import Dashboard from "./components/Dashboard";
import Products from "./components/Products";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import RootLayout from "./components/RootLayout";
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Dashboard />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
      </Route>
    )
  );
  return (
    <div className="App">
      {/* <Products /> */}
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
