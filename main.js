const headerTag = document.querySelector("header");
var IsHeaderHidden = false;

window.addEventListener("scroll", function () {
    var scrollHeight = this.scrollY;
    if (scrollHeight > 450) {
        if (!IsHeaderHidden) {
            IsHeaderHidden = !IsHeaderHidden;
            headerTag.style.opacity = "0";
            setTimeout(function () {
                headerTag.style.display = "none";
            }, 700);
        }
    } else {
        if (IsHeaderHidden) {
            headerTag.style.display = "block";
            headerTag.style.opacity = "1";
            IsHeaderHidden = !IsHeaderHidden;
        }
    }
})

console.log(headerTag);
