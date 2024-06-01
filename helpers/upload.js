import multer from 'multer';
import path from 'node:path';

const tempDir = path.resolve('tmp');

const multerConfig = multer.diskStorage({
  destination: tempDir,
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
})

export const upload = multer({
  storage: multerConfig,
});