import { createServer, Factory, Model } from 'miragejs'
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
            server.createList('user', 10)
        },

        routes(){
            this.namespace = 'api'
            this.timing = 750 //milisegundos
            // Shorthands
            this.get('/users')
            this.post('/users')
            
            //Para evitar conflito de namespace com as API routes do NExt
            this.namespace = ''   
            this.passthrough()
        }
    })
}