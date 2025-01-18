document.getElementById('stream').addEventListener('change', function() {
    const stream = this.value;
    const courseSelect = document.getElementById('course');
    courseSelect.innerHTML = '<option value="">Select Course</option>'; // Clear existing options

    if (stream  === 'Undergraduate Courses') {
        courseSelect.innerHTML += '<option value="BTech">BTech</option>';
        courseSelect.innerHTML += '<option value="B.Sc">B.Sc</option>';
        courseSelect.innerHTML += '<option value="BCA">BCA</option>';
        courseSelect.innerHTML += '<option value="BBA">BBA</option>';
        courseSelect.innerHTML += '<option value="B.Ed">B.Ed</option>';
        courseSelect.innerHTML += '<option value="B.Pharma">B.Pharma</option>';
        courseSelect.innerHTML += '<option value="LLB">LLB</option>';
    } else if (stream === 'Postgraduate Courses') {
        courseSelect.innerHTML += '<option value="MBA">MBA</option>';
        courseSelect.innerHTML += '<option value="M.Sc">M.Sc</option>';
        courseSelect.innerHTML += '<option value="MA">MA</option>';
        courseSelect.innerHTML += '<option value="M.Ed">M.Ed</option>';
        courseSelect.innerHTML += '<option value="M.Pharma">M.Pharma</option>';
        courseSelect.innerHTML += '<option value="LLM">LLM</option>';
    } else if (stream === 'Diploma Courses') {
        courseSelect.innerHTML += '<option value="D.Pharm">D.Pharm</option>';
        courseSelect.innerHTML += '<option value="History">B.ed</option>';
        courseSelect.innerHTML += '<option value="GNM">GNM</option>';
        courseSelect.innerHTML += '<option value="Diploma in Engg">Diploma in Engg</option>';
    } else if (stream === 'Doctoral Programs') {
        courseSelect.innerHTML += '<option value="Ph.D">Ph.D</option>';
        courseSelect.innerHTML += '<option value="DOT">DOT</option>';
    } else if (stream === 'Other Programs') {
        courseSelect.innerHTML += '<option value="Bachelor of Hotel Management">Bachelor of Hotel Management</option>';
        courseSelect.innerHTML += '<option value="Bachelor of Hotel Management">Bachelor of Hotel Management</option>';
    }
});

document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const department = document.getElementById('department').value;
    const course = document.getElementById('course').value;
    
    const registrationData = {
        name: name,
        email: email,
        phone: phone,
        department: department,
        course: course
    };
    
    console.log('Registration Data:', registrationData);
    
    alert('Registration Successful! Check the console for your submitted data.');
});
