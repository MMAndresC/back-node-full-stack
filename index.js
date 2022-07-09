const dotenv = require('dotenv');
const cors = require('cors');
const MongoStore = require('connect-mongo');
const express = require('express');
const session = require('express-session');
const passport = require('passport');

const { connectDb } = require('./src/utils/database/database');
require('./src/utils/auth/index');

const MoviesRoutes = require('./src/api/movies/movies.routes');
const ScreeningsRoutes = require('./src/api/screenings/screenings.routes');
const UserRoutes = require('./src/api/users/users.routes');
const CinemaHallsRoutes = require('./src/api/cinemaHalls/cinemaHalls.routes');
const { isAdmin } = require('./src/utils/middlewares/auth.middleware');


dotenv.config();

const PORT = process.env.PORT || 8000;

const app = express();
connectDb();

//Deshabilita que se pueda consultar con que herramienta esta hecho
app.disabled('x-powered-by'); 

//Metodos autorizados, permitir la conexion con credenciales
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Methods', 'POST, GET, PATCH, PUT, DELETE');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Acess-Control-Allow-Headers', 'Content-type');
    next();
});

//Las rutas que estan autorizadas a acceder
app.use( cors({
    origin: ['http://localhost:8000', 'http://localhost:5000', 'http://localhost:3000', 'http://localhost:4200'],
    credentials: true
}));

//Las cookies
app.use( session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie:{
        maxAge: 60 * 60 * 1000
    },
    store: MongoStore.create({
        mongoUrl: process.env.DB_URL
    }),
}));

app.use(passport.initialize());
app.use(passport.session());

//Limitar el tamaño de las peticiones, para el metodo POST
app.use(express.json({
    limit: '5mb'
}));

//Se asegura que se reciban url con clave-valor, para el metodo POST
app.use(express.urlencoded({
    limit: '5mb',
    extended: true
}));



//Rutas
app.use('/users', UserRoutes);
app.use('/movies', MoviesRoutes); 
app.use('/screenings', ScreeningsRoutes);
app.use('/halls', [isAdmin], CinemaHallsRoutes);

//Gestion de errores

//Recoge el error si no encuentra ninguna ruta que coincida con las definidas
app.use('*', (req, res, next) => {
    return res.status(404).json('Route not found');
});

//Recoge cualquier error que suceda en app
app.use((err, req, res, next) => {
    return res.status(err.status || 500).json(err.message || 'Unexpected error');
});


//Conectar a la db
app.listen(PORT, () => {
    console.log(`Listening in http://localhost:${PORT}`);
});