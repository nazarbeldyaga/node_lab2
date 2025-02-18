const express = require('express');
const router = express.Router();

const people = {
    nazar: { name: "Назар", description: "???", photo: "/stylesheets/images/nazar.jpg" },
    illya: { name: "Ілля", description: "Самородок", photo: "/stylesheets/images/illya.jpg" },
    diana: { name: "Діана", description: "Нижній текст", photo: "/stylesheets/images/diana.jpg" },
    vanya: { name: "Ваня", description: "Maybe it’s all going to be ok…Maybe it won’t🔒", photo: "/stylesheets/images/vanya.jpg" },
    esfer: { name: "Есфер", description: "Містєр татар", photo: "/stylesheets/images/esfer.jpg" }
};

router.get('/:name', function(req, res) {
    const person = people[req.params.name];
    if (!person) {
        return res.status(404).render('error', { message: "Користувача не знайдено" });
    }
    res.render('about', { person, currentName: req.params.name });
});


module.exports = router;
