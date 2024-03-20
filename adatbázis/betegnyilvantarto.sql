-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Gép: 127.0.0.1
-- Létrehozás ideje: 2024. Már 11. 11:09
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
  `regisztralo_neve` varchar(20) DEFAULT NULL,
  `regisztralo_orvosa` varchar(30) DEFAULT NULL,
  `regisztralo_email_cime` varchar(25) DEFAULT NULL,
  `jelszo` varchar(15) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_hungarian_ci;

--
-- A tábla adatainak kiíratása `betegnyilvantarto`
--

INSERT INTO `betegnyilvantarto` (`ID`, `felhasznalonev`, `regisztralo_neve`, `regisztralo_orvosa`, `regisztralo_email_cime`, `jelszo`) VALUES
(1, 'mbarna12', 'Mezőfi Barnabás', 'Dr.Kálócz Borbála', 'mezofibarna@gmail.com', 'hdgag1234'),
(2, 'mariakovacs', 'Kovács Mária', 'Dr. Balogh István', 'mariakovacs@gmail.com', 'abcd3221'),
(3, 'gaborlaszlo', 'László Gábor', 'Dr. Ugrai György', 'laszlo.gabor@email.hu', 'hgfhj3001'),
(4, 'nagyzoltan', 'Nagy Zoltán', 'Dr.László Mária', 'zoltannagy@gmail.com', 'kdjjd200'),
(5, 'zsuzsajanosi', 'Jánosi Zsuzsanna', 'Dr.Szalai Márta', 'zsuzsajanosi@gmail.com', 'bcdasd123');

--
-- Indexek a kiírt táblákhoz
--

--
-- A tábla indexei `betegnyilvantarto`
--
ALTER TABLE `betegnyilvantarto`
  ADD PRIMARY KEY (`ID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
