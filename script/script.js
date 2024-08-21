

var typed =new Typed(".typing",{
    strings:["","Web Designer", "Web Developer","Android App Developer" "Brocher, Banner and .. Designer","Electric Installer","Solar Installer"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
})

$(".home-img").hide();
$(".home-img").delay(3000).fadeToggle(3000);
$("#para").hide();
$("#para").slideDown(3000);


// about animation
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add("animate");
        } else{
            entry.target.classList.remove("animate")
        }
    });
});

const hiddenElement = document.querySelectorAll(".about_animate");
hiddenElement.forEach((el) => observer.observe(el));

// language animation
const lnaguageObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add("animate_language");
        } else{
            entry.target.classList.remove("animate_language")
        }
    });
});
const animatedLanguage = document.querySelectorAll(".language_each");
animatedLanguage.forEach((el) => lnaguageObserver.observe(el));

// Projects animation

const projectObserved = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add("animate_project");
        } else{
            entry.target.classList.remove("animate_project")
        }
    });
});
const animatedProject = document.querySelectorAll(".projects");
animatedProject.forEach((el) => projectObserved.observe(el));




// from previous
document.addEventListener("DOMContentLoaded", function(){

    let fullNameInput = document.getElementById("f_name");
    let emailInput = document.getElementById("e_mail");
    let subjectInput =document.getElementById("subject");
    let textContentInput =document.getElementById("messages");

    fullNameInput.addEventListener("blur",  function() {
        fullNameInput.addEventListener("focus", function(){
            if(fullNameInput.value.trim()===""){
                fullNameInput.classList.remove("error_border");
            }
            });
        if(fullNameInput.value.trim() === ""){
            fullNameInput.classList.add("error_border");
            // fullNameInput.placeholder = "please fill it full ????"
        }else{
            fullNameInput.classList.remove("error_border");
        } });
    emailInput.addEventListener("blur",  function() {
        emailInput.addEventListener("focus", function(){
            if(emailInput.value.trim()===""){
                emailInput.classList.remove("error_border");
            }
            });
        if(emailInput.value.trim() === ""){
            emailInput.classList.add("error_border");
        }else{
            emailInput.classList.remove("error_border");
        } });
    subjectInput.addEventListener("blur",  function() {
        subjectInput.addEventListener("focus", function(){
            if(subjectInput.value.trim()===""){
                subjectInput.classList.remove("error_border");
            }
            });
        if(subjectInput.value.trim() === ""){
            subjectInput.classList.add("error_border");
        }else{
            subjectInput.classList.remove("error_border");
        } });
    textContentInput.addEventListener("blur",  function() {
        textContentInput.addEventListener("focus", function(){
            if(textContentInput.value.trim()===""){
                textContentInput.classList.remove("error_border");
            }
            });
        if(textContentInput.value.trim() === ""){
            textContentInput.classList.add("error_border");
        }else{
            textContentInput.classList.remove("error_border");
        } });

});

var separet;

let registrationForm = document.getElementById("form-list");
registrationForm.onsubmit = formChecker;

let errorDisplayBox = document.getElementById("error_display");
let succeessDisplayBox = document.getElementById("success_display");
let successText = " Thanks you have Succeessfully Sent !!!!! ";
let successText2 = " but not reached to Abdulfetah due to lack of php code.";
let successText3 = "please get him through the above contacts";
let errors =[];

function formChecker(defa){

    defa.preventDefault();//display yemihonew neger ande bicha bilich bilo endaytefa yadergal
    succeessDisplayBox.style.display = "none";

    let fullName = document.getElementById("f_name");
    let email = document.getElementById("e_mail");
    let subject =document.getElementById("subject");
    let textContent =document.getElementById("messages");

    let fullNameValue =fullName.value;
    let emailValue = email.value;
    let subjectValue = subject.value;
    let textContentValue = textContent.value;


    if (!fullNameValue){
        errors.push("*The full Name is Mandatory Please Fill it !!!")
    }
    if (!emailValue){
        errors.push("*The Email is Mandatory Please Fill it !!!")
    }
    
    if (!textContentValue){
        errors.push("*The Message is Mandatory Please Fill it !!!")
    }
    if (errors.length > 0){
        errorDisplayBox.style.display = "block";
        errorDisplayBox.innerHTML = "";
        for(i=0; i<errors.length; i++){
            errorDisplayBox.innerHTML =errorDisplayBox.innerHTML  + errors[i] + "<br>";
        }
        errors= [];
    } else{
        errorDisplayBox.style.display = "none"
        succeessDisplayBox.style.display = "block";
        succeessDisplayBox.innerHTML = "";
        succeessDisplayBox.innerHTML =succeessDisplayBox.innerHTML + successText + "<br>" + successText2 + "<br>" + successText3 ;
        fullName.value = "";
        textContent.value = "";
        email.value = "";
        subject.value = "";
    }
}

