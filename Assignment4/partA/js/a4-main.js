var filterType = ""; // sets the filter type to "" (will later be dog, cat or bird)
var filterAgeMin = 0; // sets the filter age min to 0 (for no minimum age filter)
var filterAgeMax = Number.MAX_VALUE; // sets the filter age max to the largest number possible (for no maximum age filter)

// js code starts here
function loadTableWithFilters()
{
    var main = document.querySelector("#main-table-body").innerHTML = "";

    for (var i = 0; i < petData.length; i++)
    {
        if ((filterType === "Dog" && petData[i].type === "dog") || (filterType === "Cat" && petData[i].type === "cat") || (filterType === "Birds" && petData[i].type === "bird") || (filterType === ""))
        {
            if (petData[i].age >= filterAgeMin && petData[i].age <= filterAgeMax)
            {
                var tr = document.createElement("tr");
                var td = document.createElement("td");
                var img = document.createElement("img");
                
                img.src = petData[i].image.src;
                img.alt = petData[i].image.alt;
                img.height = petData[i].image.height;
                img.width = petData[i].image.width;
                td.appendChild(img);

                var td1 = document.createElement("td");
                var h4 = document.createElement("h4");
                var hdg = document.createTextNode(petData[i].name);
                h4.appendChild(hdg);

                var p = document.createElement("p");
                p.innerHTML = petData[i].description;
                var span = document.createElement("span");
                var t = document.createTextNode("Age: ");
                var t1 = document.createTextNode(petData[i].age);
                var t2 = document.createTextNode(" years old.");
                span.appendChild(t);
                span.appendChild(t1);
                span.appendChild(t2);
                td1.appendChild(h4);
                td1.appendChild(p);
                td1.appendChild(span);
                tr.appendChild(td);
                tr.appendChild(td1);
                document.querySelector("#main-table-body").appendChild(tr);
            }
        }

    }

}

// functions to filter by animal type
function filterDog()
{
    filterType = "Dog";
    loadTableWithFilters();
}
function filterCat()
{
    filterType = "Cat";
    loadTableWithFilters();
}
function filterBird()
{
    filterType = "Birds";
    loadTableWithFilters();
}
function filter_zero_1()
{
    filterAgeMax = 1;
    filterAgeMin = 0;
    loadTableWithFilters();
}
function filter_1_3()
{
    filterAgeMax = 3;
    filterAgeMin = 1;
    loadTableWithFilters();
}
function filter_4_plus()
{
    filterAgeMax = Number.MAX_VALUE;
    filterAgeMin = 4;
    loadTableWithFilters();
}
function filterAllPets()
{
    filterType = "";
    filterAgeMax = Number.MAX_VALUE;
    filterAgeMin = 0;
    loadTableWithFilters();
}

window.onload = function()
{
    loadTableWithFilters();
}
// end of js code
