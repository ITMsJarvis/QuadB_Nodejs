const express = require('express');
const router = express.Router();
const User = require('../models/user');
const { SECRET } = require('../middleware/auth');
const jwt = require("jsonwebtoken");
const { authenticateJwt } = require('../middleware/auth')


router.post("/login", async (req, res) => {
    const { email, password } = req.body
    const Admin = await User.findOne({
        where: {
            email: email,
            password: password
        }
    })
    if (Admin) {
        const token = jwt.sign({ email, role: "User" }, SECRET, {
            expiresIn: '1h'
        })
        res.json({ message: 'User Succesfully SignedIn', token })
    } else {
        res.status(403).json({ message: "Invalid username or password" })
    }
})

router.post('/insert', async (req, res) => {
    try {
        const { username, email, password, image, total_orders } = req.body;
        let checker = await User.findOne({
            where: {
                email: email
            }
        })
        if (checker) {
            res.status(403).json({ message: 'Email already resitered,Please try another one' })
        } else {
            const user = await User.create({ username: username, email: email, image: image, password: password, totalorders: total_orders });
            res.json({ message: 'User created successfully', user });
        }

    } catch (error) {
        res.status(500).json({ error: 'Error creating user' });
    }
});

router.delete("/delete/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const storedData = await User.findByPk(id);
        if (storedData) {
            storedData.destroy()
            res.json({ message: "Deleted  the user" })
        } else {
            res.status(404).json({ message: "User not found" });
        }
    } catch (err) {
        res.status(500).json({ error: "Error fetching user details" });
    }
});

router.get("/details", async (req, res) => {
    try {
        let data = await User.findAll()
        if (!data) {
            res.json({ message: "There are no records in the database" })
        }
        res.json({ UsersData: data })
    } catch (err) {
        res.json("Not working")
        throw new Error(err)
    }
})

router.get("/image/", async (req, res) => {
    try {
        let { id } = req.query
        let imageFind = await User.findOne({
            where: {
                id: id
            }
        })
        console.log(imageFind)
        if (imageFind) {
            res.json({ imageUrl: imageFind.image })
        } else {
            res.json({ messsage: "Please provide a valid id" })
        }

    } catch (err) {
        res.json({ message: "Cant get the images" })
    }
})

router.put("/update", authenticateJwt, async (req, res) => {
    try {
        const { username, email, password, image, total_orders } = req.body;
        const userToUpdate = await User.findOne({
            where: {
                email: req.data.email
            }
        });
        if (!userToUpdate) {
            return res.status(404).json({ message: "User not found" });
        }
        const updatedUser = await userToUpdate.update({
            username,
            email,
            password,
            image,
            total_orders
        });
        res.json({ message: "User updated successfully", user: updatedUser });
    } catch (err) {
        res.status(500).json({ error: "Error updating user" });
    }
})
module.exports = router;
