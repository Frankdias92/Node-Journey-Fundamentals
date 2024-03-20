export async function json(req, res) {
    const buffers = []

    for await ( const chunk of req) {
        buffers.push(chunk)
    }

    try {
        req.body = JSON.parse(Buffer.concat(buffers).toString())
    } catch {
        req.body = null
    }

    res.setHeader('Content-Type', 'aplication/json')
}

// Lidando com dados de entrada e convertendo o corpo em json