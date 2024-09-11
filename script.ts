// Step 01: Listing Element

document.getElementById("resumeForm")?.addEventListener('submit', function(event){
    event.preventDefault();



// Get Input

const nameElement = document.getElementById("name") as HTMLInputElement;
const emailElement = document.getElementById("email") as HTMLInputElement;
const phoneElement = document.getElementById("contact") as HTMLInputElement;
const adrElement = document.getElementById("adr") as HTMLInputElement;
const eduElement = document.getElementById("edu") as HTMLInputElement;
const expElement = document.getElementById("exp") as HTMLInputElement;
const skillElement = document.getElementById("skill") as HTMLInputElement;
const aboutElement = document.getElementById("about") as HTMLInputElement;





if(nameElement && emailElement && phoneElement && adrElement && eduElement && expElement && skillElement && aboutElement){

    const name = nameElement.value;
    const email = emailElement.value;
    const phone = phoneElement.value;
    const adrress = adrElement.value;
    const education = eduElement.value;
    const exp = expElement.value;
    const skill = skillElement.value;
    const about = aboutElement.value;



    
//Get Output
const resumeOutput = `
<h2>Resume</h2>
<p><strong>Name: </strong>${name}</p>
<p><strong>Email: </strong>${email}</p>
<p><strong>Phone Number: </strong>${phone}</p>
<p><strong>Country/City: </strong>${adrress}</p>

<h3>Objective: </h3>
<p>${about}</p>

<h3>Education: </h3>
<p>${education}</p>

<h3>Experience: </h3>
<p>${exp}</p>

<h3>Skills: </h3>
<p>${skill}</p>

`;


const resumeOutputElement = document.getElementById("resumeOutput")

if(resumeOutputElement){
    resumeOutputElement.innerHTML = resumeOutput
}else {
    console.error('Information missing');
    
}


}
})



