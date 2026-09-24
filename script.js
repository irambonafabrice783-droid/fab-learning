* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
    font-family: Arial, sans-serif;
    background: linear-gradient(135deg, #0f172a, #1e3a8a);
    color: white;
    min-height: 100vh;
}

header {
    background: rgba(0, 0, 0, 0.3);
    padding: 20px;
    text-align: center;
}

.logo h1 {
    font-size: 38px;
    margin-bottom: 5px;
}

.logo p {
    opacity: 0.8;
}

nav {
    margin-top: 20px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 8px;
}

nav button {
    background: transparent;
    color: white;
    border: 1px solid rgba(255,255,255,0.4);
    padding: 9px 14px;
    border-radius: 20px;
    cursor: pointer;
}

nav button:hover {
    background: white;
    color: #1e3a8a;
}

.page {
    display: none;
    padding: 50px 20px;
    text-align: center;
    min-height: 600px;
}

.page.active {
    display: block;
}

.hero {
    max-width: 800px;
    margin: auto;
    padding: 40px 20px;
}

.hero h2 {
    font-size: 42px;
    margin-bottom: 20px;
}

.hero p {
    font-size: 20px;
    line-height: 1.6;
    margin-bottom: 30px;
}

.main-button {
    font-size: 18px;
    padding: 15px 30px;
}

.features {
    max-width: 1100px;
    margin: 30px auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
    gap: 20px;
}

.feature,
.level-card,
.content-card,
.report-card,
.ai-box {
    background: white;
    color: #172554;
    padding: 25px;
    border-radius: 18px;
    box-shadow: 0 8px 20px rgba(0,0,0,0.25);
}

.feature h3 {
    margin-bottom: 12px;
}

.feature p,
.level-card p,
.content-card p {
    line-height: 1.5;
    margin-bottom: 18px;
}

button {
    background: #2563eb;
    color: white;
    border: none;
    padding: 11px 18px;
    border-radius: 22px;
    cursor: pointer;
    font-weight: bold;
}

button:hover {
    transform: scale(1.04);
}

.level-container {
    max-width: 700px;
    margin: 35px auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 25px;
}

.content-card,
.report-card,
.ai-box {
    max-width: 700px;
    margin: 35px auto;
}

.ai-box textarea {
    width: 100%;
    height: 120px;
    margin: 20px 0;
    padding: 15px;
    border: 1px solid #ccc;
    border-radius: 12px;
    resize: vertical;
    font-family: Arial;
}

#aiAnswer {
    margin-top: 20px;
    padding: 15px;
    background: #eef2ff;
    border-radius: 10px;
    text-align: left;
}

.stat {
    display: flex;
    justify-content: space-between;
    padding: 15px;
    border-bottom: 1px solid #ddd;
}

.back-button {
    margin-top: 20px;
}

footer {
    text-align: center;
    padding: 30px;
    background: rgba(0,0,0,0.25);
    opacity: 0.8;
}

@media (max-width: 600px) {
    .hero h2 {
        font-size: 30px;
    }

    .level-container {
        grid-template-columns: 1fr;
    }

    nav button {
        font-size: 12px;
    }
}
