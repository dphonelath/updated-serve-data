const express=require('express')
const router=express.Router()

let cohorts=require('../cohorts.js')

// GET ALL
router.get('/',(req,res) =>{
    res.json({cohort:cohorts})
})

// GET ONE
router.get('/:id', (req,res,next) =>{
    const id= req.params.id
    const cohort= cohorts.filter(cohort =>{
        return cohort.id== id
    })

    if(cohort.length){
        res.json({cohort:cohort[0]})
    }
    next()
        console.log('cohort at index 0', cohort[0], 'cohort', cohort)
    
})

module.exports = router

