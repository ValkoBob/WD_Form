<?php
session_start();
if (isset($_POST["submit"])) {
    $email = $_POST["email"];
    $password = $_POST["password"];
    if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
        if (preg_match("/^[\w]{8,16}$/", $password)) {
            if (isset($_POST["checkbox"])) {
                $unsafe_chars = array("<", ">", ":", "'", "/", "\\", "|", "?", "*");
                $user_filename = str_replace($unsafe_chars, "", $email);
                $path = "users/" . $user_filename . ".json";
                if (!file_exists($path)) {
                    $file = fopen($path, "w");
                    fclose($file);
                }
                $_SESSION["email"] = $user_filename;
                header("Location: form.php");
            }
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
  <title>Game of Thrones</title>
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
  <div class="form-part__first" id="firstForm">
    <h1 class="form-part__title">GAME OF THRONES</h1>
    <form class="form-part__form" id="form1" method="post">
      <label class="form-part__label" for="email">
        Enter your email
      </label>
      <input class="form-part__input field" type="email" id="email" name="email"
             placeholder="arya@westeros.com">
      <label class="form-part__label" for="password">
        Choose secure password
      </label>
      <div class="form-part__username">Must be at least 8 characters</div>
      <input class="form-part__input field" type="password" id="password" name="password"
             placeholder="password" maxlength="100" minlength="8" required>
      <div class="form-part__checkbox">
        <input id="checkbox" type="checkbox" name="checkbox">
        <label for="checkbox">
          Remember me
        </label>
      </div>
      <input type="submit" value="Sign Up" class="form-part__submit" id="submit" name="submit">
    </form>
  </div>
</section>
<script src="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.7/js/select2.min.js"></script>
<script type="text/javascript" src="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"></script>
<script src="js/script.js"></script>
</body>
</html>
