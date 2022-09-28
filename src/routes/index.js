import {Router} from "express";
import { crearOrden } from "../controllers/mercadopagoController.js";


const router= Router();

router.post('/crearOrden', crearOrden)
export default router;