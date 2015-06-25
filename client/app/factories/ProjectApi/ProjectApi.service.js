'use strict';

angular.module('civicMakersClientApp')
  .factory('ProjectApi', function (ApiConfig) {

    var service = {
      getAllProjects: getAllProjects
    }

    return service

    function getAllProjects(){
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
              "type": "projects",
              "id": "abc123",
              "attributes": {
                "name": "JSON API paints my bikeshed!",
                "description": "JSON API paints my bikeshed!",
                "images": [
                  {
                    "url": "https://www.google.com/image.jpg"
                  }
                ],
                "created_at": "1997-07-16T19:20+01:00"
              },
              "relationships": {
                "project_components": {
                  "data": [
                    {
                      "type": "project_components",
                      "id": "abc123"
                    }
                  ]
                },
                "creator": {
                  "data": {
                    "type": "profiles",
                    "id": "abc123"
                  }
                }
              }
            }
          ]
        },
        {
          "data": [
            {
              "type": "project_components",
              "id": "abc123",
              "attributes": {
                "name": "Design & Development",
                "description": "JSON API paints my bikeshed!",
                "images": [
                  {
                    "url": "https://www.google.com/image.jpg"
                  }
                ],
                "created_at": "1997-07-16T19:20+01:00",
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
    }
  });
