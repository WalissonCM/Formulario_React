import { db } from "@/services/firebase"
import { child, get, ref, remove, update } from "firebase/database"



export default function handler(req, res) {

    const id = req.query.id

    if (req.method == 'GET') {
        get(child(ref(db), 'remedios/' + id)).then(snapshot=>{
            res.status(200).json(snapshot.val())
        })

    } else if (req.method == 'PUT') {
        const dados = req.body
        update(ref(db, 'remedios/' + id), dados)
        res.status(200).json(dados)
    
    } else if (req.method == 'DELETE') {
        remove(ref(db, 'remedios/' + id))  
        res.status(200).json(id)      
    }
}