// Step 01: Listing Element
var _a;
(_a = document.getElementById("resumeForm")) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    event.preventDefault();
    // Get Input
    var nameElement = document.getElementById("name");
    var emailElement = document.getElementById("email");
    var phoneElement = document.getElementById("contact");
    var eduElement = document.getElementById("edu");
    var expElement = document.getElementById("exp");
    var skillElement = document.getElementById("skill");
    if (nameElement && emailElement && phoneElement && eduElement && expElement && skillElement) {
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var education = eduElement.value;
        var exp = expElement.value;
        var skill = skillElement.value;
        //Get Output
        var resumeOutput = "\n<h2>Resume</h2>\n<p><strong>Name:</strong>".concat(name_1, "</p>\n<p><strong>Email:</strong>").concat(email, "</p>\n<p><strong>Phone Number:</strong>").concat(phone, "</p>\n\n<h3>Education:</h3>\n<p>").concat(education, "</p>\n\n<h3>Experience:</h3>\n<p>").concat(exp, "</p>\n\n<h3>Skills:</h3>\n<p>").concat(skill, "</p>\n");
        var resumeOutputElement = document.getElementById("resumeOutput");
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
        }
        else {
            console.error('Information missing');
        }
    }
});
