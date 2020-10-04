document.querySelectorAll("experience").forEach(
  item => item.ondblclick = function() {
    if (confirm("Delete this block?")) {
      this.style.display = "none";
    }
  }
);

String.prototype.hashCode = function() {
  var hash = 0, i, chr;
  if (this.length === 0) return hash;
  for (i = 0; i < this.length; i++) {
    chr = this.charCodeAt(i);
    hash = ((hash << 5) - hash) + chr;
    hash |= 0; // convert to 32bit integer
  }
  return hash;
};

// alert(prompt("To hash: ").hashCode());

var promptText = "Enter contact password. \n(Answer: \"(###) ###-#### ????????@outlook.com\") \n(Cancel if you do not know.)"
contactHash = "-908326944"; // phone number and email address
var entry = prompt(promptText) || "123";

if (entry.hashCode() == contactHash) {
  document.querySelector("#contact").innerHTML = entry + "<br/>kwen1000.github.io";
}
else {
  document.querySelector("#notice").innerHTML = "CONTACT HASH INCORRECT. CONTACT HASH INCORRECT. <br/>"
}

if (window.confirm("Allow editable (has spell checking)?")) {
  document.body.setAttribute("contenteditable", "true");
}

if (window.location.search.includes("pictures") || window.confirm("Show pictures?")) {
  var pictures = document.querySelectorAll("picture");
  for (var i = 0; i < pictures.length; i++) {
    pictures[i].innerHTML = "<border><img src="+pictures[i].getAttribute("image")+" onclick='var link = prompt(\"Replace image with url: \"); if (link){this.src = link}'></border>";
  }
  document.body.className = "bigMargin";
}