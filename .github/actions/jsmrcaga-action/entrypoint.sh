#!/bin/bash

sh -c "apt install sudo"
sh -c "sudo chown -R circleci /github"
sh -c "sudo chmod -R 777 /github"

set -e


NODE_VERSION=$9

# We can start using INPUT_ notation instead of passing
# env variables as arg to docker
USE_NVM=$INPUT_USE_NVM

# Install node from NVM to honor .nvmrc files
if [[ $USE_NVM == "true" ]] && ([[ -n $NODE_VERSION ]] || [[ -e ".nvmrc" ]])
then
	curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.2/install.sh | bash
	[ -s "$HOME/.nvm/nvm.sh" ] && \. "$HOME/.nvm/nvm.sh"

	if [[ -n $NODE_VERSION ]]
	then
		nvm install "$NODE_VERSION"
	else
		nvm install
	fi
fi

NETLIFY_AUTH_TOKEN=$1
NETLIFY_SITE_ID=$2
NETLIFY_DEPLOY_TO_PROD=$3
BUILD_DIRECTORY=$4
FUNCTIONS_DIRECTORY=$5
INSTALL_COMMAND=$6
BUILD_COMMAND=$7
DEPLOY_ALIAS=$8
DELETED_DEPLOY_ALIAS=${10}
BUILD_DELETED_DIRECTORY=${11}



# Export token to use with netlify's cli
export NETLIFY_SITE_ID="$NETLIFY_SITE_ID"
export NETLIFY_AUTH_TOKEN="$NETLIFY_AUTH_TOKEN"

echo "---- CHRISTOS MESSAGE: admin finished"

string="$DEPLOY_ALIAS"

# Syntax to replace all occurrences of "anime" with " "
arr=(${string//","/ })

# Print each value of the array by using the loop
for trainingToBuild in "${arr[@]}"; do
	echo "---- CHRISTOS MESSAGE: \"$trainingToBuild\" finished"
	echo "---- CHRISTOS MESSAGE: Directory: \"$BUILD_DIRECTORY\""
done

echo "111 ---- CHRISTOS MESSAGE: Deleted Directory: \"$BUILD_DELETED_DIRECTORY\""

string="$DELETED_DEPLOY_ALIAS"

# Syntax to replace all occurrences of "anime" with " "
arr=(${string//","/ })

# Print each value of the array by using the loop
for trainingToBuild in "${arr[@]}"; do
	echo "---- CHRISTOS MESSAGE: Deleted: \"$trainingToBuild\" finished"
	echo "---- CHRISTOS MESSAGE: Deleted Directory: \"$BUILD_DELETED_DIRECTORY\""
done
