<!-- views/form.ejs -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Resume Builder</title>
    <link rel="stylesheet" href="/styles.css">
</head>
<body>
    <header>
        <h1>Resume Builder</h1>
    </header>

    <main>
        <section>
            <h2>Fill in your details</h2>
            <form action="/create-resume" method="POST">
                <label for="name">Name:</label>
                <input type="text" id="name" name="name" required>

                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required>

                <label for="jobTitle">Job Title:</label>
                <input type="text" id="jobTitle" name="jobTitle" required>

                <label for="experience">Experience:</label>
                <textarea id="experience" name="experience" required></textarea>

                <button type="submit">Generate Resume</button>
            </form>
        </section>
    </main>

    <footer>
        <p>&copy; 2024 Resume Builder</p>
    </footer>
</body>
</html>
