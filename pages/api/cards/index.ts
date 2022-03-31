import type { NextApiRequest, NextApiResponse } from 'next'
import { IHearthstonePage } from '../../../util/themes/types/hearthstone.t';
import axios from "axios";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<IHearthstonePage>

) {
    if (req.method === 'GET') {
        const cardPage = await getCards();

        if (cardPage === undefined) return;
        res.status(200).json(cardPage)
    } else {
        res.setHeader('Allow', ['GET'])
        res.status(405).end(`Method ${req.method} Not Allowed`)
    }
}

async function getCards() {
    const accessToken = process.env.ACCESS_TOKEN;
        try {
            const response = await axios.get<IHearthstonePage>(`https://eu.api.blizzard.com/hearthstone/cards?locale=en_US&access_token=${accessToken}`);
            console.log(await response.status)
            if (response.status == 200) {
                const cards = await response.data
                return cards;
            }
        } catch (err) {
            console.log(err)
        }
}