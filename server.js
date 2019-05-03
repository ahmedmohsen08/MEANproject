const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 7000;
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const cors = require('cors')
const cookieParser = require('cookie-parser');

mongoose.connect('mongodb://localhost:27017/Northwind', { useNewUrlParser: true })
    .then(() => console.log('connected'))
    .catch(() => console.log("not connected"))


const customersSchema = new mongoose.Schema({
    CustomerID: String,
    CompanyName: String,
    ContactName: { type: String, required: true },
    Password: String,
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
    ProductID: Number,
    ProductName: String,
    CategoryID: Number,
    UnitPrice: Number,
    UnitsInStock: Number,
    UnitsOnOrder: String
});

const order_detailsSchema = new mongoose.Schema({
    ProductID: { type: mongoose.Types.ObjectId, ref: 'products' },
    OrderID: Number,
    UnitPrice: String,
    Quantity: String
}, { toJSON: { virtuals: true } });

order_detailsSchema.virtual('product', {
    ref: 'products', // The model to use
    localField: 'ProductID', // Find people where `localField`
    foreignField: 'ProductID', // is equal to `foreignField`
    // If `justOne` is true, 'members' will be a single doc as opposed to
    // an array. `justOne` is false by default.
    justOne: true,
});

const orderSchema = new mongoose.Schema({
    OrderID: String,
    CustomerID: String,
    OrderDate: String,
    ShipAddress: String
});

const Customer = mongoose.model('customers', customersSchema);
const Product = mongoose.model('products', productsSchema);
const Order_Details = mongoose.model('order-details', order_detailsSchema);
const Order = mongoose.model('orders', orderSchema);

async function FindContactByName(ContactName) {
    return await Customer.findOne({ ContactName: ContactName });
}

async function Register(RequestBody) {
    const cust = new Customer({
        CustomerID: "",
        CompanyName: RequestBody.CompanyName,
        ContactName: RequestBody.ContactName,
        Password: RequestBody.Password,
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
        FindContactByName(RequestBody.ContactName).then(data => {
            //console.log('find by name: '+data);
        });

        const res = await cust.save();
        //console.log("inserted");
        //console.log(res);


    }
    catch (ex) {
        //console.log(ex.message);
    }


}

async function Login(RequestBody) {
    var res = await FindContactByName(RequestBody.ContactName);
    return RequestBody.Password == res.Password;
}

async function GetProducts() {
    return await Product.find();
}

async function GetOrders(username) {
    var user=await Customer.findOne({ContactName:username}).select('CustomerID');
    var ID=user.CustomerID;
    var orders = await Order.find({ CustomerID: ID });

    var order_details = [];
    for (let order of orders) {
        var res = await Order_Details.find({ OrderID: order.OrderID }).populate('product');
        order_details.push({ orderID: order.OrderID, OrderDate: order.OrderDate, products: res });
    }

    return order_details;
}

async function DeleteproductByAdmin(prodID) {
    var res = Product.deleteOne({ ProductID: prodID }, (err) => {
        console.log("error: " + err);
    })
}

async function UpdateproductByAdmin(prodID) {
    var res = Product.updateOne({ ProductID: prodID }, (err) => {
        console.log(err);
    })

}


app.use(express.static(path.join(__dirname, 'dist/meanproject')));
app.use(bodyParser.json());
app.use(cors());
app.use(cookieParser());


app.get('/getAllProducts', (req, res) => {
    //console.log(req);
    GetProducts().then(data => {
        res.send(data);
    }).catch(error => {
        //console.log(error);
    })
});

app.post('/register', (req, res) => {
    res.set({
        'Content-Type': 'text/json',
        'Access-Control-Allow-Origin': '*'
    });
    //console.log("request " + req.body.ContactName)
    Register(req.body).then(data => {
        res.send(data);
    });
});

app.post('/login', (req, res) => {
    res.set({
        'Content-Type': 'text/json',
        'Access-Control-Allow-Origin': '*'
    });
    if (req.body.ContactName == 'admin' && req.body.Password == 'admin') {
        res.cookie('accountUserName', 'admin');
        res.cookie('role', 'admin');
        res.send({ role: 'admin' });
    }
    else {
        Login(req.body).then((data) => {
            console.log("login " + data);

            if (data == true) {
                console.log("login2");
                res.cookie('accountUserName', req.body.ContactName);
                res.cookie('role', 'user');
                console.log(req.body.ContactName);
                res.send({ role: 'user' });
            }
        });
    }
});

app.post('/getOrders', (req, res) => {
    res.set({
        'Content-Type': 'text/json',
        'Access-Control-Allow-Origin': '*'
    });
    GetOrders(req.body.username).then(data => {
        res.send(data);
    })
});

app.post('/checkout', (req, res) => {
    console.log(req.body);

})

app.post('/deleteProduct', (req, res) => {
    console.log("aaaaaaaaaaaa");
    console.log(req.body);
    DeleteproductByAdmin(req.body.productid)
    res.send({ deleted: true });
})

app.get('*', (req, res) => {
    res.set({
        'Content-Type': 'text/json',
        'Access-Control-Allow-Origin': '*'
    });
    res.sendFile(path.join(__dirname, 'dist/meanproject/index.html'));
});



app.listen(port, (req, res) => {
    console.log('running');
});