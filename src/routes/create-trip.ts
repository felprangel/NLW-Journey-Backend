import { FastifyInstance } from 'fastify'

export function createTrip(app: FastifyInstance) {
	app.post('/trips', async () => {
        return 'hello world'
    })
}
