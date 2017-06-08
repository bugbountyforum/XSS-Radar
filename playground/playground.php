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
		print "<tag attribute=$i></tag>";
		break;
	case 5:
		$i = str_replace("<", "", $i);
		$i = str_replace(">", "", $i);
		print "<tag attribute=\"$i\"></tag>";
		break;
	case 6:
		$i = str_replace("<", "", $i);
		$i = str_replace(">", "", $i);
		print "<tag attribute='$i'></tag>";
		break;
	case 7:
		print "<script>\n";
		print $i;
		print "\n</script>";
		break;
	case 8:
		print "<script>\n";
		print "var i = \"$i\"";
		print "\n</script>";
		break;
	case 9:
		print "<script>\n";
		print "var i = '".$i."'";
		print "\n</script>";
		break;
	}
?>