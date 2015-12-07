'use strict';

angular.module('civicMakersClientApp')
  .factory('ProjectComponentApi', function () {

    function getAllProjectComponents(){
      // return ApiConfig
      //           .apiRequest({
      //               url: '.....',
      //               method: 'get'
      //           });

      //THIS  IS DUMMY DATA THAT WILL BE REPLACED WHEN THE ACTUAL API IS WORKING:
      var dummyData = [

      ];

      return dummyData;
    }

    function queryProjectComponent(id){
      console.log('ProjectComponentID: ', id);
      // TODO: when API is ready inplement query

      //Todo: put in dummy project component data
      var dummyProjectComponent = {
        'hey': 'Heyheyhey. This is the Project component data!'
      };

        return dummyProjectComponent;
    }

    return {
      getAllProjectComponents: getAllProjectComponents,
      queryProjectComponent: queryProjectComponent
    };
  });
