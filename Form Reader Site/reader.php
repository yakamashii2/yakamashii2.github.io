<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>reader.php</title>
    <style>
        table, tr, th, td{
			border: 1px solid black;
			border-collapse: collapse;
		}
    </style>
</head>
<body>
	<?php
		$check1 = $check2 = $check3 = $radio = $single = "";
		$multi1 = array("","","");
		$multi2 = array("","","");
		if ($_POST) {
			echo "<h2>POST Array:</h2>";
			print_r($_POST);
			if(!empty($_POST["checkbox1"])){
				$check1 = $_POST["checkbox1"];
			}
			if(!empty($_POST["checkbox2"])){
				$check2 = $_POST["checkbox2"];
			}
			if(!empty($_POST["checkbox3"])){
				$check3 = $_POST["checkbox3"];
			}
			if(!empty($_POST["radiobuttons"])){
				$radio = $_POST["radiobuttons"];
			}
			if(!empty($_POST["singleselect"])){
				$single = $_POST["singleselect"];
			}
			if(!empty($_POST["multiselect"])){
				$multi1 = $_POST["multiselect"];
				if (!empty($multi1[0])){
					$multi2[0] = $multi1[0];
				}
				if (!empty($multi1[0])){
					$multi2[1] = $multi1[0];
				}
				if (!empty($multi1[0])){
					$multi2[2] = $multi1[0];
				}
			}
		}
		if ($_GET) {
			echo "<h2>GET Array:</h2>";
			print_r($_GET);
			if(!empty($_GET["checkbox1"])){
				$check1 = $_GET["checkbox1"];
			}
			if(!empty($_GET["checkbox2"])){
				$check2 = $_GET["checkbox2"];
			}
			if(!empty($_GET["checkbox3"])){
				$check3 = $_GET["checkbox3"];
			}
			if(!empty($_GET["radiobuttons"])){
				$radio = $_GET["radiobuttons"];
			}
			if(!empty($_GET["singleselect"])){
				$single = $_GET["singleselect"];
			}
			if(!empty($_GET["multiselect"])){
				$multi1 = $_GET["multiselect"];
				if (!empty($multi1[0])){
					$multi2[0] = $multi1[0];
				}
				if (!empty($multi1[0])){
					$multi2[1] = $multi1[0];
				}
				if (!empty($multi1[0])){
					$multi2[2] = $multi1[0];
				}
			}
		}
	?>
    <h1>Form</h1>
    <table>
        <tr>
            <th>Key</th>
            <th>Value</th>
        </tr>
		<tr>
			<td>
				<p>Checkbox 1</p>
			</td>
			<td>
				<?php echo $check1 ?>
			</td>
		</tr>
		<tr>
			<td>
				<p>Checkbox 2</p>
			</td>
			<td>
				<?php echo $check2 ?>
			</td>
		</tr>
		<tr>
			<td>
				<p>Checkbox 3</p>
			</td>
			<td>
				<?php echo $check3 ?>
			</td>
		</tr>
		<tr>
			<td>
				<p>Radio</p>
			</td>
			<td>
				<?php echo $radio ?>
			</td>
		</tr>
		<tr>
			<td>
				<p>Single Select</p>
			</td>
			<td>
				<?php echo $single ?>
			</td>
		</tr>
		<tr>
			<td>
				<p>Multi Select</p>
			</td>
			<td>
				<?php echo $multi2[0] ?><br>
				<?php echo $multi2[1] ?><br>
				<?php echo $multi2[2] ?><br>
			</td>
		</tr>
    </table>
</body>
</html>
