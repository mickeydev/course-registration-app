import axios from "../axiosConfig";
import AddCourse, { courseDetails } from "../types/Course";

export async function CreateCourseAPI(courseDetails: AddCourse) {
  const response = await axios.post("/add-Course", courseDetails);
  return response.data;
}

export async function ViewCourseAPI(details: courseDetails) {
  const response = await axios.get("view-Course");
  return response.data;
}
