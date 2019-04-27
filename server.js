const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 4600;
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const cors = require('cors')

mongoose.connect('mongodb://localhost:27017/NorthwindDB')
    .then(() => console.log('connected'))
    .catch(() => console.log("not connected"))


const customersSchema = new mongoose.Schema({
    CustomerID: String,
    CompanyName: String,
    ContactName: { type: String, required: true },
    ContactTitle: String,
    Address: String,
    City: String,
    Region: String,
    Country: String,
    Phone: String,
    Fax: String,
    PostalCode: String

});

const productsSchema = new mongoose.Schema({
    ProductID: String,
    ProductName: String,
    CategoryID: String,
    UnitPrice: String,
    UnitsInStock: String,
    UnitsOnOrder: String
})

const Customer = mongoose.model('customers', customersSchema);
const Product = mongoose.model('product', productsSchema);

async function FindContactByName(ContactName) {
    return await Product.find({ContactName:ContactName});
}

async function Register(RequestBody) {
    const cust = new Customer({
        CustomerID: "",
        CompanyName: RequestBody.CompanyName,
        ContactName: RequestBody.ContactName,
        ContactTitle: RequestBody.ContactTitle,
        Address: RequestBody.Address,
        City: RequestBody.City,
        Region: RequestBody.Region,
        Country: RequestBody.Country,
        Fax: RequestBody.Fax,
        PostalCode: RequestBody.PostalCode,
        Phone: RequestBody.Phone
    })
    try {
        FindContactByName(RequestBody.ContactName).then(data=>{
            console.log('find by name: '+data);
        });

        const res = await cust.save();
        console.log("inserted");
        console.log(res);


    }
    catch (ex) {
        console.log(ex.message);
    }


}

async function GetProducts() {
    return await Product.find();
}

app.use(express.static(path.join(__dirname, 'dist/meanproject')));
app.use(bodyParser.json());
app.use(cors());

app.get('/getAllProducts', (req, res) => {
    console.log(req);
    GetProducts().then(data=>{
        res.send(data);
    }).catch(error=>{
        console.log(error);
    })
});


app.get('*', (req, res) => {
    res.set({
        'Content-Type': 'text/json',
        'Access-Control-Allow-Origin': '*'
    });
    res.sendFile(path.join(__dirname, 'dist/meanproject/index.html'));
});

app.post('/register', (req, res) => {
    res.set({
        'Content-Type': 'text/json',
        'Access-Control-Allow-Origin': '*'
    });
    console.log("request " + req.body.ContactName)
    Register(req.body);

})

app.listen(port, (req, res) => {
    console.log('running');
});