<template>
    <div class="grid grid-cols-2">
        <a href="#main"><img  class="w-20 h-20 fixed top-0" src="../assets/logo.png"></a>
        <div class="grid grid-cols-4 justify-self-end item-center">
            <a  id="nav-link" href="#about" class="filter brightness-200">About</a>
            <a  id="nav-link" href="#education" class="filter brightness-200">Education</a>
            <a  id="nav-link" href="#skill" class="filter brightness-200">Skill</a>
            <a  id="nav-link" href="#contract" class="filter brightness-200">Contract</a>
        </div>
    </div>
</template>
<script>
export default {
  
  name: 'Navbar'
}
</script>
<style>

#nav-link{
    margin: 26px;
    font-weight: 600;
    font-size: 1rem;
    line-height: 1rem;
}

</style>