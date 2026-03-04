const mongoose = require("mongoose");
const URL = require("../models/url");
const {nanoid} = require("nanoid");

async function handleGenetateShortUrl(req, res) {
    const body = req.body;

    if(!body.url) return res.status(400).json({error: "Url is required"});

    const shortId = nanoid(8);

    await URL.create( {
        shortId      :   shortId,
        redirectUrl  :   body.url,
        visitHistory:    []
    });

    return res.json({shortUrl: shortId});

}


async function handleRedirect(req, res) {
    const shortId = req.params.shortId;

    const entry =  await URL.findByIdAndUpdate(
        shortId,
        {
            $push : {
                visitHistory: {
                    timestamp: Date.now(),
                }
            }
        }
    )

    return res.redirect(entry.redirectUrl);
}


async function handleGetAnalytics(req, res) {
    const shortId = req. params.shortId;

    const entry = await URL.findById(shortId);

    if(!entry) return res.status(404).json({error: "Short URL not found"});

    const visitHistory = entry.visitHistory;

    return res.status(200).json({totalVisits: visitHistory.length, Analytics: visitHistory});
}


module.exports = {
    handleGenetateShortUrl,
    handleRedirect,
    handleGetAnalytics
}
