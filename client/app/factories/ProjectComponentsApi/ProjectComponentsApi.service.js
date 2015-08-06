'use strict';

angular.module('civicMakersClientApp')
  .factory('ProjectComponentApi', function () {

    var service = {
      getAllProjectComponents: getAllProjectComponents,
      queryProjectComponent: queryProjectComponent
    }

    return service

    function getAllProjectComponents(){
      // return ApiConfig
      //           .apiRequest({
      //               url: '.....',
      //               method: 'get'
      //           });

      //THIS  IS DUMMY DATA THAT WILL BE REPLACED WHEN THE ACTUAL API IS WORKING:
      var dummyData = [
        {
                  "data": [
                    {
                      "type": "project_components",
                      "id": "1234567",
                      "attributes": {
                        "name": "PROOOOOOOOOOJECT COMPONEnts",
                        "description": "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
                        "images": [
                          {
                            "url": "http://thedigitalpm.com/wp-content/uploads/2014/09/top10skillsforwebprojectmanagement.jpg"
                          }
                        ]
                      },
                      "relationships": {
                        "tools": {
                          "data": [
                            {
                              "type": "tools",
                              "id": "abc123"
                            }
                          ]
                        },
                        "project": {
                          "data": {
                            "type": "projects",
                            "id": "abc123"
                          }
                        }
                      }
                    }
                  ]
                }
      ];

      return dummyData
    };

    function queryProjectComponent(id){
      console.log('ProjectComponentID: ', id)
      // TODO: when API is ready inplement query

      var dummyProjectComponent = {
          "data": [
            {
              "type": "project_components",
              "id": "1234567",
              "attributes": {
                "name": "PROOOOOOOOOOJECT COMPONEnts",
                "description": "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
                "images": [
                  {
                    "url": "http://thedigitalpm.com/wp-content/uploads/2014/09/top10skillsforwebprojectmanagement.jpg"
                  }
                ]
              },
              "relationships": {
                "tools": {
                  "data": [
                    {
                      "type": "tools",
                      "id": "abc123"
                    }
                  ]
                },
                "project": {
                  "data": {
                    "type": "projects",
                    "id": "abc123"
                  }
                }
              }
            }
          ]
        }

        return dummyProjectComponent;
    }

  });
