let checkbox=document.getElementById("checkbox")
console.log(checkbox);
let checkboxError=document.getElementById("checkboxError")
let displayData=false;
function submitform()
{
    console.log("sf");
    if (checkbox.checked)
    {
        console.log("hi");
        displayData=true
        console.log(displayData);
    }
    else
    {
        checkbox.style.borderColor="red"
        checkboxError.style.display="block"
        checkboxError.style.color="red"
        checkboxError.innerText="You did not accept the terms and conditions"
    }
}

    var currentDate = new Date();
    currentDate.setDate(currentDate.getDate());
    var minDate = currentDate.toISOString().split('T')[0];
    document.getElementById('dob').max = minDate;

function validate(e)
{
    e.preventDefault();

    let username=document.getElementById("un")
    let usernameValue=document.getElementById("un").value
    let email=document.getElementById("email")
    let emailValue=document.getElementById("email").value
    let pwd=document.getElementById("pwd")
    let pwdValue=document.getElementById("pwd").value
    let cpwd=document.getElementById("cpwd")
    let cpwdValue=document.getElementById("cpwd").value
    let dob=document.getElementById("dob")
    let dobValue=document.getElementById("dob").value
    console.log(dobValue);
    let yob=dobValue.split("-").at(0)
    let date=new Date().getFullYear()
    let gender=document.getElementById("gender")
    let country=document.getElementById("country")

    let unError=document.getElementById("unError")
    let emailError=document.getElementById("emailError")
    let pwdError=document.getElementById("pwdError")
    let cpwdError=document.getElementById("cpwdError")
    let dobError=document.getElementById("dobError")
    let genderError=document.getElementById("genderError")

    checkbox.style.borderColor="green"
        submitform()
    checkboxError.style.display="none"

    if(usernameValue=="")
    {
        username.style.borderColor="red"
        unError.style.display="block"
        unError.style.color="red"
        unError.innerText="Username is mandatory"
    }
    else if(!/^[a-zA-Z0-9]+$/.test(usernameValue))
    {
        username.style.borderColor="red"
        unError.style.display="block"
        unError.style.color="red"
        unError.innerText="Username accepts only Alpanumericals"
    }
    else if(usernameValue.length<5)
    {
        username.style.borderColor="red"
        unError.style.display="block"
        unError.style.color="red"
        unError.innerText="Username should contain minimum 5 characters"
    }
    else if(usernameValue.length>15)
    {
        username.style.borderColor="red"
        unError.style.display="block"
        unError.style.color="red"
        unError.innerText="Username cannot contain more than 15 characters"
    }
    else
    {
        username.style.borderColor="green"
        submitform()
        unError.style.display="none"
    }


    if(emailValue=="")
    {
        email.style.borderColor="red"
        emailError.style.display="block"
        emailError.style.color="red"
        emailError.innerText="email is mandatory"
    }
    else if(!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(emailValue))
    {
        email.style.borderColor="red"
        emailError.style.display="block"
        emailError.style.color="red"
        emailError.innerText="email is invalid"
    }
    else
    {
        email.style.borderColor="green"
        submitform()
        emailError.style.display="none"
    }
    
    if(pwdValue=="")
    {
        pwd.style.borderColor="red"
        pwdError.style.display="block"
        pwdError.style.color="red"
        pwdError.innerText="Password is mandatory"
    }
    else if(!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d\S]{8,}$/.test(pwdValue))
    {
        pwd.style.borderColor="red"
        pwdError.style.display="block"
        pwdError.style.color="red"
        pwdError.innerText="Password must iclude a mix of uppercase, lowercase, numbers, and special characters"
    }
    else
    {
        pwd.style.borderColor="green"
        submitform()
        pwdError.style.display="none"
    }

    if(cpwdValue=="")
    {
        cpwd.style.borderColor="red"
        cpwdError.style.display="block"
        cpwdError.style.color="red"
        cpwdError.innerText="Confirm Password cannot be empty"
    }
    else if(pwdValue!=cpwdValue)
    {
        cpwd.style.borderColor="red"
        cpwdError.style.display="block"
        cpwdError.style.color="red"
        cpwdError.innerText="Password does not match"
    }
    else
    {
        cpwd.style.borderColor="green"
        submitform()
        cpwdError.style.display="none"
    }

    if(dobValue=="")
    {
        dob.style.borderColor="red"
        dobError.style.display="block"
        dobError.style.color="red"
        dobError.innerText="Date of Birth cannot be empty"
    }
    else if((date-yob)<18)
    {
        dob.style.borderColor="red"
        dobError.style.display="block"
        dobError.style.color="red"
        dobError.innerText="You are not 18+"
    }
    else
    {
        dob.style.borderColor="green"
        submitform()
        dobError.style.display="none"
    }


    var radioButtons = document.getElementsByName("gender");
    console.log(radioButtons);
    let selectedgender;
    let genderValue;
    function checkGender()
    {
        for (var i = 0; i < radioButtons.length; i++) 
        {
            genderValue=radioButtons[i].value
        if (radioButtons[i].checked) 
        {
            return true;
        }
    }
    }
    console.log(checkGender());

    if(checkGender()==true)
    {
        
        console.log(genderValue);
        selectedgender=genderValue
        gender.style.borderColor="green"
        genderError.style.display="none"
        submitform()
    }
    if(checkGender()!==true)
    {
            gender.style.borderColor="red"
            genderError.style.display="block"
            genderError.style.color="red"
            genderError.innerText="Select Your Gender"
    }

    var selectedOption = country.options[country.selectedIndex];
    let countryValue=selectedOption.value

        let displayinfo=document.querySelector(".displayinfo")
        console.log(displayinfo);
        console.log(displayData);

        if(displayData)
        {
        displayData=displayinfo.innerHTML=""
        displayData=displayinfo.innerHTML+=`
        <h2 style="color: green;">Form submitted successfully</h2>
        <br>
        <h3>Name:${usernameValue}</h3>
        <br>
        <h3>Email:${emailValue}</h3>
        <br>
        <h3>Gender:${selectedgender}</h3>
        <br>
        <h3>Date Of Birth:${dobValue}</h3>
        <br>
        <h3>Country:${countryValue}</h3>
        `
        }
    
}
