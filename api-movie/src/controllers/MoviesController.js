const knex = require('../database/knex')


class MoviesController {
    async create (req, res) {
        const { title, description, rating, tags } = req.body
        const { user_id } = req.params
        

        const [movie_id] = await knex('movies').insert({
            title,
            description,
            rating,
            user_id
        })

        const tagsInsert = tags ? tags.map(name => {
            return {
                movie_id,
                name,
                user_id
            }
        }) : [] 

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

    async delete(req, res) {
        const { id } = req.params
        await knex('movies').where({ id }).delete()

        return res.json()
    }

    async index(req, res) {
        const { user_id, title, tags } = req.query 

        let movies

        if (tags) {
            const filterTags = tags.split(',').map(tags => tags.trim())

            movies = await knex('tags')
                .select(
                    [
                        'movies.id',
                        'movies.title',
                        'movies.user_id'
                    ]
                )
                .where('movies.user_id', user_id)
                .whereLike('movies.title', `%${title}`)
                .whereIn('name', filterTags)
                .innerJoin('movies', 'movies.id', 'tags.movies_id')
                .orderBy('movies.title')
        } else {
            movies = await knex('movies')
                .where({ user_id })
                .whereLike('title', `%${title}%`)
                .orderBy('title')

        }

        const userTags = await knex('tags').where({ user_id })
        const movieWithTags = movies.map(movie => {
            const movieTags = userTags.filter(tag => tag.movie_id === movie.id)

            return {
                ...movie,
                tags: movieTags
            }
        })


        return res.json(movies)
    }
    
}

module.exports = MoviesController