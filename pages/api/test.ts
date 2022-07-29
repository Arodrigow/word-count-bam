import { NextApiRequest, NextApiResponse } from "next";
import nextConnect from "next-connect";
import multer from "multer";
import textract from "textract";
import { wordCount, quotationValue } from "./form";

const storage = multer.memoryStorage();
const upload = multer({ storage });

const handler = nextConnect<NextApiRequest, NextApiResponse>(
    {
        onError(error, req, res) {
            res.status(501).json({ error: `Sorry something Happened! ${error.message}` })
        },
        onNoMatch(req, res) {
            res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
        }
    }
);

handler.use(upload.single('textFile'));

handler.post((req, res) => {
    var value = 0;
    textract.fromBufferWithName(req.file.originalname, req.file.buffer, function (error, text) {
        const count = wordCount(text);
        value = quotationValue(count);
    });
    res.status(200).json({ data: `${value}` });

}
);

export default handler;

export const config = {
    api: {
        bodyParser: false, // Disallow body parsing, consume as stream
    },
};