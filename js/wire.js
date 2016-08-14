jQuery(document).ready(function() {
   var $zoom;
   $("[name='toggle-wireframe']").bootstrapSwitch();
   $('input[name="toggle-wireframe"]').on('switchChange.bootstrapSwitch', function(event, state) {
     if (state){
        $zoom = $('.zoom').magnify();
     }else{
         $zoom.destroy();
     }
  });
});

jQuery( window ).load(function() {
   $('.control').show(600);
});
