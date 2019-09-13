<?php
session_start();
if (isset($_POST["save"])) {
    $name = $_POST["name"];
    function writeToFile($fileName, $data)
    {
        $path = "users/" . $fileName . ".json";
        file_put_contents($path, json_encode($data));
    }

    if (preg_match(" /^\w+$/", $name)) {
        if ($_POST["house"] && $_POST["hobby"]) {
            $user_data = array(
                "name" => $name,
                "house" => $_POST["house"],
                "hobby" => $_POST["hobby"]
            );
            writeToFile($_SESSION["email"], $user_data);
            session_destroy();
        }
    }
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Game of Thrones(Form)</title>
  <link href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap" rel="stylesheet">
  <script src="https://code.jquery.com/jquery-3.3.1.js"
          integrity="sha256-2Kok7MbOyxpgUVvAk/HJ2jigOSYS2auK4Pfzbm7uH60="
          crossorigin="anonymous"></script>
  <link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css"/>
  <link rel="stylesheet" type="text/css" href="css/main.css">
</head>
<body>
<section class="container">
  <div class="slider">
    <div class="stark_emblem"></div>
  </div>
  <div class="form-part__second" id="secondForm">
    <h1 class="form-part__title">GAME OF THRONES</h1>
    <p class="form-part__greeting">
      You've successfully joined the game.<br>
      Tell us more about yourself.
    </p>
    <form class="form-part__form" id="form2" method="post">
      <label class="form-part__label" for="name">Who are you?</label>
      <div class="form-part__username">Alpha-numeric username</div>
      <input class="form-part__input field" type="text" id="name"
             placeholder="arya" name="name" maxlength="100" minlength="1" required>
      <label class="form-part__label" for="house">
        Your Great House
      </label>
      <select id="house" class="form-part__input" name="house" required>
        <option value="">Select House</option>
      </select>
      <label class="form-part__label" for="question">
        Your preferences, hobbies, wishes, etc.
      </label>
      <textarea id="question" class="form-part__textArea" name="hobby"
                placeholder="I have a long TOKILL List..." maxlength="100" minlength="1" required></textarea>
      <input type="submit" value="Save" class="form-part__submit" id="save" name="save">
    </form>
  </div>
</section>
<script src="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.7/js/select2.min.js"></script>
<script type="text/javascript" src="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"></script>
<script src="js/script.js"></script>
</body>
</html>
