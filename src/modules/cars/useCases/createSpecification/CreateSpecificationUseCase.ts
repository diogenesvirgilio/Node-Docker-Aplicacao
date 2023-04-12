import { ISpecificationsRepository } from "../../repositories/ISpecificationsRepository";


interface IRequest {
    name: string;
    description: string;
}
class CreateSpecificationSUseCase { 
    constructor(private specificationsRepository: ISpecificationsRepository){}
    
    execute({name, description }: IRequest): void {
        const specificationAlreadyExists = this.specificationsRepository.findByName(name);

        if(specificationAlreadyExists) {
            throw new Error("Especification already exists!");
        }
        
        this.specificationsRepository.create({
           name, 
           description, 
        });
    }
} 

export { CreateSpecificationSUseCase };