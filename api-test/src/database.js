import fs from 'node:fs/promises'

const databasePath = new URL('../db.json', import.meta.url)


export class Database {
    #database = {} // tornando database privada '#'

    constructor() {
        fs.readFile(databasePath, 'utf8').then(data => {
            this.#database = JSON.parse(data)
        })
        .catch(() => {
            // cria o arquivo fazio caso não exista
            this.#persist() 
        })
    }
    

    #persist() {
        // convertendo array em string
        fs.writeFile(databasePath, JSON.stringify(this.#database)) 
    }


    // { name: "Franklin", email: "gmail@com"}
    // [ ['name', 'Franklin'], [] ]
    select(table, search) {
        let data = this.#database[table] ?? []

        if (search) {
            data = data.filter(row => {
                return Object.entries(search).some(([key, value]) => {
                    return row[key] && row[key].toLowerCase().includes(value.toLowerCase())
                })
            })
        }

        return data
    }

    insert(table, data) {
        if (Array.isArray(this.#database[table])) {
            this.#database[table].push(data)
        } else {
            this.#database[table] = [data]
        }


        this.#persist() // inserindo e salvando dados em arquivo

        return data
    }



    updata(table, id, data) {
        const rowIndex = this.#database[table].findIndex(row => row.id === id)

        if (rowIndex > -1) {
            this.#database[table][rowIndex] = { id, ...data }
            this.#persist()
        }
    }
    

    
    delete(table, id) {
        // pecorrendo cada um dos registros e procurando id igual que irei receber
        const rowIndex = this.#database[table].findIndex(row => row.id === id)

        if (rowIndex > -1) {
            this.#database[table].splice(rowIndex, 1)
            this.#persist()
        }
    }
    
}
