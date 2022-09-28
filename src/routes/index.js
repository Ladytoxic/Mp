import {Router} from "express";
import { crearOrden, notificacionOrden } from "../controllers/mercadopagoController.js";


const router= Router();

router.post('/crearOrden', crearOrden)
router.post('/notificacionOrden', notificacionOrden)

export default router;