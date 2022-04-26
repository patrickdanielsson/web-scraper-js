let webscraper = require('../index.js');

(async () => {

    let result = await webscraper.scrape({
        url: 'https://bscscan.com/token/0xA02d33F34a377f27441d9d32C8697608B9B90847',
        tags: {
            text: {
                "holders": '.mr-3',
                "minted": 'span.hash-tag.text-truncate'
            },
        }
    });

    console.log(result);
})();
