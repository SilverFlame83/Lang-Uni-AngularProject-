const Teacher = require('../models/Teacher');


async function createTeacher(teacherData) {
    const teacher = new Teacher(teacherData);
    await teacher.save();

    return teacher;
}

async function getAllTeachers() {
    const teachers = await Teacher.find({}).lean();

    return teachers;
}

async function getTeacherById(id) {
    const teacher = await Teacher.findById(id).lean();

    return teacher;
}


module.exports = {
    createTeacher,
    getAllTeachers,
    getTeacherById
};