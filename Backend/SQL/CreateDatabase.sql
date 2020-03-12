create database synchroInit;

use synchroInit;

-- synchroInit.flys definition

CREATE TABLE `flys` (
  `id` int(11) NOT NULL,
  `company` varchar(40) NOT NULL,
  `week` int(11) NOT NULL,
  `value` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


-- synchroInit.location definition

CREATE TABLE `location` (
  `city` varchar(40) NOT NULL,
  `country` varchar(40) NOT NULL,
  PRIMARY KEY (`city`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


-- synchroInit.`connection` definition

CREATE TABLE `connection` (
  `origin` varchar(40) NOT NULL,
  `destination` varchar(40) NOT NULL,
  `fly_id` int(11) NOT NULL,
  PRIMARY KEY (`origin`,`destination`,`fly_id`),
  KEY `destination` (`destination`),
  KEY `fly_id` (`fly_id`),
  CONSTRAINT `connection_ibfk_1` FOREIGN KEY (`origin`) REFERENCES `location` (`city`),
  CONSTRAINT `connection_ibfk_2` FOREIGN KEY (`destination`) REFERENCES `location` (`city`),
  CONSTRAINT `connection_ibfk_3` FOREIGN KEY (`fly_id`) REFERENCES `flys` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


-- synchroInit.hotels definition

CREATE TABLE `hotels` (
  `name` varchar(100) NOT NULL,
  `city` varchar(40) NOT NULL,
  `price` int(11) NOT NULL,
  PRIMARY KEY (`name`),
  KEY `hotels_FK` (`city`),
  CONSTRAINT `hotels_FK` FOREIGN KEY (`city`) REFERENCES `location` (`city`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


-- synchroInit.services definition

CREATE TABLE `services` (
  `name` varchar(100) NOT NULL,
  `pool` tinyint(1) NOT NULL,
  `parking` tinyint(1) NOT NULL,
  `breakfast` tinyint(1) NOT NULL,
  `air_conditional` tinyint(1) NOT NULL,
  `wifi` tinyint(1) NOT NULL,
  `gym` tinyint(1) NOT NULL,
  PRIMARY KEY (`name`),
  CONSTRAINT `Services_FK` FOREIGN KEY (`name`) REFERENCES `hotels` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


-- synchroInit.viability definition

CREATE TABLE `viability` (
  `name` varchar(100) NOT NULL,
  `month` int(11) NOT NULL,
  `viability_flag` tinyint(1) NOT NULL,
  PRIMARY KEY (`name`,`month`),
  CONSTRAINT `Viability_FK` FOREIGN KEY (`name`) REFERENCES `hotels` (`name`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
