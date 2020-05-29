$(document).ready(function () {
  $(".navbar a, footer a[href='#myPage']").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $("html, body").animate(
        { scrollTop: $(hash).offset().top },
        500,
        function () {
          window.location.hash = hash;
        }
      );
    }
  });
  $(window).scroll(function () {
    $(".slideanim").each(function () {
      var pos = $(this).offset().top;
      var winTop = $(window).scrollTop();
      if (pos < winTop + 600) {
        $(this).addClass("slide");
      }
    });
  });
  const countDownDate = new Date("Jun 29,2020 06:00:00").getTime();
  const timer = setInterval(function () {
    const now = new Date().getTime();
    const distance = countDownDate - now;
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    document.getElementById("countdown-timer").innerHTML =
      days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
    if (distance < 0) {
      clearInterval(timer);
      document.getElementById("countdown-timer").innerHTML = "EVENT TIME!";
    }
  }, 1000);
});
