#!/bin/bash
# Step 1: Set up environment for JBrowse
## NOTE: change APACHE_ROOT as appropriate if needed

# Assuming a Linux set up
# installs fnm (Fast Node Manager)
curl -fsSL https://fnm.vercel.app/install | bash
# activate fnm
source ~/.bashrc
# download and install Node.js
fnm use --install-if-missing 20
# verifies the right Node.js version is in the environment
node -v # should print `v20.18.0`
# verifies the right npm version is in the environment
npm -v # should print `10.8.2`

# Install JBrowse
sudo npm install -g @jbrowse/cli
jbrowse --version

# Install dependencies
sudo apt install wget apache2
brew install samtools htslib

# Set up apache
sudo service apache2 start

# be sure to replace the path with your actual true path!
export APACHE_ROOT=/opt/homebrew/var/www

mkdir ∼/tmp
cd ~/tmp

jbrowse create output_folder
sudo mv output_folder $APACHE_ROOT/jbrowse2
sudo chown -R $(whoami) $APACHE_ROOT/jbrowse2