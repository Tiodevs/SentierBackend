
import prismaClient from "../../prisma"

interface UserRequest {
    nome: string
    numero: string
    mensagem: string
}

class CreateLeadService {
  async execute({ nome, numero, mensagem }: UserRequest) {

    // Verifica se tem alguim campo vazio
    if (!nome) {
      throw new Error("Nome incompleto")
    }
    if (!numero) {
      throw new Error("Número não informado")
    }
    if (!mensagem) {
      throw new Error("Mensagem não informada")
    }

    // Cria o lead
    const user = await prismaClient.lead.create({
      data: {
        nome: nome,
        numero: numero,
        mensagem: mensagem,
      }
    })

    return user

  }
}

export { CreateLeadService }