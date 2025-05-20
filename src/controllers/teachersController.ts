import { Request, Response } from 'express';

class TeachersController {
    constructor() {
        
    }

    getTeachers(req:Request, res:Response) {
        res.json({ message: "List of Teacher" });
    }
    addTeacher(req:Request, res:Response) {
        res.json({
                message: "Create a new Teacher"
            });
    }

    getTeacher(req:Request, res:Response){
        res.json({
            message: `get Teacher ${req.params.id}`
        });
    }

    deleteTeacher(req:Request, res:Response){
        const {id} = req.params;
        res.json({
            message: `Delete Teacher ${id}`
        });
    }

    updateTeacher(req:Request, res:Response){
        res.json({
            message: "Update a Teacher " + req.params.id
        });
    }
}

export default new TeachersController();