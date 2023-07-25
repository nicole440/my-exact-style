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
    background-color: #ffffffcb;
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

.repo-link {
    max-height: 30px;
    align-content: baseline;
}
</style>