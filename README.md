# hrms

Steps to run the hr-web.

1. Clone the application int your local.
2. traverse into the hr-web folder
3. execute "npm install"
4. execute "npmm start"

This should run the web module on port 3000. url "http://localhost:3000"

Steps to run springboot app:

1. Clone the project in to local
2. If maven is installed
	a. run mvn clean install
	b. mvn spring-boot:run
	
3. Else Import the maven project in to spring tool suite
4. update the java build path libraries to jdk1.8
5. Run maven install for the module
6. Run the module as a java application.

The application runs on port 8080. Link "http://localhost:8080"

MySql:

Execute below scripts to create DB and required tables.

Create Database hrms;
useaddr_ln1 hrms;

create table user_address (address_id bigint not null, addr_ln1 varchar(75), addr_ln2 varchar(75), addr_name varchar(75), addr_type integer, city varchar(25), country varchar(25), postal_code varchar(10), state_code varchar(10), user_id bigint not null, primary key (address_id));
create table users (id bigint not null, annual_salary double precision not null, date_of_birth varchar(255), email varchar(55), first_name varchar(25), gender integer, last_name varchar(25), mobile_phone varchar(10), user_type integer, primary key (id));

