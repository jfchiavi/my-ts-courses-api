import express from 'express';
import studentsController from '../controllers/studentsController';
const router = express.Router();


router.get('/', studentsController.getStudents);

router.post('/', studentsController.addStudent);

router.route("/:id")
    .get(studentsController.getStudent)
    .put(studentsController.updateStudent)
    .delete(studentsController.deleteStudent);

export default router;
