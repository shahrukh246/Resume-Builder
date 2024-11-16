function HideAndShow(){
    var details_list = document.getElementById('personal_detail')
var toggle_btn = document.getElementById('hide_btn')
var hide_text = document.getElementById('toggle_btn')

toggle_btn.addEventListener('click', function(){
    if(hide_text.textContent == 'Edit'){
        details_list.style.height = 'auto';
        hide_text.textContent = 'Hide'
    }
    else{
        details_list.style.height = '180px'
        hide_text.textContent = 'Edit'
    }
    

})
}

HideAndShow();


function changeName(){
 
    var f_name = document.getElementById('f_name');
    var l_name = document.getElementById('l_name');
    var email = document.getElementById('email');
    var phone = document.getElementById('phone');
    var country = document.getElementById('country');
    var city = document.getElementById('city');
    var address = document.getElementById('address');
    var nation = document.getElementById('nation');
    var pob = document.getElementById('pob');
    var dob = document.getElementById('dob');
    var objective = document.getElementById('objective').value;
    var experience = document.getElementById('experience').value;
    var education = document.getElementById('education').value;
    var skills = document.getElementById('skills').value;
    
   
    var full_name = document.getElementById('name');
    var email_value = document.getElementById('email_value');
    var phone_value = document.getElementById('phone_value');
    var country_value = document.getElementById('country_value');
    var city_value = document.getElementById('city_value');
    var address_value = document.getElementById('address_value');
    var nation_value = document.getElementById('nation_value');
    var pob_value = document.getElementById('pob_value');
    var dob_value = document.getElementById('dob_value');
    var objective_value = document.getElementById('objective_value');
    var experience_value = document.getElementById('experience_value');
    var education_value = document.getElementById('education_value');
    var skills_value = document.getElementById('skills_value');
    

    const formattedObjective = objective.replace(/\n/g, ' <br> ');
    const formattedExperience = experience.replace(/\n/g, ' <br> ');
    const formattedEducation = education.replace(/\n/g, ' <br> ');
    const formattedSkills = skills.replace(/\n/g, ' <br> ');


    full_name.textContent = f_name.value + ' ' + l_name.value;
    email_value.textContent = email.value;
    phone_value.textContent = phone.value;
    country_value.textContent = country.value;
    city_value.textContent = city.value;
    address_value.textContent = address.value;
    nation_value.textContent =nation.value;
    pob_value.textContent = pob.value;
    dob_value.textContent= dob.value;
    objective_value.innerHTML = formattedObjective;
    experience_value.innerHTML = formattedExperience;
    education_value.innerHTML = formattedEducation;
    skills_value.innerHTML = formattedSkills;



}