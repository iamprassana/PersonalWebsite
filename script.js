document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const message = e.target.message.value;

    const subject = `Portfolio Contact from ${name}`;
    const body = `Name: ${name}%0AEmail: ${email}%0AMessage: ${message}`;
    window.location.href = `mailto:rk.prassana.dev@gmail.com?subject=${subject}&body=${body}`;
});
