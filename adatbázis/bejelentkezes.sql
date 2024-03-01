-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Gép: 127.0.0.1
-- Létrehozás ideje: 2024. Már 01. 09:01
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
-- Adatbázis: `projekt_2`
--

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `bejelentkezes`
--

CREATE TABLE `bejelentkezes` (
  `id` int(11) NOT NULL,
  `felhasznalonev` varchar(20) DEFAULT NULL,
  `jelszo` varchar(15) DEFAULT NULL,
  `email_cim` varchar(20) DEFAULT NULL,
  `nev` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_hungarian_ci;

--
-- A tábla adatainak kiíratása `bejelentkezes`
--

INSERT INTO `bejelentkezes` (`id`, `felhasznalonev`, `jelszo`, `email_cim`, `nev`) VALUES
(1, 'pappkaroly123', 'abcd1234', 'pappkaroly@email.hu', 'Papp Károly'),
(2, 'kovacsistvan2002', 'zemplen2004', 'istvankovacs04@gmail', 'Kovács István'),
(3, 'tothgabor120', 'kiskutya125', 'toth.gabor@email.hu', 'Tóth Gábor'),
(4, 'laszloerdei20', 'csokolade120', 'erdeilaszlo12@email.', 'Erdei László'),
(5, 'peterfekete200', 'focilabda2002', 'pappkaroly@gmail.com', 'Fekete Péter');

--
-- Indexek a kiírt táblákhoz
--

--
-- A tábla indexei `bejelentkezes`
--
ALTER TABLE `bejelentkezes`
  ADD PRIMARY KEY (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
