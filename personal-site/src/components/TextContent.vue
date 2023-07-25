<script></script>

<template></template>

<style>
.main-text {
    margin: auto 10px;
}

.main-text>div {
    /* margin-bottom: 25px; */
    max-width: 40%;
    background-color: #ffffffc4;
}

div.section {
  border-radius: 20px;
  border: none;
  margin-bottom: 20px;
}

h1,
h2,
h3 {
    font-weight: 400;
    margin-bottom: 10px;
}

h1 {
    font-size: 42px;
    /* font-size: 1.7rem; */
    
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
    /* padding: 10px 0; */
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
/* 
.subtext {
    font-size: 24px;
} */

/* div.main-text {
  margin: 0 10px;
} */

@media (max-width: 1024px) {
    .main-text>div {
        max-width: 500px;
        background-color: #ffffffd0;
    }
}

@media (max-width: 600px) {

    .main-text>div {
        text-align: center;
        margin-bottom: 50px;
    }
}
</style>