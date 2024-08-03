const express = require('express');

const { fetchAllFileAndDirectory,
    createDirectory,
    uploadFile,
    uploadMultipleFile,
    deleteFileorDirectory,
    deleteMultipleDirectoryOrFile
} = require('../controllers/filemanager');

const router = express.Router();


router.get('/get-directory/:directory(*)', fetchAllFileAndDirectory);
router.post('/create-folder/:directory(*)', createDirectory);
router.post('/upload/:directory(*)', uploadFile);
router.post('/upload-multiple-file/:directory(*)', uploadMultipleFile);
router.delete('/delete/:directory(*)',deleteFileorDirectory);
router.delete('/delete-multiple/:directory(*)',deleteMultipleDirectoryOrFile);



module.exports = router