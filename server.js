const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 7000;
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const cors = require('cors')
const cookieParser = require('cookie-parser');

mongoose.connect('mongodb+srv://ahmedmohsen:Aa01203052224@northwind-fohlg.mongodb.net/Northwind?retryWrites=true', { useNewUrlParser: true })
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
    ProductID: Number,//{ type: mongoose.Types.ObjectId, ref: 'products' },
    OrderID: Number,
    UnitPrice: String,
    Quantity: String,
    Discount: Number
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
    OrderID: Number,
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

async function AddProduct(RequestBody) {
    const newProduct = new Product({
        ProductID: RequestBody.productID,
        ProductName: RequestBody.productName,
        UnitPrice: RequestBody.UnitPrice,
        UnitsInStock: RequestBody.UnitsInStock
    })
    const res = await newProduct.save();

}
async function Register(RequestBody) {
    var customers = await Customer.find();
    var id;
    do {
        id = Math.floor(Math.random() * 10000) + 10;
        var exist = customers.some(p => p.CustomerID == id)
    } while (exist == true)



    const cust = new Customer({
        CustomerID: id,
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
    });

    var customer = await FindContactByName(RequestBody.ContactName);
    if (customer == undefined) {
        const res = await cust.save();
        return "not exist";
    }
    else {
        return "exist";
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
    var user = await Customer.findOne({ ContactName: username }).select('CustomerID');
    var ID = user.CustomerID;
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
mongoose.set('useFindAndModify', false);
async function UpdateproductByAdmin(pID, pname, pPrice, pUnits) {
    var res = Product.findOneAndUpdate({ ProductID: pID }, { ProductName: pname, UnitPrice: pPrice, UnitsInStock: pUnits },
        (err, doc) => { console.log(doc) }
    )


}

async function CreateNewOrder(username) {
    var orders = await Order.find().select('OrderID');

    var id;
    do {
        id = Math.floor(Math.random() * 10000) + 10;
        var exist = orders.some(p => p.OrderID == id)
    } while (exist == true)

    var cust = await FindContactByName(username);
    var ord = new Order({
        OrderID: id,
        CustomerID: cust.CustomerID,
        OrderDate: new Date(),
        ShipAddress: cust.Address
    });

    var res = await ord.save();
    return res.OrderID;
}

async function CreateNewOrderDetails(OrderID, ProductsCart) {
    //console.log(ProductsCart);
    for (let product of ProductsCart) {
        let prd = new Order_Details({
            OrderID: OrderID,
            ProductID: product.ProductID,
            UnitPrice: product.UnitPrice,
            Quantity: product.Quantity,
            Discount: 0
        });
        let res = await prd.save();
    }
}

app.use(express.static(path.join(__dirname, 'dist/meanproject')));
app.use(bodyParser.json());
app.use(cors());
app.use(cookieParser());


app.get('/getAllProducts', (req, res) => {
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
    Register(req.body).then(data => {
        res.send({ state: data });
    });
});

app.post('/login', (req, res) => {
    res.set({
        'Content-Type': 'text/json',
        'Access-Control-Allow-Origin': '*',
    });
    res.set('Set-Cookie', 'firstCookie=firstValue');
    if (req.body.ContactName == 'admin' && req.body.Password == 'admin') {
        res.cookie('accountUserName', 'admin');
        res.cookie('role', 'admin');
        res.send({ role: 'admin' });
    }
    else {
        Login(req.body).then((data) => {
            if (data == true) {
                console.log("login2");
                res.cookie('accountUserName', req.body.ContactName);
                res.cookie('role', 'user');
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
    CreateNewOrder(req.body.CustomerName).then(OrderID => {
        if (OrderID != '') {
            CreateNewOrderDetails(OrderID, req.body.ProductsCart).then(() => {
                res.send({ inserted: true });
            })
        }
    });
})

app.post('/deleteProduct', (req, res) => {
    DeleteproductByAdmin(req.body.productid)
    res.send({ deleted: true });
})

app.post('/updateProduct', (req, res) => {
    UpdateproductByAdmin(req.body.productID, req.body.productName, req.body.UnitPrice, req.body.UnitsInStock);
    res.send({ update: true });

})

app.post('/AddProduct', (req, res) => {
    AddProduct(req.body);
    res.send({ added: true });
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