(function(){
	angular.module("test.chips",[])
	.controller("ChipsTestController",ChipsTestController);
	
	ChipsTestController.$inject="$scope".split(",");

	function ChipsTestController($scope){
		$scope.$checkbox1=false;
		$scope.$checkbox2=true;
		$scope.$checkbox3=undefined;
	}
})();