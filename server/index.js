const express = require('express');
const app = express();
const port = 5000;

const cookieParser = require('cookie-parser');
const multer = require('multer');

const config = require('./config/key');
const { User } = require("./models/User");
const { Blog } = require("./models/blog");
const { BlogCatergory } = require("./models/blogCategory");
const { auth } = require("./middleware/auth");

app.use(express.urlencoded({extended: true})); // application/x-www-form-urlencoded
app.use(express.json()); //application/json

app.use(cookieParser());

const mongoose = require('mongoose');
mongoose.connect(config.mongoURI, {
    useNewUrlParser: true, useUnifiedTopology:true, useCreateIndex:true, useFindAndModify: false
}).then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err))





app.get('/', (req, res) => {
  res.send('Server ON!')
})

app.post('/api/users/register', (req, res) => {
  const user = new User(req.body)
  user.save((err, userInfo) => {
    if (err) return res.json({ registerSuccess: false, err})
    return res.status(200).json({
      registerSuccess: true
    })
  })
})

app.post('/api/users/login', (req, res) => {
  User.findOne({ email: req.body.email }, (err, user) => {
    if(!user){
      return res.json({
        loginSuccess: false,
        message: "Email is not registered"
      })
    }
    user.comparePassword(req.body.password, (err, isMatch) => {
      if(!isMatch) return res.json({ loginSuccess: false, message: "Password is incorrect"})
      user.generateToken((err, user) => {
        if (err) return res.status(400).send(err);
        res.cookie("x_auth", user.token)
          .status(200)
          .json({ loginSuccess: true, userID: user._id })
      })
    })
  })
})

app.get('/api/users/auth', auth, (req, res) => {
  res.status(200).json({
    _id: req.user._id,
    isAdmin: req.user.role === 0 ? false : true,
    isAuth: true,
    email: req.user.email,
    lastname: req.user.lastname,
    role: req.user.role,
    image: req.user.image
  })
})

app.get('/api/users/logout', auth, (req, res) => {
  User.findOneAndUpdate({_id: req.user._id }, {token: ""}, (err, user) => {
    if(err) return res.json({ success: false, err});
    return res.status(200).send({
      success: true
    })
  })
})

let storage = multer.diskStorage({
  destination: (req, file, cb) => {
      cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
      cb(null, `${Date.now()}_${file.originalname}`);
  },
  fileFilter: (req, file, cb) => {
      const ext = path.extname(file.originalname)
      if (ext !== '.jpg' && ext !== '.png' && ext !== '.mp4') {
          return cb(res.status(400).end('only jpg, png, mp4 is allowed'), false);
      }
      cb(null, true)
  }
});

const upload = multer({ storage: storage }).single("file");

app.post('/api/blog/createPost', (req, res) => {
  const blog = new Blog(req.body)
  blog.save((err, postInfo) => {
    if (err) return res.json({ success: false, err})
    return res.status(200).json({
      success: true, postInfo
    })
  })
})

app.post("/api/blog/uploadfiles", (req, res) => {
  upload(req, res, err => {
      if (err) {
          return res.json({ success: false, err });
      }
      return res.json({ success: true, url: res.req.file.path, fileName: res.req.file.filename });
  });
});

app.get("/api/blog/getBlogs", (req, res) => {
  Blog.find()
    .populate('writer')
    .exec((err, blogs) => {
      if (err) return res.status(400).send(err)
      res.status(200).json({ success: true, blogs })
    })
});

app.post("/api/blog/getPost", (req, res) => {

  Blog.findOne({ title: req.body.title })
    .populate('writer')
    .exec((err, post) => {
      if(err) return res.status(400).send(err);
      res.status(200).json({ success: true, post })
    })
});

app.post('/api/blog/createBlogList', (req, res) => {
  const blogCatergory = new BlogCatergory(req.body)
  blogCatergory.save((err, listInfo) => {
    if (err) return res.json({ success: false, err})
    return res.status(200).json({
      success: true, listInfo
    })
  })
})

app.get("/api/blog/getBlogList", (req, res) => {

  BlogCatergory.find()
    .populate('writer')
    .exec((err, list) => {
      if(err) return res.status(400).send(err);
      res.status(200).json({ success: true, list })
    })
});


app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})

