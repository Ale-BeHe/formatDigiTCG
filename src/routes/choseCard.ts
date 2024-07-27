import { Router } from "express";
import cron from 'node-cron'



const router = Router()
cron.schedule('0 12 * * *',()=>{
    console.log('Ejecutando tarea programada a las 12:00 PM todos los días')
})



router.get('/',(_req,res)=>{
    res.send('terst cron')
})

export default router