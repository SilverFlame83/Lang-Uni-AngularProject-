const Course = require('../models/Course');


async function createCourse(courseData) {
    const course = new Course(courseData);
    await course.save();

    return course;
}

async function getAllCourses() {
    const courses = await Course.find({}).lean();

    return courses;
}

async function getCourseById(id) {
    const course = await Course.findById(id).lean();

    return course;
}

async function editCourse(id, courseData) {
    const course = await Course.findById(id);

    course.language = courseData.language;
    course.price = Number(courseData.price);
    course.imageUrl = courseData.imageUrl;
    course.startsOn = courseData.startsOn;
    course.createdBy = courseData.createdBy;
    course.owner = courseData.owner;

    return course.save()
}

module.exports = {
    createCourse,
    getAllCourses,
    getCourseById,
    editCourse
};