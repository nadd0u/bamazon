
var inquirer = require('inquirer');
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'bamazon'
});

connection.connect();
//show all items
connection.query("SELECT * FROM bamazon.products;", function (error, results, fields) {
  if (error) throw error;
  console.log(results);
});

connection.end();


var questions = {
	item:[{
		type:"input",
		message:"What is the Id of the item you want to buy",
	  name:"Id"
	  }],
	quantity:[{
      type:"input",
	    message:"How many would you like?",
	    name:"stock"
	}],
};

inquirer.prompt(questions.item).then(function(answer){
    var id = answer;
    connection.query("SELECT name FROM bamazon.products where id = id;", function (error, results, fields) {
      if (error) throw error;
      console.log(results);
    });
    console.log("you have selected" + //pull name from sql);
  });

//prompt user for ID and quantity of what they want to buy
//compare quantity to stock
inquirer.prompt(questions.quantity).then(function(answer){
  if(answer.quantity <= products(id).stock){
    console.log("thank you for shopping! your total is:" + total);
    //update quantity
  }
  else {
    console.log("Im sorry we dont have enough in stock")
  }

});



//cost = this.quanity * this.price
