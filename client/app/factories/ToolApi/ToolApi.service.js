'use strict';

angular.module('civicMakersClientApp')
  .factory('ToolApi', function () {

    var service = {
      getAllTools: getAllTools
    }

    return service

    function getAllTools(){
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
              "type": "tools",
              "id": "abc123",
              "attributes": {
                "name": "JSON API paints my bikeshed!",
                "description": "JSON API paints my bikeshed!",
                "created_at": "1997-07-16T19:20+01:00",
                "url": "https://www.google.com",
                "social_links": {
                  "facebook": "https://www.google.com",
                  "twitter": "https://www.google.com",
                  "linkedin": "https://www.google.com"
                },
              },
              "relationships": {
                "system_creator": {
                  "data": {
                    "type": "profiles",
                    "id": "abc123"
                  },
                },
                "project_components": {
                  data: [
                    {
                      "id": "abc123",
                      "type": "project_components"
                    }
                  ]
                }
              }
            }
          ]
        },
        {
          "data": [
            {
              "type": "tools",
              "id": "abc123",
              "attributes": {
                "name": "JSON API paints my bikeshed!",
                "description": "JSON API paints my bikeshed!",
                "created_at": "1997-07-16T19:20+01:00",
                "url": "https://www.google.com",
                "social_links": {
                  "facebook": "https://www.google.com",
                  "twitter": "https://www.google.com",
                  "linkedin": "https://www.google.com"
                },
              },
              "relationships": {
                "system_creator": {
                  "data": {
                    "type": "profiles",
                    "id": "abc123"
                  }
                },
                "project_components": {
                  data: [
                    {
                      "id": "abc123",
                      "type": "project_components"
                    }
                  ]
                }
              }
            }
          ]
        }
      ]

      return dummyData
    }

  });
