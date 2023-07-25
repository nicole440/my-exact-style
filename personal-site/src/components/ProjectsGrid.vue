<script></script>

<template></template>

<style>

.projects-container {
    display: grid;
    margin: 10px;
}

.project {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
        "info screenshot";
    margin-bottom: 50px;
    border: 1px solid lightgrey;
    border-radius: 20px;
    padding: 30px;
    background-color: #ffffffb2;
}

@media (max-width: 600px) {
    .project {
        display: flex;
        flex-wrap: wrap;
        text-align: center;
    }
}

.project-description {
    margin-bottom: 10px;
}

.project-description,
.project-header {
    background-color: #ffffffb2;
}

.project-screenshot {
    grid-area: screenshot;
    margin: auto;
    padding: 10px;
    background-color: #eceaeac7;
    text-align: center;
    border-radius: 20px;
}

h1 {
    grid-area: info;
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
    grid-area: info;
    font-size: 1.2rem;
}
</style>