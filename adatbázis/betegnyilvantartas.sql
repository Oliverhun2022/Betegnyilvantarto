-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Gép: 127.0.0.1
-- Létrehozás ideje: 2024. Már 04. 10:01
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
-- Tábla szerkezet ehhez a táblához `betegnyilvantartas`
--

CREATE TABLE `betegnyilvantartas` (
  `id` int(11) NOT NULL,
  `beteg_neve` varchar(20) DEFAULT NULL,
  `taj_szam` int(15) DEFAULT NULL,
  `szuletesi_datum` date DEFAULT NULL,
  `anyja_neve` varchar(15) DEFAULT NULL,
  `lakcim` varchar(30) DEFAULT NULL,
  `szemelyigazolvany_szam` int(15) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_hungarian_ci;

--
-- A tábla adatainak kiíratása `betegnyilvantartas`
--

INSERT INTO `betegnyilvantartas` (`id`, `beteg_neve`, `taj_szam`, `szuletesi_datum`, `anyja_neve`, `lakcim`, `szemelyigazolvany_szam`) VALUES
(1, 'Tóth István', 120234102, '1968-03-15', 'Kovács Mária', 'Sárospatak, Erdész u. 10.', 210233500),
(2, 'Juhász Péter', 130532260, '1957-05-21', 'Juhász Ilona', 'Debrecen, László u. 15', 323023222),
(3, 'Kovács Márton', 102230455, '1970-04-30', 'Tóth Mártonné', 'Sátoraljaújhely, Mártírok útja', 432106645),
(4, 'Magyar Katalin', 211001154, '1989-09-19', 'Péterfi Andrea', 'Szerencs, Szabadság tér 3.', 132210547),
(5, 'Nagy Imre', 200435467, '1987-03-21', 'Nagy Ibolya', 'Miskolc, Hild tér 5.', 120123240),
(6, 'Gergely Bálint', 112120300, '1986-04-21', 'Gergely Éva', 'Sárospatak, Petőfi u. 12.', 140510320),
(7, 'Péter Róbert', 210021100, '1979-03-10', 'Péter Karolina', 'Sátoraljaújhely, Kossuth tér 4', 210044200);

--
-- Indexek a kiírt táblákhoz
--

--
-- A tábla indexei `betegnyilvantartas`
--
ALTER TABLE `betegnyilvantartas`
  ADD PRIMARY KEY (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
