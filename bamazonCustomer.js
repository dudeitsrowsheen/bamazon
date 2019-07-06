var mysql = require("mysql");
var inquirer = require('inquirer');

var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "ponies",
    database: "bamazon"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
    // readData();
    start();


});

function start() {
    console.log("Selecting all products...\n");
    connection.query("SELECT * FROM products", function (err, results) {
        if (err) throw err;
        // Log all results of the SELECT statement
        console.table(results);


        inquirer
            .prompt([
                /* Pass your questions in here */
                {
                    name: 'firstquestion',
                    type: 'input',
                    message: 'which product do you want to buy?'
                },
                {
                    name: 'secondquestion',
                    type: 'input',
                    message: 'how many do you want to buy?'

                }

            ])
            .then(function (answer) {
                // Use user feedback for... whatever!!
                console.log(answer);
                // Loop through array of products to determine which product user wants
                var chosenItem;
                for (var i = 0; i < results.length; i++) {
                    if (results[i].product_name === answer.firstquestion) {
                        chosenItem = results[i];
                    }
                }
                // console.log(chosenItem);

                if (chosenItem.stock_quantity >= parseInt(answer.secondquestion)) {
                    connection.query(
                        "UPDATE stock?",
                        [
                            {
                                stock_quantity: answer.quantity
                            },
                            {
                                id: chosenItem.id
                            }
                        ],
                        function (error) {
                            if (error) throw err;
                            console.log("one taken out of stock!");
                            // start();
                        }
                    );
                }else{
                    console.log("we don't have enough quantity");
                }
            })
    })
}