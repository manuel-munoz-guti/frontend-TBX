This is a code challenge frontend challenge for TBX company

### ========= API ADAPTER FROTEND v1 TBX ========
:::... Author: J. Manuel Muñoz Gutierrez ...:::

The frontend stack for this VITE project is:
-  Main Language: Javascript
-  Frameworks/ Libraries: ReactJS(ver. 18.0.0) with Redux and Redux/toolkit
-  Testiong with JEST
-  Package Manager: npm (ver. 8.15.0)
-  Container: Docker (Linux Alpine with nginx)
-  Styling with React bootstrap and css animation
-  Fetching requests with AXIOS.

To run this project follow the next steps:

1. Download or clone the github repository into a folder in your local machine with the next GIT command

    ### `https://github.com/manuel-munoz-guti/frontend-TBX.git`

2. Docker compose has already configure for prod environment with the dist folder

3. Create the docker images and run it with the next command:

    ### `docker compose up api`

4. Put the following URL into the web browser http://localhost:8000/. you will see the SPA Page in your browser.
ATTENTION!! BEFORE YOU NEED TO RUN THE BACKED!!

5. To run the tests open the folder where the code is, open a terminal and install all the dependencies with 

     ### `npm install`

6. To run the tests 

     ### `npm run test`

The next steps that I consider are very importart for this project for the future is implmenting react router dom making authentications modules. ie using JWT

I have an issue deploying vite in dev environment into a docker.

Thank you very much!