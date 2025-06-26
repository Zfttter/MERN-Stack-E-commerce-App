//这个组件负责统一地包住你所有子页面的内容，同时渲染一个公共组件 UserChatComponent（比如右下角的小聊天框）
import { Outlet } from "react-router-dom"; //在这里渲染子路由匹配的页面
import UserChatComponent from "./UserChatComponent";

const RoutesWithUserChatComponent = () => { //路由父壳组件
  return (
    <>
      <UserChatComponent /> {/*← 所有页面都显示这个*/}
      <Outlet />  {/*← 子路由页面会显示在这里*/}
    </>
  );
};

export default RoutesWithUserChatComponent;

