// Data for the "HTML Lists" Page

var fruits = [ "Apples","Oranges","Pears","Grapes","Pineapples","Mangos" ];

var directory = [
    {type: "file", name: "file1.txt"},
    {type: "file", name: "file2.txt"},
    {type: "directory", name: "HTML Files", files: [{type: "file", name: "file1.html"},{type: "file", name: "file2.html"}]},
    {type: "file", name: "file3.txt"},
    {type: "directory", name: "JavaScript Files", files: [{type: "file", name: "file1.js"},{type: "file", name: "file2.js"},{type: "file", name: "file3.js"}]}
];

window.onload = function() {
    // Populating Ordered List
    var container = document.querySelector("#fruitList");
    myList = "<ol>";

    for (var i = 0; i < fruits.length; i++) {
        myList += "<li>" +fruits[i]+ "</li>";
    }

    myList += "</ol>";
    container.innerHTML = myList;

    // Populating Nested Lists
    var container1 = document.querySelector("#Directories");
    var myList2 = "<ul>";

    for (var i = 0; i < directory.length; i++) {
      myList2 += "<li>";

      if (directory[i].type == "file") {
        myList2 += directory[i].name;
      }
      else {
        // add the opening nested Unordered List tag here
        myList2 += directory[i].name + "<ul>";
        for (var j = 0; j < directory[i].files.length; j++) {
          myList2 += "<li>" +directory[i].files[j].name+ "</li>";
        }
        // add the closing tag for nested Unordered List
        myList2 += "</ul>";
      }
      myList2 += "</li>";
    }
    myList2 += "</ul>";
    container1.innerHTML = myList2;
};
