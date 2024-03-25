const knex = require('../database/knex')


class MoviesController {
    async create (req, res) {
        const { title, description, tags } = req.body
        const { user_id } = req.body
        

        const [movie_id] = await knex('movies').insert({
            title,
            description,
            user_id
        })

        const tagsInsert = tags.map(name => {
            return {
                movie_id,
                name,
                user_id
            }
        })


        await knex("tags").insert(tagsInsert)

        res.json()
    }

    async show (req, res) {
        const { id } = req.params

        const movie = await knex('movies').where({ id }).first()
        const tags = await knex('tags').where({ movie_id: id }).orderBy('name')

            
        return res.json({
            ...movie,
            tags
        })
    }
}

module.exports = MoviesController