var http = require('http');
var url = require('url');
const puppeteer = require('puppeteer');
var fs = require('fs');

function getLotInfo(lot, lotFilePath) {
  (async () => {

  const browser = await puppeteer.launch();

  try {
      const page2 = await browser.newPage();
      console.log('Copart lot :', lotFilePath);
      
      await page2.goto('https://www.copart.com/lot/'+lot);
      
      await page2.waitFor(500);
      // await page2.screenshot({path: __dirname+'/data/'+lot+'.png'});
      // await page2.waitFor(500);

      page2.waitForSelector('#mainBody > div.inner-wrap > div > div.container-fluid.lot-details-page-print > div > div:nth-child(1) > div:nth-child(3) > div > div.row.no-margin > div.col-md-7.no-padding > div.row.no-margin > div.col-md-7.col-sm-12.col-xs-12.lot-mid-col > div:nth-child(1) > div > div > div > div > div > div > div.lot-details-content > div:nth-child(1) > div > div > div:nth-child(2) > div > span').then(() => console.log('Page loaded'));

      var car = [];

      const docTypeHTML = await page2.$$( '[data-uname="lotdetailTitledescriptionvalue"]');
      if (docTypeHTML.length > 0) {
          var docType = await (await docTypeHTML[0].getProperty('textContent')).jsonValue();
          docType = docType.trim();
          console.log(docType);
          car.push(docType);
      }

      const odometerHTML = await page2.$$( '[data-uname="lotdetailOdometervalue"]');
      if (odometerHTML.length > 0) {
          var odometer = await (await odometerHTML[0].getProperty('textContent')).jsonValue();
          odometer = odometer.trim();
          console.log(odometer);
          car.push(odometer);
      }

      const sellerHTML = await page2.$$( '[data-uname="lotdetailSellervalue"]');
      if (sellerHTML.length > 0) {
          var seller = await (await sellerHTML[0].getProperty('textContent')).jsonValue();
          seller = seller.trim();
          console.log(seller);
          car.push(seller);
      }

      const pdamageHTML = await page2.$$( '[data-uname="lotdetailPrimarydamagevalue"]');
      if (pdamageHTML.length > 0) {
          var pdamage = await (await pdamageHTML[0].getProperty('textContent')).jsonValue();
          pdamage = pdamage.trim();
          console.log(pdamage);
          car.push(pdamage);
      }

      const sdamageHTML = await page2.$$( '[data-uname="lotdetailSecondarydamagevalue"]');
      if (sdamageHTML.length > 0) {
          var sdamage = await (await sdamageHTML[0].getProperty('textContent')).jsonValue();
          sdamage = sdamage.trim();
          console.log(sdamage);
          car.push(sdamage);
      }
      

      const estValHTML = await page2.$$( '[data-uname="lotdetailEstimatedretailvalue"]');
      if (estValHTML.length > 0) {
          var estVal = await (await estValHTML[0].getProperty('textContent')).jsonValue();
          estVal = estVal.trim();
          console.log(estVal);
          car.push(estVal);
      }
      
      const vinHTML = await page2.$$( '[data-uname="lotdetailVinvalue"]');
      if (vinHTML.length > 0) {
          var vin = await (await vinHTML[0].getProperty('textContent')).jsonValue();
          vin = vin.trim();
          console.log(vin);
          car.push(vin);
      }

      const lotdetailBodystylevalueHTML = await page2.$$( '[data-uname="lotdetailBodystylevalue"]');
      if (lotdetailBodystylevalueHTML.length > 0) {
          var lotdetailBodystyle = await (await lotdetailBodystylevalueHTML[0].getProperty('textContent')).jsonValue();
          lotdetailBodystyle = lotdetailBodystyle.trim();
          console.log(lotdetailBodystyle); 
          car.push(lotdetailBodystyle);   
      }

      const lotdetailColorvalueHTML = await page2.$$( '[data-uname="lotdetailColorvalue"]');
      if (lotdetailColorvalueHTML.length > 0) {
          var lotdetailColorvalue = await (await lotdetailColorvalueHTML[0].getProperty('textContent')).jsonValue();
          lotdetailColorvalue = lotdetailColorvalue.trim();
          console.log(lotdetailColorvalue);
          car.push(lotdetailColorvalue); 
      }

      const lotdetailEnginetypeHTML = await page2.$$( '[data-uname="lotdetailEnginetype"]');
      if (lotdetailEnginetypeHTML.length > 0) {
          var lotdetailEnginetype = await (await lotdetailEnginetypeHTML[0].getProperty('textContent')).jsonValue();
          lotdetailEnginetype = lotdetailEnginetype.trim();
          console.log(lotdetailEnginetype);
          car.push(lotdetailEnginetype);
      }

      const llotdetailCylindervalueHTML = await page2.$$( '[data-uname="lotdetailCylindervalue"]');
      if (llotdetailCylindervalueHTML.length > 0) {
          var lotdetailCylindervalue = await (await llotdetailCylindervalueHTML[0].getProperty('textContent')).jsonValue();
          lotdetailCylindervalue = lotdetailCylindervalue.trim();
          console.log(lotdetailCylindervalue);
          car.push(lotdetailCylindervalue);
      }

      const driverValueHTML = await page2.$$( '[data-uname="DriverValue"]');
      if (driverValueHTML.length > 0) {
          var driverValue = await (await driverValueHTML[0].getProperty('textContent')).jsonValue();
          driverValue = driverValue.trim();
          console.log(driverValue);
          car.push(driverValue);
      }


      const lotdetailFuelvalueHTML = await page2.$$( '[data-uname="lotdetailFuelvalue"]');
      if (lotdetailFuelvalueHTML.length > 0) {
          var lotdetailFuelvalue = await (await lotdetailFuelvalueHTML[0].getProperty('textContent')).jsonValue();
          lotdetailFuelvalue = lotdetailFuelvalue.trim();
          console.log(lotdetailFuelvalue);
          car.push(lotdetailFuelvalue);
      }

      const lotdetailKeyvalueHTML = await page2.$$( '[data-uname="lotdetailKeyvalue"]');
      if (lotdetailKeyvalueHTML.length > 0) {
          var lotdetailKeyvalue = await (await lotdetailKeyvalueHTML[0].getProperty('textContent')).jsonValue();
          lotdetailKeyvalue = lotdetailKeyvalue.trim();
          console.log(lotdetailKeyvalue);
          car.push(lotdetailKeyvalue);
      }

      const lotdetailNotesvalueHTML = await page2.$$( '[data-uname="lotdetailNotesvalue"]');
      if (lotdetailNotesvalueHTML.length > 0) {
          var lotdetailNotesvalue = await (await lotdetailNotesvalueHTML[0].getProperty('textContent')).jsonValue();
          lotdetailNotesvalue = lotdetailNotesvalue.trim();
          console.log(lotdetailNotesvalue);
          car.push(lotdetailNotesvalue);
      }

      // const images = await page2.$$( '[class="img-responsive cursor-pointer thumbnailImg"]');
      // console.log(images.length);
      // for(var imagesIndex = 0;imagesIndex<images.length;imagesIndex++) {
      //  console.log(await images[imagesIndex].getProperty('hd-url'));
      //  var singleImageURL = await (await images[imagesIndex].getProperty('hd-url')).jsonValue();
      //  console.log(singleImageURL);
      // }

      // const photo = await page2.evaluate(() => document.querySelector('#small-img-roll > span:nth-child(2) > img').getAttribute('hd-url'));
      // console.log(photo);
      
      page2.waitForSelector('#small-img-roll > span:nth-child(1) > img').then(() => console.log('Images loaded'));

      const photo1 = await page2.evaluate(() => document.querySelector('#small-img-roll > span:nth-child(1) > img').getAttribute('hd-url'));
      console.log(photo1);
      const photo2 = await page2.evaluate(() => document.querySelector('#small-img-roll > span:nth-child(2) > img').getAttribute('hd-url'));
      console.log(photo2);
      const photo3 = await page2.evaluate(() => document.querySelector('#small-img-roll > span:nth-child(3) > img').getAttribute('hd-url'));
      console.log(photo3);
      const photo4 = await page2.evaluate(() => document.querySelector('#small-img-roll > span:nth-child(4) > img').getAttribute('hd-url'));
      console.log(photo4);
      const photo5 = await page2.evaluate(() => document.querySelector('#small-img-roll > span:nth-child(5) > img').getAttribute('hd-url'));
      console.log(photo5);
      const photo6 = await page2.evaluate(() => document.querySelector('#small-img-roll > span:nth-child(6) > img').getAttribute('hd-url'));
      console.log(photo6);
      const photo7 = await page2.evaluate(() => document.querySelector('#small-img-roll > span:nth-child(7) > img').getAttribute('hd-url'));
      console.log(photo7);
      const photo8 = await page2.evaluate(() => document.querySelector('#small-img-roll > span:nth-child(8) > img').getAttribute('hd-url'));
      console.log(photo8);
      const photo9 = await page2.evaluate(() => document.querySelector('#small-img-roll > span:nth-child(9) > img').getAttribute('hd-url'));
      console.log(photo9);
      const photo10 = await page2.evaluate(() => document.querySelector('#small-img-roll > span:nth-child(10) > img').getAttribute('hd-url'));
      console.log(photo10);

      // var dir = __dirname+'/data';
      // if (!fs.existsSync(dir)) {
      //     fs.mkdirSync(dir);
      // }

      fs.appendFileSync(lotFilePath, lot+'</br>'+docType+'</br>'+odometer+'</br>'+seller+'</br>'+pdamage+'</br>'+sdamage+'</br>'+estVal+'</br>'+vin+'</br>'+lotdetailBodystyle+'</br>'+lotdetailColorvalue+'</br>'+lotdetailEnginetype+'</br>'+lotdetailCylindervalue+'</br>'+driverValue+'</br>'+lotdetailFuelvalue+'</br>'+lotdetailKeyvalue+'</br>'+lotdetailNotesvalue+"\n");

      var photos = [];
      photos.push(photo1);
      photos.push(photo2);
      photos.push(photo3);
      photos.push(photo4);
      photos.push(photo5);
      photos.push(photo6);
      photos.push(photo7);
      photos.push(photo8);
      photos.push(photo9);
      photos.push(photo10);


      // for(var carIndex = 0;carIndex<car.length;carIndex++) {
      //     fs.appendFileSync(lotFilePath, '<span>' + car[carIndex]+'"</span></br>');
      // }

      for(var cuttImageIndex = 0;cuttImageIndex<photos.length;cuttImageIndex++) {
          fs.appendFileSync(lotFilePath, '<img width="90%" src="' + photos[cuttImageIndex]+'"/></br>');
      }
     // page2.close();

  } catch(err) {
    console.log(err);
    fs.appendFileSync(__dirname+'/error.log', err+"\n");
  }

  await browser.close();

  })();
}

// Configure our HTTP server to respond with Hello World to all reqs.
var server = http.createServer(function (req, res) {
  var queryData = url.parse(req.url, true).query;
  res.writeHead(200, {'Content-Type': 'text/html'});

  if (queryData.lot) {

    const saveLot = async () => {
      var lot = queryData.lot;

      // check if lot exist
      var lotFilePath = __dirname+'/data/'+lot+'.html';
      var lotInfo = 'Oops, lot not found :(';
      var watingTime = 8000;

      // lot with specific id not found
      // res.writeHead(404);
      // res.write('Whoops! File not found!');
      
      if (!fs.existsSync(lotFilePath)) {
          console.log('grab the lot');
          const lotInfo = await getLotInfo(lot, lotFilePath);
      } else {        
          console.log(`lot ${lot} exist`);
          watingTime = 1;
      }
      
      await sleep (watingTime);
      console.log('Response to the browser');
      res.write('Copart lot <a href="https://copart.com/lot/' + lot +'" target="_blank">' + lot + '</a></br>');
      res.end(fs.readFileSync(lotFilePath, { encoding: 'utf8' }));

    }

    function sleep(ms) {
      return new Promise(resolve => {
        setTimeout(resolve, ms)
      })
    }

    saveLot()
      .then(result => {
        console.log(result);
      })
      .catch(err => {
        console.error(err);
      })

  } else {
    res.end('Input Copart.com lot in the url like /?lot=44782519');
  }
});

// Listen on port 3000, IP defaults to 127.0.0.1
server.listen(3000);
console.log('http://localhost:3000');