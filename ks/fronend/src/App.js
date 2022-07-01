import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Nav";
import Room from "./components/room/Room";
import { Routes, Route } from "react-router-dom";
import Login from "./components/login/Login";
import RoomDetail from "./components/room/RoomDetail";
import OrderRoom from "./components/room/OrderRoom";
import Person from "./components/person/Person";
import OrderList from "./components/person/OrderList";
import Personinfor from "./components/person/Personinfor";
import Layout from "./components/layout/Layout";
import Register from "./components/register/Register";
import LayoutAdmin from "./admin/components/layout/LayoutAdmin";
import User from "./admin/components/user/User";
import UserUpdateForm from "./admin/components/updateform/UserUpdateForm";
import ManageRooms from "./admin/components/manageroom/ManageRooms";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="room" element={<Room />} />
          <Route path="login" element={<Login />} />
          <Route path="detail/:roomId" element={<RoomDetail />} />
          <Route path="order" element={<OrderRoom />} />
          <Route path="register" element={<Register />} />
          <Route path="person" element={<Person />}>
            <Route index element={<Personinfor />} />
            <Route path="list" element={<OrderList />} />
          </Route>
        </Route>
        <Route path="admin" element={<LayoutAdmin />}>
          <Route path="user" element={<User />} />
          <Route path="updateuser" element={<UserUpdateForm />} />
          <Route path="adduser" element={<Register />} />
          <Route path="managerooms" element={<ManageRooms />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
