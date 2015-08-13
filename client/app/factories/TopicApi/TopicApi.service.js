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
                    'type': 'tools',
                    'id': 'abc123',
                    'attributes': {
                        'name': 'JSON API paints my bikeshed!',
                        'description': 'JSON API paints my bikeshed!',
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
                        'name': 'JSON API paints my bikeshed!',
                        'description': 'JSON API paints my bikeshed!',
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
                        'name': 'JSON API paints my bikeshed!',
                        'description': 'JSON API paints my bikeshed!',
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
                        'name': 'JSON API paints my bikeshed!',
                        'description': 'JSON API paints my bikeshed!',
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
                    'type': 'tools',
                    'id': 'abc123',
                    'attributes': {
                        'name': 'JSON API paints my bikeshed!',
                        'description': 'JSON API paints my bikeshed!',
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
                        'name': 'JSON API paints my bikeshed!',
                        'description': 'JSON API paints my bikeshed!',
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
                        'name': 'JSON API paints my bikeshed!',
                        'description': 'JSON API paints my bikeshed!',
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
                        'name': 'JSON API paints my bikeshed!',
                        'description': 'JSON API paints my bikeshed!',
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
                    'type': 'tools',
                    'id': 'abc123',
                    'attributes': {
                        'name': 'JSON API paints my bikeshed!',
                        'description': 'JSON API paints my bikeshed!',
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
                        'name': 'JSON API paints my bikeshed!',
                        'description': 'JSON API paints my bikeshed!',
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
                        'name': 'JSON API paints my bikeshed!',
                        'description': 'JSON API paints my bikeshed!',
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
                        'name': 'JSON API paints my bikeshed!',
                        'description': 'JSON API paints my bikeshed!',
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
                  'type': 'tools',
                  'id': 'abc123',
                  'attributes': {
                      'name': 'JSON API paints my bikeshed!',
                      'description': 'JSON API paints my bikeshed!',
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
