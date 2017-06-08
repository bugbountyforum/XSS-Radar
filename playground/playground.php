<?php
$i = $_GET['injection'];
switch($_GET['test']){
	case 1:
		print $i;
		break;
	case 2:
		print "<tag attribute=\"$i\"></tag>";
		break;
	case 3:
		print "<tag attribute='$i'></tag>";
		break;
	case 4:
		print "<tag attribute=$i></tag>"
		break;
	

}
?>