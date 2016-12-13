<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
 "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en">
<body>
<?php $db = mysql_connect("pluto", "ard6", "HC402559") or die("The  site database appears to
be down.");
mysql_select_db("ard6db");
$patient_name=$_POST['patient_name'];
$date=$_POST['date'];
$ratings=$_POST['ratings'];
$physician_id=$_POST['physician_id'];
$review_content=$_POST['review_content'];
$query= "insert into patient_reviews (patient_name,date,ratings,physician_id,review_content) values('$patient_name', '$date', '$ratings','$physician_id', '$review_content')";
mysql_query($query);
$result = mysql_query("SELECT * FROM patient_reviews");
echo "<table border=\"1\">\n";
echo "<tr><td>Patient_Name</td><td>Review_date</td><td>Review_ratings</td><td>Physicians_Id</td><td>Comments</td></tr>\n";
while ($myrow = mysql_fetch_row($result)) {
 printf("<tr><td>%s</td><td>%s</td><td>%s</td><td>%s</td><td>%s</td></tr>\n",
 $myrow[0], $myrow[1], $myrow[2],$myrow[3],$myrow[4]);
}
echo "</table>\n";
?>
</body>
