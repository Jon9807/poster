document.addEventListener('DOMContentLoaded', function () {
    var toastEl = document.getElementById('toast');
    var toast = new bootstrap.Toast(toastEl);
    toast.show();
});