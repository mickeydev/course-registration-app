import { courseDetails } from "./Course";
import { ViewInstructor } from "./Instructor";
import { ViewStudent } from "./Student";
import { getRegister, tableData } from "./register";

export default interface contextType {
  courseCount: number;
  studentCount: number;
  instructorCount: number;
  courseData: courseDetails[];
  studentData: ViewStudent[];
  instructorData: ViewInstructor[];
  registerData: getRegister[];
  tableData: tableData[];
}
