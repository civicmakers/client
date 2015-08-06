'use strict';

angular.module('civicMakersClientApp')
  .factory('ProjectApi', function () {

    var service = {
      getAllProjects: getAllProjects,
      queryProject: queryProject,
      getFirstNProjects: getFirstNProjects,
      getProjectsNum: getProjectsNum,
    };

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
                  "url": "http://thedigitalpm.com/wp-content/uploads/2014/09/top10skillsforwebprojectmanagement.jpg"
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
                  "url": "http://www.twenty19.com/blog/wp-content/uploads/2015/02/project.jpg"
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
                  "url": "https://mvideos.stanford.edu/Images/DestinyImages/Professional%20Certificate%20Images/Advanced%20Project%20Management/460X259/ProjectManagementCertificate_MAIN.jpg"
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
            "id": "abc456",
            "attributes": {
              "name": "PROJECTOR!",
              "description": "projectprojectprojectprojectprojectproject",
              "images": [
                {
                  "url": "http://smashingtops.com/wp-content/uploads/2012/04/Home-Theater-Projectors.jpg"
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
            "id": "abc456",
            "attributes": {
              "name": "PROJECTOR!",
              "description": "projectprojectprojectprojectprojectproject",
              "images": [
                {
                  "url": "http://smashingtops.com/wp-content/uploads/2012/04/Home-Theater-Projectors.jpg"
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
            "id": "abc456",
            "attributes": {
              "name": "PROJECTOR!",
              "description": "projectprojectprojectprojectprojectproject",
              "images": [
                {
                  "url": "http://smashingtops.com/wp-content/uploads/2012/04/Home-Theater-Projectors.jpg"
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
            "id": "abc456",
            "attributes": {
              "name": "PROJECTOR!",
              "description": "projectprojectprojectprojectprojectproject",
              "images": [
                {
                  "url": "http://smashingtops.com/wp-content/uploads/2012/04/Home-Theater-Projectors.jpg"
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
            "id": "abc456",
            "attributes": {
              "name": "PROJECTOR!",
              "description": "projectprojectprojectprojectprojectproject",
              "images": [
                {
                  "url": "http://smashingtops.com/wp-content/uploads/2012/04/Home-Theater-Projectors.jpg"
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
            "id": "abc456",
            "attributes": {
              "name": "PROJECTOR!",
              "description": "projectprojectprojectprojectprojectproject",
              "images": [
                {
                  "url": "http://smashingtops.com/wp-content/uploads/2012/04/Home-Theater-Projectors.jpg"
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
            "id": "abc456",
            "attributes": {
              "name": "PROJECTOR!",
              "description": "projectprojectprojectprojectprojectproject",
              "images": [
                {
                  "url": "http://smashingtops.com/wp-content/uploads/2012/04/Home-Theater-Projectors.jpg"
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
            "id": "abc456",
            "attributes": {
              "name": "PROJECTOR!",
              "description": "projectprojectprojectprojectprojectproject",
              "images": [
                {
                  "url": "http://smashingtops.com/wp-content/uploads/2012/04/Home-Theater-Projectors.jpg"
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
            "id": "abc456",
            "attributes": {
              "name": "PROJECTOR!",
              "description": "projectprojectprojectprojectprojectproject",
              "images": [
                {
                  "url": "http://smashingtops.com/wp-content/uploads/2012/04/Home-Theater-Projectors.jpg"
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
            "id": "abc456",
            "attributes": {
              "name": "PROJECTOR!",
              "description": "projectprojectprojectprojectprojectproject",
              "images": [
                {
                  "url": "http://smashingtops.com/wp-content/uploads/2012/04/Home-Theater-Projectors.jpg"
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
      }
    ];

    return service;

    function getAllProjects(){
      return dummyData
    };

    function getFirstNProjects(n){
      return dummyData.slice(0,n)
    };

    function getProjectsNum(){
      return dummyData.length
    };

    function queryProject(id){
      console.log('ProjectID: ', id)
      // TODO: when API is ready inplement query
      // TODO: MAKE A PROMISE TO GET PROJECT COMPONENTS and have that data available.
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
                    "url": "http://smashingtops.com/wp-content/uploads/2012/04/Home-Theater-Projectors.jpg"
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

        return dummyProject;
    }

  });
