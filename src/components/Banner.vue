<template >
  <div class="header-row" id="header-row" style="padding: 0px; overflow:hidden; height:20px;   background-color: #4a4a4a;">
        <!-- container-fluid is the same as container but spans a wider viewport, 
    it still has padding though so you need to remove this either by adding 
    another class with no padding or inline as I did below -->
   <div class="container-fluid" style="padding: 0px;">
      <div class="row"> 
        <!-- You originally has it set up for two columns, remove the second 
    column as it is unneeded and set the first to always span all 12 columns 
    even when at its smallest (xs). Set the overflow to hidden so no matter 
    the height of your image it will never show outside this div-->
         <div class="col-xs-12"> 
            <a class="navbar-brand logo" href="index.html">
        <!-- place your image here -->
              <marquee behavior="scroll" direction="left">Here is some scrolling text... right to left!</marquee>

            </a> 
         </div>     
      </div>
   </div>
</div>
</template>

<script>
export default {};
</script>

<style></style>