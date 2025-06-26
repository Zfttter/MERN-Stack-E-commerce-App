//这是一个 路由守卫组件（Protected Route），用来控制哪些页面需要登录（即需要认证）才能访问。
import { Outlet, Navigate } from "react-router-dom"; //而 <Outlet /> 的意思就是：“我留一个位置出来，把下面那些子路由（profile/orders）显示在我这里。

const ProtectedRoutesComponent = ({admin}) => {
  let auth = false;
  if (admin) {
    let adminAuth = true;
    if (adminAuth) auth = true; //如果adminAuth为T 那么auth=true
  } else {
    let userAuth = true;
    if (userAuth) auth = true;
  }
  return auth ? <Outlet /> : <Navigate to="/login" />; //渲染 <Outlet />，也就是你原本想访问的页面 or 渲染 <Navigate to="/login" />，自动跳转到登录页
};

export default ProtectedRoutesComponent