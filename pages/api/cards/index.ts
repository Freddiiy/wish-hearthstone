import type { NextApiRequest, NextApiResponse } from 'next'
import { IHearthstonePage } from '../../../util/themes/types/hearthstone.t';
import axios from "axios";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<IHearthstonePage>
    ) {
    const { query: { p, hsClass }, method } = req;
    if (req.method === 'GET') {
        if (Array.isArray(p)) return;
        if (Array.isArray(hsClass)) return;
        const cardPage = await getCards(parseInt(p), hsClass);

        if (cardPage === undefined) return;
        res.status(200).json(cardPage)
    } else {
        res.setHeader('Allow', ['GET'])
        res.status(405).end(`Method ${req.method} Not Allowed`)
    }
}

async function getCards(page: number, hsClass: string) {
    const accessToken = process.env.ACCESS_TOKEN;
    const hsClassQuery = hsClass === "" ? "" : `&class=${hsClass}`;
    const url = `https://eu.api.blizzard.com/hearthstone/cards?locale=en_US&access_token=${accessToken}&page=${page}`
        try {
            const response = await axios.get<IHearthstonePage>(url + hsClassQuery);
            console.log(await response.status)
            if (response.status == 200) {
                const cards = await response.data
                return cards;
            }
        } catch (err) {
            console.log(err)
        }
}