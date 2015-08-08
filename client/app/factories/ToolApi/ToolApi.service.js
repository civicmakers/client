'use strict';

angular.module('civicMakersClientApp')
  .factory('ToolApi', function () {

    var service = {
      getAllTools: getAllTools,
      queryTool: queryTool,
      getFirstNTools,
      getToolsNum: getToolsNum
    }

    //THIS  IS DUMMY DATA THAT WILL BE REPLACED WHEN THE ACTUAL API IS WORKING:
    var dummyData = [
      {
        'data': [
          {
            'type': 'tools',
            'id': 'abc123',
            'attributes': {
              'name': 'Tools, tools, tools!',
              'description': 'da tools!',
              'created_at': '1997-07-16T19:20+01:00',
              'url': 'https://www.google.com',
              'social_links': {
                'facebook': 'https://www.google.com',
                'twitter': 'https://www.google.com',
                'linkedin': 'https://www.google.com'
              },
            },
            'relationships': {
              'system_creator': {
                'data': {
                  'type': 'profiles',
                  'id': 'abc123'
                },
              },
              'project_components': {
                'data': [
                  {
                    'id': 'abc123',
                    'type': 'project_components'
                  }
                ]
              }
            }
          }
        ]
      },
      {
        'data': [
          {
            'type': 'tools',
            'id': 'abc123',
            'attributes': {
              'name': 'That tool!',
              'description': 'Ya tool',
              'created_at': '1997-07-16T19:20+01:00',
              'url': 'https://www.google.com',
              'social_links': {
                'facebook': 'https://www.google.com',
                'twitter': 'https://www.google.com',
                'linkedin': 'https://www.google.com'
              },
            },
            'relationships': {
              'system_creator': {
                'data': {
                  'type': 'profiles',
                  'id': 'abc123'
                }
              },
              'project_components': {
                'data': [
                  {
                    'id': 'abc123',
                    'type': 'project_components'
                  }
                ]
              }
            }
          }
        ]
      },
      {
        'data': [
          {
            'type': 'tools',
            'id': 'abc123',
            'attributes': {
              'name': 'Yep yep tool!',
              'description': 'last tool',
              'created_at': '1997-07-16T19:20+01:00',
              'url': 'https://www.google.com',
              'social_links': {
                'facebook': 'https://www.google.com',
                'twitter': 'https://www.google.com',
                'linkedin': 'https://www.google.com'
              },
            },
            'relationships': {
              'system_creator': {
                'data': {
                  'type': 'profiles',
                  'id': 'abc123'
                }
              },
              'project_components': {
                'data': [
                  {
                    'id': 'abc123',
                    'type': 'project_components'
                  }
                ]
              }
            }
          }
        ]
      },
      {
        'data': [
          {
            'type': 'tools',
            'id': 'abc12rq',
            'attributes': {
              'name': 'Last tool!',
              'description': 'last tool for real',
              'created_at': '1997-07-16T19:20+01:00',
              'url': 'https://www.google.com',
              'social_links': {
                'facebook': 'https://www.google.com',
                'twitter': 'https://www.google.com',
                'linkedin': 'https://www.google.com'
              },
            },
            'relationships': {
              'system_creator': {
                'data': {
                  'type': 'profiles',
                  'id': 'abc123'
                }
              },
              'project_components': {
                'data': [
                  {
                    'id': 'abc123',
                    'type': 'project_components'
                  }
                ]
              }
            }
          }
        ]
      },
      {
        'data': [
          {
            'type': 'tools',
            'id': 'abc12rq',
            'attributes': {
              'name': 'Last tool!',
              'description': 'last tool for real',
              'created_at': '1997-07-16T19:20+01:00',
              'url': 'https://www.google.com',
              'social_links': {
                'facebook': 'https://www.google.com',
                'twitter': 'https://www.google.com',
                'linkedin': 'https://www.google.com'
              },
            },
            'relationships': {
              'system_creator': {
                'data': {
                  'type': 'profiles',
                  'id': 'abc123'
                }
              },
              'project_components': {
                'data': [
                  {
                    'id': 'abc123',
                    'type': 'project_components'
                  }
                ]
              }
            }
          }
        ]
      },
      {
        'data': [
          {
            'type': 'tools',
            'id': 'abc12rq',
            'attributes': {
              'name': 'Last tool!',
              'description': 'last tool for real',
              'created_at': '1997-07-16T19:20+01:00',
              'url': 'https://www.google.com',
              'social_links': {
                'facebook': 'https://www.google.com',
                'twitter': 'https://www.google.com',
                'linkedin': 'https://www.google.com'
              },
            },
            'relationships': {
              'system_creator': {
                'data': {
                  'type': 'profiles',
                  'id': 'abc123'
                }
              },
              'project_components': {
                'data': [
                  {
                    'id': 'abc123',
                    'type': 'project_components'
                  }
                ]
              }
            }
          }
        ]
      },
      {
        'data': [
          {
            'type': 'tools',
            'id': 'abc12rq',
            'attributes': {
              'name': 'Last tool!',
              'description': 'last tool for real',
              'created_at': '1997-07-16T19:20+01:00',
              'url': 'https://www.google.com',
              'social_links': {
                'facebook': 'https://www.google.com',
                'twitter': 'https://www.google.com',
                'linkedin': 'https://www.google.com'
              },
            },
            'relationships': {
              'system_creator': {
                'data': {
                  'type': 'profiles',
                  'id': 'abc123'
                }
              },
              'project_components': {
                'data': [
                  {
                    'id': 'abc123',
                    'type': 'project_components'
                  }
                ]
              }
            }
          }
        ]
      },
      {
        'data': [
          {
            'type': 'tools',
            'id': 'abc12rq',
            'attributes': {
              'name': 'Last tool!',
              'description': 'last tool for real',
              'created_at': '1997-07-16T19:20+01:00',
              'url': 'https://www.google.com',
              'social_links': {
                'facebook': 'https://www.google.com',
                'twitter': 'https://www.google.com',
                'linkedin': 'https://www.google.com'
              },
            },
            'relationships': {
              'system_creator': {
                'data': {
                  'type': 'profiles',
                  'id': 'abc123'
                }
              },
              'project_components': {
                'data': [
                  {
                    'id': 'abc123',
                    'type': 'project_components'
                  }
                ]
              }
            }
          }
        ]
      },
      {
        'data': [
          {
            'type': 'tools',
            'id': 'abc12rq',
            'attributes': {
              'name': 'Last tool!',
              'description': 'last tool for real',
              'created_at': '1997-07-16T19:20+01:00',
              'url': 'https://www.google.com',
              'social_links': {
                'facebook': 'https://www.google.com',
                'twitter': 'https://www.google.com',
                'linkedin': 'https://www.google.com'
              },
            },
            'relationships': {
              'system_creator': {
                'data': {
                  'type': 'profiles',
                  'id': 'abc123'
                }
              },
              'project_components': {
                'data': [
                  {
                    'id': 'abc123',
                    'type': 'project_components'
                  }
                ]
              }
            }
          }
        ]
      },
      {
        'data': [
          {
            'type': 'tools',
            'id': 'abc12rq',
            'attributes': {
              'name': 'Last tool!',
              'description': 'last tool for real',
              'created_at': '1997-07-16T19:20+01:00',
              'url': 'https://www.google.com',
              'social_links': {
                'facebook': 'https://www.google.com',
                'twitter': 'https://www.google.com',
                'linkedin': 'https://www.google.com'
              },
            },
            'relationships': {
              'system_creator': {
                'data': {
                  'type': 'profiles',
                  'id': 'abc123'
                }
              },
              'project_components': {
                'data': [
                  {
                    'id': 'abc123',
                    'type': 'project_components'
                  }
                ]
              }
            }
          }
        ]
      },
      {
        'data': [
          {
            'type': 'tools',
            'id': 'abc12rq',
            'attributes': {
              'name': 'Last tool!',
              'description': 'last tool for real',
              'created_at': '1997-07-16T19:20+01:00',
              'url': 'https://www.google.com',
              'social_links': {
                'facebook': 'https://www.google.com',
                'twitter': 'https://www.google.com',
                'linkedin': 'https://www.google.com'
              },
            },
            'relationships': {
              'system_creator': {
                'data': {
                  'type': 'profiles',
                  'id': 'abc123'
                }
              },
              'project_components': {
                'data': [
                  {
                    'id': 'abc123',
                    'type': 'project_components'
                  }
                ]
              }
            }
          }
        ]
      }
    ];

    return service

    function getAllTools(){
      return dummyData
    };

    function getFirstNTools(n){
      return dummyData.slice(0,n)
    };

    function getToolsNum(){
      return dummyData.length
    };

    function queryTool(id){
      console.log('ToolID: ', id)
      // TODO: when API is ready inplement query
      var dummyTool = {
          'data': [
            {
              'type': 'tools',
              'id': 'abc1234567',
              'attributes': {
                'name': 'Tools, tools, tools!',
                'description': 'We dem tools!',
                'created_at': '1997-07-16T19:20+01:00',
                'url': 'https://www.google.com',
                'social_links': {
                  'facebook': 'https://www.google.com',
                  'twitter': 'https://www.google.com',
                  'linkedin': 'https://www.google.com'
                },
              },
              'relationships': {
                'system_creator': {
                  'data': {
                    'type': 'profiles',
                    'id': 'abc123'
                  },
                },
                'project_components': {
                  'data': [
                    {
                      'id': 'abc123',
                      'type': 'project_components'
                    }
                  ]
                }
              }
            }
          ]
        };

        return dummyTool
    }

  });
