import { open } from 'sqlite'
import sqlite3 from 'sqlite3'
import server from './server'
import { port, databasePath } from './config'
import UsersDAO from './api/users/dao'


sqlite3.verbose()

open({
	filename: databasePath,
	driver: sqlite3.Database
})
.then(db => {
	console.log('\nDatabase connected')
	server.listen(port, () => {
		console.log(`Server started on port ${port}`)
		UsersDAO.injectDB(db)
	})
})