jQuery(document).ready(function() {
   var $zoom;
   $('input[name="toggle-wireframe"]').on('switchChange.bootstrapSwitch', function(event, state) {
     if (state){
        $zoom = $('.zoom').magnify();
        $('.bootstrap-switch-label').text('Deactivate Lens');
     }else{
        $('.bootstrap-switch-label').text('Activate Lens');
         $zoom.destroy();
     }
  });
});

jQuery(window).load(function() {
   $('.control').show(600);
   $("[name='toggle-wireframe']").bootstrapSwitch();
});
