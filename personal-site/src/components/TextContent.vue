<script></script>

<template></template>

<style>
.main-text {
    margin: 50px auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
        "intro photo-container"
        ". about"
        "tech .";
}

.main-text>div {
    /* max-width: 40%; */
    background-color: #ffffffd0;
    margin: 0 10px;
    padding: 10px;
}

div#section {
    border-radius: 20px;
    border: none;
    padding: 50px;
}

div#section.intro {
    grid-area: intro;
}

div#section.about {
    grid-area: about;
}

div#section.tech {
    grid-area: tech;
}

h1,
h2,
h3 {
    font-weight: 400;
    margin-bottom: 10px;
}

h1 {
    font-size: 42px;

}

h2 {
    font-size: 28px;
}

h3 {
    font-size: 1rem;
    margin: 0;
}

p {
    font-weight: 200;
    font-size: 24px;
    margin: 0;
}

@media (max-width: 1024px) {
    h1 {
        font-size: 26px;
    }

    p {
        font-size: 24px;
    }
}

.detail {
    font-size: 22px;
}

@media (max-width: 992px) {
    .main-text {
        grid-template-columns: 1fr;
        grid-template-areas:
        "intro"
        "photo-container"
        "about"
        "tech";
    }
}

@media (max-width: 600px) {
    .main-text>div {
        text-align: center;
        margin: 0 auto 50px auto;
    }
}
</style>