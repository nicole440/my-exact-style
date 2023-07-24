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
    <HelloWorld/>
    <ProjectsGrid/>

      <div class="projects-container">
        <div class="project">
            <div class="project-info">
                <div class="project-header">
                    <h1>Recording Fee Calculator</h1>
                    <a class="github-link" href="https://github.com/nicole440/bird-observer" target="_blank"><img
                            class="github-logo" src="../assets/GitHub-PNG-Isolated-Photo.png" alt="GitHub logo"></a>
                </div>
                <div class="project-description">
                    <p class="description">I started this project when I was learning JavaScript in 2022
                        as I found myself considering the ways in which I could incorporate my beginner-level programming
                        knowledge into my work as a real estate paralegal. It began as a simple conditional statement in
                        vanilla JS, and I have expanded on its functionality and given it a simple UI with Vue.js.</p>
                </div>
            </div>
            <div class="project-screenshot">
                <p>(Image coming soon)</p>
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
                        and 2023, and I used Power BI to create visualizations.</p>
                </div>
            </div>
            <div class="project-screenshot">
                <p>(Image coming soon)</p>
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
                        email notification feature for updates on recent bird sightings based on specified criteria.</p>
                </div>
            </div>
            <div class="project-screenshot">
                <p>(Image coming soon)</p>
            </div>
        </div>
        <div class="project">
            <div class="project-info">
                <div class="project-header">
                    <h1>HopSeeker</h1>
                    <a class="github-link" href="https://github.com/nicole440/hop-seeker" target="_blank"><img
                            class="github-logo" src="../assets/GitHub-PNG-Isolated-Photo.png" alt="GitHub logo"></a>
                </div>
                <div class="project-description">
                    <p class="description">This is a A full-stack application that consumes the OpenBrewery public API to
                        allow users to search by name, city, or zip code to find Pennsylvania breweries. Registered users can create and maintain a list of their favorites.</p>
                </div>
            </div>
            <div class="project-screenshot">
                <p>(Image coming soon)</p>
            </div>
        </div>
    </div>
  </div>
</template>
