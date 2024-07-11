import fastify from 'fastify'
import cors from '@fastify/cors'
import { createTrip } from './routes/create-trip'
import { confirmTrip } from './routes/confirm-trip'
import { confirmParticipant } from './routes/confirm-participant' // Import the confirmParticipant function
import { serializerCompiler, validatorCompiler } from 'fastify-type-provider-zod'

const app = fastify()

app.register(cors, {
	origin: 'http://localhost:3333', // mudar pro env
})

app.setValidatorCompiler(validatorCompiler)
app.setSerializerCompiler(serializerCompiler)

app.register(createTrip)
app.register(confirmTrip)
app.register(confirmParticipant)

app.listen({ port: 3333 }).then(() => {
	console.log('Server is running')
})
