const { hash, compare } = require('bcryptjs')
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
        const { name, email, password, old_password } = req.body
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

        user.name = name ?? user.name
        user.email = email ?? user.email

        if ( password && !old_password ) {
            throw new AppError("You need to pass the old password")
        }

        if ( password && old_password ) {
            const checkPasswordExits = await compare(old_password, user.password)

            if (!checkPasswordExits) {
                throw new AppError("The old password dont match, try again")
            }

            user.password = await hash(password, 8)
        }

    


        await database.run(
            `
                UPDATE users SET
                name = ?,
                email = ?,
                password = ?,
                updated_at = DATETIME('now')
                WHERE id = ?

            `, [user.name, user.email, user.password, id]
        )

        return res.json()
    }    
}

module.exports = UserController