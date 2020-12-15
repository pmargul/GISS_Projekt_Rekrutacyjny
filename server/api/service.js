const Task = require('../models/Task');
const express = require('express')
const router = express.Router();

const commonErrorMessage = "Wystąpił błąd podczas wykonywania operacji"
router.get('/tasks', async (req, res) => {
    try {
        const tasks = await Task.find();
        res.status(200).json({tasks: tasks});
    } catch(err){
        res.status(400).json({ 
            message: commonErrorMessage,
            title: "Błąd",
            type: "danger",
            success: true
        });    
    }
});

router.post('/tasks', async (req,res)=>{
    const taskTopNumber = await Task.find().sort({number : -1}).limit(1)
    const task = new Task({
        number: taskTopNumber.length===0? 1 : (taskTopNumber[0].number+1),
        name: req.body.name,
        creationDate: new Date().toJSON(),
        term: req.body.term,
        priority: req.body.priority,
        description: req.body.description? req.body.description: "",
        realized: false
    });
    try {
        const newTask = await task.save();
        res.status(200).json({
            task: newTask,message: 'Zadanie o numerze: '+task.number+" zostało pomyślnie utworzone",
            title: "Sukces",
            type: "success",
            success: true
        });
    } catch (err){
        res.status(400).json({ 
            message: "Wystąpił błąd podczas wykonywania operacji",
            title: "Błąd",
            type: "danger"
        });
    }
});

router.put('/tasks/switch-realized',async (req,res)=>{
    try {
        const task = await Task.findById(req.body._id)
        const realizedUpdate = (task.realized? false : true)
        await Task.updateOne({_id: task.id},{realized: realizedUpdate},(err,doc)=>{
            if(err)
                res.status(400).json({ 
                    message: commonErrorMessage,
                    title: "Błąd",
                    type: "danger"
                });
            else {
                res.status(200).json({
                     message: 'Zadanie o numerze: '+task.number+" zostało pomyślnie oznaczone jako "+(realizedUpdate? "wykonane" : "niewykonane"),
                     title: "Operacja zakończona pomyślnie",
                     type: "success",
                     success: true
                });
            }
        });
    } catch (err){
        res.status(400).json({ 
            message: commonErrorMessage,
            title: "Błąd",
            type: "danger"
        });
    }
});

router.put('/tasks', async (req,res)=>{
    try {
        const task = await Task.findById(req.body._id)
        const updateWrapper = {}
        updateWrapper.name = req.body.name
        updateWrapper.priority = req.body.priority
        updateWrapper.term = req.body.term
        updateWrapper.description = req.body.description? req.body.description: "",

        await Task.updateOne({_id: task.id},updateWrapper,(err,doc)=>{
            if(err)
                res.status(400).json({ 
                    message: commonErrorMessage,
                    title: "Błąd",
                    type: "danger"
                });
            else {
                res.status(200).json({ 
                    message: 'Zadanie o numerze: '+task.number+" zostało pomyślnie zaktualizowane",
                    title: "Sukces",
                    type: "success",
                    success: true
                });
            }
        });
    } catch (err){
        res.status(400).json({ 
            message: commonErrorMessage,
            title: "Błąd",
            type: "danger"
        });    
    }
});

router.delete('/tasks', async (req,res)=>{
    try {
        const task = Task.findById(req.body._id);
        await task.remove();
      
        res.json({ 
            message: 'Zadanie o numerze: '+req.body.number+" zostało pomyślnie usunięte",
            title: "Operacja zakończona pomyślnie",
            type: "success",
            success: true
        });
    } catch (err){
        res.status(400).json({ 
            message: commonErrorMessage,
            title: "Błąd",
            type: "danger"
        });
    }
});

module.exports.route = router;
