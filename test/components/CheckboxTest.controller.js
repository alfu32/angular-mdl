(function(){
	angular.module("test.checkbox",[])
	.controller("CheckboxTest",CheckboxTest);
	
	CheckboxTest.$inject="$scope".split(",");

	function CheckboxTest($scope){
		$scope.$checkbox1=false;
		$scope.$checkbox2=true;
		$scope.$checkbox3=undefined;
	}
})();