const connection = require("./pool");

//This script is for DB migration only
(() => {
    //make sure your DB user has enough privileges for the following query!
    const queryString = 
    `START TRANSACTION;
    
    CREATE DATABASE example_db;

    USE example_db;
    
    CREATE TABLE examples (
        id int(11) NOT NULL,
        column1 text NOT NULL,
        column2 text NOT NULL
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8;
        
    ALTER TABLE examples
        ADD PRIMARY KEY (id);


    ALTER TABLE examples
        MODIFY id int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1;

    COMMIT;`;
    connection.query(queryString, (err, rows) => {
        if(err) console.log(err)
        else console.log(rows)
    })
})()