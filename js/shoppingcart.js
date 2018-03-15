var answers = [

  "the future is cloudy.....",

  "call your mom",

  "the cat ate it"]



function getMagic(message){

  console.log("so magic!! " + message)

  // call the answerQ function

  answerQ()

}





function newAnsw(){

  event.preventDefault()

  // get value from form

  var ans = document.aForm.answer.value

  

  // see if value is already in answers

  var i = answers.indexOf(ans)

  

  // if not, insert it into answers

  if(i == -1){

    answers.push(ans) 

    console.log(answers.length)

  } else {

    console.log("We've already got that one, thanks")

  }

  // clear input value

  document.aForm.answer.value = ""

}





function answerQ(){

  event.preventDefault()

  var q = document.qForm.question.value 

  console.log("Oh, you want to know " + q)

  

  var rando = Math.floor(Math.random() * answers.length)

  // Math.random() returns decimal 0 thru 1

  // .length is 1 more than highest valid index in an array

  // Math.floor() always rounds down

  // This is bulletproof formula for randomly generating a valid index for an array

  

  var ans = answers[rando]

  console.log(ans)

  

  document.qForm.question.value = ""

}

cheri9:07 PM
added this HTML snippet: index.html 

<!DOCTYPE html>

<html lang="en">

<head>

  <title>Magic 8 Ball</title>

  <meta charset="utf-8">

  <style type="text/css">

    body {

      font-family: "Palatino Linotype", "Book Antiqua", Palatino, serif;

      margin: 0;

    }



    header {

      background: #7B68EE;

      background: url("https://www.freewebheaders.com/wordpress/wp-content/gallery/clouds-sky/clouds-sky-header-2069-1024x300.jpg");

      background-size: cover;

      text-align: center;

      color: white;

      padding: 1rem;

    }



    img {

      max-width: 100%;

    }



    form {

      border: 1px solid #7B68EE;

      padding: 2rem;

    }



    section.container {

      display: flex;

      flex-flow: row wrap;

      justify-content: space-around;

      margin-top: 15vh;

    }

  </style>

</head>



<body>

<header>

  <h1>Magic 8 Ball</h1>

  <small>All of your questions answered, just maybe not in the order you ask them.</small>

</header>



<section class="container">

  <img src="http://appinventor.mit.edu/explore/sites/all/files/Teach/media/image_8_ball.jpg" alt="a magic 8 ball" onclick="getMagic('whoa')">



  <div>

    <!-- form to ask a question-->

    <form name="qForm" onsubmit="answerQ()">

      <label>What's your question??

        <input type="text" name="question">

      </label>

      <input type="submit">

    </form>

    

    <!-- form to add an answer -->

    <form name="aForm" onsubmit="newAnsw()">

      <label>What new answer should we add? 

        <input type="text" name="answer">

      </label>

      <input type="submit">

    </form>

    

  </div>

  

</section>

<script src="scripts.js"></script>

</body>