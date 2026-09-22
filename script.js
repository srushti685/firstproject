function showPhoto(photo) {

    document.getElementById("message").innerHTML =
        "You selected this photo!";

    window.open(photo, "_blank");
}
