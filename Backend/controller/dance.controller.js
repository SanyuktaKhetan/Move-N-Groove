//import DanceCourse from './models/danceCourse.model.js';
import DanceCourse from '../model/D_Course.js'
//retrieve the course data
export const getCourse = async (req, res) => {
  try {
    const courses = await DanceCourse.find(); 
    console.log("Fetching Dance Course data...");
    res.status(200).json(courses);
  } catch (error) {
    console.log("Error: ", error);
    res.status(500).json(error);
  }
};
