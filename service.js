angular.module("userProfiles").service("mainService", function($http) {
  var self = this;
  var baseurl = "https://reqres.in/api/users?page=1";

  this.getUsers = function() {
    // var promise = $http({
    //   method: "GET",
    //   url: baseurl
    // });
    // return promise;
    var promise = $http.get(baseurl).then(function(resp) {
      self.users = resp.data.data;
      return self.users;
    });
    return promise;
  };
});

// https://reqres.in/api/users
