const express = require('express');
const router = express.Router();

const people = {
    nazar: { name: "Назар", description: "Опис Назара", photo: "/stylesheets/images/nazar.jpg" },
    illya: { name: "Ілля", description: "Опис Іллі", photo: "/stylesheets/images/illya.jpg" },
    diana: { name: "Діана", description: "Опис Діани", photo: "/stylesheets/images/diana.jpg" },
    vanya: { name: "Ваня", description: "Опис Вані (Івана, якщо повністю)", photo: "/stylesheets/images/vanya.jpg" },
    esfer: { name: "Есфер", description: "Опис Еськи", photo: "/stylesheets/images/esfer.jpg" }
};

router.get('/:name', function(req, res) {
    const person = people[req.params.name];
    if (!person) {
        return res.status(404).render('error', { message: "Користувача не знайдено" });
    }
    res.render('about', { person });
});


module.exports = router;
