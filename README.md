# CivicMakers - http://civicmakers.com

## CivicMakers aims to accelerate the capacity for communities, organizations and institutions to rapidly deploy collaborative solutions by growing a network of people, resources and recipes for public good projects. This is a prototype of a knowledge-sharing platform to the civic innovation community.


#### Front-end client

##### dependencies

- XCode (necessary for Mac)
  - `xcode-select --install`
- Node/npm
  - for Mac via Homebrew:
    1. `ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`
    2. `brew install node`
    3. `npm install -g npm`
  - for Mac or Linux via [NVM](https://github.com/creationix/nvm)
    1. `curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.31.0/install.sh | bash`
    2. `nvm install 0.10`
    3. `nvm alias default 0.10`
    4. `echo "export NVM_DIR="$HOME/.nvm" >> $HOME/.bashrc && echo [ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh" >> $HOME/.bashrc` (optional)
- Ruby/Sass
  - Linux (Ubuntu):
    1. `sudo apt-get install ruby`
    2. `git clone https://github.com/rubygems/rubygems.git && cd rubygems && sudo ruby setup.rb`
    3. `sudo gem install sass`
  - Mac:
    1. `git clone https://github.com/rubygems/rubygems.git && cd rubygems && sudo ruby setup.rb`
    2. `sudo gem install sass`


##### How to run client locally:
- Install the necessary dependents appropriate to your system, as described above
- Open your command line and navigate to the folder where you want to save the project.
- Clone the project repo by entering the following in your command line:
    ```
    git clone https://github.com/civicmakers/client.git
    ```
- Navigate into the project:
    ```
    cd client
    ```
- Install the project's tools and dependencies. (This may take a while):
    ```
    npm install
    ```
- Now start the local server!
    ```
    npm run develop
    ```
