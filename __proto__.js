
const User = {
    name: "john",
    email: "john@gmail.com"
}

const Teacher = {
    makeVideos: true
}

const TeacherAssistant = {
    isAvailable: false
}

const TASupport = {
    makeAssignments: "javascript",
    fullTime: true,
    __proto__: TeacherAssistant, // old method
}

console.log("TASupport", TASupport.__proto__);

// modern syntax

Object.setPrototypeOf(TeacherAssistant, Teacher);