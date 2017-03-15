<?php

session_start();
unset($_SESSION['admin']);
echo "<script language='javascript'>window.location='hotel.php'</script>";