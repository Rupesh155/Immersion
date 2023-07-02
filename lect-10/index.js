function step1(cb) {
    setTimeout(function() {
      console.log('Selecting image');
      // return 'image';
      cb('image');
    }, 4000);
  }
  
  function step2 (image, cb) {
    setTimeout(function() {
      console.log(`Applying filters to ${image}`);
      // return 'filtered image'
      cb('filtered image');
    }, 2000);
  }
  
  function step3(filteredImage, cb) {
    setTimeout(function() {
      console.log(`Adding caption to ${filteredImage}`);
      // return 'filtered image with caption';
      cb('filtered image with caption');
    }, 3000);
  }
  
  function step4(final) {
    setTimeout(function() {
      console.log(`${final} uploaded`);
    }, 2000);
  }
  
  step1(function(image) {
    step2(image, function(filteredImage) {
      step3(filteredImage, function (finalImage) {
        step4(finalImage);
      });
    });
  });