import prismaClient from "../../prisma"

class ListLeadService {
    async execute(){

        const listUsers = prismaClient.lead.findMany({
            orderBy: {
                createdAt: 'asc',
            }
        }) 

        return listUsers
    }
}

export {ListLeadService}