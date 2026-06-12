import { Router } from "express";
import { validate } from "../../shared/middleware/validate.middleware.js";
import { authController } from "./auth.controller.js";
import { registerSchema } from "./dto/register.dto.js";
import { loginSchema } from "./dto/login.dto.js";
import { requireAuth } from "../../shared/middleware/auth.middleware.js";
import { authRateLimit } from "../../shared/middleware/rateLimit.middleware.js";


const router = Router();

router.post('/register',authRateLimit, validate(registerSchema), authController.register);
router.post('/login',authRateLimit,  validate(loginSchema), authController.login);
router.post('/refresh',authRateLimit, authController.refresh);
router.post('/logout', authController.logout);
router.get('/me',requireAuth,authController.me)



export default router;


