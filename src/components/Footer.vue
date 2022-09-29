<template>
 <footer>
    <div>
        👨👨‍💻👨
    </div>
    <div>
        <p class="footer_text">®Todos los derechos reservados por @ozknkrm.</p>
    </div> 
    <div>
        👨👨‍💻👨
    </div>
</footer>
</template>

<style scoped>
 
   footer {
    color: #676767;
    background-color: black;
    height: 10vh;
    display: flex;
    align-items: center;
    gap: 1.25rem;
    justify-content: center;
}

body {
    margin: 0px;
}

.footer_text {
    font-style: normal;
    font-weight: 400;
    font-size: 1em;
}

@media (max-width: 300px){
    footer{
        display: none;
    }
}
</style>