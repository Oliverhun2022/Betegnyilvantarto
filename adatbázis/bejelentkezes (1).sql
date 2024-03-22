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
-- Tábla szerkezet ehhez a táblához `bejelentkezes`
--

CREATE TABLE `bejelentkezes` (
  `id` int(11) NOT NULL,
  `felhasznalonev` varchar(20) DEFAULT NULL,
  `jelszo` varchar(15) DEFAULT NULL,
  `email_cim` varchar(30) DEFAULT NULL,
  `nev` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_hungarian_ci;

--
-- A tábla adatainak kiíratása `bejelentkezes`
--

INSERT INTO `bejelentkezes` (`id`, `felhasznalonev`, `jelszo`, `email_cim`, `nev`) VALUES
(1, 'drpappkaroly123', 'abcd1234', 'drpappkaroly@email.hu', 'dr.Papp Károly'),
(2, 'drkovacsistvan2002', 'zemplen2004', 'dristvankovacsdr04@gmail.com', 'dr.Kovács István'),
(3, 'drtothgabor120', 'kiskutya125', 'drtoth.gabor@email.hu', 'dr.Tóth Gábor'),
(4, 'drlaszloerdei20', 'csokolade120', 'drerdeilaszlo12@email.hu', 'dr.Erdei László'),
(5, 'drpeterfekete200', 'focilabda2002', 'drpappkaroly@gmail.com', 'dr.Fekete Péter');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
