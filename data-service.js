var employee = [];
var departments = [];
var fs = require("fs");

module.exports.initialize = function() {
    return new Promise(function(resolve, reject){
        try {
            fs.readFile('./data/employees.json', function(err, data){
                if(err){throw err;}
                employee = JSON.parse(data);
            });
            
            fs.readFile('./data/departments.json', function(err, data){
                if(err){throw err;}
                departments = JSON.parse(data);
            });
        }

        catch(ex) {
            reject("Unable to read file.");
        }
        resolve("File read successfuly.");
    });
}

// getAllEmployees();
module.exports.getAllEmployees = function() {
    var allEmp = [];
    return new Promise(function(resolve, reject){
        for(var i = 0; i < employee.length; i++) {
            allEmp.push(employee[i]);
        }

        if(employee.length == 0){
            reject("No results returned.");
        }
        resolve(allEmp);
    });
}

// getManagers
module.exports.getManagers = function() {
    var manager = [];
    return new Promise(function(resolve, reject){
        if(employee.length == 0) {
            reject("No results returned.");
        } else {
            for(var a = 0; a < employee.length; a++){
                if(employee[a].isManager == true){
                    manager.push(employee[a]);
                }
            }
            if(manager.length == 0) {
                reject("No results returned.");
            }
        }
        resolve(manager);
    });
}

// getDepartments
module.exports.getDepartments = function() {
    var department = [];
    return new Promise(function(resolve, reject){
        if(employee.length == 0) {
            reject("No results returned.");
        } else {
            for(var c = 0; c < departments.length; c++){
                    department.push(departments[c]);
            }
            if (department.length == 0) {
                reject("No results returned.");
            }
        }
        resolve(department);
    });
}