/*makes the snackbar a FUNCTIONING member of society*/
function myFunction() {
    var x = document.getElementById("snackbar");
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
  }
/* clicc to make stay, clicc again to kicc*/
function MyFunction() {
  document.getElementById("myDropdown").classList.toggle("lol");
}

/*buggy but idfc anymore lol*/