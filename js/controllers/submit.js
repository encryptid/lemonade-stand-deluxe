module.exports = {
    name: 'SubmitController',
    func: function ($scope, StandService) {
        console.log('SubmitController online');
        $scope.submitName =  function () {
            // console.log('submitName works');
            // console.log($scope.newStand + ' is awesome!')
            StandService.standName($scope.newStand);
            //StandService.getName();
        };
        $scope.items = StandService.grabInfo();
        // $scope.stats = StandService.businessInfo;
        console.log($scope.items);
        // console.log($scope.stats);
    }
}