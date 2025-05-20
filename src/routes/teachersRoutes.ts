import express from 'express';
import teachersController from '../controllers/teachersController';
const router = express.Router();

router.get('/', teachersController.getTeachers);

router.post('/', teachersController.addTeacher);

router.route("/:id")
    .get(teachersController.getTeacher)
    .put(teachersController.updateTeacher)
    .delete(teachersController.deleteTeacher);

export default router;
