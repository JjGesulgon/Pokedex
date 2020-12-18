<template>
  <div>
    <img src="/pokeball.svg" class="image-transition w-2/6 object-center" alt="book lover">
  </div>
</template>

<style>
.image-transition{
  animation: fadeInAnimation ease 3s; 
  animation-iteration-count: 1; 
  animation-fill-mode: forwards;
}

@keyframes fadeInAnimation { 
  0% { 
      opacity: 0; 
  } 
  100% { 
      opacity: 1; 
  } 
} 
</style>
