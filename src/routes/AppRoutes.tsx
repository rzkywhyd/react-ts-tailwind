import { Routes, Route } from "react-router";
import ProductList from "../pages/customer/product/ProductList";
// import SignInSide from "../components/SignIn/SignIn";
import MainLayout from "../layouts/MainLayout";
import ProductDetail from "../pages/customer/product/ProductDetail";

export const AppRoutes = () => {
  return (
    <>
      <Routes>
        {/* <Route path="/signin" element={<SignInSide />} /> */}
        <Route path="/" element={<MainLayout />}>
          <Route path="/product" element={<ProductList />} />
          <Route path="/product/:slug" element={<ProductDetail />} />
        </Route>
      </Routes>
    </>
  );
};
