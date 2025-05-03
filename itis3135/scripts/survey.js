window.onload = () => {
    document.getElementById("addCourse").onclick = () => {
        const div = document.createElement("div");
        div.innerHTML = '<input type="text" class="course"><button onclick="this.parentElement.remove()">Delete</button>';
        document.getElementById("courseInputs").appendChild(div);
    };
    document.getElementById("introForm").onsubmit = (e) => {
        e.preventDefault();
        const file = document.getElementById("image").files[0];
        if (!file || (!file.name.toLowerCase().endsWith(".jpg") && !file.name.toLowerCase().endsWith(".png"))) {
            alert("Please select a JPG or PNG image");
            return false;
        }
        const required = document.querySelectorAll("[required]");
        for (const item of required) {
            if (!item.value.trim() && item.type !== "checkbox") {
                alert("Fill all required fields");
                return false;
            }
            if (item.type === "checkbox" && !item.checked) {
                alert("Please check the agreement box");
                return false;
            }
        }
        const courses = Array.from(document.getElementsByClassName("course"))
            .filter((input) => input.value.trim())
            .map((input) => "<li>" + input.value + "</li>")
            .join ("");
        const result = "<h2>" + document.getElementById("name").value + "'s Introduction</h2>" +
            "<h3>" + document.getElementById("mascot").value + "</h3>" +
            "<p><strong>Personal:</strong> " + document.getElementById("personal").value + "</p>" +
            "<p><strong>Professional:</strong> " + document.getElementById("professional").value + "</p>" +
            "<p><strong>Academic:</strong> " + document.getElementById("academic").value + "</p>" +
            "<p><strong>Web Dev:</strong> " + document.getElementById("webdev").value + "</p>" +
            "<p><strong>Platform:</strong> " + document.getElementById("platform").value + "</p>" +
            "<p><strong>Courses:</strong><ul>" + courses + "</ul></p>" +
            "<p><strong>Funny:</strong> " + document.getElementById("funny").value + "</p>" +
            "<p><strong>Other:</strong> " + document.getElementById("anything").value + "</p>";
        document.getElementById("introResult").innerHTML = result;
        document.getElementById("formContainer").style.display = "none";
        document.getElementById("resultContainer").style.display = "block";
    };
    document.getElementById("resetLink").onclick = (e) => {
        e.preventDefault();
        document.getElementById("formContainer").style.display = "block";
        document.getElementById("resultContainer").style.display = "none";
        document.getElementById("introForm").reset();
        document.getElementById("courseInputs").innerHTML = '<input type="text" class="course" value="ITIS 3135"><button type="button" id="addCourse">Add</button>';
        document.getElementById("addCourse").onclick = document.getElementById("addCourse").onclick;
    };
};