<?php

session_start();
unset($_SESSION['user']);
echo "<script language='javascript'>window.location='hotel.php'</script>";
