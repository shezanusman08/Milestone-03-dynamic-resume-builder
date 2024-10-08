// Step 01: Listing Element
var _a;
(_a = document.getElementById("resumeForm")) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    event.preventDefault();
    // Get Input
    var nameElement = document.getElementById("name");
    var emailElement = document.getElementById("email");
    var phoneElement = document.getElementById("contact");
    var adrElement = document.getElementById("adr");
    var eduElement = document.getElementById("edu");
    var expElement = document.getElementById("exp");
    var skillElement = document.getElementById("skill");
    var aboutElement = document.getElementById("about");
    if (nameElement && emailElement && phoneElement && adrElement && eduElement && expElement && skillElement && aboutElement) {
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var adrress = adrElement.value;
        var education = eduElement.value;
        var exp = expElement.value;
        var skill = skillElement.value;
        var about = aboutElement.value;
        //Get Output
        var resumeOutput = "\n<h2>Resume</h2>\n<p><strong>Name: </strong>".concat(name_1, "</p>\n<p><strong>Email: </strong>").concat(email, "</p>\n<p><strong>Phone Number: </strong>").concat(phone, "</p>\n<p><strong>Country/City: </strong>").concat(adrress, "</p>\n\n<h3>Objective: </h3>\n<p>").concat(about, "</p>\n\n<h3>Education: </h3>\n<p>").concat(education, "</p>\n\n<h3>Experience: </h3>\n<p>").concat(exp, "</p>\n\n<h3>Skills: </h3>\n<p>").concat(skill, "</p>\n\n");
        var resumeOutputElement = document.getElementById("resumeOutput");
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
        }
        else {
            console.error('Information missing');
        }
    }
});
