'use strict';

angular.module('civicMakersClientApp')
  .factory('ProjectApi', function () {

    var service = {
      getAllProjects: getAllProjects,
      queryProject: queryProject,
      getFirstNProjects: getFirstNProjects,
      getProjectsNum: getProjectsNum,
    };

    return service;

    function getAllProjects(){
      var dummyData = [
        {
                  'data': [
                    {
                      'type': 'projects',
                      'id': 'abc123',
                      'attributes': {
                        'name': 'JSON API!',
                        'description': 'JSON API paints my bikeshed!',
                        'images': [
                          {
                            'url': 'http://smashingtops.com/wp-content/uploads/2012/04/Home-Theater-Projectors.jpg'
                          }
                        ],
                        'created_at': '1997-07-16T19:20+01:00'
                      },
                      'relationships': {
                        'project_components': {
                          'data': [
                            {
                              'type': 'project_components',
                              'id': 'abc123'
                            }
                          ]
                        },
                        'creator': {
                          'data': {
                            'type': 'profiles',
                            'id': 'abc123'
                          }
                        }
                      }
                    }
                  ]
                },{
            'data': [
              {
                'type': 'projects',
                'id': 'abc123',
                'attributes': {
                  'name': 'JSON API!',
                  'description': 'JSON API paints my bikeshed!',
                  'images': [
                    {
                      'url': 'http://smashingtops.com/wp-content/uploads/2012/04/Home-Theater-Projectors.jpg'
                    }
                  ],
                  'created_at': '1997-07-16T19:20+01:00'
                },
                'relationships': {
                  'project_components': {
                    'data': [
                      {
                        'type': 'project_components',
                        'id': 'abc123'
                      }
                    ]
                  },
                  'creator': {
                    'data': {
                      'type': 'profiles',
                      'id': 'abc123'
                    }
                  }
                }
              }
            ]
          },{
            'data': [
              {
                'type': 'projects',
                'id': 'abc123',
                'attributes': {
                  'name': 'JSON API!',
                  'description': 'JSON API paints my bikeshed!',
                  'images': [
                    {
                      'url': 'http://smashingtops.com/wp-content/uploads/2012/04/Home-Theater-Projectors.jpg'
                    }
                  ],
                  'created_at': '1997-07-16T19:20+01:00'
                },
                'relationships': {
                  'project_components': {
                    'data': [
                      {
                        'type': 'project_components',
                        'id': 'abc123'
                      }
                    ]
                  },
                  'creator': {
                    'data': {
                      'type': 'profiles',
                      'id': 'abc123'
                    }
                  }
                }
              }
            ]
          },{
            'data': [
              {
                'type': 'projects',
                'id': 'abc123',
                'attributes': {
                  'name': 'JSON API!',
                  'description': 'JSON API paints my bikeshed!',
                  'images': [
                    {
                      'url': 'http://smashingtops.com/wp-content/uploads/2012/04/Home-Theater-Projectors.jpg'
                    }
                  ],
                  'created_at': '1997-07-16T19:20+01:00'
                },
                'relationships': {
                  'project_components': {
                    'data': [
                      {
                        'type': 'project_components',
                        'id': 'abc123'
                      }
                    ]
                  },
                  'creator': {
                    'data': {
                      'type': 'profiles',
                      'id': 'abc123'
                    }
                  }
                }
              }
            ]
          },{
            'data': [
              {
                'type': 'projects',
                'id': 'abc123',
                'attributes': {
                  'name': 'JSON API!',
                  'description': 'JSON API paints my bikeshed!',
                  'images': [
                    {
                      'url': 'http://smashingtops.com/wp-content/uploads/2012/04/Home-Theater-Projectors.jpg'
                    }
                  ],
                  'created_at': '1997-07-16T19:20+01:00'
                },
                'relationships': {
                  'project_components': {
                    'data': [
                      {
                        'type': 'project_components',
                        'id': 'abc123'
                      }
                    ]
                  },
                  'creator': {
                    'data': {
                      'type': 'profiles',
                      'id': 'abc123'
                    }
                  }
                }
              }
            ]
          },{
            'data': [
              {
                'type': 'projects',
                'id': 'abc123',
                'attributes': {
                  'name': 'JSON API!',
                  'description': 'JSON API paints my bikeshed!',
                  'images': [
                    {
                      'url': 'http://smashingtops.com/wp-content/uploads/2012/04/Home-Theater-Projectors.jpg'
                    }
                  ],
                  'created_at': '1997-07-16T19:20+01:00'
                },
                'relationships': {
                  'project_components': {
                    'data': [
                      {
                        'type': 'project_components',
                        'id': 'abc123'
                      }
                    ]
                  },
                  'creator': {
                    'data': {
                      'type': 'profiles',
                      'id': 'abc123'
                    }
                  }
                }
              }
            ]
          }
      ];
      return dummyData
    };

    function getFirstNProjects(n){
      var dummyData = [
        {
                  'data': [
                    {
                      'type': 'projects',
                      'id': 'abc123',
                      'attributes': {
                        'name': 'JSON API!',
                        'description': 'JSON API paints my bikeshed!',
                        'images': [
                          {
                            'url': 'http://smashingtops.com/wp-content/uploads/2012/04/Home-Theater-Projectors.jpg'
                          }
                        ],
                        'created_at': '1997-07-16T19:20+01:00'
                      },
                      'relationships': {
                        'project_components': {
                          'data': [
                            {
                              'type': 'project_components',
                              'id': 'abc123'
                            }
                          ]
                        },
                        'creator': {
                          'data': {
                            'type': 'profiles',
                            'id': 'abc123'
                          }
                        }
                      }
                    }
                  ]
                },{
            'data': [
              {
                'type': 'projects',
                'id': 'abc123',
                'attributes': {
                  'name': 'JSON API!',
                  'description': 'JSON API paints my bikeshed!',
                  'images': [
                    {
                      'url': 'http://smashingtops.com/wp-content/uploads/2012/04/Home-Theater-Projectors.jpg'
                    }
                  ],
                  'created_at': '1997-07-16T19:20+01:00'
                },
                'relationships': {
                  'project_components': {
                    'data': [
                      {
                        'type': 'project_components',
                        'id': 'abc123'
                      }
                    ]
                  },
                  'creator': {
                    'data': {
                      'type': 'profiles',
                      'id': 'abc123'
                    }
                  }
                }
              }
            ]
          },{
            'data': [
              {
                'type': 'projects',
                'id': 'abc123',
                'attributes': {
                  'name': 'JSON API!',
                  'description': 'JSON API paints my bikeshed!',
                  'images': [
                    {
                      'url': 'http://smashingtops.com/wp-content/uploads/2012/04/Home-Theater-Projectors.jpg'
                    }
                  ],
                  'created_at': '1997-07-16T19:20+01:00'
                },
                'relationships': {
                  'project_components': {
                    'data': [
                      {
                        'type': 'project_components',
                        'id': 'abc123'
                      }
                    ]
                  },
                  'creator': {
                    'data': {
                      'type': 'profiles',
                      'id': 'abc123'
                    }
                  }
                }
              }
            ]
          },{
            'data': [
              {
                'type': 'projects',
                'id': 'abc123',
                'attributes': {
                  'name': 'JSON API!',
                  'description': 'JSON API paints my bikeshed!',
                  'images': [
                    {
                      'url': 'http://smashingtops.com/wp-content/uploads/2012/04/Home-Theater-Projectors.jpg'
                    }
                  ],
                  'created_at': '1997-07-16T19:20+01:00'
                },
                'relationships': {
                  'project_components': {
                    'data': [
                      {
                        'type': 'project_components',
                        'id': 'abc123'
                      }
                    ]
                  },
                  'creator': {
                    'data': {
                      'type': 'profiles',
                      'id': 'abc123'
                    }
                  }
                }
              }
            ]
          },{
            'data': [
              {
                'type': 'projects',
                'id': 'abc123',
                'attributes': {
                  'name': 'JSON API!',
                  'description': 'JSON API paints my bikeshed!',
                  'images': [
                    {
                      'url': 'http://smashingtops.com/wp-content/uploads/2012/04/Home-Theater-Projectors.jpg'
                    }
                  ],
                  'created_at': '1997-07-16T19:20+01:00'
                },
                'relationships': {
                  'project_components': {
                    'data': [
                      {
                        'type': 'project_components',
                        'id': 'abc123'
                      }
                    ]
                  },
                  'creator': {
                    'data': {
                      'type': 'profiles',
                      'id': 'abc123'
                    }
                  }
                }
              }
            ]
          },{
            'data': [
              {
                'type': 'projects',
                'id': 'abc123',
                'attributes': {
                  'name': 'JSON API!',
                  'description': 'JSON API paints my bikeshed!',
                  'images': [
                    {
                      'url': 'http://smashingtops.com/wp-content/uploads/2012/04/Home-Theater-Projectors.jpg'
                    }
                  ],
                  'created_at': '1997-07-16T19:20+01:00'
                },
                'relationships': {
                  'project_components': {
                    'data': [
                      {
                        'type': 'project_components',
                        'id': 'abc123'
                      }
                    ]
                  },
                  'creator': {
                    'data': {
                      'type': 'profiles',
                      'id': 'abc123'
                    }
                  }
                }
              }
            ]
          }
      ];
      return dummyData.slice(0,n)
    };

    function getProjectsNum(){
      var dummyData = [
        {
                  'data': [
                    {
                      'type': 'projects',
                      'id': 'abc123',
                      'attributes': {
                        'name': 'JSON API!',
                        'description': 'JSON API paints my bikeshed!',
                        'images': [
                          {
                            'url': 'http://smashingtops.com/wp-content/uploads/2012/04/Home-Theater-Projectors.jpg'
                          }
                        ],
                        'created_at': '1997-07-16T19:20+01:00'
                      },
                      'relationships': {
                        'project_components': {
                          'data': [
                            {
                              'type': 'project_components',
                              'id': 'abc123'
                            }
                          ]
                        },
                        'creator': {
                          'data': {
                            'type': 'profiles',
                            'id': 'abc123'
                          }
                        }
                      }
                    }
                  ]
                },{
            'data': [
              {
                'type': 'projects',
                'id': 'abc123',
                'attributes': {
                  'name': 'JSON API!',
                  'description': 'JSON API paints my bikeshed!',
                  'images': [
                    {
                      'url': 'http://smashingtops.com/wp-content/uploads/2012/04/Home-Theater-Projectors.jpg'
                    }
                  ],
                  'created_at': '1997-07-16T19:20+01:00'
                },
                'relationships': {
                  'project_components': {
                    'data': [
                      {
                        'type': 'project_components',
                        'id': 'abc123'
                      }
                    ]
                  },
                  'creator': {
                    'data': {
                      'type': 'profiles',
                      'id': 'abc123'
                    }
                  }
                }
              }
            ]
          },{
            'data': [
              {
                'type': 'projects',
                'id': 'abc123',
                'attributes': {
                  'name': 'JSON API!',
                  'description': 'JSON API paints my bikeshed!',
                  'images': [
                    {
                      'url': 'http://smashingtops.com/wp-content/uploads/2012/04/Home-Theater-Projectors.jpg'
                    }
                  ],
                  'created_at': '1997-07-16T19:20+01:00'
                },
                'relationships': {
                  'project_components': {
                    'data': [
                      {
                        'type': 'project_components',
                        'id': 'abc123'
                      }
                    ]
                  },
                  'creator': {
                    'data': {
                      'type': 'profiles',
                      'id': 'abc123'
                    }
                  }
                }
              }
            ]
          },{
            'data': [
              {
                'type': 'projects',
                'id': 'abc123',
                'attributes': {
                  'name': 'JSON API!',
                  'description': 'JSON API paints my bikeshed!',
                  'images': [
                    {
                      'url': 'http://smashingtops.com/wp-content/uploads/2012/04/Home-Theater-Projectors.jpg'
                    }
                  ],
                  'created_at': '1997-07-16T19:20+01:00'
                },
                'relationships': {
                  'project_components': {
                    'data': [
                      {
                        'type': 'project_components',
                        'id': 'abc123'
                      }
                    ]
                  },
                  'creator': {
                    'data': {
                      'type': 'profiles',
                      'id': 'abc123'
                    }
                  }
                }
              }
            ]
          },{
            'data': [
              {
                'type': 'projects',
                'id': 'abc123',
                'attributes': {
                  'name': 'JSON API!',
                  'description': 'JSON API paints my bikeshed!',
                  'images': [
                    {
                      'url': 'http://smashingtops.com/wp-content/uploads/2012/04/Home-Theater-Projectors.jpg'
                    }
                  ],
                  'created_at': '1997-07-16T19:20+01:00'
                },
                'relationships': {
                  'project_components': {
                    'data': [
                      {
                        'type': 'project_components',
                        'id': 'abc123'
                      }
                    ]
                  },
                  'creator': {
                    'data': {
                      'type': 'profiles',
                      'id': 'abc123'
                    }
                  }
                }
              }
            ]
          },{
            'data': [
              {
                'type': 'projects',
                'id': 'abc123',
                'attributes': {
                  'name': 'JSON API!',
                  'description': 'JSON API paints my bikeshed!',
                  'images': [
                    {
                      'url': 'http://smashingtops.com/wp-content/uploads/2012/04/Home-Theater-Projectors.jpg'
                    }
                  ],
                  'created_at': '1997-07-16T19:20+01:00'
                },
                'relationships': {
                  'project_components': {
                    'data': [
                      {
                        'type': 'project_components',
                        'id': 'abc123'
                      }
                    ]
                  },
                  'creator': {
                    'data': {
                      'type': 'profiles',
                      'id': 'abc123'
                    }
                  }
                }
              }
            ]
          }
      ];
      return dummyData.length
    };

    function queryProject(id){
      console.log('ProjectID: ', id)
      // TODO: when API is ready inplement query
      // TODO: MAKE A PROMISE TO GET PROJECT COMPONENTS and have that data available.
      var dummyProject = {
          'data': [
            {
              'type': 'projects',
              'id': 'abc123',
              'attributes': {
                'name': 'JSON API!',
                'description': 'JSON API paints my bikeshed!',
                'images': [
                  {
                    'url': 'http://smashingtops.com/wp-content/uploads/2012/04/Home-Theater-Projectors.jpg'
                  }
                ],
                'created_at': '1997-07-16T19:20+01:00'
              },
              'relationships': {
                'project_components': {
                  'data': [
                    {
                      'type': 'project_components',
                      'id': 'abc123'
                    }
                  ]
                },
                'creator': {
                  'data': {
                    'type': 'profiles',
                    'id': 'abc123'
                  }
                }
              }
            }
          ]
        };

        return dummyProject;
    }

  });
