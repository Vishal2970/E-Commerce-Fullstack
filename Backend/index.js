// require("dotenv").config();
// const express = require("express");
// const app = express();
// const cors = require("cors");
// const ConnectDB = require("./Connection/ConnectDB");
// const AuthRoutes = require("./Routes/AuthRoutes");
// const formRoutes = require("./Routes/formRoutes");
// const ProductRoutes = require("./Routes/ProductRoutes");
// const Cart =require("./Routes/Cart");


// const corsOptions = {
//   origin: "http://localhost:3000",
//   method: "GET,POST,PUT,DELETE,PATCH,HEAD",
//   credentials: true,
// };
// app.use(cors(corsOptions));
// app.use(express.json());

// //for authentication
// app.use("/api/auth", AuthRoutes);
// //for contact us
// app.use("/api/form", formRoutes);
// //for product adding 
// app.use("/api/product", ProductRoutes);
// //for adding cart
// app.use("/api/cart",Cart);



// const port = process.env.PORT;
// ConnectDB().then(() => {
//   app.listen(port, () => {
//     console.log(`server is running at port:${port}`);
//   });
// });


require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const ConnectDB = require("./Connection/ConnectDB");
const AuthRoutes = require("./Routes/AuthRoutes");
const formRoutes = require("./Routes/formRoutes");
const ProductRoutes = require("./Routes/ProductRoutes");
const Cart = require("./Routes/Cart");
const multer = require('multer');
const path = require('path');

// Multer setup for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({
  storage: storage,
  fileFilter: function (req, file, cb) {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
      cb(null, true);
    } else {
      cb(new Error('Only JPEG and PNG files are allowed'), false);
    }
  },
});

const corsOptions = {
  origin: "http://localhost:3000",
  methods: "GET,POST,PUT,DELETE,PATCH,HEAD",
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Authentication route
app.use("/api/auth", AuthRoutes);
// Contact us route
app.use("/api/form", formRoutes);
// Product adding route
app.use("/api/product", ProductRoutes);
// Adding cart route
app.use("/api/cart", Cart);

const port = process.env.PORT;

ConnectDB().then(() => {
  app.listen(port, () => {
    console.log(`server is running at port:${port}`);
  });
});

module.exports = { upload }; // Exporting upload for use in routes
