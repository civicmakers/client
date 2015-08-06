'use strict';

angular.module('civicMakersClientApp')
  .factory('TopicApi', function () {

    var service = {
      getAllTopics: getAllTopics,
      queryTopic: queryTopic,
      getFirstNTopics: getFirstNTopics,
      getTopicsNum: getTopicsNum
    };

    //THIS  IS DUMMY DATA THAT WILL BE REPLACED WHEN THE ACTUAL API IS WORKING:
    //Fix Topic dummy data
    var dummyData = [
      {
        "data": [
          {
            "type": "topics",
            "id": "abc123",
            "attributes": {
              "name": "Topics!",
              "description": "We dem topics!",
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
              "name": "More topics!",
              "description": "Yep topic",
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
              "name": "Yep yep topic!",
              "description": "last topic",
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
            "id": "abc345",
            "attributes": {
              "name": "Last topic!",
              "description": "last last topic",
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
            "id": "abc345",
            "attributes": {
              "name": "Last topic!",
              "description": "last last topic",
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
            "id": "abc345",
            "attributes": {
              "name": "Last topic!",
              "description": "last last topic",
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
            "id": "abc345",
            "attributes": {
              "name": "Last topic!",
              "description": "last last topic",
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
            "id": "abc345",
            "attributes": {
              "name": "Last topic!",
              "description": "last last topic",
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
            "id": "abc345",
            "attributes": {
              "name": "Last topic!",
              "description": "last last topic",
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
            "id": "abc345",
            "attributes": {
              "name": "Last topic!",
              "description": "last last topic",
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
            "id": "abc345",
            "attributes": {
              "name": "Last topic!",
              "description": "last last topic",
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
            "id": "abc345",
            "attributes": {
              "name": "Last topic!",
              "description": "last last topic",
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
    ];

    return service

    function getAllTopics(){
      return dummyData
    };

    function getFirstNTopics(n){
      return dummyData.slice(0,n)
    };

    function getTopicsNum(){
      return dummyData.length
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
                "name": "Topic!",
                "description": "This topic!",
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
