import { Router } from 'express';
import { PlantController } from './PlantController';
import { authMiddleware } from 'auth/authMiddleware';

export const plantsRoutes = Router();

plantsRoutes.get('/:page', PlantController.get);
plantsRoutes.get('/all', PlantController.getAll);
plantsRoutes.get('/:id', PlantController.getOne);
plantsRoutes.delete('/:id', PlantController.remove);
plantsRoutes.post('/', authMiddleware, PlantController.create);
