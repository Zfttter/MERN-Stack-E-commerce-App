//这是一个 路由守卫组件（Protected Route），用来控制哪些页面需要登录（即需要认证）才能访问。
import { Outlet, Navigate } from "react-router-dom"; //而 <Outlet /> 的意思就是：“我留一个位置出来，把下面那些子路由（profile/orders）显示在我这里。
import UserChatComponent from "./user/UserChatComponent";

const ProtectedRoutesComponent = ({admin}) => {
  let auth = false;
  if (admin) {
    let adminAuth = true;
    return adminAuth ? <Outlet /> : <Navigate to="/login" />;//渲染 <Outlet />，也就是你原本想访问的页面 or 渲染 <Navigate to="/login" />，自动跳转到登录页
  } else {
    let userAuth = true;
    return userAuth ? (
      <>
        <UserChatComponent /> <Outlet />
      </>
    ) : (
      <Navigate to="/login" />
    );
  }
};

export default ProtectedRoutesComponent
