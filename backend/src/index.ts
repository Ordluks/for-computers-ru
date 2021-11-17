import { open } from 'sqlite'
import sqlite3 from 'sqlite3'
import server from './server'
import config from './config'
import UsersDAO from './api/users/dao'


sqlite3.verbose()

open({
	filename: config.databasePath,
	driver: sqlite3.Database
})
.then(db => {
	console.log('\nDatabase connected')
	server.listen(config.port, () => {
		console.log(`Server started on port ${config.port}`)
		UsersDAO.injectDB(db)
	})
})