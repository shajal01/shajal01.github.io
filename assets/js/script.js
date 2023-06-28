//* Materialize jQuery *//

$(document).ready(() => {
   $('.sidenav').sidenav({
      'preventScrolling': false,
      onOpenEnd: () => {
         $(".home__profile-intro").css("opacity", "0");
      },
      onCloseStart: () => {
         $(".home__profile-intro").css("opacity", "1");
      }
   });
   $('.fixed-action-btn').floatingActionButton({
      'direction': 'bottom',
      'hoverEnabled': false,
   });
   $('.carousel').carousel({
      'indicators': true,
      'shift': 70,
      'dist': -50,
      'padding': 60,
   });
   $('.carousel').carousel('set', 3);
   $('.scrollspy').scrollSpy({
      'scrollOffset': 0,
   });
});


//* Custom jQuery *//

// To show sideBar like popUp on startUp
setTimeout(() => {
   $('#slide-out').addClass('sidenav-fixed');
}, 1000);
setTimeout(() => {
   $('#slide-out').removeClass('sidenav-fixed');
}, 2300);

// Functions for floating action btn
{
   const toggle_btn = $('.fixed-action-btn__toggle-btn');
   const floating_btn = $('.fixed-action-btn__floating-btn');
   const icon = $('.fixed-action-btn__toggle-btn > .menu-btn');

   let state = false;

   // To change menu icon to close icon on toggleBtn of fixed-action-btn when btn clicked
   $(toggle_btn).click(() => {
      !state ?
         ($(icon).text('').text('close')) && (state = true)
         :
         ($(icon).text('').text('menu')) && (state = false);
   });
   $(floating_btn).click(() => {
      state && ($(icon).text('menu')) && (state = false);
   });

   // // To toggle pulse effect with clicks on toggleBtn of fixed-action-btn
   // $(toggle_btn).click(() => {
   //    state ?
   //       $(toggle_btn).removeClass('pulse')
   //       :
   //       $(toggle_btn).addClass('pulse');
   // });
   // $(floating_btn).click(() => {
   //    !state && $(".fixed-action-btn__toggle-btn").addClass('pulse');
   // });

   // To remove pulse effect in toggleBtn of fixed-action-btn after first click
   $(toggle_btn).click(() => {
      $(toggle_btn).removeClass('pulse');
   });
}
