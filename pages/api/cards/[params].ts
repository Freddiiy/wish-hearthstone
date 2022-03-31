// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { IHearthstonePage } from '../../../util/themes/types/hearthstone.t';
import axios from "axios";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<IHearthstonePage>

) {
    const { query: { params }, method } = req;

    if (method === 'GET') {
        if (params === undefined) return;
        if (Array.isArray(params)) return;
        const parsedParams = encodeURI(params)

        const cardPage = await getCard(parsedParams);

        if (cardPage === undefined) return;
        console.log(cardPage.cards);
        res.status(200).json(cardPage)
    } else {
        res.setHeader('Allow', ['GET'])
        res.status(405).end(`Method ${method} Not Allowed`)
    }
}

async function getCard(query: string) {
    const accessToken = process.env.ACCESS_TOKEN
    if (query.length >= 1) {
        try {
            const response = await axios.get<IHearthstonePage>(`https://eu.api.blizzard.com/hearthstone/cards?locale=en_US&access_token=${accessToken}&textFilter=${query}`);
            if (response.status == 200) {
                const cards = await response.data
                return cards;
            }
        } catch (err) {
            console.log(err)
        }
    }
}