import { RouterProvider } from "react-router-dom"
import { router } from "./Route/Route"
import { createContext, useState } from "react"
import ProductProvider from "./context/ProductProvider";

export const CART_CONTEXT = createContext();

function App() {
  const [cart, setCart] = useState(0);

  const value = { cart, setCart };
  return (
    <ProductProvider>
      <CART_CONTEXT.Provider value={value}>

        <div className="max-w-[1440px] mx-auto">
          <RouterProvider router={router} />
        </div>

      </CART_CONTEXT.Provider>
    </ProductProvider>
  )
}

export default App;
