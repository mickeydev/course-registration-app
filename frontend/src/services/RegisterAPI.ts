import axios from "../axiosConfig";
import addRegister, { getRegister } from "../types/register";

export async function CreateRegisterAPI(newRegister: addRegister) {
  const response = await axios.post("/register");
  return response.data;
}

export async function GetRegisterAPI() {
  const response = await axios.get("/view-offered");
  return response.data;
}
