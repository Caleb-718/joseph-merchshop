const enterShop = confirm("Welcome to Joseph Merch Shop! 🛍️\nDo you wish to proceed?");

if (enterShop) {
    alert("Thanks for visiting! ✨ Let's find your perfect look!");

    document.addEventListener("DOMContentLoaded", function() {
        const content = document.getElementById("main-content");
        content.style.display = "block";
        content.style.opacity = "0";
        content.style.transition = "opacity 0.6s ease";
        setTimeout(() => {
            content.style.opacity = "1";
        }, 50);
    });

    // Heading toggle — click to change color
    let isBright = false;
    const heading = document.querySelector("h1");
    heading.addEventListener("click", function() {
        isBright = !isBright;
        this.style.color = isBright ? "#facc15" : "#60a5fa";
    });

} else {
    document.body.innerHTML = `
        <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100vh;text-align:center;">
            <h1 style="color:#ef4444;">Access Denied</h1>
            <p>Refresh if you change your mind — your perfect look is waiting! ✨</p>
        </div>
    `;
}