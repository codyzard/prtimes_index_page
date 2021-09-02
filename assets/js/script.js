$(document).ready(function () {
  //Ranking menu
  var ranking_menu_list = $(".ranking .menu__list__item");
  for (let i = 0; i < ranking_menu_list.length; i++) {
    $(ranking_menu_list[i]).click(function (e) {
      if (i === 0) return;
      $(".ranking .active-item")[0].classList.remove("active-item");
      this.classList.add("active-item");
      let target = parseInt($(".ranking .active-item").css("width"));
      let tele = target * (i - 1);
      $(".unactive-item").animate(
        {
          opacity: 1,
          left: `${tele}px`,
        },
        {
          duration: 200,
          complete: function () {
            $(".unactive-item").css("opacity", `0.1`);
          },
        }
      );
    });
  }
  //Ranking content hover
  $(".cover").hover(
    function () {
      $(this.parentNode.querySelector(".detail__content")).css(
        "color",
        "#3081C9"
      );
      $(this.parentNode.querySelector(".detail__content")).css(
        "text-decoration",
        "underline"
      );
    },
    function () {
      $(this.parentNode.querySelector(".detail__content")).css(
        "color",
        "black"
      );
      $(this.parentNode.querySelector(".detail__content")).css(
        "text-decoration",
        "none"
      );
    }
  );
  //Ranking content toggle
  $(".ranking .content").css("display", "none");
  $(".ranking .active-content").css("display", "block");
  for (let i = 0; i < ranking_menu_list.length; i++) {
    $(ranking_menu_list[i]).click(function () {
      if (i === 0) return;
      let content_title = this.classList[1];
      let content_body = $(`.ranking .content.${content_title}`);
      if (content_body[0] !== undefined) {
        $(".active-content").css("display", "none");
        $(".active-content").removeClass("active-content");
        content_body.css("display", "block");
        content_body.addClass("active-content");
      } else return;
    });
  }
});
