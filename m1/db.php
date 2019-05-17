 <?php
  session_start();
  
  $db = new mysqli("localhost","gusrb3585","qkr627627","gusrb3585");
  $db->set_charset("utf8");

  function mq($sql){
    global $db;
    return $db->query($sql);
  }

  ?>