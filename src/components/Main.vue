<template>
  <div id="main" class="h-screen">
    <navbar/>
    <div class="grid grid-cols-3">

      <div class="justify-self-start  text-left col-start-2 col-span-2 my-72">
          <p >Hello , my name is </p>
          <b class="filter brightness-200 ">Weeraphon Supachok.</b><br>
          <b class="filter brightness-100 ">i build things for the website</b>
      </div>

    </div>
  </div>

  <div id="about" class="place-self-center grid grid-cols-2 h-screen">

    <img alt="photo of me" class="w-96 h-96 place-self-center " src="../assets/me.png">

    <div class="justify-self-start self-center text-left ">
        <pre class="text-xl">
<strong>About</strong>
        
Hello,I'm Weeraphon, I am currently studying to be 
a frontend developer.I enjoy progarming code to 
creating things that live on the internet.My goal is 
to be a Good Programmer, Whether it's coding good, 
creative and secure.
        </pre>
    </div>

  </div>

  <div id="education" class="place-self-center grid grid-cols-2 h-screen">

    <img alt="photo of kmutt" class="w-96 h-96 place-self-center " src="../assets/logokmutt.png">

    <div class="justify-self-start self-center text-left ">
        <pre class="text-xl">
<strong>Education</strong>
Now I'm study in 
➡School of Information Technology (SIT)  
➡Faculty Information Technology(IT)
➡King Mongkut's University of Technology Thonburi(KMUTT)
        </pre>
        
    </div>

  </div>

  <div id="skill" class="h-screen">
    
    

      <div class=" grid justify-self-center  text-center ">
          
          <pre class="text-xl mt-72 justify-self-center"><strong>SKILL</strong></pre>
          
          <img src="../assets/skill.png" class="h-3/6 self-start justify-self-center">
          
      </div>

    
  </div>


  <div id="contract" class="place-self-center grid  h-screen">

    <div class="grid grid-cols-5 ">

      <div class="justify-self-start  text-left col-start-3 col-span-2 my-72">
          <p >Bye , i hope you</p>
          <b class="filter brightness-200 ">Contract Me</b><br>
          <p class="filter brightness-100 ">Phone : 064-068-5573</p>
          <p class="filter brightness-100 ">Email : weeraphon.benz@mail.kmutt.ac.th</p>
          <div class="grid grid-cols-5 my-5">
          <a href="https://www.facebook.com/profile.php?id=100010151945474"><img src="../assets/FB.png" class="w-10 h-10"/></a>
          <a href="https://www.instagram.com/weeraphon_283/"><img src="../assets/IG.png" class="w-10 h-10"/></a>
          <a href="https://line.me/ti/p/nSevxD0xUh?fbclid=IwAR1o39vs4iCPBpKUdgePmO32k1gr5mO2yFGPRozQJ4TSu6xC7b-7SPCnMxI"><img src="../assets/Line.png" class="w-10 h-10"/></a> 
          <a href="https://github.com/62130500131"><img src="../assets/Git.png" class="w-10 h-10"/></a> 
          </div>
      </div>

    </div>

  </div>


</template>

<script>
import Navbar from './Navbar.vue'
export default {
  components: { Navbar },
  name: 'Main'
}
</script>
<style>
    p{
        font-size: 1.5rem;
        line-height: 1.75rem;
    }
    b{
        font-size: 3rem;
        line-height: 1.6;
    }
    a:hover{
      opacity: 0.5;
    }
</style>


