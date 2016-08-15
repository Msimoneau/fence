// August 2016, Martin Simoneau

jQuery(document).ready(function() {
   var xrayFile = 'images/fence-wireframe-xray.jpg',
       wireTextureFile = 'images/fence-wireframe.jpg',
       // jQuery Objects
       $zoom,
       $xrayImage = $("<img>"),
       $xraySwitchContainer = $('.control-x-ray'),
       $xraySwitch = $("input[name='toggle-x-ray']"),
       $xrayContainer = $('#x-ray-id');
       $activationSwitchContainer= $('.control-activation'),
       $activationSwitch = $("[name='toggle-wireframe']"),
       $activationSwitchText = $('.control-activation input .bootstrap-switch-label');

   // Init Switches control
   $activationSwitch.bootstrapSwitch();
   $xraySwitch.bootstrapSwitch();

   // Get the x-ray image
   $xrayImage.load(function(){
      $xrayImage.attr('data-magnify-src', $(this).attr('src'));
      $xrayImage.attr('data-loaded', true);
   });
   $xrayImage.attr("src", xrayFile);

   // X-ray control
   $xraySwitch.on('switchChange.bootstrapSwitch', function(event, state) {
      if (state){
         $xrayContainer.attr('data-magnify-src', xrayFile);
         $zoom = $('.zoom').magnify();
      }else{
         $xrayContainer.attr('data-magnify-src', wireTextureFile);
         $zoom = $('.zoom').magnify();
      }
   });

   // Activation control
   $activationSwitch.on('switchChange.bootstrapSwitch', function(event, state) {
     if (state){
        if ($xrayImage.attr('data-loaded')){
           $xraySwitchContainer.css('visibility', 'visible');
        }
        if ($xraySwitch.val() === 'on'){
            $xrayContainer.attr('data-magnify-src', xrayFile);
        }else{
            $xrayContainer.attr('data-magnify-src', wireTextureFile);
        }
        $zoom = $('.zoom').magnify();
        $activationSwitchText.text('Deactivate Lens');
     }else{
         $activationSwitchText.text('Activate Lens');
         $zoom.destroy();
         $xraySwitchContainer.css('visibility', 'hidden');
     }
  });

});

jQuery(window).load(function() {
   $activationSwitchContainer.css('visibility','visible');
});
