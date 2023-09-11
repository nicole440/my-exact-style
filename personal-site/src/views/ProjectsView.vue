<script>
import HelloWorld from '../components/HelloWorld.vue';
import ProjectsGrid from '../components/ProjectsGrid.vue';

export default {
    components: {
        HelloWorld,
        ProjectsGrid
    },
};
</script>

<template>
    <div>
        <HelloWorld />
        <ProjectsGrid />
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
                            fees for land records in Lancaster County, PA. Created with JavaScript, Vue.js, HTML, and CSS.
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
                        <h2>HopSeeker</h2>
                        <a class="github-link" href="https://github.com/nicole440/hop-seeker" target="_blank">Code</a>
                    </div>
                    <div class="project-description">
                        <p class="description">A full-stack application (in progress) that consumes the OpenBrewery
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
    </div>
</template>
