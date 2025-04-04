import { Request, Response, Router } from 'express'

// Middlewares
import { isAuthenticated } from './middlewares/isAuthenticated'

// Controllers
import { CreateLeadController } from './controllers/lead/CreateLeadController'
const router = Router()

// Configuração do envio de arquivos
router.get('/', (req: Request, res: Response) => {
  return res.send(`
    <h1 style='font-family: sans-serif'>
        API Sentier intitucional!!! 👩‍🏫
    <h1>
  `)
})

// Cria um novo usuario
router.post('/leads', new CreateLeadController().handle)


export { router }