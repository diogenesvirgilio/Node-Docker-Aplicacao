import { ICategoriesRespository } from "../../repositories/ICategoriesRepository";

interface IRequest {
    name: string; 
    description: string;
}

class CreateCateroryUseCase {  
    constructor(private categoriesRepository: ICategoriesRespository) {}

    execute({ description, name }: IRequest ): void {
        const categoryAlredyExists = this.categoriesRepository.findByName(name);
    
        if (categoryAlredyExists) {
            throw new Error("Category already exists!");
        }
    
        this.categoriesRepository.create({ name, description });
      }
    } 

export { CreateCateroryUseCase };