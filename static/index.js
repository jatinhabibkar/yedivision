
function myanimation() {
    var selectoption=document.getElementById("nav_block");

    setTimeout(function(){
       var divhai= document.getElementById("id02");

       divhai.style.display="inline-block";
       selectoption.style.display="inline-block";

    },900)
    setTimeout(function(){
        document.getElementById("id01").style.fontSize = "10vh";
    },900)
    setTimeout(function () {
        document.getElementById("id01").innerHTML = "Ye";
    }, 800);
    setTimeout(function () {
        document.getElementById("id01").innerHTML = "N";
    }, 700);
    setTimeout(function () {
        document.getElementById("id01").innerHTML = "i";
    }, 600);
    setTimeout(function () {
        document.getElementById("id01").innerHTML = "T";
    }, 500);
    setTimeout(function () {
        document.getElementById("id01").innerHTML = '@';
    }, 400);
    setTimeout(function () {
        document.getElementById("id01").innerHTML = "J";
    }, 300);



}
function tohidenav(todisplay){
    var navigationhomejs=document.getElementById("navigationhome")
    todisplay.style.display="block"
    navigationhomejs.style.display="none"


}

function assignmentFun(){
    var assignmentjs=document.getElementById("subject_assignment")
    // to hide
    tohidenav(assignmentjs)
    
}



function papersFun(){
    var papersjs=document.getElementById("subject_papers")
      // to hide
    tohidenav(papersjs)

}

function booksFun(){
    var booksjs=document.getElementById("subject_books")
      // to hide
    tohidenav(booksjs)

}

function mybackfunction(){
    var navjs=document.getElementById("navigationhome")
    document.getElementById("subject_assignment").style.display="none"
    document.getElementById("subject_papers").style.display="none"
    document.getElementById("subject_books").style.display="none"
    navjs.style.display="block"
}