# formsWithMongo
[Link to Code Website](https://desolate-sea-56537.herokuapp.com/)

[Link to my Portfolio](http://jarongallo.herokuapp.com/)

## Info 
This code showcases my ability to grab submited form data and save it to a **database like MongoDb**! I created an Api where you can view the data saved and also delete data from database.

## Code Examples

### Routes for API 

**Post Route**

Using **express.js** and **mongoose.js** to handle the submit button posting the data.
Before this could work I needed to create a schema for the form to use to make sure the user sends valid data.
**You can view the schema** [Here](https://github.com/JaronGallo/formsWithMongo/blob/master/userModel.js)

```javascript
app.post('/post-user', function (req, res) {
    User.create(req.body)
    .then(function(dbUser) {
      // If saved successfully, send the the new User document to the client
        console.log("data sent!");
})
    .catch(function(err) {
      // If an error occurs, send the error to the client
      if(err.errors){
          console.log(err.errors);
    }
    });
});
```

