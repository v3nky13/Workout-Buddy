const express = require("express")
const {
    getWorkouts,
    getWorkout,
    createWorkout,
    deleteWorkout,
    updateWorkout
} = require("../controllers/workoutController")

const router = express.Router()

// this is to GET all workouts
router.get("/", getWorkouts)

// GET a single workouts
router.get("/:id", getWorkout)

// CREATE a new workout
router.post("/", createWorkout)

// DELETE a workout
router.delete("/:id", deleteWorkout)

// UPDATE a workout
router.patch("/:id", updateWorkout)

module.exports = router