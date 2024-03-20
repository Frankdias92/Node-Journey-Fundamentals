import { randomUUID } from 'node:crypto'
import { Database } from "./database.js"
import { buildRoutPath } from './utils/build-route-path.js'

const database = new Database()

export const routes = [
    {
        method: 'GET',
        path: buildRoutPath('/comments'),
        handler: (req, res) => {

            const { search } = req.query
            
            const comments = database.select('comments', search ? {
                name: search,
                email: search,
                message: search,
            } : null)
        
            return res.end(JSON.stringify(comments))
        }
    },
    {
        method: 'POST',
        path: buildRoutPath('/comments'),
        handler: (req, res) => {
            const { name, email, message } = req.body
        
            const comment = {
                id: randomUUID(),
                name,
                email,
                message, 
            }

            database.insert('comments', comment)
            
            return res.writeHead(201).end('Create new comment')
    
        }
    },
    {
        method: 'PUT',
        path: buildRoutPath('/comments/:id'),
        handler: (req, res) => {
            const id = req.params.id
            const { name, email, message } = req.body

            database.updata('comments', id, {
                name,
                email,
                message,
            })

            return res.writeHead(204).end()
        }
    },
    {
        method: 'DELETE',
        path: buildRoutPath('/comments/:id'),
        handler: (req, res) => {
            const id = req.params.id

            database.delete('comments', id)
            
            return res.writeHead(204).end()
        }
    }
]