import {Request, Response} from 'express';

class StudentsController {
    constructor() {
        
    }

    getStudents(req:Request, res:Response) {
        res.json({
            message:"list of students"
        });
    }

    addStudent(req:Request, res:Response) {
        res.json({
            message:"add student"
        });
    }

    getStudent(req:Request, res:Response){
        res.json({message: "get student " + req.params.id})

    }

    deleteStudent(req:Request, res:Response){
        res.json({
            message:"delete student"
        });
    }

    updateStudent(req:Request, res:Response){
        const { dni, name, surname, email } = req.body;
        const id = req.params.id;
        if (!dni || !name || !surname || !email || !id){
            res.status(400).json({
                message: "Please provide all the fields"
            });
        }
        try {
            res.json({
                message:"updated student"
            });

        } catch (err) {
            if (err instanceof Error) {
                res.status(500).json({
                    message: err.message
                });
            }
        }
    }
}

export default new StudentsController();