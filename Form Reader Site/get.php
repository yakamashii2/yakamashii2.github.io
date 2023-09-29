<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Get.php</title>
    <style>
        table, td, tr, th {
            border-collapse: collapse;
            
        }
    </style>
</head>
<body>
    <h1>Form</h1>
    <table>
        <tr>
            <th>Key</th>
            <th>Value</th>
        </tr>
        <tr>
            <td>Welcome <?php echo $_GET["name"]; ?></td>
            <td>Your email address is: <?php echo $_GET["email"]; ?><td>
        <tr>
    </table>
</body>
</html>