import { SpecificationsRepository } from "../../repositories/implementations/SpecificationsRepository";
import { CreateSpecificationController } from "./CreateSpecificationController";
import { CreateSpecificationSUseCase } from "./CreateSpecificationUseCase";


const specificationsRepository = new SpecificationsRepository();

const createSpecificationUseCase = new CreateSpecificationSUseCase(specificationsRepository); 

const createSpecificationController = new CreateSpecificationController(createSpecificationUseCase); 

export { createSpecificationController };


