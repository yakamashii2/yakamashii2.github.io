<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>User Listing</title>
</head>

<body>
    <h1>Added</h1>
    <div>
        <?php
        $firstName = $_GET['first'];
        $lastName = $_GET['last'];
        $country = $_GET['country'];
        error_reporting(E_ALL);
        ini_set("display_errors", 1);
        // Database connection details
        $servername = "localhost";
        $username = "user66";
        $password = "66bonn";
        $dbname = "db66";
        $conn = new mysqli($servername, $username, $password, $dbname);
        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        } else {
            $sql = "INSERT INTO randuser (first, last, country) VALUES ('$firstName', '$lastName', '$country')";
        }
        if ($conn->query($sql) === TRUE) {
            echo "<p>Adding ". $firstName ."</p>
            <br>
            <p>New record created successfully</p>
            <br>";
        } else {
            echo "Error: " . $sql . "<br>" . $conn->error;
        }
        $conn->close();
        ?>
            <table class='table table-hover'>

                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Country</th>
                    </tr>
                </thead>
                <tbody>
                    <?php
                        $servername="localhost";
                        $username="user66";
                        $password="66bonn";
                        $dbname="db66";
                        $conn=new mysqli($servername, $username, $password, $dbname);
                        if ($conn->connect_error) {
                            die("Connection failed: " . $conn->connect_error);
                        }
                        $sql="SELECT * FROM randuser";
                        $result = $conn->query($sql);
                        while ($row = $result->fetch_assoc()) {
                            echo "<tr>";
                            echo "<td>" . $row["first"] . "</td>";
                            echo "<td>" . $row["last"] . "</td>";
                            echo "<td>" . $row["country"] . "</td>";
                            echo "</tr>";
                        }
                        $conn->close();
                    ?>
                </tbody>
            </table>
    </div>
</body>

</html>