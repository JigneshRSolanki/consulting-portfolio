document.addEventListener("DOMContentLoaded", function () {
    const btn = document.getElementById("sendInquiryBtn");

    if (btn) {
        btn.addEventListener("click", function (e) {
            e.preventDefault(); // form submit roke (demo ke liye)

            const toastEl = document.getElementById("successToast");
            const toast = new bootstrap.Toast(toastEl);
            toast.show();

            // Optional: form reset
            document.querySelector(".contact-form").reset();
        });
    }
});
