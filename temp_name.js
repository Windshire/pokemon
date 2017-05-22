function populateSpecies() {
	var speciesDropdown;
	
	speciesDropdown = "<select>";
	speciesDropdown += "<option>Choose Pokemon:</option>";
	speciesDropdown += "<option>Vaporeon</option>";
	speciesDropdown += "</select>";
	return speciesDropdown;
}


var obj, dbParam, xmlhttp, myObj, x, txt = "";
obj = { "table":"customers", "limit":20 };
dbParam = JSON.stringify(obj);
xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        myObj = JSON.parse(this.responseText);
        txt += "<select>"
        for (x in myObj) {
            txt += "<option>" + myObj[x].name;
        }
        txt += "</select>"
        document.getElementById("species").innerHTML = txt;
    }
};

