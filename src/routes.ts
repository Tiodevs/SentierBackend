import { Request, Response, Router } from 'express'

// Middlewares
import { isAuthenticated } from './middlewares/isAuthenticated'

// Controllers
import { CreateUserController } from './controllers/user/CreateUserController'
import { AuthUserController } from './controllers/user/AuthUserController'
import { DetailUserController } from './controllers/user/DetailUserController'
import { EditActiveUserController } from './controllers/user/EditActiveUserController'
import { ListUserContoller } from './controllers/user/ListeUserController'
import { CreateAlbumController } from './controllers/album/CreateAlbumController'
import { CreateFotosController } from './controllers/fotos/CreateFotosController'
import { DeleteFotoController } from './controllers/fotos/DeleteFotoController'
import { DeleteAlbumController } from './controllers/album/DeleteAlbumController'
import { UpdateAlbumController } from './controllers/album/UpdateAlbumController'
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
router.post('/users', new CreateUserController().handle)
// Pega todos os usuarios e seus cursos
router.get('/users', new ListUserContoller().handle)
// Desativa um usuario
router.post('/users/edit', isAuthenticated, new EditActiveUserController().handle)
// Faz a altenticação de login do usuario
router.post('/login', new AuthUserController().handle)
// Pega os detalhes do usuario logado
router.get('/me', isAuthenticated, new DetailUserController().handle)


// ALBUM //
// Cria um album
router.post('/album', new CreateAlbumController().handle)
// Delta um album
router.delete('/album', new DeleteAlbumController().handle)
// Edita um album
router.put('/album', new UpdateAlbumController().handle)

// FOTOS //
// Adicionar foto no album
router.post('/foto', new CreateFotosController().handle)
// Deltar foto
router.delete('/foto', new DeleteFotoController().handle)

export { router }