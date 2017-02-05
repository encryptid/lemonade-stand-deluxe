module.exports = {
    name: 'SubmitController',
    func: function ($scope, StandService) {
        console.log('SubmitController online');
        $scope.title = "bubbles";
        $scope.submitName =  function () {
            // console.log('submitName works');
            // console.log($scope.newStand + ' is awesome!')
            StandService.standName($scope.newStand);
            //StandService.getName();
            // $scope.items = StandService.standInfo.ingredients;
            // $scope.stats = StandService.standInfo.business;
            // console.log($scope.items);
            // console.log($scope.stats); 
        };
        // $scope.items = StandService.standInfo.ingredients;
        // $scope.stats = StandService.standInfo.business;
        // console.log($scope.items);
        // console.log($scope.stats);
    },
}