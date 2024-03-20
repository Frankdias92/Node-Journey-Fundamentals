// const http = require('http')
import http from 'node:http'

import { json } from './middlewares/json.js'
import { routes } from './routes.js'
import { extractQueryParams } from './utils/extract-query-params.js'


const server = http.createServer(async (req, res) => {
    const { method, url } = req

    await json(req, res)  // interceptando rota

    const route = routes.find(route => {
        if (route.method === method && route.path instanceof RegExp) {
            return route.path.test(url)
        } else if (typeof route.path === 'string') {
            const regex = (route.method === method && route.path === url)
            return regex
        }
        return false
    })


    if (route) {
        const routeParams = req.url.match(route.path)
        // console.log(routeParams)

        if (routeParams && routeParams.groups) {
            const { query, ...params } = routeParams.groups;
            
            req.params = params;
            req.query = query ? extractQueryParams(query) : {};
        }

        return route.handler(req, res)
    }
    
    
    
    return res.writeHead(404).end('Route not found')
})

server.listen(3333)
// localhost:3333




// CommonJS => require
// ESModules => import/export | require modify file package.json add type


// - HTTP
//  - Método HTTP
//  - URL

// GET, POST, PUT, PATCH, DELETE


// Statefull - Stateless

// Cabeçalhos (Requisição/Resposta) => Metadados


// Query Parameters: URL Stateful => Filtros, paginação
// Route Parameters: Identificação de recurso
// Request Body: Envio de informações de um formulário (HTTPs)

//  