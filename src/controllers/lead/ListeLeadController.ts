import { Request, Response } from "express";
import { ListLeadService } from "../../services/lead/ListLeadService";

export class ListLeadController{
    async handle(req: Request, res: Response){

        const listLeadService = new ListLeadService()

        const listLead = await listLeadService.execute()
        
        res.json(listLead)
    }
}