<script></script>

<template>
    <section id="projects">
        <h4>projects</h4>
        <div class="projects-container">
            <div class="project">
                <div class="project-info">
                    <div class="project-header">
                        <h2>Recording Fee Calculator</h2>
                        <a class="github-link" href="https://github.com/nicole440/bird-observer" target="_blank">Code</a> |
                        <a class="github-link" href="http://recording-fee-calculator.s3-website-us-east-1.amazonaws.com/"
                            target="_blank">Site</a>
                    </div>
                    <div class="project-description">
                        <p class="description">A simple and user-friendly tool to accurately calculate complex recording
                            fees for land records in Lancaster County, PA. Created with JavaScript, Vue.js, HTML, and
                            CSS.
                        </p>
                    </div>
                </div>
                <div class="project-screenshot">
                    <p>(Image coming soon)</p>
                </div>
            </div>
            <div class="project">
                <div class="project-info">
                    <div class="project-header">
                        <h2>Crime Data Analysis</h2>
                        <a class="github-link" href="https://github.com/nicole440/crime-data-analysis"
                            target="_blank">Code</a>
                    </div>
                    <div class="project-description">
                        <p class="description">A Python program written using Jupyter Notebook and the Pandas
                            library to explore, transform, clean, and analyze data on hate crimes in New York City
                            between 2019 and 2023. I utilized Power BI to create a dashboard for data visualization.</p>
                    </div>
                </div>
                <div class="project-screenshot">
                    <p>(Image coming soon)</p>
                </div>
            </div>
            <div class="project">
                <div class="project-info">
                    <div class="project-header">
                        <h2>eBird Data Pipeline</h2>
                        <a class="github-link" href="https://github.com/nicole440/dryocopus-pileatus"
                            target="_blank">Code</a>
                    </div>
                    <div class="project-description">
                        <p class="description">A Python program written in a Jupyter Notebook that extracts recent
                            observation and birding hotspot data from the Cornell Lab of Ornithology eBird API. Once
                            extracted, it transforms and loads the data into a PostgreSQL database. Currently working
                            on configuring an email notification feature for updates on recent bird sightings based
                            on specified criteria.</p>
                    </div>
                </div>
                <div class="project-screenshot">
                    <p>(Image coming soon)</p>
                </div>
            </div>
            <div class="project">
                <div class="project-info">
                    <div class="project-header">
                        <h2>Portfolio Site</h2>
                        <a class="github-link" href="https://github.com/nicole440/my-exact-style" target="_blank">Code</a>
                    </div>
                    <div class="project-description">
                        <p class="description">I build this website with HTML, CSS, JavaScript, and the Vue.js
                            framework. It
                            is hosted in an AWS S3 bucket, utilizing a custom domain registered with Route 53 which
                            points
                            to an Amazon CloudFront distribution for secure content delivery.</p>
                    </div>
                </div>
                <div class="project-screenshot">
                    <p>You're looking at it!</p>
                </div>
            </div>
            <div class="project">
                <div class="project-info">
                    <div class="project-header">
                        <h2>HopSeeker</h2>
                        <a class="github-link" href="https://github.com/nicole440/hop-seeker" target="_blank">Code</a>
                    </div>
                    <div class="project-description">
                        <p class="description">A full-stack application (in progress) being built with Java, Spring
                            Boot,
                            PostgreSQL, JavaScript, HTML and CSS and which consumes the OpenBrewery
                            public API to allow users to search for Pennsylvania breweries by name, city, or zip code.
                            Registered users will be able to add feature tags (such as dog-friendly or outdoor seating)
                            and build and maintain a list of their favorite breweries.</p>
                    </div>
                </div>
                <div class="project-screenshot">
                    <p>(Image coming soon)</p>
                </div>
            </div>
        </div>
    </section>
</template>

<style>
div.projects-container {
    display: grid;
    margin: 10px;
}

div.project {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
        "info screenshot";
    margin-bottom: 50px;
    border: 1px solid lightgrey;
    border-radius: 20px;
    padding: 30px;
    background-color: #ffffffe0;
}

@media (max-width: 600px) {
    div.project {
        display: flex;
        flex-wrap: wrap;
        text-align: center;
    }
}

.project-description {
    margin-bottom: 10px;
}

.description {
    grid-area: info;
    font-size: 1.2rem;
}

.project-screenshot {
    grid-area: screenshot;
    margin: auto;
    padding: 10px;
    background-color: #eceaeac7;
    text-align: center;
    border-radius: 20px;
}

h2 {
    grid-area: info;
    margin-bottom: 0;
}
</style>