import { Router } from "express";
import { deleteProfile, getProfile, getProfileById, updateProfile, createProfile } from "../controllers";

const profileRouter: Router = Router();

profileRouter.get('/', getProfile);
profileRouter.get('/:id', getProfileById);
profileRouter.post('/', createProfile)
profileRouter.put('/:id', updateProfile);
profileRouter.delete('/:id', deleteProfile);

export default profileRouter;