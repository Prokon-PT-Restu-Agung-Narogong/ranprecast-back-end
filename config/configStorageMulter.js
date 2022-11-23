const multer = require("multer");
const path = require("path");


 	// configuration disk storage multer
let configStorageMulter = (location_path)=>{
	return multer.diskStorage({
		// configuration location upload file
		destination: (req, file, cb)=>{
			cb(null, location_path);
		},
		// configuration unique file name
		filename: (req, file, cb)=>{
			cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
		},
	})
}


let multerSingle = ({req_name, location_path})=>{
	return multer({storage: configStorageMulter(location_path)}).single(req_name);
}

let multerMulti = ({req_name, location_path})=>{
	return multer({storage: configStorageMulter(location_path)}).array(req_name,3);
}


module.exports = {
	multerSingle,
	multerMulti
};