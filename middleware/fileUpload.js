import multer from "multer";
var storage = multer.diskStorage({
    destination : "./uploads",
    filename : (req,file,cb)=>{
        cb(null, file.originalname)
    }
})

export const upload = multer({
    storage : storage
});