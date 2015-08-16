'use strict';

angular.module('civicMakersClientApp')
  .factory('TopicApi', function () {

    var service = {
      getAllTopics: getAllTopics,
      queryTopic: queryTopic,
      getFirstNTopics: getFirstNTopics,
      getTopicsNum: getTopicsNum
    };


    return service;

    function getAllTopics(){
      //THIS  IS DUMMY DATA THAT WILL BE REPLACED WHEN THE ACTUAL API IS WORKING:
      //Fix Topic dummy data
      var dummyData = [
        {
            'data': [
                {
                    'type': 'topics',
                    'id': 'abc123',
                    'attributes': {
                        'name': 'I am a Topic!',
                        'description': 'I am a Topic!',
                        'created_at': '1997-07-16T19:20+01:00',
                        'url': 'https://www.google.com',
                        'social_links': {
                            'facebook': 'https://www.facebook.com',
                            'twitter': 'https://www.twitter.com',
                            'linkedin': 'https://www.linkedin.com'
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
                    'type': 'topics',
                    'id': 'abc123',
                    'attributes': {
                        'name': 'I am a Topic!',
                        'description': 'I am a Topic!',
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
                    'type': 'topics',
                    'id': 'abc123',
                    'attributes': {
                        'name': 'I am a Topic!',
                        'description': 'I am a Topic!',
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
                    'type': 'topics',
                    'id': 'abc123',
                    'attributes': {
                        'name': 'I am a Topic!',
                        'description': 'I am a Topic!',
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

    function getFirstNTopics(n){
      //THIS  IS DUMMY DATA THAT WILL BE REPLACED WHEN THE ACTUAL API IS WORKING:
      //Fix Topic dummy data
      var dummyData = [
        {
            'data': [
                {
                    'type': 'topics',
                    'id': 'abc123',
                    'attributes': {
                        'name': 'I am a Topic!',
                        'description': 'I am a Topic!',
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
                    'type': 'topics',
                    'id': 'abc123',
                    'attributes': {
                        'name': 'I am a Topic!',
                        'description': 'I am a Topic!',
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
                    'type': 'topics',
                    'id': 'abc123',
                    'attributes': {
                        'name': 'I am a Topic!',
                        'description': 'I am a Topic!',
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
                    'type': 'topics',
                    'id': 'abc123',
                    'attributes': {
                        'name': 'I am a Topic!',
                        'description': 'I am a Topic!',
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

    function getTopicsNum(){
      //THIS  IS DUMMY DATA THAT WILL BE REPLACED WHEN THE ACTUAL API IS WORKING:
      //Fix Topic dummy data
      var dummyData = [
        {
            'data': [
                {
                    'type': 'topics',
                    'id': 'abc123',
                    'attributes': {
                        'name': 'I am a Topic!',
                        'description': 'I am a Topic!',
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
                    'type': 'topics',
                    'id': 'abc123',
                    'attributes': {
                        'name': 'I am a Topic!',
                        'description': 'I am a Topic!',
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
                    'type': 'topics',
                    'id': 'abc123',
                    'attributes': {
                        'name': 'I am a Topic!',
                        'description': 'I am a Topic!',
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
                    'type': 'topics',
                    'id': 'abc123',
                    'attributes': {
                        'name': 'I am a Topic!',
                        'description': 'I am a Topic!',
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

    function queryTopic(id){
      console.log('TopicID: ', id)
      // TODO: when API is ready inplement query
      var dummyTopic = {
          'data': [
              {
                  'type': 'topics',
                  'id': 'abc123',
                  'attributes': {
                      'name': 'I am a Topic!',
                      'description': 'I am a Topic!',
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
        return dummyTopic
    }

  });
