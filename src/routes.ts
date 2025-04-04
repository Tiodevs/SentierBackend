import { Request, Response, Router } from 'express'

// Middlewares
import { isAuthenticated } from './middlewares/isAuthenticated'

// Controllers
import { CreateLeadController } from './controllers/lead/CreateLeadController'
import { ListLeadController } from './controllers/lead/ListeLeadController'
const router = Router()

// Configuração do envio de arquivos
router.get('/', (req: Request, res: Response) => {
  return res.send(`
    <h1 style='font-family: sans-serif'>
        API Sentier intitucional!!! Aopa :D
    <h1>
  `)
})

// Cria um novo usuario
router.post('/leads', new CreateLeadController().handle)
router.get('/leads', new ListLeadController().handle)


export { router }