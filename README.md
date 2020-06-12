install node.js and npm: https://nodejs.org/en/download/

### NOTE: only deployed on local host for now ###


### access postgres locally ###
```
psql -U postgres -h localhost -W
CREATE ROLE test WITH LOGIN PASSWORD '123456';
ALTER ROLE test CREATEDB;
\q
```
connect to postgres with role ``` test ```
```
psql -d postgres -U test
```
create database:
```
CREATE DATABASE api;
```
connect api database with test
```
\c api
```
create table apitest
```
api=> CREATE TABLE apitest (
api(> ID SERIAL PRIMARY KEY,
api(> userID VARCHAR(30),
api(> sliderVal VARCHAR(30)
api(> );
```
insert some values
```
api=> INSERT INTO apitest (userID, sliderVal)
api-> VALUES ('1234','56'), ('0001','72');
```

go into project folder 
```
pipenv shell
```

to create a package.json:
```
npm init -y
```

install Express and node-postgres:
```
npm i express pg
```

create an index.js file
run the following commands to test it:
```
node idex.js
```

create queries.js file

use ```node index.js``` to run. 

Kill port with control c. 


Additional information on ports:
```
# listen to ports
lsof -nP +c 15 | grep LISTEN
lsof -i tcp:host_number
kill -9 PID_to_kill
```

Example to POST an entry:

in terminal, type:
```
curl --data "userID=12345&sliderVal=67" http://localhost:3000/feedback
```

### Deploy on heroku ###
```
heroku login
heroku create
git push heroku master
```
create Procfile to tell heroku which script to run.

inside procfile, write:
```
web: node index.js
```
NOTE: "Procfiles can contain additional process types. For example, you might declare one for a background worker process that processes items off of a queue."

use below to check dynos:
```
heroku ps
```
now we need to attach presentTestSurvey to testexpt's database




