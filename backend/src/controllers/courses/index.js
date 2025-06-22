const purchaseCourse = (req, res) => {
    res.send("Purchase Courses");
}

const viewAllCourse = (req, res) => {
    res.send("View  All Courses");
}

module.exports = { 
    purchaseCourse,
    viewAllCourse
}