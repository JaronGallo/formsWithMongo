# formsWithMongo
[Link to Code Website](https://desolate-sea-56537.herokuapp.com/)

[Link to my Portfolio](http://jarongallo.herokuapp.com/)

## Info 
This code showcases my ability to grab submited form data and save it to a **database like MongoDb**! I created an Api where you can view the data saved and also delete data from database.

## Packages and Lanaguages Used
1. **HTML**
2. **CSS**
3. **ES6 JavaScript**
4. **Node.js**
5. **MongoDb** (Database)
6. **Mongoose.js**
7. **Express.js**
8. **mongo.js**
9. **Materialize** (CSS Framework)
10. **Media Queries** (Mobile Responsiveness)

## Code Examples

### Routes for API 

**Post Route**

Using **express.js** and **mongoose.js** to handle the submit button posting the data.
Before this could work I needed to create a schema for the form to use to make sure the user sends valid data.

**You can view the schema** [Here](https://github.com/JaronGallo/formsWithMongo/blob/master/userModel.js)!

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
**Get Route**(To view database)

```javascript
app.get('/view-users',  function(req, res) {
    User.find({}).sort('-date').exec(function(err, users) {
        return res.end(JSON.stringify(users, null, 4));
    });
});
```

**Delete Route**

```javascript
app.delete('/clear-data',  function(req, res) {
    User.remove({}).exec(function(err, users) {
        return res.send("Data Deleted");
    });
});
```

