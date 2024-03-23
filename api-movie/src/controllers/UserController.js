const { hash } = require('bcryptjs')
const AppError = require('../utils/AppError')

const sqliteConnection = require('../database/sqlite')

class UserController {
    async create(req, res) {
        const { name, password, email } = req.body

        const database = await sqliteConnection()
        const checkUserExists = await database.get(
            'SELECT * FROM users WHERE email = (?)', [email]
        )

        if (checkUserExists) {
            throw new AppError('This e-mail adress already have')
        }

        const hashedPassword = await hash(password, 8)
        
        await database.run(
            'INSERT INTO users (name, email, password) VALUES (?, ?, ?)',
            [name, email, hashedPassword]
        )
        
        res.status(201).json()
    }


    async update(req, res) {
        const { name, email } = req.body
        const { id } = req.params

        const database = await sqliteConnection()
        const user = await database.get(
            'SELECT * FROM users WHERE id = (?)', [id]
        )

        if (!user) {
            throw new AppError('User not found')
        }

        const userWithUpdateEmail = await database.get(
            'SELECT * FROM users WHERE email = (?)', [email]
        )

        if (userWithUpdateEmail && userWithUpdateEmail.id !== id) {
            throw new AppError('This e-mail adress already has in use')
        }

        user.name = name
        user.email = email


        await database.run(
            `
                UPDATE users SET
                name = ?,
                email = ?,
                updated_at = ?
                WHERE id = ?

            `, [user.name, user.email, new Date(), user.id]
        )

        return res.json()
    }    
}

module.exports = UserController