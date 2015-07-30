# Civic Makers Client
#### Front-end for Civic Makers project.

##### How to run client locally:
- Open your command line and navigate to the folder where you want to save the project.
- Clone the project repo by entering the following in your command line:
    ```
    git clone https://github.com/civicmakers/client.git
    ```
- Navigate into the project:
    ```
    cd client
    ```
- Install XCode (if you don't already have it):
    ```
    xcode-select --install
    ```
- Install HomeBrew (if you don't already have it):
    ```
    ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
    ```
- Install Node:
    ```
    brew install node
    ```
- Update Node Package Manager:
    ```
    npm install -g npm
    ```
- Install Grunt:
    ```
    npm install -g grunt-cli
    ```
- Install Bower
    ```
    npm install -g bower
    ```
- Install the project's tools and dependencies. (This may take a while):
    ```
    npm install
    ```
- Now start the local server!
    ```
    grunt serve
    ```
