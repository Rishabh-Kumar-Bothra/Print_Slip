window.onload = function () {
    var name = document.getElementById('name');
    var roll = document.getElementById('roll');
    var course = document.getElementById('course');
    var amt = document.getElementById('amt');
   var  mode = document.getElementById('mode');
   var  date = document.getElementById('date');
   var done = document.getElementById('done');


    done.onclick = function(){
        // console.log(name.value);
        // console.log(roll.value);
        // console.log(course.value);
        // console.log(amt.value);
        // console.log(mode.value);
        // console.log(date.value);
        document.getElementById("stu-name").innerText = name.value;
        document.getElementById("stu-roll").innerText = roll.value;
        document.getElementById("stu-course").innerText = course.value;
        document.getElementById("stu-amt").innerText = amt.value;
        document.getElementById("stu-mode").innerText = mode.value;
        document.getElementById("stu-date").innerText = date.value;



    }


}





