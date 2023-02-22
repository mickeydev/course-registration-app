import axios from "../axiosConfig";
import AddInstructor, { ViewInstructor } from "../types/Instructor";

export async function CreateInstructorAPI(instructorDetails: AddInstructor) {
  const response = await axios.post("/add-Instructor", instructorDetails);
  return response.data;
}

export async function ViewInstructorAPI(instructorDetails: ViewInstructor) {
  const response = await axios.get("view-instructors");
  return response.data;
}
