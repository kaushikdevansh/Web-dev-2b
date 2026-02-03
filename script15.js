const profile = document.getElementById("profile");
profile.style.backgroundColor = "aqua";
profile.style.padding = "15px";
profile.style.textAlign = "center";

// Task 2
const x = document.getElementsByClassName("important");

for (let i = 0; i < x.length; i++) {
    x[i].style.color = "red";
}
