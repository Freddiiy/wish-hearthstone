// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { IHearthstonePage } from '../../../util/themes/types/hearthstone.t';
import axios from "axios";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<IHearthstonePage>

) {
    const { query: { params, p, hsClass }, method } = req;

    if (method === 'GET') {
        if (params === undefined) return;
        if (Array.isArray(params)) return;
        if (Array.isArray(p)) return;
        if (Array.isArray(hsClass)) return;
        const parsedParams = encodeURI(params)

        const cardPage = await getCard(parsedParams, parseInt(p), hsClass);

        if (cardPage === undefined) return;
        res.status(200).json(cardPage)
    } else {
        res.setHeader('Allow', ['GET'])
        res.status(405).end(`Method ${method} Not Allowed`)
    }
}

async function getCard(query: string, page: number, hsClass: string) {
    const accessToken = process.env.ACCESS_TOKEN
    const url = `https://eu.api.blizzard.com/hearthstone/cards?locale=en_US&access_token=${accessToken}&textFilter=${query}&page=${page}`
    const hsClassQuery = hsClass === "" ? "" : `&class=${hsClass}`;
    if (query.length >= 1) {
        try {
            const response = await axios.get<IHearthstonePage>(url + hsClassQuery);
            if (response.status == 200) {
                const cards = await response.data
                return cards;
            }
        } catch (err) {
            console.log(err)
        }
    }
}