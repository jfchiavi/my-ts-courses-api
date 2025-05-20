import express from 'express';
import coursesController from '../controllers/coursesController';
const router = express.Router();


router.get('/', coursesController.getCourses);

router.post('/', coursesController.addCourse);
//router.post('/registerStudent',coursesController.registerStudent);


router.route("/:id")
    .get(coursesController.getCourse)
    .put(coursesController.updateCourse)
    .delete(coursesController.deleteCourse);

export default router;