import { courseDetails } from "./Course";
import { ViewInstructor } from "./Instructor";
import { ViewStudent } from "./Student";

export default interface addRegister {
  roomNo: number;
  time: string;
  sectionNo: number;
  year: number;
  semester: string;
  student_id: number;
  course_id: number;
  instructor_id: number;
}

export interface getRegister {
  id: number;
  roomNo: number;
  sectionNo: number;
  year: number;
  semester: string;
  time: string;
  student: ViewStudent;
  course: courseDetails;
  instructor: ViewInstructor;
}

export interface tableData {
  id: number;
  roomNo: number;
  sectionNo: number;
  year: number;
  semester: string;
  time: string;
  studentName: string;
  subjectName: string;
  teacherName: string;
}
