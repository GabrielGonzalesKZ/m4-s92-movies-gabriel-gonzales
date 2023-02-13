import express, { Application } from 'express';
import { startDatabase } from './database';
import {createMovie,deleteMovie,listMovies,updateMovie,} from './logic';
import { ensureExists, preventName } from './middlewares';

const app: Application = express();
app.use(express.json());

app.post('/movies', preventName, createMovie);
app.get('/movies', listMovies);
app.patch('/movies/:id', preventName, ensureExists, updateMovie);
app.delete('/movies/:id', ensureExists, deleteMovie);

app.listen(3000, async () => {
	await startDatabase();
	console.log('Server conectado!');
});
