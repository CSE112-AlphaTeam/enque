'use strict';

angular.module('settings')
	.controller('SettingsController', ['$scope', '$location', 'SettingsService', function($scope, $location, SettingsService){
		console.log("test");
		$scope.user = { password: '', newPassword: '', newEmail : ''};
		$scope.pass = '';
		$scope.err = false;
		$scope.errMessage = '';

		$scope.update = function(){
			if($scope.user.password == ''){ 
				$scope.errMessage = 'You must supply your current password.';
			} else if($scope.user.newPassword == ''){
                $scope.errMessage = 'You must supply your new password.';
            }else if($scope.pass != $scope.user.newPassword){
				$scope.errMessage = 'Invalid password';
			} else if ($scope.user.newPassword.length < 4) {
				$scope.errMessage = 'Password length must be at least 4 characters!';
			} else {
				SettingsService.reg($scope.user)
					.success(function(data){
						console.log("Password change successful");
						$location.path('/dashboard');
						return data;
					})
					.error(function(err){
						$scope.errMessage = 'Password change not successful';
							return err;
					});
			}
		};
}]);
