import { Client } from 'pg';

export const client: Client = new Client({
	user: 'postgres',
	password: '201215',
	host: 'localhost',
	database: 'movies',
	port: 5432,
});

export const startDatabase = async(): Promise<void> => {
    await client.connect()
    console.log('Database conectado!')
}
