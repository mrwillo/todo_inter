angular.module("TodoApp",[]).controller("TodoListController", ['$scope', function($scope){
	$scope.todoItems = [];
	$scope.todoItem = {};
	
	$scope.addItem =function() {
		if ($scope.todoItem.description && $scope.todoItem.description !== "") {
			$scope.todoItems.push($scope.todoItem);
			$scope.todoItem = {};
		} else {
			$scope.todoItem.error = "err";
		}
	};
	
	$scope.selectAll = function() {
		var selected = false;
		if ($scope.isSelectAll === true) {
			selected = true;
		}
		for (var i=0; i<$scope.todoItems.length; i++) {
			$scope.todoItems[i].selected=selected;
		}
	};
	
	$scope.deleteItem = function() {
		$scope.todoItems = $scope.todoItems.filter(filterSelected);
		if ($scope.todoItems.length === 0 && $scope.isSelectAll === true) {
			$scope.isSelectAll = false;
		}
	}
	
	var filterSelected = function(item) {
		return item.selected !== true
	}
}]);
