const puppeteer = require('puppeteer')
const fs = require('fs');
const path = require('path');

(async ()=>{
    const target = path.resolve(__dirname,'../../nav/src/assents/mock/netflixscrape.json');
    const url = "https://hello-nav.github.io/";

    const browser = await puppeteer.launch({headless:false});
    const page = await browser.newPage();
    await page.goto(url)

    const data = await page.evaluate(() => {
        const categories = document.getElementsByClassName('category-item')
        let titlesList=[];
        for (let i = 0; i < categories.length; i++) {
            let listArr = [];
            const title =  categories[i].querySelectorAll('h2')[0].innerText.trim();
            const _lists = categories[i].getElementsByClassName('app-list')[0].querySelectorAll('li')
            for (let j = 0; j < _lists.length; j++) {
                const _title = _lists[j].querySelectorAll('a')[0].getElementsByClassName('title')[0].innerText.trim();
                listArr[j] = {
                    title:_title,
                    link:_lists[j].querySelectorAll('a')[0].getAttribute('href'),
                    keywords:`${_title}`,
                    category:`${title}`,
                    icon:_lists[j].querySelectorAll('a')[0].querySelectorAll('img')[0].getAttribute('src')||
                        _lists[j].querySelectorAll('a')[0].getElementsByClassName('corner-icon-wrap')[0]?.getElementsByClassName('corner-icon')[0].getAttribute('src')
                }
            }
            titlesList[i] = {
                title,
                children:listArr
            };
        }
        return titlesList;
    })

    fs.writeFile(target, JSON.stringify(data, null, 3),  (err) => {
        if (err) {
            console.error(err);
            return;
        };
        console.log("Success");
    });
    await  browser.close()
})()
