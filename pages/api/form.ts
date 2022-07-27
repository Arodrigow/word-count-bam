import { NextApiRequest, NextApiResponse } from "next";

// eslint-disable-next-line import/no-anonymous-default-export
export default (req: NextApiRequest, res: NextApiResponse) => {
    const body = req.body;

    console.log(body.textContent);

    if (!body.file && !body.textContent) {
        // Sends a HTTP bad request error code
        return res.status(400).json({ data: 'File or text not found' });
    }

    res.status(200).json({ data: `${body.file} ${body.textContent}` })
}