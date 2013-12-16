// Clear Drupal Caches.
Hooks.addMenuItem("Actions/Drupal/Clear Drupal caches", "opt-cmd-x", function() {
  var exec = require('child_process').exec;
  var path = require('path');
  var dirPath = path.dirname(Document.current().path());
  
  exec('cd ' + dirPath + ' && drush cc all', function (err, stdout, stderr) {
    if (err)  {
      Alert.show('Error: ' + err);
      return false;
    }
    else if (stderr.indexOf("'all' cache was cleared.") == -1) {
      Alert.show('Drush failed to clear all caches.');
      return false;
    }
    else {
      Alert.notify({
        title: "Drupal caches cleared!",
        body: dirpath,
      });
    };
  });
});

// Coder Review.
Hooks.addMenuItem("Actions/Drupal/Coder Review", "opt-cmd-r", function () {
  var exec = require('child_process').exec;
  var path = require('path');
  var dirPath = path.dirname(Document.current().path());
  
  exec('cd ' + dirPath + ' && drush coder --no-empty --minor --comment --i18n --security --sql --style --druplart --sniffer --ignorename', function (err, stdout, stderr) {
    if (err)  {
      Alert.show('Error: ' + err);
      return false;
    }
    else {
      Alert.notify({
        title: "Drupal caches cleared!",
      });
    };
  });

});
