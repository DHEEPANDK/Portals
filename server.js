const express = require('express');
const bodyParser = require('body-parser');
var http = require('follow-redirects').http;
const cors = require('cors');
const parser = require('xml-js');
const port = 8000;
app = express();
app.use(bodyParser.json());
app.use(cors());

let access;
let access1;
console.log(`server running on port ${port}`)
app.post('/cuslog',(req,res) => {
	var options = {
		'method': 'POST',
		'port': 50000,
		'host': 'dxktpipo.kaarcloud.com',
		'path': 'http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BC_DHEEPAN&receiverParty=&receiverService=&interface=SI_CUSTLOG&interfaceNamespace=http://DheepanKumar.com/CustomerPortal',
		'headers': {
			'Content-Type': 'application/xml',
			'Authorization': 'Basic UE9VU0VSOlRlY2hAMjAyMQ==',
		},
		'maxRedirects': 20
	};
	const cusid = req.body[0].cusid;
	const pwd = req.body[0].pwd;
	 
	const postData = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">
	<soapenv:Header/>
	<soapenv:Body>
	   <urn:ZBAPI_CUSTLOG>
		  <!--You may enter the following 3 items in any order-->
		  <!--Optional:-->
		  <CUSID>${cusid}</CUSID>
		  <!--Optional:-->
		  <PWD>${pwd}</PWD>
		  <!--Optional:-->
		  
	   </urn:ZBAPI_CUSTLOG>
	</soapenv:Body>
 </soapenv:Envelope>`
	const req1 = http.request(options, function (res1) {
		const chunks = [];

		res1.on("data", function (chunk) {
			chunks.push(chunk);
			
		});

		res1.on("end", function (chunk) {
			const body = Buffer.concat(chunks);
			const xml = body.toString();
			const data = parser.xml2json(xml, {compact: true, spaces: 4});
			const resp = JSON.parse(data)['SOAP:Envelope']['SOAP:Body']['ns0:ZBAPI_CUSTLOG.Response'] ['STATUS'];
		     access = resp['STATUS'] ['_text'];
            console.log(access);
			if(access === 'valid'){
				res.send(JSON.stringify("valid"));
			} 
			if(access === 'invalid'){
				res.send(JSON.stringify("invalid"));
			} 
		});

		res1.on("error", function (error) {
			console.error(error);
		});
	});
	req1.write(postData);

	req1.end(); 
});

//customer profile fetch

app.post('/cusprof',(req,res) => {
	var options = {
		'method': 'POST',
		'port': 50000,
		'host': 'dxktpipo.kaarcloud.com',
		'path': 'http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BC_DHEEPAN_CUSTPROF&receiverParty=&receiverService=&interface=SI_cusprof&interfaceNamespace=http://DheepanKumar.com/CustomerPortal',
		'headers': {
			'Content-Type': 'application/xml',
			'Authorization': 'Basic UE9VU0VSOlRlY2hAMjAyMQ==',
		},
		'maxRedirects': 20
	};
	const cusid = req.body[0].cusid;
	console.log(cusid);
	const postData = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">
	<soapenv:Header/>
	<soapenv:Body>
	   <urn:ZBAPI_PROFILE>
		  <!--You may enter the following 2 items in any order-->
		  <!--Optional:-->
		  <CUSID>${cusid}</CUSID>
		  <ITAB>
			 <!--Zero or more repetitions:-->
			 <item>
			 </item>
		  </ITAB>
	   </urn:ZBAPI_PROFILE>
	</soapenv:Body>
 </soapenv:Envelope>`
	const req1 = http.request(options, function (res1) {
		const chunks = [];

		res1.on("data", function (chunk) {
			chunks.push(chunk);
		});

		res1.on("end", function (chunk) {
			const body = Buffer.concat(chunks);
			const xml = body.toString();
			const data = parser.xml2json(xml, {compact: true, spaces: 4});
			const resp = JSON.parse(data)['SOAP:Envelope']['SOAP:Body']['ns0:ZBAPI_PROFILE.Response'] ['ITAB'] ['item'] ;
			res.send(resp);
	
		});

		res1.on("error", function (error) {
			console.error(error);
		});
	});
	req1.write(postData);
	req1.end(); 
});


// Customer profile update


app.post('/cusprofupt',(req,res) => {
	var options = {
		'method': 'POST',
		'port': 50000,
		'host': 'dxktpipo.kaarcloud.com',
		'path': 'http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BC_DHEEPAN_CUSTPROFUPT&receiverParty=&receiverService=&interface=SI_custprofupt&interfaceNamespace=http://DheepanKumar.com/CustomerPortal',
		'headers': {
			'Content-Type': 'application/xml',
			'Authorization': 'Basic UE9VU0VSOlRlY2hAMjAyMQ==',
		},
		'maxRedirects': 20
	};
	const cusid = req.body[0].cusid;
	const cusname = req.body[0].cusname;
	const city = req.body[0].city;
	const pcode = req.body[0].pcode;
	const phone = req.body[0].phone;
	//const country = req.body[0].country;
	const postData = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">
	<soapenv:Header/>
	<soapenv:Body>
	   <urn:ZBAPI_PROFILEUPT>
		  <!--You may enter the following 7 items in any order-->
		  <!--Optional:-->
		  <CITY>${city}</CITY>
		  <!--Optional:-->
		  <COUNTRY></COUNTRY>
		  <!--Optional:-->
		  <CUSID>${cusid}</CUSID>
		  <!--Optional:-->
		  <CUSNAME>${cusname}</CUSNAME>
		  <!--Optional:-->
		  <PCODE>${pcode}</PCODE>
		  <!--Optional:-->
		  <PHONE>${phone}</PHONE>
		  <!--Optional:-->
	   
	   </urn:ZBAPI_PROFILEUPT>
	</soapenv:Body>
 </soapenv:Envelope>`
	const req1 = http.request(options, function (res1) {
		const chunks = [];

		res1.on("data", function (chunk) {
			chunks.push(chunk);
		});

		res1.on("end", function (chunk) {
			const body = Buffer.concat(chunks);
			const xml = body.toString();
			const data = parser.xml2json(xml, {compact: true, spaces: 4});
			const resp = JSON.parse(data)['SOAP:Envelope']['SOAP:Body']['ns0:ZBAPI_PROFILEUPT.Response'] ['STATUS'];
			access1 = resp['STATUS'] ['_text'];
			console.log(access1);
			if(access1 === 'UPDATED'){
				res.send(JSON.stringify("valid"));
			}
			
	
		});

		res1.on("error", function (error) {
			console.error(error);
		});
	});
	req1.write(postData);
	req1.end(); 
});


//customer inquiry data


app.post('/cusinq',(req,res) => {
	var options = {
		'method': 'POST',
		'port': 50000,
		'host': 'dxktpipo.kaarcloud.com',
		'path': 'http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BC_DHEEPAN_venpo&receiverParty=&receiverService=&interface=cin&interfaceNamespace=http://DheepanKumar.com/CustomerPortal',
		'headers': {
			'Content-Type': 'application/xml',
			'Authorization': 'Basic UE9VU0VSOlRlY2hAMjAyMQ==',
		},
		'maxRedirects': 20
	};
	const cusid = req.body[0].cusid;
	
	const postData = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">
	<soapenv:Header/>
	<soapenv:Body>
	   <urn:ZBAPI_CINQUIRY>
		  <!--You may enter the following 2 items in any order-->
		  <!--Optional:-->
		  <CUSID>${cusid}</CUSID>
		  <!--Optional:-->
		  <ITAB>
			 <!--Zero or more repetitions:-->
			 <item>
				
			 </item>
		  </ITAB>
	   </urn:ZBAPI_CINQUIRY>
	</soapenv:Body>
 </soapenv:Envelope>`
	const req1 = http.request(options, function (res1) {
		const chunks = [];

		res1.on("data", function (chunk) {
			chunks.push(chunk);
		});

		res1.on("end", function (chunk) {
			const body = Buffer.concat(chunks);
			const xml = body.toString();
			const data = parser.xml2json(xml, {compact: true, spaces: 4});
			const resp = JSON.parse(data)['SOAP:Envelope']['SOAP:Body']['ns0:ZBAPI_CINQUIRY.Response'] ['ITAB'] ['item'] ;
		
			res.send(resp);
			console.log(resp)
		});

		res1.on("error", function (error) {
			console.error(error);
		});
	});
	req1.write(postData);
	req1.end(); 
});

/*
//customer sales data


app.post('/cussal',(req,res) => {
	var options = {
		'method': 'POST',
		'port': 50000,
		'host': 'dxktpipo.kaarcloud.com',
		'path': 'http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BC_DHEEPAN_cusale&receiverParty=&receiverService=&interface=SI_custsale&interfaceNamespace=http://DheepanKumar.com/CustomerPortal',
		'headers': {
			'Content-Type': 'application/xml',
			'Authorization': 'Basic UE9VU0VSOlRlY2hAMjAyMQ==',
		},
		'maxRedirects': 20
	};
	const cusid = req.body[0].cusid;
	
	const postData = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">
	<soapenv:Header/>
	<soapenv:Body>
	   <urn:ZBAPI_CUSTSALEDT1>
		  <!--You may enter the following 2 items in any order-->
		  <!--Optional:-->
		  <CUSID>${cusid}</CUSID>
		  <!--Optional:-->
		  <ITAB>
			 <!--Zero or more repetitions:-->
			 <item>
				
			 </item>
		  </ITAB>
	   </urn:ZBAPI_CUSTSALEDT1>
	</soapenv:Body>
 </soapenv:Envelope>`
	const req1 = http.request(options, function (res1) {
		const chunks = [];

		res1.on("data", function (chunk) {
			chunks.push(chunk);
		});

		res1.on("end", function (chunk) {
			const body = Buffer.concat(chunks);
			const xml = body.toString();
			const data = parser.xml2json(xml, {compact: true, spaces: 4});
			const resp = JSON.parse(data)['SOAP:Envelope']['SOAP:Body']['ns0:ZBAPI_CUSTSALEDT1.Response'] ['ITAB'] ['item'] ;
			
			res.send(resp);
	
		});

		res1.on("error", function (error) {
			console.error(error);
		});
	});
	req1.write(postData);
	req1.end(); 
});


//customer delivery

app.post('/cusdel',(req,res) => {
	var options = {
		'method': 'POST',
		'port': 50000,
		'host': 'dxktpipo.kaarcloud.com',
		'path': 'http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BC_DHEEPAN_DEL&receiverParty=&receiverService=&interface=SI_custdel&interfaceNamespace=http://DheepanKumar.com/CustomerPortal',
		'headers': {
			'Content-Type': 'application/xml',
			'Authorization': 'Basic UE9VU0VSOlRlY2hAMjAyMQ==',
		},
		'maxRedirects': 20
	};
	const cusid = req.body[0].cusid;
	
	const postData = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">
	<soapenv:Header/>
	<soapenv:Body>
	   <urn:ZBAPI_CUSDEL>
		  <!--You may enter the following 2 items in any order-->
		  <!--Optional:-->
		  <CUSID>${cusid}</CUSID>
		  <!--Optional:-->
		  <ITAB>
			 <!--Zero or more repetitions:-->
			 <item>
				
			 </item>
		  </ITAB>
	   </urn:ZBAPI_CUSDEL>
	</soapenv:Body>
 </soapenv:Envelope>`
	const req1 = http.request(options, function (res1) {
		const chunks = [];

		res1.on("data", function (chunk) {
			chunks.push(chunk);
		});

		res1.on("end", function (chunk) {
			const body = Buffer.concat(chunks);
			const xml = body.toString();
			const data = parser.xml2json(xml, {compact: true, spaces: 4});
			const resp = JSON.parse(data)['SOAP:Envelope']['SOAP:Body']['ns0:ZBAPI_CUSDEL.Response'] ['ITAB'] ['item'] ;
			
			res.send(resp);
	
		});

		res1.on("error", function (error) {
			console.error(error);
		});
	});
	req1.write(postData);
	req1.end(); 
});



// customer invoice


app.post('/cusinv',(req,res) => {
	var options = {
		'method': 'POST',
		'port': 50000,
		'host': 'dxktpipo.kaarcloud.com',
		'path': 'http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BC_DHEEPAN_cusinv&receiverParty=&receiverService=&interface=SI_cusinv&interfaceNamespace=http://DheepanKumar.com/CustomerPortal',
		'headers': {
			'Content-Type': 'application/xml',
			'Authorization': 'Basic UE9VU0VSOlRlY2hAMjAyMQ==',
		},
		'maxRedirects': 20
	};
	const cusid = req.body[0].cusid;
	
	const postData = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">
	<soapenv:Header/>
	<soapenv:Body>
	   <urn:ZBAPICUSINV>
		  <!--You may enter the following 2 items in any order-->
		  <!--Optional:-->
		  <CUSID>${cusid}</CUSID>
		  <!--Optional:-->
		  <ITAB>
			 <!--Zero or more repetitions:-->
			 <item>

			 </item>
		  </ITAB>
	   </urn:ZBAPICUSINV>
	</soapenv:Body>
 </soapenv:Envelope>`
	const req1 = http.request(options, function (res1) {
		const chunks = [];

		res1.on("data", function (chunk) {
			chunks.push(chunk);
		});

		res1.on("end", function (chunk) {
			const body = Buffer.concat(chunks);
			const xml = body.toString();
			const data = parser.xml2json(xml, {compact: true, spaces: 4});
			const resp = JSON.parse(data)['SOAP:Envelope']['SOAP:Body']['ns0:ZBAPICUSINV.Response'] ['ITAB'] ['item'] ;
			
			res.send(resp);
	
		});

		res1.on("error", function (error) {
			console.error(error);
		});
	});
	req1.write(postData);
	req1.end(); 
});




//customer payment

app.post('/cuspay',(req,res) => {
	var options = {
		'method': 'POST',
		'port': 50000,
		'host': 'dxktpipo.kaarcloud.com',
		'path': 'http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BC_DHEEPAN_cuspay&receiverParty=&receiverService=&interface=SI_cuspay&interfaceNamespace=http://DheepanKumar.com/CustomerPortal',
		'headers': {
			'Content-Type': 'application/xml',
			'Authorization': 'Basic UE9VU0VSOlRlY2hAMjAyMQ==',
		},
		'maxRedirects': 20
	};
	const cusid = req.body[0].cusid;
	
	const postData = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">
	<soapenv:Header/>
	<soapenv:Body>
	   <urn:ZBAPI_CUSPAY>
		  <!--You may enter the following 2 items in any order-->
		  <!--Optional:-->
		  <CUSID>${cusid}</CUSID>
		  <!--Optional:-->
		  <ITAB>
			 <!--Zero or more repetitions:-->
			 <item>
			
			 </item>
		  </ITAB>
	   </urn:ZBAPI_CUSPAY>
	</soapenv:Body>
 </soapenv:Envelope>`
	const req1 = http.request(options, function (res1) {
		const chunks = [];

		res1.on("data", function (chunk) {
			chunks.push(chunk);
		});

		res1.on("end", function (chunk) {
			const body = Buffer.concat(chunks);
			const xml = body.toString();
			const data = parser.xml2json(xml, {compact: true, spaces: 4});
			const resp = JSON.parse(data)['SOAP:Envelope']['SOAP:Body']['ns0:ZBAPI_CUSPAY.Response'] ['ITAB'] ['item'] ;
			
			res.send(resp);
	
		});

		res1.on("error", function (error) {
			console.error(error);
		});
	});
	req1.write(postData);
	req1.end(); 
});*/


//CUSTOMER SALES,DELIVERY,INVOICE,PAYMENT
app.post('/slip',(req,res) => {
	var options = {
		'method': 'POST',
		'port': 50000,
		'host': 'dxktpipo.kaarcloud.com',
		'path': 'http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BC_DHEEPAN_venpo&receiverParty=&receiverService=&interface=si_csp&interfaceNamespace=http://DheepanKumar.com/CustomerPortal',
		'headers': {
			'Content-Type': 'application/xml',
			'Authorization': 'Basic UE9VU0VSOlRlY2hAMjAyMQ==',
		},
		'maxRedirects': 20
	};
	let cusid = req.body[0].cusid;
	cusid = "0000"+cusid;
	const typ = req.body[0].typ;
	console.log(cusid)
	const postData = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">
	<soapenv:Header/>
	<soapenv:Body>
	   <urn:ZBAPI_CUSTALL1>
		  <!--You may enter the following 6 items in any order-->
		  <!--Optional:-->
		  <CUSID>${cusid}</CUSID>
		  <!--Optional:-->
		  <TYP>${typ}</TYP>
		  <ITAB>
			 <!--Zero or more repetitions:-->
			 <item>
				
			 </item>
		  </ITAB>
		  <!--Optional:-->
		  <ITAB1>
			 <!--Zero or more repetitions:-->
			 <item>
				<!--Optional:-->
				
			 </item>
		  </ITAB1>
		  <!--Optional:-->
		  <ITAB2>
			 <!--Zero or more repetitions:-->
			 <item>
				<!--Optional:-->
				
			 </item>
		  </ITAB2>
		  <!--Optional:-->
		  <ITAB3>
			 <!--Zero or more repetitions:-->
			 <item>
				<!--Optional:-->
				
			 </item>
		  </ITAB3>
	   </urn:ZBAPI_CUSTALL1>
	</soapenv:Body>
 </soapenv:Envelope>`
	const req1 = http.request(options, function (res1) {
		const chunks = [];

		res1.on("data", function (chunk) {
			chunks.push(chunk);
		});

		res1.on("end", function (chunk) {
			const body = Buffer.concat(chunks);
			const xml = body.toString();
			const data = parser.xml2json(xml, {compact: true, spaces: 4});
			if(typ === "S"){
			const resp = JSON.parse(data)['SOAP:Envelope']['SOAP:Body']['ns0:ZBAPI_CUSTALL1.Response'] ['ITAB'] ['item'] ;
			res.send(resp);}
			else if(typ === "L"){
			const resp1 = JSON.parse(data)['SOAP:Envelope']['SOAP:Body']['ns0:ZBAPI_CUSTALL1.Response'] ['ITAB1'] ['item'] ;
			res.send(resp1);}
			else if(typ === "I"){
				const resp2 = JSON.parse(data)['SOAP:Envelope']['SOAP:Body']['ns0:ZBAPI_CUSTALL1.Response'] ['ITAB2'] ['item'] ;
				res.send(resp2);}
			else if(typ === "P"){
				const resp3 = JSON.parse(data)['SOAP:Envelope']['SOAP:Body']['ns0:ZBAPI_CUSTALL1.Response'] ['ITAB3'] ['item'] ;
				res.send(resp3);}
		});

		res1.on("error", function (error) {
			console.error(error);
		});
	});
	req1.write(postData);
	req1.end(); 
});






//customer credit

app.post('/cuscre',(req,res) => {
	var options = {
		'method': 'POST',
		'port': 50000,
		'host': 'dxktpipo.kaarcloud.com',
		'path': 'http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BC_DHEEPAN_cuscredit&receiverParty=&receiverService=&interface=SI_cuscredit&interfaceNamespace=http://DheepanKumar.com/CustomerPortal',
		'headers': {
			'Content-Type': 'application/xml',
			'Authorization': 'Basic UE9VU0VSOlRlY2hAMjAyMQ==',
		},
		'maxRedirects': 20
	};
	const cusid = req.body[0].cusid;
	
	const postData = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">
	<soapenv:Header/>
	<soapenv:Body>
	   <urn:ZBAPICUSCREDIT>
		  <!--You may enter the following 2 items in any order-->
		  <!--Optional:-->
		  <CUSID>${cusid}</CUSID>
		  <!--Optional:-->
		  <ITTAB>
			 <!--Zero or more repetitions:-->
			 <item>
				
			 </item>
		  </ITTAB>
	   </urn:ZBAPICUSCREDIT>
	</soapenv:Body>
 </soapenv:Envelope>`
	const req1 = http.request(options, function (res1) {
		const chunks = [];

		res1.on("data", function (chunk) {
			chunks.push(chunk);
		});

		res1.on("end", function (chunk) {
			const body = Buffer.concat(chunks);
			const xml = body.toString();
			const data = parser.xml2json(xml, {compact: true, spaces: 4});
			const resp = JSON.parse(data)['SOAP:Envelope']['SOAP:Body']['ns0:ZBAPICUSCREDIT.Response'] ['ITTAB'] ['item'] ;
			
			res.send(resp);
	
		});

		res1.on("error", function (error) {
			console.error(error);
		});
	});
	req1.write(postData);
	req1.end(); 
});


//customer overall sales


app.post('/cusovsl',(req,res) => {
	var options = {
		'method': 'POST',
		'port': 50000,
		'host': 'dxktpipo.kaarcloud.com',
		'path': 'http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BC_DHEEPAN_cusos&receiverParty=&receiverService=&interface=SI_cusos&interfaceNamespace=http://DheepanKumar.com/CustomerPortal',
		'headers': {
			'Content-Type': 'application/xml',
			'Authorization': 'Basic UE9VU0VSOlRlY2hAMjAyMQ==',
		},
		'maxRedirects': 20
	};
	const cusid = req.body[0].cusid;
	
	const postData = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">
	<soapenv:Header/>
	<soapenv:Body>
	   <urn:ZBAPICUSOS>
		  <!--You may enter the following 2 items in any order-->
		  <!--Optional:-->
		  <CUSID>${cusid}</CUSID>
		  <!--Optional:-->
		  <ITAB>
			 <!--Zero or more repetitions:-->
			 <item>

			 </item>
		  </ITAB>
	   </urn:ZBAPICUSOS>
	</soapenv:Body>
 </soapenv:Envelope>`
	const req1 = http.request(options, function (res1) {
		const chunks = [];

		res1.on("data", function (chunk) {
			chunks.push(chunk);
		});

		res1.on("end", function (chunk) {
			const body = Buffer.concat(chunks);
			const xml = body.toString();
			const data = parser.xml2json(xml, {compact: true, spaces: 4});
			const resp = JSON.parse(data)['SOAP:Envelope']['SOAP:Body']['ns0:ZBAPICUSOS.Response'] ['ITAB'] ['item'] ;
			
			res.send(resp);
	
		});

		res1.on("error", function (error) {
			console.error(error);
		});
	});
	req1.write(postData);
	req1.end(); 
});


app.listen(port, () => {
	console.log('Reading on port ',port);
})

//VENDOR LOGIN

app.post('/venlog',(req,res) => {
	var options = {
		'method': 'POST',
		'port': 50000,
		'host': 'dxktpipo.kaarcloud.com',
		'path': 'http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BC_DHEEPAN_venpo&receiverParty=&receiverService=&interface=si_venlog&interfaceNamespace=http://DheepanKumar.com/VendorPortal',
		'headers': {
			'Content-Type': 'application/xml',
			'Authorization': 'Basic UE9VU0VSOlRlY2hAMjAyMQ==',
		},
		'maxRedirects': 20
	};
	const venid = req.body[0].venid;
	const pwd = req.body[0].pwd;
    console.log(venid);
	const postData = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">
	<soapenv:Header/>
	<soapenv:Body>
	   <urn:ZBAPI_VENLOGIN>
		  <!--You may enter the following 2 items in any order-->
		  <!--Optional:-->
		  <PWD>${pwd}</PWD>
		  <!--Optional:-->
		  <VENID>${venid}</VENID>
	   </urn:ZBAPI_VENLOGIN>
	</soapenv:Body>
 </soapenv:Envelope>`
	const req1 = http.request(options, function (res1) {
		const chunks = [];

		res1.on("data", function (chunk) {
			chunks.push(chunk);
		});

		res1.on("end", function (chunk) {
			const body = Buffer.concat(chunks);
			const xml = body.toString();
			const data = parser.xml2json(xml, {compact: true, spaces: 4});
			const resp = JSON.parse(data)['SOAP:Envelope']['SOAP:Body']['ns0:ZBAPI_VENLOGIN.Response'] ['STATUS'];
		     access = resp['STATUS'] ['_text'];
            console.log(access);
			if(access === 'valid'){
				res.send(JSON.stringify("valid"));
			} 
			if(access === 'invalid'){
				res.send(JSON.stringify("invalid"));
			} 
		});

		res1.on("error", function (error) {
			console.error(error);
		});
	});
	req1.write(postData);
	req1.end(); 
});

//Vendor profile fetch

app.post('/venprof',(req,res) => {
	var options = {
		'method': 'POST',
		'port': 50000,
		'host': 'dxktpipo.kaarcloud.com',
		'path': 'http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BC_DHEEPAN_venpo&receiverParty=&receiverService=&interface=si_venpro&interfaceNamespace=http://DheepanKumar.com/VendorPortal',
		'headers': {
			'Content-Type': 'application/xml',
			'Authorization': 'Basic UE9VU0VSOlRlY2hAMjAyMQ==',
		},
		'maxRedirects': 20
	};
	const venid = req.body[0].venid;
	
	const postData = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">
	<soapenv:Header/>
	<soapenv:Body>
	   <urn:ZBAPI_VENDT>
		  <!--You may enter the following 2 items in any order-->
		  <!--Optional:-->
		  <VENID>${venid}</VENID>
		  <!--Optional:-->
		  <ITAB>
			 <!--Zero or more repetitions:-->
			 <item>
			</item>	
		  </ITAB>
	   </urn:ZBAPI_VENDT>
	</soapenv:Body>
 </soapenv:Envelope>`
	const req1 = http.request(options, function (res1) {
		const chunks = [];

		res1.on("data", function (chunk) {
			chunks.push(chunk);
		});

		res1.on("end", function (chunk) {
			const body = Buffer.concat(chunks);
			const xml = body.toString();
			const data = parser.xml2json(xml, {compact: true, spaces: 4});
			const resp = JSON.parse(data)['SOAP:Envelope']['SOAP:Body']['ns0:ZBAPI_VENDT.Response']['ITAB']['item'] ;
			res.send(resp);
	
		});

		res1.on("error", function (error) {
			console.error(error);
		});
	});
	req1.write(postData);
	req1.end(); 
});


//vendor profile update
app.post('/venprofupt',(req,res) => {
	var options = {
		'method': 'POST',
		'port': 50000,
		'host': 'dxktpipo.kaarcloud.com',
		'path': 'http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BC_DHEEPAN_venpo&receiverParty=&receiverService=&interface=si_profupt&interfaceNamespace=http://DheepanKumar.com/VendorPortal',
		'headers': {
			'Content-Type': 'application/xml',
			'Authorization': 'Basic UE9VU0VSOlRlY2hAMjAyMQ==',
		},
		'maxRedirects': 20
	};
	const venid = req.body[0].venid;
	const name = req.body[0].name;
	const region = req.body[0].region;
	const street = req.body[0].street;
	const city = req.body[0].city;
	const country = req.body[0].country;
	const post = req.body[0].post;
	
	console.log(venid);
	const postData = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">
	<soapenv:Header/>
	<soapenv:Body>
	   <urn:ZBAPI_VENDTUPT>
		  <!--You may enter the following 8 items in any order-->
		  <!--Optional:-->
		  <LAND1>${country}</LAND1>
		  <!--Optional:-->
		  <NAME1>${name}</NAME1>
		  <!--Optional:-->
		  <ORT01>${city}</ORT01>
		  <!--Optional:-->
		  <PSTLZ>${post}</PSTLZ>
		  <!--Optional:-->
		  <REGIO>${region}</REGIO>
		  <!--Optional:-->
		  <STRAS>${street}</STRAS>
		  <!--Optional:-->
		  <VENID>${venid}</VENID>
		  <!--Optional:-->
		  <ITAB>
			 <!--Zero or more repetitions:-->
			 <item>
				
			 </item>
		  </ITAB>
	   </urn:ZBAPI_VENDTUPT>
	</soapenv:Body>
 </soapenv:Envelope>`
	const req1 = http.request(options, function (res1) {
		const chunks = [];

		res1.on("data", function (chunk) {
			chunks.push(chunk);
		});

		res1.on("end", function (chunk) {
			const body = Buffer.concat(chunks);
			const xml = body.toString();
			const data = parser.xml2json(xml, {compact: true, spaces: 4});
			const resp = JSON.parse(data)['SOAP:Envelope']['SOAP:Body']['ns0:ZBAPI_VENDTUPT.Response'] ['STATUS'];
			access1 = resp['STATUS'] ['_text'];
			console.log(access1);
			if(access1 === 'UPDATED'){
				res.send(JSON.stringify("valid"));
			}
			
	
		});

		res1.on("error", function (error) {
			console.error(error);
		});
	});
	req1.write(postData);
	req1.end(); 
});


//Vendor Quotation

app.post('/venquot',(req,res) => {
	var options = {
		'method': 'POST',
		'port': 50000,
		'host': 'dxktpipo.kaarcloud.com',
		'path': 'http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BC_DHEEPAN_venpo&receiverParty=&receiverService=&interface=si_venqoutation&interfaceNamespace=http://DheepanKumar.com/VendorPortal',
		'headers': {
			'Content-Type': 'application/xml',
			'Authorization': 'Basic UE9VU0VSOlRlY2hAMjAyMQ==',
		},
		'maxRedirects': 20
	};
	const venid = req.body[0].venid;
	console.log(venid);
	const postData = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">
	<soapenv:Header/>
	<soapenv:Body>
	   <urn:ZBAPI_VENDORQUOTATION>
		  <!--You may enter the following 3 items in any order-->
		  <!--Optional:-->
		  <VENID>${venid}</VENID>
		  <!--Optional:-->
		  <ITAB>
			 <!--Zero or more repetitions:-->
			 <item>
				
			 </item>
		  </ITAB>
		  <!--Optional:-->
		  <ITAB1>
			 <!--Zero or more repetitions:-->
			 <item>
				
			 </item>
		  </ITAB1>
	   </urn:ZBAPI_VENDORQUOTATION>
	</soapenv:Body>
 </soapenv:Envelope>`
	const req1 = http.request(options, function (res1) {
		const chunks = [];

		res1.on("data", function (chunk) {
			chunks.push(chunk);
		});

		res1.on("end", function (chunk) {
			const body = Buffer.concat(chunks);
			const xml = body.toString();
			const data = parser.xml2json(xml, {compact: true, spaces: 4});
			const resp = JSON.parse(data)['SOAP:Envelope']['SOAP:Body']['ns0:ZBAPI_VENDORQUOTATION.Response'] ['ITAB'] ['item'] ;
			const resp1 = JSON.parse(data)['SOAP:Envelope']['SOAP:Body']['ns0:ZBAPI_VENDORQUOTATION.Response'] ['ITAB1'] ['item'];
			arr = []
			arr.push(resp);
			arr.push(resp1);
			
			res.send(arr);
	        
		});

		res1.on("error", function (error) {
			console.error(error);
		});
	});
	req1.write(postData);
	req1.end(); 
});



//vendor purchase order details

app.post('/venpur',(req,res) => {
	var options = {
		'method': 'POST',
		'port': 50000,
		'host': 'dxktpipo.kaarcloud.com',
		'path': 'http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BC_DHEEPAN_venpo&receiverParty=&receiverService=&interface=si_venpo&interfaceNamespace=http://DheepanKumar.com/VendorPortal',
		'headers': {
			'Content-Type': 'application/xml',
			'Authorization': 'Basic UE9VU0VSOlRlY2hAMjAyMQ==',
		},
		'maxRedirects': 20
	};
	const venid = req.body[0].venid;
	console.log(venid);
	const postData = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">
	<soapenv:Header/>
	<soapenv:Body>
	   <urn:ZBAPI_VENPO>
		  <!--You may enter the following 5 items in any order-->
		  <!--Optional:-->
		  <VENID>${venid}</VENID>
		  <!--Optional:-->
		  <ITAB>
			 <!--Zero or more repetitions:-->
			 <item>
				
			 </item>
		  </ITAB>
		  <!--Optional:-->
		  <ITAB1>
			 <item>
 
			 </item>
		  </ITAB1>
		  <!--Optional:-->
		  <ITAB2>
			 <!--Zero or more repetitions:-->
			 <item>
				
			 </item>
		  </ITAB2>
		  <!--Optional:-->
		  <ITAB3>
			 <!--Zero or more repetitions:-->
			 <item>
			   
			 </item>
		  </ITAB3>
	   </urn:ZBAPI_VENPO>
	</soapenv:Body>
 </soapenv:Envelope>`
	const req1 = http.request(options, function (res1) {
		const chunks = [];

		res1.on("data", function (chunk) {
			chunks.push(chunk);
		});

		res1.on("end", function (chunk) {
			const body = Buffer.concat(chunks);
			const xml = body.toString();
			const data = parser.xml2json(xml, {compact: true, spaces: 4});
			const resp = JSON.parse(data)['SOAP:Envelope']['SOAP:Body']['ns0:ZBAPI_VENPO.Response'] ['ITAB'] ['item'] ;
			const resp1 = JSON.parse(data)['SOAP:Envelope']['SOAP:Body']['ns0:ZBAPI_VENPO.Response'] ['ITAB1'] ['item'];
			const resp2 = JSON.parse(data)['SOAP:Envelope']['SOAP:Body']['ns0:ZBAPI_VENPO.Response'] ['ITAB2'] ['item'];
			const resp3 = JSON.parse(data)['SOAP:Envelope']['SOAP:Body']['ns0:ZBAPI_VENPO.Response'] ['ITAB3'] ['item'];
			arr = []
			arr.push(resp);
			arr.push(resp1);
			arr.push(resp2);
			arr.push(resp3)
			res.send(arr);
	        
		});

		res1.on("error", function (error) {
			console.error(error);
		});
	});
	req1.write(postData);
	req1.end(); 
});


//Vendor Goods receipt

app.post('/vengoods',(req,res) => {
	var options = {
		'method': 'POST',
		'port': 50000,
		'host': 'dxktpipo.kaarcloud.com',
		'path': 'http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BC_DHEEPAN_venpo&receiverParty=&receiverService=&interface=si_vengoods&interfaceNamespace=http://DheepanKumar.com/VendorPortal',
		'headers': {
			'Content-Type': 'application/xml',
			'Authorization': 'Basic UE9VU0VSOlRlY2hAMjAyMQ==',
		},
		'maxRedirects': 20
	};
	const venid = req.body[0].venid;
	
	const postData = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">
	<soapenv:Header/>
	<soapenv:Body>
	   <urn:ZBAPI_VENGOODS>
		  <!--You may enter the following 2 items in any order-->
		  <!--Optional:-->
		  <VENID>${venid}</VENID>
		  <!--Optional:-->
		  <ITAB>
			 <!--Zero or more repetitions:-->
			 <item>
			 </item>
		  </ITAB>
	   </urn:ZBAPI_VENGOODS>
	</soapenv:Body>
 </soapenv:Envelope>`
	const req1 = http.request(options, function (res1) {
		const chunks = [];

		res1.on("data", function (chunk) {
			chunks.push(chunk);
		});

		res1.on("end", function (chunk) {
			const body = Buffer.concat(chunks);
			const xml = body.toString();
			const data = parser.xml2json(xml, {compact: true, spaces: 4});
			const resp = JSON.parse(data)['SOAP:Envelope']['SOAP:Body']['ns0:ZBAPI_VENGOODS.Response'] ['ITAB'] ['item'] ;
			
			res.send(resp);
	
		});

		res1.on("error", function (error) {
			console.error(error);
		});
	});
	req1.write(postData);
	req1.end(); 
});



//vendor invoice,credit,payment
app.post('/venicp',(req,res) => {
	var options = {
		'method': 'POST',
		'port': 50000,
		'host': 'dxktpipo.kaarcloud.com',
		'path': 'http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BC_DHEEPAN_venpo&receiverParty=&receiverService=&interface=si_venicp&interfaceNamespace=http://DheepanKumar.com/VendorPortal',
		'headers': {
			'Content-Type': 'application/xml',
			'Authorization': 'Basic UE9VU0VSOlRlY2hAMjAyMQ==',
		},
		'maxRedirects': 20
	};
	const venid = req.body[0].venid;
	const typ = req.body[0].typ;
	const postData = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">
	<soapenv:Header/>
	<soapenv:Body>
	   <urn:ZBAPI_VENICP>
		  <!--You may enter the following 6 items in any order-->
		  <OPER>${typ}</OPER>
		  <VENID>${venid}</VENID>
		  <!--Optional:-->
		  <ITAB>
			 <!--Zero or more repetitions:-->
			 <item>
				>
			 </item>
		  </ITAB>
		  <!--Optional:-->
		  <ITAB1>
			 <!--Zero or more repetitions:-->
			 <item>
				
			 </item>
		  </ITAB1>
		  <!--Optional:-->
		  <ITAB2>
			 <!--Zero or more repetitions:-->
			 <item>
				
			 </item>
		  </ITAB2>
		  <!--Optional:-->
		  <ITAB3>
			 <!--Zero or more repetitions:-->
			 <item>
				
			 </item>
		  </ITAB3>
	   </urn:ZBAPI_VENICP>
	</soapenv:Body>
 </soapenv:Envelope>`
	const req1 = http.request(options, function (res1) {
		const chunks = [];

		res1.on("data", function (chunk) {
			chunks.push(chunk);
		});

		res1.on("end", function (chunk) {
			const body = Buffer.concat(chunks);
			const xml = body.toString();
			const data = parser.xml2json(xml, {compact: true, spaces: 4});
			const resp = JSON.parse(data)['SOAP:Envelope']['SOAP:Body']['ns0:ZBAPI_VENICP.Response'] ['ITAB'] ['item'] ;
			const resp1 = JSON.parse(data)['SOAP:Envelope']['SOAP:Body']['ns0:ZBAPI_VENICP.Response'] ['ITAB1'] ['item'] ;
			const resp2 = JSON.parse(data)['SOAP:Envelope']['SOAP:Body']['ns0:ZBAPI_VENICP.Response'] ['ITAB2'] ['item'] ;
			const resp3 = JSON.parse(data)['SOAP:Envelope']['SOAP:Body']['ns0:ZBAPI_VENICP.Response'] ['ITAB3'] ['item'] ;
			const arr=[];
			arr.push(resp,resp1,resp2,resp3);
			for(i=0;i<arr.length;i++)
			{
				if(arr[i].length>0)
				{
					res.send(arr[i]);
				}
			}
			
	
		});

		res1.on("error", function (error) {
			console.error(error);
		});
	});
	req1.write(postData);
	req1.end(); 
});

//EMPLOYEE PORTAL ALL

app.post('/empall',(req,res) => {
	var options = {
		'method': 'POST',
		'port': 50000,
		'host': 'dxktpipo.kaarcloud.com',
		'path': 'http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BC_DHEEPAN_venpo&receiverParty=&receiverService=&interface=si_emp&interfaceNamespace=http://DheepanKumar.com/EmployeePortal',
		'headers': {
			'Content-Type': 'application/xml',
			'Authorization': 'Basic UE9VU0VSOlRlY2hAMjAyMQ==',
		},
		'maxRedirects': 20
	};
	const empid = req.body[0].empid;
	const pwd = req.body[0].pwd;
	const age = req.body[0].age;
	const famst = req.body[0].famst;
	const gbdat = req.body[0].gbdat;
	const gblnd = req.body[0].gblnd;
	const gbdep = req.body[0].gbdep;
	const gesch = req.body[0].gesch;
	const nach2 = req.body[0].nach2;
	const pmonth = req.body[0].pmonth;
	const pyear = req.body[0].pyear;
	const typ = req.body[0].typ;
	const vorna = req.body[0].vorna;
	console.log(empid,pwd);
	const postData = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">
	<soapenv:Header/>
	<soapenv:Body>
	   <urn:ZBAPI_EMPLOYEEALL> 
		  <!--Optional:-->
		  <AGE>${age}</AGE>
		  <!--Optional:-->
		  <EMPID>${empid}</EMPID>
		  <FAMST>${famst}</FAMST>
		  <!--Optional:-->
		  <GBDAT>${gbdat}</GBDAT>
		  <!--Optional:-->
		  <GBDEP>${gbdep}</GBDEP>
		  <!--Optional:-->
		  <GBLND>${gblnd}</GBLND>
		  <!--Optional:-->
		  <GESCH>${gesch}</GESCH>
		  <!--Optional:-->
		  <NACH2>${nach2}</NACH2>
		  <!--Optional:-->
		  <PMONTH>${pmonth}</PMONTH>
		  <!--Optional:-->
		  <PWD>${pwd}</PWD>
		  <!--Optional:-->
		  <PYEAR>${pyear}</PYEAR>
		  <!--Optional:-->
		  <TYP>${typ}</TYP>
		  <!--Optional:-->
		  <VORNA>${vorna}</VORNA>
		  <!--Optional:-->
		  <ITAB>
			 <!--Zero or more repetitions:-->
			 <item>
				<!--Optional:-->
				
			 </item>
		  </ITAB>
		  <!--Optional:-->
		  <ITAB1>
			 <!--Zero or more repetitions:-->
			 <item>
				<!--Optional:-->
				
			 </item>
		  </ITAB1>
		  <!--Optional:-->
		  <ITAB2>
			 <!--Zero or more repetitions:-->
			 <item>
				<!--Optional:-->
				
			 </item>
		  </ITAB2>
		  <!--Optional:-->
		  <ITAB3>
			 <!--Zero or more repetitions:-->
			 <item>
				<!--Optional:-->
				
			 </item>
		  </ITAB3>
	   </urn:ZBAPI_EMPLOYEEALL>
	</soapenv:Body>
 </soapenv:Envelope>`
	const req1 = http.request(options, function (res1) {
		const chunks = [];

		res1.on("data", function (chunk) {
			chunks.push(chunk);
		});

		res1.on("end", function (chunk) {
			const body = Buffer.concat(chunks);
			const xml = body.toString();
			const data = parser.xml2json(xml, {compact: true, spaces: 4});
			if(pwd!="0" || vorna!="0")
			{
				const resp = JSON.parse(data)['SOAP:Envelope']['SOAP:Body']['ns0:ZBAPI_EMPLOYEEALL.Response']['STATUS']['_text'];
			if(resp === 'valid' || resp === 'updated'){
				res.send(JSON.stringify("valid"));
			} 
			if(resp === 'invalid' || resp === 'not updated'){
				res.send(JSON.stringify("invalid"));
			} 
		    }
			else if(typ === "PROF"){
				const resp1 = JSON.parse(data)['SOAP:Envelope']['SOAP:Body']['ns0:ZBAPI_EMPLOYEEALL.Response'] ['ITAB1'] ['item'] ;
				res.send(resp1)}
			else if(typ === "LEAVE"){
				const resp2 = JSON.parse(data)['SOAP:Envelope']['SOAP:Body']['ns0:ZBAPI_EMPLOYEEALL.Response'] ['ITAB2'] ['item'] ;
				res.send(resp2)}
			else if(pmonth!="0"&&pyear!="0"){
				const resp3 = JSON.parse(data)['SOAP:Envelope']['SOAP:Body']['ns0:ZBAPI_EMPLOYEEALL.Response'] ['ITAB3'] ['item'] ;
				if(resp3 === undefined)
				res.send({"PERNR" : {"_text" : "1"}});
				else{
				res.send(resp3);
			}
			}
			    
		});

		res1.on("error", function (error) {
			console.error(error);
		});
	});
	req1.write(postData);
	req1.end(); 
});



//employee leave

app.post('/empall1',(req,res) => {
	var options = {
		'method': 'POST',
		'port': 50000,
		'host': 'dxktpipo.kaarcloud.com',
		'path': 'http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BC_DHEEPAN_venpo&receiverParty=&receiverService=&interface=si_empleave&interfaceNamespace=http://DheepanKumar.com/EmployeePortal',
		'headers': {
			'Content-Type': 'application/xml',
			'Authorization': 'Basic UE9VU0VSOlRlY2hAMjAyMQ==',
		},
		'maxRedirects': 20
	};
	const empid = req.body[0].empid;
	const awart = req.body[0].awart;
	const begda = req.body[0].begda;
	const beguz = req.body[0].beguz;
	const endda = req.body[0].endda;
	const enduz = req.body[0].enduz;
	
	
	const postData = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">
	<soapenv:Header/>
	<soapenv:Body>
	   <urn:ZBAPI_EMPLOYEELEAVE2>
		  <!--You may enter the following 6 items in any order-->
		  <!--Optional:-->
 
		  <AWART>${awart}</AWART>
		  <!--Optional:-->
		  <BEGDA>${begda}</BEGDA>
		  <!--Optional:-->
		  <BEGUZ>${beguz}</BEGUZ>
		  <!--Optional:-->
		  <EMPID>${empid}</EMPID>
		  <!--Optional:-->
		  <ENDDA>${endda}</ENDDA>
		  <!--Optional:-->
		  <ENDUZ>${enduz}</ENDUZ>
	   </urn:ZBAPI_EMPLOYEELEAVE2>
	</soapenv:Body>
 </soapenv:Envelope>`
	const req1 = http.request(options, function (res1) {
		const chunks = [];

		res1.on("data", function (chunk) {
			chunks.push(chunk);
		});

		res1.on("end", function (chunk) {
			const body = Buffer.concat(chunks);
			const xml = body.toString();
			const data = parser.xml2json(xml, {compact: true, spaces: 4});
			const resp = JSON.parse(data)['SOAP:Envelope']['SOAP:Body']['ns0:ZBAPI_EMPLOYEELEAVE2.Response']['STATUS']['_text'];
			if(resp === 'inserted'){
				res.send(JSON.stringify("valid"));
			}
			
	
		});

		res1.on("error", function (error) {
			console.error(error);
		});
	});
	req1.write(postData);
	req1.end(); 
});


//Maintenance Portal


app.post('/maint',(req,res) => {
	var options = {
		'method': 'POST',
		'port': 50000,
		'host': 'dxktpipo.kaarcloud.com',
		'path': 'http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BC_DHEEPAN_venpo&receiverParty=&receiverService=&interface=si_main&interfaceNamespace=http://DheepanKumar.com/MaintenancePortal',
		'headers': {
			'Content-Type': 'application/xml',
			'Authorization': 'Basic UE9VU0VSOlRlY2hAMjAyMQ==',
		},
		'maxRedirects': 20
	};
	const bukrs = req.body[0].bukrs;
	const pwd = req.body[0].pwd;
	const astnr = req.body[0].astnr;
	const auart = req.body[0].auart;
	const aufnr = req.body[0].aufnr;
	const equnr = req.body[0].equnr;
	const erdat = req.body[0].erdat;
	const iwerk = req.body[0].iwerk;
	const klvarp= req.body[0].klvarp;
	const ktext = req.body[0].ktext;
	const msaus = req.body[0].msaus;
	const typ = req.body[0].typ;
	const qmart = req.body[0].qmart;
	const qmdat = req.body[0].qmdat;
	const qmnum = req.body[0].qmnum;
	const qmtxt = req.body[0].qmtxt;
	console.log(bukrs,pwd);
	const postData = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">
	<soapenv:Header/>
	<soapenv:Body>
	   <urn:ZBAPI_MAINTENANCE_PORTAL>
		  <!--You may enter the following 19 items in any order-->
		  <!--Optional:-->
		  <ASTNR>${astnr}</ASTNR>
		  <!--Optional:-->
		  <AUART>${auart}</AUART>
		  <!--Optional:-->
		  <AUFNR>${aufnr}</AUFNR>
		  <!--Optional:-->
		  <BUKRS>${bukrs}</BUKRS>
		  <!--Optional:-->
		  <EQUNR>${equnr}</EQUNR>
		  <!--Optional:-->
		  <ERDAT>${erdat}</ERDAT>
		  <!--Optional:-->
		  <IWERK>${iwerk}</IWERK>
		  <!--Optional:-->
		  <KLVARP>${klvarp}</KLVARP>
		  <!--Optional:-->
		  <KTEXT>${ktext}</KTEXT>
		  <!--Optional:-->
		  <MSAUS>${msaus}</MSAUS>
		  <!--Optional:-->
		  <PWD>${pwd}</PWD>
		  <!--Optional:-->
		  <QMART>${qmart}</QMART>
		  <!--Optional:-->
		  <QMDAT>${qmdat}</QMDAT>
		  <!--Optional:-->
		  <QMNUM>${qmnum}</QMNUM>
		  <!--Optional:-->
		  <QMTXT>${qmtxt}</QMTXT>
		  <!--Optional:-->
		  <TYP>${typ}</TYP>
		  <!--Optional:-->
		  <ITAB>
			 <!--Zero or more repetitions:-->
			 <item>
			   
			 </item>
		  </ITAB>
		  <!--Optional:-->
		  <ITAB1>
			 <!--Zero or more repetitions:-->
			 <item>
				
			 </item>
		  </ITAB1>
		  <!--Optional:-->
		  <ITAB2>
			 <!--Zero or more repetitions:-->
			 <item>
				
			 </item>
		  </ITAB2>
	   </urn:ZBAPI_MAINTENANCE_PORTAL>
	</soapenv:Body>
 </soapenv:Envelope>`
	const req1 = http.request(options, function (res1) {
		const chunks = [];

		res1.on("data", function (chunk) {
			chunks.push(chunk);
		});

		res1.on("end", function (chunk) {
			const body = Buffer.concat(chunks);
			const xml = body.toString();
			const data = parser.xml2json(xml, {compact: true, spaces: 4});
			if(pwd!="" || typ === "NOTIFINS" || typ === "NOTIFUPD" || typ === "WORKC" || typ === "WORKU")
			{
				const resp = JSON.parse(data)['SOAP:Envelope']['SOAP:Body']['ns0:ZBAPI_MAINTENANCE_PORTAL.Response']['STATUS']['_text'];
			if(resp === 'valid' || resp === 'updated' || resp === 'inserted'){
				res.send(JSON.stringify("valid"));
				console.log(resp);
			} 
			if(resp === 'invalid' || resp === 'not updated' || resp === 'not inserted'){
				res.send(JSON.stringify("invalid"));
			} 
		    }
			else if(typ === "NOTIF"){
				const resp1 = JSON.parse(data)['SOAP:Envelope']['SOAP:Body']['ns0:ZBAPI_MAINTENANCE_PORTAL.Response'] ['ITAB1'] ['item'] ;
				res.send(resp1)}
			else if(typ === "WORK"){
				const resp2 = JSON.parse(data)['SOAP:Envelope']['SOAP:Body']['ns0:ZBAPI_MAINTENANCE_PORTAL.Response'] ['ITAB2'] ['item'] ;
				res.send(resp2)}
		});

		res1.on("error", function (error) {
			console.error(error);
		});
	});
	req1.write(postData);
	req1.end(); 
});






//ShopFloor Portal


app.post('/shop',(req,res) => {
	var options = {
		'method': 'POST',
		'port': 50000,
		'host': 'dxktpipo.kaarcloud.com',
		'path': 'http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BC_DHEEPAN_venpo&receiverParty=&receiverService=&interface=si_shop&interfaceNamespace=http://DheepanKumar.com/Shopfloor',
		'headers': {
			'Content-Type': 'application/xml',
			'Authorization': 'Basic UE9VU0VSOlRlY2hAMjAyMQ==',
		},
		'maxRedirects': 20
	};
	const bukrs = req.body[0].bukrs;
	const pwd = req.body[0].pwd;
	const edate = req.body[0].edate;
	const firm= req.body[0].firm;
	const matnr = req.body[0].matnr;
	const plnum = req.body[0].plnum;
	const prodnum = req.body[0].prodnum;
	const sdate = req.body[0].sdate;
	const scqty= req.body[0].scqty;
	const totqty = req.body[0].totqty;
	const typ = req.body[0].typ;
	
	console.log(bukrs,pwd);
	const postData = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">
	<soapenv:Header/>
	<soapenv:Body>
	   <urn:ZBAPI_SHOPFLOOR>
		  <!--You may enter the following 15 items in any order-->
		  <!--Optional:-->
		  <BUKRS>${bukrs}</BUKRS>
		  <!--Optional:-->
		  <EDATE>${edate}</EDATE>
		  <!--Optional:-->
		  <FIRM>${firm}</FIRM>
		  <!--Optional:-->
		  <MATNR>${matnr}</MATNR>
		  <!--Optional:-->
		  <PLNUM>${plnum}</PLNUM>
		  <!--Optional:-->
		  <PRODDNUM>${prodnum}</PRODDNUM>
		  <!--Optional:-->
		  <PWD>${pwd}</PWD>
		  <!--Optional:-->
		  <SCQTY>${scqty}</SCQTY>
		  <!--Optional:-->
		  <SDATE>${sdate}</SDATE>
		  <!--Optional:-->
		  <TOTQTY>${totqty}</TOTQTY>
		  <!--Optional:-->
		  <TYP>${typ}</TYP>
		  <!--Optional:-->
		  <ITAB>
			 <!--Zero or more repetitions:-->
			 <item>
				
			 </item>
		  </ITAB>
		  <!--Optional:-->
		  <ITAB1>
			 <!--Zero or more repetitions:-->
			 <item>
				
			 </item>
		  </ITAB1>
		  <!--Optional:-->
		  <ITAB2>
			 <!--Zero or more repetitions:-->
			 <item>
				
			 </item>
		  </ITAB2>
		  <!--Optional:-->
		  <ITAB3>
			 <!--Zero or more repetitions:-->
			 <item>
			   
			 </item>
		  </ITAB3>
	   </urn:ZBAPI_SHOPFLOOR>
	</soapenv:Body>
 </soapenv:Envelope>`
	const req1 = http.request(options, function (res1) {
		const chunks = [];

		res1.on("data", function (chunk) {
			chunks.push(chunk);
		});

		res1.on("end", function (chunk) {
			const body = Buffer.concat(chunks);
			const xml = body.toString();
			const data = parser.xml2json(xml, {compact: true, spaces: 4});
			if(pwd!="" || typ === "PRODC" || typ === "PLANC" || typ === "PLANU" || typ === "PRODU" || typ === "PR")
			{
				const resp = JSON.parse(data)['SOAP:Envelope']['SOAP:Body']['ns0:ZBAPI_SHOPFLOOR.Response']['STATUS']['_text'];
			if(resp === 'valid' || resp === 'updated' || resp === 'inserted' || resp === 'released'){
				res.send(JSON.stringify("valid"));
				console.log(resp);
			} 
			if(resp === 'invalid' || resp === 'not updated' || resp === 'not inserted' || resp === 'not released'){
				res.send(JSON.stringify("invalid"));
				console.log(resp);
			} 
		    }
			else if(typ === "PLAND"){
				const resp1 = JSON.parse(data)['SOAP:Envelope']['SOAP:Body']['ns0:ZBAPI_SHOPFLOOR.Response'] ['ITAB1'] ['item'] ;
				res.send(resp1)}
			else if(typ === "PRODD"){
				const resp2 = JSON.parse(data)['SOAP:Envelope']['SOAP:Body']['ns0:ZBAPI_SHOPFLOOR.Response'] ['ITAB2'] ['item'] ;
				res.send(resp2)}
		});

		res1.on("error", function (error) {
			console.error(error);
		});
	});
	req1.write(postData);
	req1.end(); 
});


//EHSM Portal

app.post('/ehsm',(req,res) => {
	var options = {
		'method': 'POST',
		'port': 50000,
		'host': 'dxktpipo.kaarcloud.com',
		'path': 'http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BC_DHEEPAN_venpo&receiverParty=&receiverService=&interface=si_ehsm&interfaceNamespace=http://DheepanKumar.com/EHSMPortal',
		'headers': {
			'Content-Type': 'application/xml',
			'Authorization': 'Basic UE9VU0VSOlRlY2hAMjAyMQ==',
		},
		'maxRedirects': 20
	};
    const bukrs = req.body[0].bukrs;
	const typ = req.body[0].typ;
	const recn = req.body[0].recn;
	const valfr = req.body[0].valfr;
	const valto = req.body[0].valto;
	const crdat = req.body[0].crdat;
	const iapl =  req.body[0].iapl;
	const evdesc =  req.body[0].evdesc;
	const equnr =  req.body[0].equnr;
	const eqdesc =  req.body[0].eqdesc;
	const result =  req.body[0].result;
	console.log(bukrs);
	const postData = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">
	<soapenv:Header/>
	<soapenv:Body>
	   <urn:ZBAPI_EHSM>
		  <!--You may enter the following 4 items in any order-->
		  <!--Optional:-->
		  <PLANT>${bukrs}</PLANT>
		  <!--Optional:-->
		  <TYP>${typ}</TYP>
		  <!--Optional:-->
		  <ITAB>
			 <!--Zero or more repetitions:-->
			 <item>
				<!--Optional:-->
				<RECN>${recn}</RECN>
				<!--Optional:-->
				<VALFR>${valfr}</VALFR>
				<!--Optional:-->
				<VALTO>${valto}</VALTO>
				<!--Optional:-->
				<CRDAT>${crdat}</CRDAT>
				<!--Optional:-->
				<IATYPE></IATYPE>
				<!--Optional:-->
				<CRNAM></CRNAM>
				<!--Optional:-->
				<IAPLANT>${iapl}</IAPLANT>
				<!--Optional:-->
				<IASTATUS></IASTATUS>
				<!--Optional:-->
				<EVDESC>${evdesc}</EVDESC>
				<!--Optional:-->
				<DMTYPE></DMTYPE>
				<!--Optional:-->
				<FATALFLAG></FATALFLAG>
				<!--Optional:-->
				<CNTRFLAG></CNTRFLAG>
				<!--Optional:-->
				<TPLNR></TPLNR>
				<!--Optional:-->
				<EQUNR>${equnr}</EQUNR>
				<!--Optional:-->
				<EQDESC>${eqdesc}</EQDESC>
				<!--Optional:-->
				<EVDAT></EVDAT>
				<!--Optional:-->
				<EVTIME></EVTIME>
				<!--Optional:-->
				<RECNTWAH></RECNTWAH>
				<!--Optional:-->
				<PMFLG></PMFLG>
				<!--Optional:-->
				<ACLOCDESC></ACLOCDESC>
				<!--Optional:-->
				<EVTIMEZONE></EVTIMEZONE>
				<!--Optional:-->
				<FLPLANT></FLPLANT>
				<!--Optional:-->
				<INVRESULT>${result}</INVRESULT>
				<!--Optional:-->
				<PRODLFLG></PRODLFLG>
			 </item>
		  </ITAB>
		  <!--Optional:-->
		  <ITAB2>
			 <!--Zero or more repetitions:-->
			 <item>
				
			 </item>
		  </ITAB2>
	   </urn:ZBAPI_EHSM>
	</soapenv:Body>
 </soapenv:Envelope>`
	const req1 = http.request(options, function (res1) {
		const chunks = [];

		res1.on("data", function (chunk) {
			chunks.push(chunk);
		});

		res1.on("end", function (chunk) {
			const body = Buffer.concat(chunks);
			const xml = body.toString();
			const data = parser.xml2json(xml, {compact: true, spaces: 4});
			if(typ === "CRT" )
			{
				const resp = JSON.parse(data)['SOAP:Envelope']['SOAP:Body']['ns0:ZBAPI_EHSM.Response']['STATUS']['_text'];
			if(resp === 'success'){
				res.send(JSON.stringify("valid"));
				console.log(resp);
			} 
			if(resp === 'failed'){
				res.send(JSON.stringify("invalid"));
			} 
		    }
			else if(typ === "DISP"){
				const resp1 = JSON.parse(data)['SOAP:Envelope']['SOAP:Body']['ns0:ZBAPI_EHSM.Response'] ['ITAB'] ['item'] ;
				res.send(resp1)}
			else if(typ === "RISK"){
				const resp2 = JSON.parse(data)['SOAP:Envelope']['SOAP:Body']['ns0:ZBAPI_EHSM.Response'] ['ITAB2'] ['item'] ;
				res.send(resp2);
			    console.log(resp2)}
		});

		res1.on("error", function (error) {
			console.error(error);
		});
	});
	req1.write(postData);
	req1.end(); 
});



//Quality Portal

app.post('/quality',(req,res) => {
	var options = {
		'method': 'POST',
		'port': 50000,
		'host': 'dxktpipo.kaarcloud.com',
		'path': 'http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BC_DHEEPAN_venpo&receiverParty=&receiverService=&interface=si_quality&interfaceNamespace=http://DheepanKumar.com/Quality',
		'headers': {
			'Content-Type': 'application/xml',
			'Authorization': 'Basic UE9VU0VSOlRlY2hAMjAyMQ==',
		},
		'maxRedirects': 20
	};
    const bukrs = req.body[0].bukrs;
	const typ = req.body[0].typ;
    const iid = req.body[0].iid;
	const qs = req.body[0].qs;
	const vname = req.body[0].vname;
	const vdatum = req.body[0].vdatum;
	const werks=  req.body[0].werks;
	const desc =  req.body[0].desc;
	const qd = 'S';
	console.log(qs);
	const postData = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">
	<soapenv:Header/>
	<soapenv:Body>
	   <urn:ZBAPI_QUALITY>
		  <!--You may enter the following 5 items in any order-->
		  <!--Optional:-->
		  <BUKRS>${bukrs}</BUKRS>
		  <!--Optional:-->
		  <TYP>${typ}</TYP>
		  <!--Optional:-->
		  <ITAB>
			 <!--Zero or more repetitions:-->
			 <item>
				
			 </item>
		  </ITAB>
		  <!--Optional:-->
		  <ITAB1>
			 <!--Zero or more repetitions:-->
			 <item>
			 <ANZFEHLER>${qs}</ANZFEHLER>
				<ERSTELLER>${werks}</ERSTELLER>
				<PRUEFDATUV>${vdatum}</PRUEFDATUV>
				<PRUEFDATUB>${iid}</PRUEFDATUB>
				<PRUEFER>${vname}</PRUEFER>
				<PRUEFBEMKT>${desc}</PRUEFBEMKT>
				<PRLTEXTKZ>34</PRLTEXTKZ>
				<SATZSTATUS>${qd}</SATZSTATUS>
			 </item>
		  </ITAB1>
		  <!--Optional:-->
		  <ITAB2>
			 <!--Zero or more repetitions:-->
			 <item>
				
				<VWERKS>${werks}</VWERKS>
				<QKENNZAHL>${qs}</QKENNZAHL>
				<VNAME>${vname}</VNAME>
				<VDATUM>${vdatum}</VDATUM>
			 </item>
		  </ITAB2>
	   </urn:ZBAPI_QUALITY>
	</soapenv:Body>
 </soapenv:Envelope>`
	const req1 = http.request(options, function (res1) {
		const chunks = [];

		res1.on("data", function (chunk) {
			chunks.push(chunk);
		});

		res1.on("end", function (chunk) {
			const body = Buffer.concat(chunks);
			const xml = body.toString();
			const data = parser.xml2json(xml, {compact: true, spaces: 4});
			if(typ === "RC" )
			{
				const resp = JSON.parse(data)['SOAP:Envelope']['SOAP:Body']['ns0:ZBAPI_QUALITY.Response']['STATUS']['_text'];
			if(resp === 'success'){
				res.send(JSON.stringify("valid"));
				console.log(resp);
			} 
			if(resp === 'failed'){
				res.send(JSON.stringify("invalid"));
			} 
		    }
			 else if(typ === "UC" )
			 {
				 const resp = JSON.parse(data)['SOAP:Envelope']['SOAP:Body']['ns0:ZBAPI_QUALITY.Response']['STATUS']['_text'];
			 if(resp === 'success'){
				 res.send(JSON.stringify("valid"));
				 console.log(resp);
			 } 
			 if(resp === 'failed'){
				 res.send(JSON.stringify("invalid"));
			 } 
			 }
			else if(typ === "INS"){
				const resp1 = JSON.parse(data)['SOAP:Envelope']['SOAP:Body']['ns0:ZBAPI_QUALITY.Response'] ['ITAB'] ['item'] ;
				res.send(resp1)}
			else if(typ === "RD"){
				const resp2 = JSON.parse(data)['SOAP:Envelope']['SOAP:Body']['ns0:ZBAPI_QUALITY.Response'] ['ITAB1'] ['item'] ;
				res.send(resp2);
			    console.log(resp2)}
			else if(typ === "UD"){
					const resp2 = JSON.parse(data)['SOAP:Envelope']['SOAP:Body']['ns0:ZBAPI_QUALITY.Response'] ['ITAB2'] ['item'] ;
					res.send(resp2);
					console.log(resp2)}	
		});

		res1.on("error", function (error) {
			console.error(error);
		});
	});
	req1.write(postData);
	req1.end(); 
});

