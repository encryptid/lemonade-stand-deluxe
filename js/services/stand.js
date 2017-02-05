module.exports = {
    name: 'StandService',
    func: function ($http) {
        //const totals = [];
        let standId = "";
        // let standInfo = [];
        const ingredients = [];
        const businessInfo = {};
        const general = {};


        return {
            standName(input) {
                console.log('standName running');
                $http.post('https://blooming-hamlet-70507.herokuapp.com/stand', {
                    stand_name: input
                }).then(function (response) {
                    // console.log(response);
                    standId = response.data.stand_id;
                    console.log(standId);
                }).then(function getStand() {
                    $http.get('https://blooming-hamlet-70507.herokuapp.com/stand/' + standId
                    ).then(function (response) {
                        console.log(response);
                        angular.copy(response.data.ingredients, ingredients);
                        angular.copy(response.data.business, businessInfo);
                        angular.copy(response.data, general);
                        console.log(ingredients);
                        console.log(businessInfo);

                    });
                })
            },
            grabInfo() {
                return ingredients;
            },
            bizInfo() {
                return businessInfo;
            },
            getAll() {
                return general;
            }

            // getStand() {
            //     $http.get('https://blooming-hamlet70507.herokuapp.com/stand/', {
            //     standId
            //     }).then(function (response) {
            //         console.log(response);
            //         info = response.data;
            //         console.log(info + ' is coming thru!');
            //     });
            // },
        };
    }
}