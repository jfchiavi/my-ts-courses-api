import {Request, Response} from "express";

class CoursesController {
    constructor() {
        
    }

    getCourses(req: Request, res: Response) {
        res.json({
            message: "List of Courses"
        });
    }
    addCourse(req: Request, res: Response) {
        res.json({
                message: "Create a new Courses "
            });
    }

    getCourse(req: Request, res: Response){
        res.json({
            message: "get Courses " + req.params.id
        });
    }

    deleteCourse(req: Request, res: Response){
        res.json({
            message: "Delete Course " + req.params.id
        });
    }

    updateCourse(req: Request, res: Response){
        res.json({
            message: "Update a Course " + req.params.id
        });
    }
}

export default new CoursesController();