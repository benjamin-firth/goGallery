<script>

</script>

<section>
  <div>
    <div class="spinner-box">
      <div class="leo-border-1">
        <div class="leo-core-1"></div>
      </div> 
      <h1>LOADING...</h1>
      <div class="leo-border-2">
        <div class="leo-core-2"></div>
      </div> 
      </div>
    </div>
</section>

<style>
  section {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 80vh;
  }

  div {
    align-items: center;
    border-radius: 10px;
    color: #042428;
    display: flex;
    flex-direction: column;
    padding: 30px 50px 40px 50px;
    width: 500px;
  }

  h1 {
    z-index: 1;
  }

  /* KEYFRAMES */

  @keyframes spin {
    from {
      transform: rotate(0);
    }
    to{
      transform: rotate(359deg);
    }
  }

  @keyframes spin3D {
    from {
      transform: rotate3d(.5,.5,.5, 360deg);
    }
    to{
      transform: rotate3d(0deg);
    }
  }

  @keyframes configure-clockwise {
    0% {
      transform: rotate(0);
    }
    25% {
      transform: rotate(90deg);
    }
    50% {
      transform: rotate(180deg);
    }
    75% {
      transform: rotate(270deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes configure-xclockwise {
    0% {
      transform: rotate(45deg);
    }
    25% {
      transform: rotate(-45deg);
    }
    50% {
      transform: rotate(-135deg);
    }
    75% {
      transform: rotate(-225deg);
    }
    100% {
      transform: rotate(-315deg);
    }
  }

  @keyframes pulse {
    from {
      opacity: 1;
      transform: scale(1);
    }
    to {
      opacity: .25;
      transform: scale(.75);
    }
  }

  .spinner-box {
  width: 300px;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
}

/* SPINNING CIRCLE */

.leo-border-1 {
  position: absolute;
  width: 150px;
  height: 150px;
  padding: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background: rgb(63,249,220);
  background: linear-gradient(0deg, rgba(63,249,220,0.1) 33%, rgba(63,249,220,1) 100%);
  animation: spin3D 1.8s linear 0s infinite;
}

.leo-core-1 {
  width: 100%;
  height: 100%;
  background-color: #37474faa;
  border-radius: 50%;
}

.leo-border-2 {
  position: absolute;
  width: 150px;
  height: 150px;
  padding: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background: rgb(63,249,220);
  background: linear-gradient(0deg, rgba(255, 171, 145,0.1) 33%, rgba(255, 171, 145,1) 100%);
  animation: spin3D 2.2s linear 0s infinite;
}

.leo-core-2 {
  width: 100%;
  height: 100%;
  background-color: #ffab91aa;
  border-radius: 50%;
}
</style>