import { createServer, Factory, Model, Response } from 'miragejs'
import { faker } from '@faker-js/faker'
interface User{
    name: string,
    email: string,
    createdAt: Date
}

export function makeServer(){
    const server = createServer({

        models:{
            // O meu objeto pode não usar todas as propriedades que possui
            user: Model.extend<Partial<User>>({})
        },

        // Popular o banco de dados do Mirage com muitos dados de uma vez
        factories: {
            user: Factory.extend({
                name(i: number){
                    return `User ${i}`
                },

                email(){
                    return faker.internet.email().toLowerCase()
                },

                createdAt(){
                    return faker.date.weekday()
                }
            })
        },

        seeds(server){
            server.createList('user', 200)
        },

        routes(){
            this.namespace = 'api'
            this.timing = 750 //milisegundos
            // Shorthands
            this.get('/users', function(schema, request) {
                const { page = 1, per_page = 10} = request.queryParams

                const total = schema.all('user').length
                const pageStart = (Number(page) - 1) * Number(per_page)
                const pageEnd = pageStart + Number(per_page)

                const users = this.serialize(schema.all('user')) 
                     .users.slice(pageStart, pageEnd)

                /*
                    Paginação: Sempre que for paginar, devolver o número total de registros como metadado
                    Metadado: É uma informação secundária, sobre a informação principal
                    Headers: Forma como os metadados são enviados
                */

               return new Response(
                200,   
                {'x-total-count': String(total)},
                {users}
              )


            })
            this.post('/users')
            
            //Para evitar conflito de namespace com as API routes do NExt
            this.namespace = ''   
            this.passthrough()
        }
    })
}