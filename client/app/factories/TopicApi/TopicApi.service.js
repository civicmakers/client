'use strict';

angular.module('civicMakersClientApp')
  .factory('TopicApi', function () {

    var service = {
      getAllTopics: getAllTopics,
      queryTopic: queryTopic
    }

    return service

    function getAllTopics(){
      // return ApiConfig
      //           .apiRequest({
      //               url: '.....',
      //               method: 'get'
      //           });

      //THIS  IS DUMMY DATA THAT WILL BE REPLACED WHEN THE ACTUAL API IS WORKING:
      //Fix Topic dummy data
      var dummyData = [
        {
          "data": [
            {
              "type": "topics",
              "id": "abc123",
              "attributes": {
                "name": "Tools, tools, tools!",
                "description": "We dem tools!",
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
                  "data": [
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
              "type": "topics",
              "id": "abc123",
              "attributes": {
                "name": "That tool doe!",
                "description": "Ya tool",
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
                  "data": [
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
              "type": "topics",
              "id": "abc123",
              "attributes": {
                "name": "Yep yep tool!",
                "description": "last tool",
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
                  "data": [
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
    };

    function queryTopic(id){
      console.log('TopicID: ', id)
      // TODO: when API is ready inplement query
      var dummyTopic = {
          "data": [
            {
              "type": "topics",
              "id": "abc123",
              "attributes": {
                "name": "Tools, tools, tools!",
                "description": "We dem tools!",
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
                  "data": [
                    {
                      "id": "abc123",
                      "type": "project_components"
                    }
                  ]
                }
              }
            }
          ]
        };
        
        return dummyTopic
    }

  });
