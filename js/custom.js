window.onload = function () {
    var name = document.getElementById('name');
    var roll = document.getElementById('roll');
    var course = document.getElementById('course');
    var amt = document.getElementById('amt');
   var  mode = document.getElementById('mode');
   var  date = document.getElementById('date');
   var done = document.getElementById('done');


    done.onclick = function(){
        console.log(name.value);
        console.log(roll.value);
        console.log(course.value);
        console.log(amt.value);
        console.log(mode.value);
        console.log(date.value);
        document.getElementsByClassName("stu-name").innerText = name.value;
        document.getElementsByClassName("stu-roll").innerText = roll.value;
        document.getElementsByClassName("stu-course").innerText = course.value;
        document.getElementsByClassName("stu-amt").innerText = amt.value;
        document.getElementsByClassName("stu-mode").innerText = mode.value;
        document.getElementsByClassName("stu-date").innerText = date.value;



    }


}





