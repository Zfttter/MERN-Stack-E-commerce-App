import { BrowserRouter, Routes, Route } from "react-router-dom";
// components:
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
//user components:
import RoutesWithUserChatComponent from './pages/user/RoutesWithUserChatComponent';



// publicly available pages:
import HomePage from "./pages/HomePage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import ProductListPage from "./pages/ProductListPage";
import CartPage from "./pages/CartPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

import ProtectedRoutesComponent from './components/ProtectedRoutesComponent'

// protected user pages:
import UserProfilePage from "./pages/user/UserProfilePage";
import UserOrdersPage from "./pages/user/UserOrdersPage";
import UserCartDetailsPage from "./pages/user/UserCartDetailsPage";
import UserOrderDetailsPage from "./pages/user/UserOrderDetailsPage";


// protected admin pages:
import AdminUsersPage from "./pages/admin/AdminUsersPage";
import AdminEditUserPage from "./pages/admin/AdminEditUserPage";
import AdminProductsPage from "./pages/admin/AdminProductsPage";
import AdminCreateProductPage from "./pages/admin/AdminCreateProductPage";
import AdminEditProductPage from "./pages/admin/AdminEditProductPage";
import AdminOrdersPage from "./pages/admin/AdminOrdersPage";
import AdminOrderDetailsPage from "./pages/admin/AdminOrderDetailsPage";
import AdminChatsPage from "./pages/admin/AdminChatsPage";
import AdminAnalyticsPage from "./pages/admin/AdminAnalyticsPage";

function App() {
  return (
    <BrowserRouter> {/*可以包裹任何 React 元素，不仅限于 <Routes></Routes>*/}
      <HeaderComponent />
      <Routes>
        <Route element={<RoutesWithUserChatComponent />}>  {/*后面的子路由带path的都要被包裹在这里面 目的：1*/}
          {/* publicly available routes: */}
          <Route path="/" element={<HomePage />} />
          <Route path="/product-list" element={<ProductListPage />} />
          <Route path="/product-details" element={<ProductDetailsPage />} />
          <Route path="/product-details/:id" element={<ProductDetailsPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="*" element="Page not exists 404" />
        </Route>
        {/* <Route path="/" component={HomePage} />  in previous versions of react-router-dom */}


        {/* user protected routes: */}{/* <Route path="/" component={HomePage} />  in previous versions of react-router-dom */}
        <Route element={<ProtectedRoutesComponent />}> {/*如果未登录，会自动跳转 /login，否则渲染 Outlet*/}
          <Route path="/user" element={<UserProfilePage />} />
          <Route path="/user/my-orders" element={<UserOrdersPage />} />
          <Route path="/user/cart-details" element={<UserCartDetailsPage />} />
          <Route path="/user/order-details" element={<UserOrderDetailsPage />} />
        </Route>


        {/* admin protected routes: */}
        <Route element={<ProtectedRoutesComponent admin={true} />}>
          <Route path="/admin/users" element={<AdminUsersPage />} />
          <Route path="/admin/edit-user" element={<AdminEditUserPage />} />
          <Route path="/admin/products" element={<AdminProductsPage />} />
          <Route path="/admin/create-new-product" element={<AdminCreateProductPage />} />
          <Route path="/admin/edit-product" element={<AdminEditProductPage />} />
          <Route path="/admin/orders" element={<AdminOrdersPage />} />
          <Route path="/admin/order-details" element={<AdminOrderDetailsPage />} />
          <Route path="/admin/chats" element={<AdminChatsPage />} />
          <Route path="/admin/analytics" element={<AdminAnalyticsPage />} />
        </Route>
      </Routes>
      <FooterComponent />
    </BrowserRouter>
  );
}

export default App;

