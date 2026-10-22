const students = [
    { id: 1, firstname: "Ana",    lastname: "Popescu",  age: 19, class: "SI-231", specialty: "Securitate informațională"},
    { id: 2, firstname: "Mihai",  lastname: "Rusu",     age: 20, class: "SI-231", specialty: "Securitate informațională"},
    { id: 3, firstname: "Irina",  lastname: "Ciobanu",  age: 18, class: "PR-232", specialty: "Programare"},
    { id: 4, firstname: "Andrei", lastname: "Munteanu", age: 21, class: "PR-232", specialty: "Programare"},
    { id: 5, firstname: "Vlad",   lastname: "Mândru",   age: 20, class: "DG-241", specialty: "Design grafic"},
]

let nextId = 6;

const sl = document.getElementById("studentList");
const count = document.getElementById("count");
const error = document.getElementById("error");

const addStudentHTML = (student) => {
    const card = document.createElement("div");
    card.className = "student";
    sl.appendChild(card);

    const photo = document.createElement("img");
    photo.className = "student-img";
    photo.setAttribute("src", "avatar.png");
    card.appendChild(photo);

    const fullName = document.createElement("p");
    fullName.className = "name";
    fullName.innerText = student.firstname + " " + student.lastname;
    card.appendChild(fullName);

    const groupText = document.createElement("p");
    groupText.innerText = student.class;
    card.appendChild(groupText);

    const ageLabel = document.createElement("p");
    ageLabel.className = "c-type";
    ageLabel.innerText = "Varsta:";
    card.appendChild(ageLabel);

    const ageValue = document.createElement("p");
    ageValue.className = "c-value";
    ageValue.innerText = student.age;
    card.appendChild(ageValue);

    const specialtyLabel = document.createElement("p");
    specialtyLabel.className = "c-type";
    specialtyLabel.innerText = "Specialitate:";
    card.appendChild(specialtyLabel);

    const specialtyValue = document.createElement("p");
    specialtyValue.className = "c-value";
    specialtyValue.innerText = student.specialty;
    card.appendChild(specialtyValue);

    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Sterge";
    deleteBtn.addEventListener("click", () => {deleteStudent(student.id)});
    card.appendChild(deleteBtn);
}

const addStudentsHTML = () => {
    sl.innerHTML = "";
    count.innerText = students.length;

    if (students.length === 0) {
        sl.innerText = "Lista este goală. Nu există studenți.";
        return;
    }

    students.forEach((student) => addStudentHTML(student));
}

addStudentsHTML();

const form = document.getElementById("addElev");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const lastname = document.getElementById("lastname").value.trim();
    const firstname = document.getElementById("firstname").value.trim();
    const ageText = document.getElementById("age").value.trim();
    const specialty = document.getElementById("specialty").value.trim();
    const group = document.getElementById("group").value.trim();
    let avatar = "avatar.png";
    const age = Number(ageText);

    if (lastname === "" || firstname === "" || ageText === "" || specialty === "" || group === "") {
        error.innerText = "Completați toate câmpurile!";
        return;
    }
    if (!Number.isInteger(age) || age < 14 || age > 100) {
        error.innerText = "Vârsta trebuie să fie un număr întreg între 14 și 100!";
        return;
    }

    students.push({ id: nextId, firstname: firstname, lastname: lastname, age: age, class: group, specialty: specialty, avatar: avatar });
    nextId++;

    error.innerText = "";
    form.reset();
    addStudentsHTML();
});

function deleteStudent(id){
    for(let i=0; i<students.length; i++){
        if(students[i].id === id){
            students.splice(i, 1);
            break;
        }
    }
    addStudentsHTML();
}

const justifyValue = document.getElementById("justify-content");
justifyValue.addEventListener("change", () => {
    sl.style.justifyContent = justifyValue.value;
})

const alignValue = document.getElementById("align-items");
alignValue.addEventListener("change", () => {
    sl.style.alignItems = alignValue.value;
})

const wrapValue = document.getElementById("wrap");
wrapValue.addEventListener("change", () => {
    sl.style.flexWrap = wrapValue.checked ? "wrap" : "nowrap";
})

const gapValue = document.getElementById("numberIn");
const submitGap = document.getElementById("submitNumber");
submitGap.addEventListener("click", () => {
    if (gapValue.value !== "") {
        sl.style.gap = gapValue.value + "px";
    }
});