import axios from "../axiosConfig";
import AddStudent, { ViewStudent } from "../types/Student";

export async function CreateStudentAPI(studentDetails: AddStudent) {
  const response = await axios.post("/add-student", studentDetails);
  return response.data;
}

export async function ViewStudentAPI(studentDetails: ViewStudent) {
  const response = await axios.get("view-student");
  return response.data;
}
