import { Request, Response } from "express"
import { CreateLeadService } from "../../services/lead/CreateLeadService"

export class CreateLeadController {
    async handle(req: Request, res: Response) {

        const { nome, numero, mensagem } = req.body

        const createLeadService = new CreateLeadService()

        const user = await createLeadService.execute({
            nome,
            numero,
            mensagem
        })

        return res.json(user)

    }
}