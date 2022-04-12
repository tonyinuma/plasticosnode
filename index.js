const express = require('express');
const app = express();
const mysql  = require('mysql');

app.get('/', (req, res) => {
    res.render("home");
});
//conecion a base de datos //


const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'plasticos_db'
});
 
connection.connect();
 
/*connection.query('SELECT * FROM usuarios', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].username);
});
 
connection.end();
*/
//vistas 
app.set("view engine", "ejs");
app.set("views","views");

app.listen(3000);