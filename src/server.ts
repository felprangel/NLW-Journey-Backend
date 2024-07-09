import fastify from 'fastify'
import { prisma } from './lib/prisma'

const app = fastify()

app.get('/cadastrar', async () => {
	await prisma.trip.create({
		data: {
			destination: 'São Paulo',
			starts_at: new Date(),
			ends_at: new Date(),
		},
	})

	return 'Registro cadastrado com sucesso!'
})

app.get('/listar', () => {
	const trips = prisma.trip.findMany()
    return trips
})

app.listen({ port: 3333 }).then(() => {
	console.log('Server is running')
})
