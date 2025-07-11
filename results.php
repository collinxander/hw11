<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Contact Form Results - Collin's Homepage</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    
    <link href="https://fonts.googleapis.com/css?family=Work+Sans:300,400,500,600,700" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="css/animate.css">
    <link rel="stylesheet" href="css/owl.carousel.min.css">
    <link rel="stylesheet" href="css/owl.theme.default.min.css">
    <link rel="stylesheet" href="css/magnific-popup.css">
    <link rel="stylesheet" href="css/flaticon.css">
    <link rel="stylesheet" href="css/style.css">
    
    <style>
      .validation-message {
        font-size: 14px;
        margin-top: 5px;
        padding: 5px;
        border-radius: 3px;
        display: block;
      }
      .success {
        color: #28a745;
        background-color: #d4edda;
        border: 1px solid #c3e6cb;
        padding: 15px;
        border-radius: 5px;
      }
      .error {
        color: #dc3545;
        background-color: #f8d7da;
        border: 1px solid #f5c6cb;
        padding: 15px;
        border-radius: 5px;
      }
      .form-group {
        position: relative;
      }
    </style>
  </head>
  <body>
    <nav class="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
      <div class="container">
        <a class="navbar-brand" href="index.html">Collin's Homepage</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="oi oi-menu"></span> Menu
        </button>
        <div class="collapse navbar-collapse" id="ftco-nav">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item"><a href="index.html" class="nav-link">Home</a></li>
            <li class="nav-item"><a href="school.html" class="nav-link">School</a></li>
            <li class="nav-item"><a href="hobbies.html" class="nav-link">Hobbies</a></li>
            <li class="nav-item"><a href="work.html" class="nav-link">Work</a></li>
            <li class="nav-item active"><a href="contact.html" class="nav-link">Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>

    <div class="hero-wrap hero-wrap-2" style="background-image: url('images/bg_1.jpg');" data-stellar-background-ratio="0.5">
      <div class="overlay"></div>
      <div class="container">
        <div class="row no-gutters slider-text align-items-end justify-content-start">
          <div class="col-md-8 ftco-animate text-center text-md-left mb-5">
            <p class="breadcrumbs mb-0"><span class="mr-3"><a href="index.html">Home <i class="ion-ios-arrow-forward"></i></a></span> <span>Contact Results</span></p>
            <h1 class="mb-3 bread">Contact Form Results</h1>
          </div>
        </div>
      </div>
    </div>

    <section class="ftco-section contact-section ftco-degree-bg">
      <div class="container">
        <div class="row d-flex mb-5">
          <div class="col-md-12 mb-4">
            <h2 class="h4">Submission Results</h2>
          </div>
          <div class="w-100"></div>
          <div class="col-md-12">
            <?php
            if (isset($_GET['submit'])) {
              $firstName = $_GET['firstName'] ?? 'Not provided';
              $lastName = $_GET['lastName'] ?? 'Not provided';
              $email = $_GET['email'] ?? 'Not provided';
              $phone = $_GET['phone'] ?? 'Not provided';
              $username = $_GET['username'] ?? 'Not provided';
              $password = $_GET['password'] ?? 'Not provided';
              $comments = $_GET['comments'] ?? 'Not provided';

              echo '<div class="validation-message success">';
              echo '<h3>Form Submitted Successfully</h3>';
              echo '<p><strong>First Name:</strong> ' . htmlspecialchars($firstName) . '</p>';
              echo '<p><strong>Last Name:</strong> ' . htmlspecialchars($lastName) . '</p>';
              echo '<p><strong>Email:</strong> ' . htmlspecialchars($email) . '</p>';
              echo '<p><strong>Phone:</strong> ' . htmlspecialchars($phone) . '</p>';
              echo '<p><strong>Username:</strong> ' . htmlspecialchars($username) . '</p>';
              echo '<p><strong>Password:</strong> ' . htmlspecialchars($password) . '</p>';
              echo '<p><strong>Comments:</strong> ' . htmlspecialchars($comments) . '</p>';
              echo '</div>';
            } else {
              echo '<div class="validation-message error">';
              echo '<h3>Error</h3>';
              echo '<p>No form data submitted. Please use the <a href="contact.html">contact form</a> to submit your information.</p>';
              echo '</div>';
            }
            ?>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <a href="contact.html" class="btn btn-primary py-3 px-5">Back to Contact Form</a>
          </div>
        </div>
      </div>
    </section>

    <footer class="ftco-footer ftco-bg-dark ftco-section">
      <div class="container">
        <div class="row mb-5">
          <div class="col-md">
            <div class="ftco-footer-widget mb-4">
              <h2 class="ftco-heading-2">Collin's Homepage</h2>
              <p>Hello! I'm Collin Arnsworth, a Computer Scientist passionate about technology, photography, and streetwear culture.</p>
              <ul class="ftco-footer-social list-unstyled mb-0"></ul>
            </div>
          </div>
          <div class="col-md">
            <div class="ftco-footer-widget mb-4 ml-md-5">
              <h2 class="ftco-heading-2">Useful Links</h2>
              <ul class="list-unstyled">
                <li><a href="school.html" class="py-2 d-block">School</a></li>
                <li><a href="hobbies.html" class="py-2 d-block">Hobbies</a></li>
                <li><a href="work.html" class="py-2 d-block">Work</a></li>
                <li><a href="contact.html" class="py-2 d-block">Contact</a></li>
              </ul>
            </div>
          </div>
          <div class="col-md">
            <div class="ftco-footer-widget mb-4">
              <h2 class="ftco-heading-2">Contact</h2>
              <div class="block-23 mb-3">
                <ul>
                  <li><a href="mailto:collin.arnsworth@my.utsa.edu"><span class="mr-3 fa fa-envelope"></span><span class="text">collin.arnsworth@my.utsa.edu</span></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12 text-center">
            <p>© 2025 Collin Arnsworth. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>

    <div id="ftco-loader" class="show fullscreen"><svg class="circular" width="48px" height="48px"><circle class="path-bg" cx="24" cy="24" r="22" fill="none" stroke-width="4" stroke="#eeeeee"/><circle class="path" cx="24" cy="24" r="22" fill="none" stroke-width="4" stroke-miterlimit="10" stroke="#F96D00"/></svg></div>

    <script src="js/jquery.min.js"></script>
    <script src="js/jquery-migrate-3.0.1.min.js"></script>
    <script src="js/popper.min.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <script src="js/jquery.easing.1.3.js"></script>
    <script src="js/jquery.waypoints.min.js"></script>
    <script src="js/jquery.stellar.min.js"></script>
    <script src="js/owl.carousel.min.js"></script>
    <script src="js/jquery.magnific-popup.min.js"></script>
    <script src="js/jquery.animateNumber.min.js"></script>
    <script src="js/scrollax.min.js"></script>
    <script src="js/main.js"></script>
  </body>
</html>