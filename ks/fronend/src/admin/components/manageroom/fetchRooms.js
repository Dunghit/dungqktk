import axios from "axios";

export const fetchDeleteRooms = async (id) => {
  console.log(id);
  try {
    const response = await axios.post(
      `http://localhost:5000/api/room/room/delete?id=${id}`
    );
    alert("Đã xóa được phòng");
    console.log(response);
    return response;
  } catch (e) {
    console.log(e);
  }
};
export const updateRooms = async (id, payload) => {
  try {
    const response = await axios.post(
      `http://localhost:5000/api/room/room/update?id=${id}`,
      {
        description: "sdsds",
        origin_price: 700000,
        price: 600000,
        amount: 1,
        quality: "luxury",
        image: "https://media.timeout.com/images/105859033/image.jpg",
        type: "couple",
        status: "empty",
      }
    );
    return response;
  } catch (e) {
    console.log(e);
  }
};
