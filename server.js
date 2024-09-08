// server.js
const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const path = require('path');
const pdf = require('html-pdf');
const app = express();

// Set up middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(express.static('public'));  // Serve static files like CSS

// Serve the resume form
app.get('/', (req, res) => {
    res.render('form');
});

// Handle form submission and generate PDF
app.post('/create-resume', (req, res) => {
    const { name, email, jobTitle, experience } = req.body;

    // Render HTML for the PDF
    const htmlContent = `
        <h1>Resume for ${name}</h1>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Job Title:</strong> ${jobTitle}</p>
        <p><strong>Experience:</strong></p>
        <p>${experience}</p>
    `;

    // Generate PDF and save to the uploads folder
    const pdfOptions = { format: 'A4' };
    const filePath = `uploads/${name}_resume.pdf`;

    pdf.create(htmlContent, pdfOptions).toFile(filePath, (err, result) => {
        if (err) {
            return res.status(500).send('Error generating PDF');
        }
        res.send(`<p>Resume generated successfully! <a href="/download/${name}_resume.pdf">Download Resume</a></p>`);
    });
});

// Serve the generated PDF for download
app.get('/download/:filename', (req, res) => {
    const file = path.join(__dirname, 'uploads', req.params.filename);
    res.download(file);
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
