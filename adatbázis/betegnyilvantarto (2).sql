-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Gép: 127.0.0.1
-- Létrehozás ideje: 2024. Már 22. 10:02
-- Kiszolgáló verziója: 10.4.28-MariaDB
-- PHP verzió: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Adatbázis: `vizsgaremek`
--

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `betegnyilvantarto`
--

CREATE TABLE `betegnyilvantarto` (
  `ID` int(11) NOT NULL,
  `felhasznalonev` varchar(15) DEFAULT NULL,
  `regisztralo_orvos` varchar(30) DEFAULT NULL,
  `regisztralo_email_cime` varchar(25) DEFAULT NULL,
  `jelszo` varchar(15) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_hungarian_ci;

--
-- A tábla adatainak kiíratása `betegnyilvantarto`
--

INSERT INTO `betegnyilvantarto` (`ID`, `felhasznalonev`, `regisztralo_orvos`, `regisztralo_email_cime`, `jelszo`) VALUES
(1, 'borbalakaloczid', 'Dr.Kálócz Borbála', 'kaloczi.borbala@gmail.com', 'hdgag1234'),
(2, 'baloghistvandr', 'Dr. Balogh István', 'drbaloghistvan@gmail.com', 'abcd3221'),
(3, 'ugraigyorgydr', 'Dr. Ugrai György', 'drugraigyorgy@email.hu', 'hgfhj3001'),
(4, 'marialaszlo', 'Dr.László Mária', 'laszlomariadr@gmail.com', 'kdjjd200'),
(5, 'szalaimarta', 'Dr.Szalai Márta', 'szalaimarta@gmail.com', 'bcdasd123');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
