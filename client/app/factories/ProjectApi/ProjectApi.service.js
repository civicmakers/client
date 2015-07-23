'use strict';

angular.module('civicMakersClientApp')
  .factory('ProjectApi', function () {

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
                "name": "JSON API!",
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
              "type": "projects",
              "id": "abc123",
              "attributes": {
                "name": "Design & Development",
                "description": "Designin'!",
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
        },
        {
          "data": [
            {
              "type": "projects",
              "id": "abc123",
              "attributes": {
                "name": "PRoject 2",
                "description": "The PJ",
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
    };

    function queryProject(id){
      console.log('ProjectID: ', id)
      // TODO: when API is ready inplement query
      var dummyProject = {
          "data": [
            {
              "type": "projects",
              "id": "abc123",
              "attributes": {
                "name": "JSON API!",
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
        };

        return dummyProject
    }

  });