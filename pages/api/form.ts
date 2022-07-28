import { NextApiRequest, NextApiResponse } from "next";

const wordCount = (textContent: string): number => {

    const noPunct = textContent.replace(/[.,\/#!$–%\^&\*;:"“'{}=\-_`~()]/g, "").replace(/[\n\t]/g, " ").replace(/\s{2,}/g, " ").toLowerCase();
    const count = new Set(noPunct.split(' ')).size;
    console.log(new Set(noPunct.split(' ')));

    return count - 1;
}

const quotationValue = (wordsCounted: number): number => {
    const value = 0.45 * wordsCounted;
    console.log(wordsCounted);
    console.log(value);
    return value;
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (req: NextApiRequest, res: NextApiResponse) => {
    const textContent = req.body.textContent as string;

    const wordsCounted = wordCount(textContent);
    const value = quotationValue(wordsCounted);

    if (/*!file &&*/ !textContent) {
        // Sends a HTTP bad request error code
        return res.status(400).json({ data: 'File or text not found' });
    }

    res.status(200).json({ data: `${value}` })
}