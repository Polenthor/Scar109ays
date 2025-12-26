<?php
// Handle upload
if (!empty($_FILES['photos'])) {
    foreach ($_FILES['photos']['tmp_name'] as $key => $tmp_name) {
        $fileName = time() . "_" . $_FILES['photos']['name'][$key];
        move_uploaded_file($tmp_name, "uploads/" . $fileName);
    }
}
?>

<!DOCTYPE html>
<html>
<head>
  <title>My Photo Page</title>
  <style>
    body {
      font-family: Arial;
      background: #f2f2f2;
      padding: 20px;
    }

    form {
      margin-bottom: 20px;
      text-align: center;
    }

    .gallery {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
      gap: 15px;
    }

    .gallery img {
      width: 100%;
      height: 200px;
      object-fit: cover;
      border-radius: 10px;
      box-shadow: 0 4px 6px rgba(0,0,0,0.2);
    }
  </style>
</head>
<body>

<h2 align="center">Upload & View Photos</h2>

<!-- Upload Form -->
<form method="post" enctype="multipart/form-data">
  <input type="file" name="photos[]" multiple accept="image/*">
  <button type="submit">Upload</button>
</form>

<!-- Display Photos -->
<div class="gallery">
<?php
$images = glob("uploads/*.{jpg,jpeg,png,webp}", GLOB_BRACE);

foreach ($images as $img) {
    echo "<img src='$img' loading='lazy'>";
}
?>
</div>

</body>
</html>
