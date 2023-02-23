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

const initialValues: contextType = {
   courseCount: 0,
   studentCount: 0,
   instructorCount: 0,
   courseData: [],
   studentData: [],
   instructorData: [],
};

export const RegContext = createContext<contextType>(initialValues);

type Props = {
   children: string | JSX.Element | JSX.Element[];
};

function RegContextProvider({ children }: Props) {
   const [courseData, setCourseData] = useState<courseDetails[]>([]);
   const [studentData, setStudentData] = useState<ViewStudent[]>([]);
   const [instructorData, setInstructorData] = useState<ViewInstructor[]>([]);

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

   const values = {
      courseCount: courseData.length,
      studentCount: studentData.length,
      instructorCount: instructorData.length,
      courseData: courseData,
      studentData: studentData,
      instructorData: instructorData,
   };

   return <RegContext.Provider value={values}>{children}</RegContext.Provider>;
}

export default RegContextProvider;
