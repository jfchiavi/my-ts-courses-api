import express, {Request, Response} from "express";
import cors from "cors";
import morgan from "morgan";
import studentsRoutes from './routes/studentsRoutes';
import coursesRoutes  from './routes/coursesRoutes';
import teachersRoutes from './routes/teachersRoutes';

const app = express();


app.use(morgan("dev"));
app.use(cors());
// parse incoming request bodies, for avoid undefined body

app.use(express.json());
     app.use(express.urlencoded({ extended: true }));

// get request to the root of the Api
app.get("/", (req:Request, res:Response) => {
    console.log("Hello World TSCRIPT");
    res.send("Welcome to the API TScript");
});

//for all the routes that start with /students
app.use("/students", studentsRoutes);
app.use("/courses", coursesRoutes);
app.use("/teachers", teachersRoutes);

app.listen(6505, () => {
    console.log("Server is running on port 6505");
});
