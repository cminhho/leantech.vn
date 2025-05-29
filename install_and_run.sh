#!/bin/bash

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${BLUE}==================================================${NC}"
echo -e "${BLUE}       LeanTechCo React Website Installer         ${NC}"
echo -e "${BLUE}==================================================${NC}"

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo -e "${YELLOW}Node.js is not installed. Please install Node.js before continuing.${NC}"
    echo "You can download it from https://nodejs.org/"
    exit 1
fi

# Display Node.js version
NODE_VERSION=$(node -v)
echo -e "${GREEN}Node.js version: ${NODE_VERSION}${NC}"

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo -e "${YELLOW}npm is not installed. Please install npm before continuing.${NC}"
    exit 1
fi

# Display npm version
NPM_VERSION=$(npm -v)
echo -e "${GREEN}npm version: ${NPM_VERSION}${NC}"

echo -e "\n${BLUE}Installing dependencies...${NC}"
npm install

# Check if installation was successful
if [ $? -eq 0 ]; then
    echo -e "\n${GREEN}Dependencies installed successfully!${NC}"
    echo -e "\n${BLUE}Starting development server...${NC}"
    echo -e "${YELLOW}The website will open in your default browser.${NC}"
    echo -e "${YELLOW}Press Ctrl+C to stop the server when done.${NC}\n"
    
    # Start the development server
    npm start
else
    echo -e "\n${YELLOW}Failed to install dependencies. Please try again or install manually with 'npm install'.${NC}"
    exit 1
fi 