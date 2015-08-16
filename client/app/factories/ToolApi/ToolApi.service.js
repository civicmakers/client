'use strict';

angular.module('civicMakersClientApp')
  .factory('ToolApi', function () {

    var service = {
      getAllTools: getAllTools,
      queryTool: queryTool,
      getFirstNTools: getFirstNTools,
      getToolsNum: getToolsNum
    }

    return service;

    function getAllTools(){
      //THIS  IS DUMMY DATA THAT WILL BE REPLACED WHEN THE ACTUAL API IS WORKING:
      var dummyData = [
        {
            'data': [
                {
                    'type': 'tools',
                    'id': 'abc123',
                    'attributes': {
                        'name': 'I am a Tool!',
                        'description': 'I am a Tool!',
                        'created_at': '1997-07-16T19:20+01:00',
                        'url': 'https://www.google.com',
                        'social_links': {
                            'facebook': 'https://www.google.com',
                            'twitter': 'https://www.google.com',
                            'linkedin': 'https://www.google.com'
                        }
                    },
                    'relationships': {
                        'system_creator': {
                            'data': {
                                'type': 'profiles',
                                'id': 'abc123'
                            }
                        },
                        'projects': {
                            'data': [
                                {
                                    'id': 'abc123',
                                    'type': 'projects'
                                }
                            ]
                        }
                    }
                }
            ]
        },{
            'data': [
                {
                    'type': 'tools',
                    'id': 'abc123',
                    'attributes': {
                        'name': 'I am a Tool!',
                        'description': 'I am a Tool!',
                        'created_at': '1997-07-16T19:20+01:00',
                        'url': 'https://www.google.com',
                        'social_links': {
                            'facebook': 'https://www.google.com',
                            'twitter': 'https://www.google.com',
                            'linkedin': 'https://www.google.com'
                        }
                    },
                    'relationships': {
                        'system_creator': {
                            'data': {
                                'type': 'profiles',
                                'id': 'abc123'
                            }
                        },
                        'projects': {
                            'data': [
                                {
                                    'id': 'abc123',
                                    'type': 'projects'
                                }
                            ]
                        }
                    }
                }
            ]
        },{
            'data': [
                {
                    'type': 'tools',
                    'id': 'abc123',
                    'attributes': {
                        'name': 'I am a Tool!',
                        'description': 'I am a Tool!',
                        'created_at': '1997-07-16T19:20+01:00',
                        'url': 'https://www.google.com',
                        'social_links': {
                            'facebook': 'https://www.google.com',
                            'twitter': 'https://www.google.com',
                            'linkedin': 'https://www.google.com'
                        }
                    },
                    'relationships': {
                        'system_creator': {
                            'data': {
                                'type': 'profiles',
                                'id': 'abc123'
                            }
                        },
                        'projects': {
                            'data': [
                                {
                                    'id': 'abc123',
                                    'type': 'projects'
                                }
                            ]
                        }
                    }
                }
            ]
        },{
            'data': [
                {
                    'type': 'tools',
                    'id': 'abc123',
                    'attributes': {
                        'name': 'I am a Tool!',
                        'description': 'I am a Tool!',
                        'created_at': '1997-07-16T19:20+01:00',
                        'url': 'https://www.google.com',
                        'social_links': {
                            'facebook': 'https://www.google.com',
                            'twitter': 'https://www.google.com',
                            'linkedin': 'https://www.google.com'
                        }
                    },
                    'relationships': {
                        'system_creator': {
                            'data': {
                                'type': 'profiles',
                                'id': 'abc123'
                            }
                        },
                        'projects': {
                            'data': [
                                {
                                    'id': 'abc123',
                                    'type': 'projects'
                                }
                            ]
                        }
                    }
                }
            ]
        }
      ];

      return dummyData
    };

    function getFirstNTools(n){
      //THIS  IS DUMMY DATA THAT WILL BE REPLACED WHEN THE ACTUAL API IS WORKING:
      var dummyData = [
        {
            'data': [
                {
                    'type': 'tools',
                    'id': 'abc123',
                    'attributes': {
                        'name': 'I am a Tool!',
                        'description': 'I am a Tool!',
                        'created_at': '1997-07-16T19:20+01:00',
                        'url': 'https://www.google.com',
                        'social_links': {
                            'facebook': 'https://www.google.com',
                            'twitter': 'https://www.google.com',
                            'linkedin': 'https://www.google.com'
                        }
                    },
                    'relationships': {
                        'system_creator': {
                            'data': {
                                'type': 'profiles',
                                'id': 'abc123'
                            }
                        },
                        'projects': {
                            'data': [
                                {
                                    'id': 'abc123',
                                    'type': 'projects'
                                }
                            ]
                        }
                    }
                }
            ]
        },{
            'data': [
                {
                    'type': 'tools',
                    'id': 'abc123',
                    'attributes': {
                        'name': 'I am a Tool!',
                        'description': 'I am a Tool!',
                        'created_at': '1997-07-16T19:20+01:00',
                        'url': 'https://www.google.com',
                        'social_links': {
                            'facebook': 'https://www.google.com',
                            'twitter': 'https://www.google.com',
                            'linkedin': 'https://www.google.com'
                        }
                    },
                    'relationships': {
                        'system_creator': {
                            'data': {
                                'type': 'profiles',
                                'id': 'abc123'
                            }
                        },
                        'projects': {
                            'data': [
                                {
                                    'id': 'abc123',
                                    'type': 'projects'
                                }
                            ]
                        }
                    }
                }
            ]
        },{
            'data': [
                {
                    'type': 'tools',
                    'id': 'abc123',
                    'attributes': {
                        'name': 'I am a Tool!',
                        'description': 'I am a Tool!',
                        'created_at': '1997-07-16T19:20+01:00',
                        'url': 'https://www.google.com',
                        'social_links': {
                            'facebook': 'https://www.google.com',
                            'twitter': 'https://www.google.com',
                            'linkedin': 'https://www.google.com'
                        }
                    },
                    'relationships': {
                        'system_creator': {
                            'data': {
                                'type': 'profiles',
                                'id': 'abc123'
                            }
                        },
                        'projects': {
                            'data': [
                                {
                                    'id': 'abc123',
                                    'type': 'projects'
                                }
                            ]
                        }
                    }
                }
            ]
        },{
            'data': [
                {
                    'type': 'tools',
                    'id': 'abc123',
                    'attributes': {
                        'name': 'I am a Tool!',
                        'description': 'I am a Tool!',
                        'created_at': '1997-07-16T19:20+01:00',
                        'url': 'https://www.google.com',
                        'social_links': {
                            'facebook': 'https://www.google.com',
                            'twitter': 'https://www.google.com',
                            'linkedin': 'https://www.google.com'
                        }
                    },
                    'relationships': {
                        'system_creator': {
                            'data': {
                                'type': 'profiles',
                                'id': 'abc123'
                            }
                        },
                        'projects': {
                            'data': [
                                {
                                    'id': 'abc123',
                                    'type': 'projects'
                                }
                            ]
                        }
                    }
                }
            ]
        }
      ];

      return dummyData.slice(0,n)
    };

    function getToolsNum(){
      //THIS  IS DUMMY DATA THAT WILL BE REPLACED WHEN THE ACTUAL API IS WORKING:
      var dummyData = [
        {
            'data': [
                {
                    'type': 'tools',
                    'id': 'abc123',
                    'attributes': {
                        'name': 'I am a Tool!',
                        'description': 'I am a Tool!',
                        'created_at': '1997-07-16T19:20+01:00',
                        'url': 'https://www.google.com',
                        'social_links': {
                            'facebook': 'https://www.google.com',
                            'twitter': 'https://www.google.com',
                            'linkedin': 'https://www.google.com'
                        }
                    },
                    'relationships': {
                        'system_creator': {
                            'data': {
                                'type': 'profiles',
                                'id': 'abc123'
                            }
                        },
                        'projects': {
                            'data': [
                                {
                                    'id': 'abc123',
                                    'type': 'projects'
                                }
                            ]
                        }
                    }
                }
            ]
        },{
            'data': [
                {
                    'type': 'tools',
                    'id': 'abc123',
                    'attributes': {
                        'name': 'I am a Tool!',
                        'description': 'I am a Tool!',
                        'created_at': '1997-07-16T19:20+01:00',
                        'url': 'https://www.google.com',
                        'social_links': {
                            'facebook': 'https://www.google.com',
                            'twitter': 'https://www.google.com',
                            'linkedin': 'https://www.google.com'
                        }
                    },
                    'relationships': {
                        'system_creator': {
                            'data': {
                                'type': 'profiles',
                                'id': 'abc123'
                            }
                        },
                        'projects': {
                            'data': [
                                {
                                    'id': 'abc123',
                                    'type': 'projects'
                                }
                            ]
                        }
                    }
                }
            ]
        },{
            'data': [
                {
                    'type': 'tools',
                    'id': 'abc123',
                    'attributes': {
                        'name': 'I am a Tool!',
                        'description': 'I am a Tool!',
                        'created_at': '1997-07-16T19:20+01:00',
                        'url': 'https://www.google.com',
                        'social_links': {
                            'facebook': 'https://www.google.com',
                            'twitter': 'https://www.google.com',
                            'linkedin': 'https://www.google.com'
                        }
                    },
                    'relationships': {
                        'system_creator': {
                            'data': {
                                'type': 'profiles',
                                'id': 'abc123'
                            }
                        },
                        'projects': {
                            'data': [
                                {
                                    'id': 'abc123',
                                    'type': 'projects'
                                }
                            ]
                        }
                    }
                }
            ]
        },{
            'data': [
                {
                    'type': 'tools',
                    'id': 'abc123',
                    'attributes': {
                        'name': 'I am a Tool!',
                        'description': 'I am a Tool!',
                        'created_at': '1997-07-16T19:20+01:00',
                        'url': 'https://www.google.com',
                        'social_links': {
                            'facebook': 'https://www.google.com',
                            'twitter': 'https://www.google.com',
                            'linkedin': 'https://www.google.com'
                        }
                    },
                    'relationships': {
                        'system_creator': {
                            'data': {
                                'type': 'profiles',
                                'id': 'abc123'
                            }
                        },
                        'projects': {
                            'data': [
                                {
                                    'id': 'abc123',
                                    'type': 'projects'
                                }
                            ]
                        }
                    }
                }
            ]
        }
      ];

      return dummyData.length
    };

    function queryTool(id){
      console.log('ToolID: ', id)
      // TODO: when API is ready inplement query
      var dummyTool = {
          'data': [
              {
                  'type': 'tools',
                  'id': 'abc123',
                  'attributes': {
                      'name': 'I am a Tool!',
                      'description': 'I am a Tool!',
                      'created_at': '1997-07-16T19:20+01:00',
                      'url': 'https://www.google.com',
                      'social_links': {
                          'facebook': 'https://www.google.com',
                          'twitter': 'https://www.google.com',
                          'linkedin': 'https://www.google.com'
                      }
                  },
                  'relationships': {
                      'system_creator': {
                          'data': {
                              'type': 'profiles',
                              'id': 'abc123'
                          }
                      },
                      'projects': {
                          'data': [
                              {
                                  'id': 'abc123',
                                  'type': 'projects'
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
