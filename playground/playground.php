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
        print "<script>$i</script>";
        break;
    case 6:
        print "<script>var i=\"http://localhost/$i\"</script>";
        break;
	default:
        print "No test was selected";

}
?>