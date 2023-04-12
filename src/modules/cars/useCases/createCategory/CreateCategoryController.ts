import { Response, Request } from "express";

import { CreateCateroryUseCase } from "./CreateCategoryUseCase";

class CreateCategoryController { 
    constructor(private createCategoryUseCase: CreateCateroryUseCase) {}
    
    handle(request: Request, response: Response): Response {
        const { name, description } = request.body; 

        this.createCategoryUseCase.execute({ name, description });

        return response.status(201).send();
    }
} 

export { CreateCategoryController }