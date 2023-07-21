<script></script>

<template>
    <div class="projects-container">
        <div class="project">
            <div class="project-info">
                <div class="project-header">
                    <h1>Recording Fee Calculator</h1>
                    <a class="github-link" href="https://github.com/nicole440/bird-observer" target="_blank"><img
                            class="github-logo" src="../assets/GitHub-PNG-Isolated-Photo.png" alt="GitHub logo"></a>
                </div>
                <div class="project-description">
                    <p class="description">Where it all began! I started this project when I was learning JavaScript in 2022
                        as I found myself considering the ways in which I could incorporate my beginner-level programming
                        knowledge into my work as a real estate paralegal. It began as a simple conditional statement in
                        vanilla JS, and I have expanded on its functionality and given it a simple UI with Vue.js.</p>
                </div>
            </div>
            <div class="project-screenshot">
                <p>(Image coming soon.)</p>
            </div>
        </div>
        <div class="project">
            <div class="project-info">
                <div class="project-header">
                    <h1>Crime Data Analysis</h1>
                    <a class="github-link" href="https://github.com/nicole440/crime-data-analysis" target="_blank"><img
                            class="github-logo" src="../assets/GitHub-PNG-Isolated-Photo.png" alt="GitHub logo"></a>
                </div>
                <div class="project-description">
                    <p class="description">This is a Python program written using Jupyter Notebook and utilizing the pandas
                        library to explore, transform, clean, and analyze data on hate crimes in New York City between 2019
                        and 2023, and I used Power BI to create visualizations of the data.</p>
                </div>
            </div>
            <div class="project-screenshot">
                <p>(Image coming soon.)</p>
            </div>
        </div>
        <div class="project">
            <div class="project-info">
                <div class="project-header">
                    <h1>eBird Data Pipeline</h1>
                    <a class="github-link" href="https://github.com/nicole440/dryocopus-pileatus" target="_blank"><img
                            class="github-logo" src="../assets/GitHub-PNG-Isolated-Photo.png" alt="GitHub logo"></a>
                </div>
                <div class="project-description">
                    <p class="description">This is a Python program written in a Jupyter Notebook that extracts recent
                        observation and birding hotspot data from the Cornell Lab of Ornithology eBird API. Once extracted,
                        it transforms the data and loads it into a SQLite database. I'm currently working on configuring an
                        email notification feature for updates on recent bird sightings based on certain criteria.</p>
                </div>
            </div>
            <div class="project-screenshot">
                <p>(Image coming soon.)</p>
            </div>
        </div>
        <div class="project"></div>
    </div>
</template>

<style scoped>
/* TODO: Make this responsive*/

.projects-container {
    display: grid;
    margin: 10px;
}

.project {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
        "info screenshot";
    margin-bottom: 30px;
}

.project-description, .project-header {
    background-color: #ffffffb2;
}

.project-header {
    display: flex;
    align-content: flex-start;
}

.project-screenshot {
    grid-area: screenshot;
    margin: auto;
    padding: 10px;
    background-color: #eceaeac7;
}

h1 {
    grid-area: name;
    font-size: 1.7rem;
    margin: 0;
}

.github-link {
    max-height: 50px;
    align-content: baseline;
}

.github-logo {
    max-width: 50px;
}

.description {
    font-size: 1.2rem;
}

.subtext {
    font-size: 1rem;
    padding: 10px;
}

.subtext > span {
    font-weight: 400;
}

</style>