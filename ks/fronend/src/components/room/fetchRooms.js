import axios from "axios";
const URL = "http://localhost:5000/api";
export const fetchRooms = async () => {
  try {
    const response = await axios.get(`${URL}/room/room/list`);
    return response;
  } catch (e) {
    console.log(e);
  }
};
export const fetchRoomDetail = async (roomId) => {
  try {
    const response = await axios.get(`${URL}/room/room/get?id=${roomId}`);
    return response;
  } catch (e) {
    console.log(e);
  }
};
export const fetchOrderRoom = async (
  roomId,
  customerId,
  startDate,
  endDate
) => {
  console.log(roomId, customerId, startDate, endDate);
  try {
    const response = await axios.post(`${URL}/order/order/create`, {
      customer_id: customerId,
      itemParams: {
        room_id: roomId,
        start: startDate,
        end: endDate,
        amount: 4,
      },
    });
    alert("đặt phòng thành công");
    return response;
  } catch (error) {
    if (error.response.data.error === "Room already rented") {
      alert("phòng đã được đặt");
    }
  }
};
