window.onload = () => {
    document.getElementById("addCourse").onclick = () => {
        const div = document.createElement("div");
        div.className = "course-container";
        div.innerHTML = '<input type="text" class="course" placeholder="Enter course name"><button type="button" class="delete-btn" onclick="this.parentElement.remove()">Delete</button>';
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
                alert("Please fill all required fields");
                return false;
            }
            if (item.type === "checkbox" && !item.checked) {
                alert("Please check the agreement box");
                return false;
            }
        }
        const courses = Array.from(document.getElementsByClassName("course"))
            .filter((input) => input.value.trim())
            .map((input, index) => `<li class="course"><b>${input.value}:</b> credits</li>`)
            .join("");
        const reader = new FileReader();
        reader.onload = (event) => {
            const result = `
            <h2>${document.getElementById("name").value}'s Introduction</h2>
            <figure>
                <img src="${event.target.result}" alt="${document.getElementById("caption").value}">
                <figcaption>${document.getElementById("caption").value}</figcaption>
            </figure>
            <div>
                <h3>About Me</h3>
                <ul>
                    <li><b>Personal Background:</b> ${document.getElementById("personal").value}</li>
                    <li><b>Professional Background:</b> ${document.getElementById("professional").value}</li>
                    <li><b>Academic Background:</b> ${document.getElementById("academic").value}</li>
                    <li><b>Background in this Subject of Progaramming and Computer Science:</b> ${document.getElementById("webdev").value}</li>
                    <li><b>Primary Computer Platform:</b> ${document.getElementById("platform").value}</li>
                    <li><b>Courses That I am Currently Taking</b>
                        <ol>
                            ${courses}
                        </ol>
                    </li>
                </ul>
            </div>`;
            document.getElementById("introResult").innerHTML = result;
            document.getElementById("formContainer").style.display = "none";
            document.getElementById("resultContainer").style.display = "block";
        };
        reader.readAsDataURL(file);
    };
    document.getElementById("resetLink").onclick = (e) => {
        e.preventDefault();
        document.getElementById("formContainer").style.display = "block";
        document.getElementById("resultContainer").style.display = "none";
        document.getElementById("introForm").reset();
        const courseInputs = document.getElementById("courseInputs");
        courseInputs.innerHTML = '<input type="text" class="course" placeholder="Enter course name"><button type="button" id="addCourse">Add</button>';
        document.getElementById("addCourse").onclick = document.getElementById("addCourse").onclick;
    };
};