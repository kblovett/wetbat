DROP DATABASE IF EXISTS wetbat;
CREATE DATABASE wetbat;

DROP TABLE IF EXISTS agents;
DROP TABLE IF EXISTS provinces;
DROP TABLE IF EXISTS countries;
DROP TABLE IF EXISTS travellers;
DROP TABLE IF EXISTS bookings;
DROP TABLE IF EXISTS addon;
DROP TABLE IF EXISTS booking_addon;

CREATE TABLE agents
(
  agent_id UUID,
  fname VARCHAR(255),
  lname VARCHAR(255),
  phone CHAR(10),
  email VARCHAR(255) UNIQUE,
  password VARCHAR(255),
  PRIMARY KEY(agent_id)
);

CREATE TABLE provinces
(
  province_id SERIAL,
  province_name VARCHAR(255),
  province_code CHAR(2),
  PRIMARY KEY(province_id)
);

CREATE TABLE countries
(
  country_id SERIAL,
  country_name VARCHAR(255),
  country_code CHAR(2),
  PRIMARY KEY(country_id)
);

CREATE TABLE travellers
(
  traveller_id SERIAL,
  fname VARCHAR(255),
  lname VARCHAR(255),
  phone CHAR(10),
  email VARCHAR(255) UNIQUE,
  address_line1 VARCHAR(255),
  address_line2 VARCHAR(255),
  city VARCHAR(255),
  province_id SERIAL,
  country_id SERIAL,
  PRIMARY KEY(traveller_id),
  CONSTRAINT fk_province
      FOREIGN KEY(province_id) 
	  REFERENCES provinces(province_id),
  CONSTRAINT fk_country
      FOREIGN KEY(country_id) 
	  REFERENCES countries(country_id)
);

CREATE TABLE bookings
(
  booking_id SERIAL,
  agent_id UUID,
  traveller_id SERIAL,
  passengers INT,
  depart_loc VARCHAR(255),
  depart_date DATE,
  dest_loc VARCHAR(255),
  return_date DATE,
  booking_cost FLOAT,
  PRIMARY KEY(booking_id),
  CONSTRAINT fk_agent
      FOREIGN KEY(agent_id) 
	  REFERENCES agents(agent_id),
  CONSTRAINT fk_traveller
      FOREIGN KEY(traveller_id) 
	  REFERENCES travellers(traveller_id)
);

CREATE TABLE addon
(
  addon_id SERIAL,
  addon_description TEXT,
  addon_cost FLOAT,
  PRIMARY KEY(addon_id)
);

CREATE TABLE booking_addon
(
  booking_addon_id SERIAL,
  addon_id SERIAL,
  booking_id SERIAL,
  PRIMARY KEY(booking_addon_id),
  CONSTRAINT fk_addon
      FOREIGN KEY(addon_id) 
	  REFERENCES addon(addon_id),
  CONSTRAINT fk_booking
      FOREIGN KEY(booking_id) 
	  REFERENCES bookings(booking_id)
);

SELECT "Booking"."id", "Booking"."agentUuid", "Booking"."travellerId", "Booking"."passengers", "Booking"."depart_loc", "Booking"."depart_date", "Booking"."dest_loc", "Booking"."return_date", "Booking"."booking_cost", "Booking"."createdAt", "Booking"."updatedAt", "Booking"."AgentId", "Agent"."id" AS "Agent.id", "Agent"."agentUuid" AS "Agent.agentUuid", "Agent"."fname" AS "Agent.fname", "Agent"."lname" AS "Agent.lname", "Agent"."phone" AS "Agent.phone", "Agent"."email" AS "Agent.email", "Agent"."password" AS "Agent.password", "Agent"."createdAt" AS "Agent.createdAt", "Agent"."updatedAt" AS "Agent.updatedAt"
FROM "Bookings" AS "Booking" LEFT OUTER JOIN "Agents" AS "Agent" ON "Booking"."AgentId" = "Agent"."agentUuid";