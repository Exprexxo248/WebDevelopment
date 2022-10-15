let express = require("express");
let app = express();

// Set public folder static
app.use(express.static(__dirname + "/public"));

// user view engine
let expressHbs = require("express-handlebars");
let hbs = expressHbs.create({
  extname: "hbs",
  defaultLayout: "layout",
  layoutsDir: __dirname + "/views/layouts",
  partialsDir: __dirname + "/views/partials",
});
app.engine("hbs", hbs.engine);
app.set("view engine", "hbs");
// Define your root here

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/:page", (req, res) => {
  let banners = {
    // Blog banner
    blog: "Our Blog",
    'single-blog': "Blog Details",

    // Shop banner
    category: "Shop Category",
    'single-product': "Product Details",
    checkout : 'Product Checkout',
    confirmation: 'Confirmation',
    cart: 'Shopping Cart',

    // Page banner
    login: 'Login',
    register: 'Register',
    'tracking-order': 'Tracking',

    // Contact banner
    contact: 'Contact',
  };
  let page = req.params.page;
  res.render(page, { banner: banners[page] });
});

// Set up server and port
app.set("port", process.env.PORT || 5000);
app.listen(app.get("port"), () => {
  console.log(`server is running at port ${app.get("port")}`);
});
