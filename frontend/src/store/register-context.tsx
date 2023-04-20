import React, {
   createContext,
   useState,
   useEffect,
   ReactElement,
   JSXElementConstructor,
} from 'react';
import contextType from '../types/contextType';
import { courseDetails } from '../types/Course';
import axios from '../axiosConfig';
import { ViewStudent } from '../types/Student';
import { ViewInstructor } from '../types/Instructor';
import { getRegister, tableData } from '../types/register';
import { GetRegisterAPI } from '../services/RegisterAPI';

const initialValues: contextType = {
   courseCount: 0,
   studentCount: 0,
   instructorCount: 0,
   courseData: [],
   studentData: [],
   instructorData: [],
   registerData: [],
   tableData: [],
   openStat: false,
   openCourseModal: () => { },
   closeCourseModal: () => { },
};

export const RegContext = createContext<contextType>(initialValues);

type Props = {
   children: string | JSX.Element | JSX.Element[];
};

function RegContextProvider({ children }: Props) {
   const [courseData, setCourseData] = useState<courseDetails[]>([]);
   const [studentData, setStudentData] = useState<ViewStudent[]>([]);
   const [instructorData, setInstructorData] = useState<ViewInstructor[]>([]);
   const [registerData, setRegisterData] = useState<getRegister[]>([]);
   const [tableData, setTableData] = useState<tableData[]>([]);
   const [open, setOpen] = React.useState(false);

   async function CourseViewGet() {
      try {
         const response = await axios.get('/view-courses');

         setCourseData(response.data);
      } catch (error: any) {
         console.log(error);
      }
   }

   useEffect(() => {
      CourseViewGet();
   }, []);

   async function StudentViewGet() {
      try {
         const response = await axios.get('/view-students');

         setStudentData(response.data);
      } catch (error: any) {
         console.log(error);
      }
   }

   useEffect(() => {
      StudentViewGet();
   }, []);

   async function InstructorViewGet() {
      try {
         const response = await axios.get('/view-instructors');

         setInstructorData(response.data);
      } catch (error: any) {
         console.log(error);
      }
   }

   useEffect(() => {
      InstructorViewGet();
   }, []);


   async function RegisterViewGet() {
      try {
         const response = await axios.get('/view-offered')

         setRegisterData(response.data);

      } catch (error: any) {
         console.log(error)
      }

   }

   useEffect(() => {
      RegisterViewGet();
   }, [])


   async function TableViewGet() {
      try {
         const response = await axios.get('/view-offered')

         let table: tableData[] = [];

         const data = response.data;

         for (const key in data) {
            table.push({
               id: data[key].id,
               roomNo: data[key].roomNo,
               sectionNo: data[key].sectionNo,
               year: data[key].year,
               semester: data[key].semester,
               time: data[key].time,
               studentName: data[key].student.firstName + " " + data[key].student.lastName,
               subjectName: data[key].course.title,
               teacherName: data[key].instructor.title + " " + data[key].instructor.name,
            })
         }

         setTableData(table)

      } catch (error: any) {
         console.log(error)
      }
   }

   useEffect(() => {
      TableViewGet();
   }, [])

   const handleOpen = () => setOpen(true);

   const handleClose = () => setOpen(false);

   const values = {
      courseCount: courseData.length,
      studentCount: studentData.length,
      instructorCount: instructorData.length,
      courseData: courseData,
      studentData: studentData,
      instructorData: instructorData,
      registerData: registerData,
      tableData: tableData,
      openStat: open,
      openCourseModal: () => setOpen(true),
      closeCourseModal: () => setOpen(false),
   };

   return <RegContext.Provider value={values}>{children}</RegContext.Provider>;
}

export default RegContextProvider;
