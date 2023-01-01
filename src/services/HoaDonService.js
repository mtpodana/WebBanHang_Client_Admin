import axiosClient from "../axios";
import { store } from "../app/store";
class HoaDonService {
  static getHoaDon = (type) =>
    axiosClient.get(`HoaDon/${type}`, {
      headers: {
        Authorization: store.getState().auth.token,
      },
    });
  static timKiem = (data) =>
    axiosClient.get(`HoaDon/SearchHoaDon?${data}`, {
      headers: {
        Authorization: store.getState().auth.token,
      },
    })
  static chapNhan = (id) => axiosClient.post(`HoaDon/ChapNhanDonHang/${id}`,{});
  static huyDon = (id, data) =>
    axiosClient.post(`HoaDon/HuyDonHang/${id}`, data);
}

export default HoaDonService;
