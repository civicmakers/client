'use strict';

angular.module('civicMakersClientApp')
  .factory('AuthorApi', function () {

    var service = {
      getAllAuthors: getAllAuthors
    }

    return service

    function getAllAuthors(){
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
              "type": "profiles",
              "id": "abc123",
              "attributes": {
                "name": "Joe!",
                "description": "My name is Joe!",
                "created_at": "1997-07-16T19:20+01:00",
                "avatars": [
                  {
                    "url": "https://www.google.com/image.jpg"
                  }
                ],
                "url": "https://www.google.com",
                "social_links": {
                  "facebook": "https://www.google.com",
                  "twitter": "https://www.google.com",
                  "linkedin": "https://www.google.com"
                }
              },
              "relationships": {
                "system_owned_tools": {
                  "data": [
                    {
                      "type": "tools",
                      "id": "abc123"
                    }
                  ]
                },
                "projects": {
                  "data": [
                    {
                      "type": "projects",
                      "id": "abc123"
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
              "type": "profiles",
              "id": "abc123",
              "attributes": {
                "name": "Bob!",
                "description": "My name is Bob!",
                "created_at": "1997-07-16T19:20+01:00",
                "avatars": [
                  {
                    "url": "https://www.google.com/image.jpg"
                  }
                ],
                "url": "https://www.google.com",
                "social_links": {
                  "facebook": "https://www.google.com",
                  "twitter": "https://www.google.com",
                  "linkedin": "https://www.google.com"
                }
              },
              "relationships": {
                "system_owned_tools": {
                  "data": [
                    {
                      "type": "tools",
                      "id": "abc123"
                    }
                  ]
                },
                "projects": {
                  "data": [
                    {
                      "type": "projects",
                      "id": "abc123"
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
              "type": "profiles",
              "id": "abc123",
              "attributes": {
                "name": "Nother name!",
                "description": "Dat nother name desription!",
                "created_at": "1997-07-16T19:20+01:00",
                "avatars": [
                  {
                    "url": "https://www.google.com/image.jpg"
                  }
                ],
                "url": "https://www.google.com",
                "social_links": {
                  "facebook": "https://www.google.com",
                  "twitter": "https://www.google.com",
                  "linkedin": "https://www.google.com"
                }
              },
              "relationships": {
                "system_owned_tools": {
                  "data": [
                    {
                      "type": "tools",
                      "id": "abc123"
                    }
                  ]
                },
                "projects": {
                  "data": [
                    {
                      "type": "projects",
                      "id": "abc123"
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

    function queryAuthor(id){
      console.log('authorID: ', id)
      // TODO: when API is ready inplement query
      var dummyAuthor = {
          "data": [
            {
              "type": "profiles",
              "id": "abc123",
              "attributes": {
                "name": "Bob!",
                "description": "My name is Bob!",
                "created_at": "1997-07-16T19:20+01:00",
                "avatars": [
                  {
                    "url": "https://www.google.com/image.jpg"
                  }
                ],
                "url": "https://www.google.com",
                "social_links": {
                  "facebook": "https://www.google.com",
                  "twitter": "https://www.google.com",
                  "linkedin": "https://www.google.com"
                }
              },
              "relationships": {
                "system_owned_tools": {
                  "data": [
                    {
                      "type": "tools",
                      "id": "abc123"
                    }
                  ]
                },
                "projects": {
                  "data": [
                    {
                      "type": "projects",
                      "id": "abc123"
                    }
                  ]
                }
              }
            }
          ]
        };
        
        return dummyAuthor
    }

  });
