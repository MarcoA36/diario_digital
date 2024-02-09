-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 09-08-2023 a las 07:26:42
-- Versión del servidor: 10.4.27-MariaDB
-- Versión de PHP: 8.1.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `diario_digital`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `administrador`
--

CREATE TABLE `administrador` (
  `id` int(11) NOT NULL,
  `nombre` text NOT NULL,
  `usuario` text NOT NULL,
  `contra` text NOT NULL,
  `email` text NOT NULL,
  `localidad` text NOT NULL,
  `direccion` text NOT NULL,
  `telefono` text NOT NULL,
  `rango` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `administrador`
--

INSERT INTO `administrador` (`id`, `nombre`, `usuario`, `contra`, `email`, `localidad`, `direccion`, `telefono`, `rango`) VALUES
(1, 'redactor', 'redactor123', '123456', 'redactor@gmail.com', 'paris', 'nbcsm,a 123', '123789456', 1),
(2, 'admin', 'admin123', '123456', 'admin@gmail.com', 'coronel admin', 'klcnsa', '12345678', 2),
(3, 'Giusep', 'giusep48', '123456', 'giuspepe48@gmail.com', 'viednam', '123 rinfort', '22451132', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `estado`
--

CREATE TABLE `estado` (
  `id_estado` int(2) NOT NULL,
  `estado` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `estado`
--

INSERT INTO `estado` (`id_estado`, `estado`) VALUES
(1, 'cargada'),
(2, 'en revisión'),
(3, 'publicada');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `mensajes`
--

CREATE TABLE `mensajes` (
  `id_mensaje` int(11) NOT NULL,
  `de` text NOT NULL,
  `para` text NOT NULL,
  `asunto` text NOT NULL,
  `mensaje` text NOT NULL,
  `fecha` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `mensajes`
--

INSERT INTO `mensajes` (`id_mensaje`, `de`, `para`, `asunto`, `mensaje`, `fecha`) VALUES
(135, '2', '1', 'csa', 'csacsac', '2023-06-10'),
(136, '2', '1', 'nbubce bjkas bkjcs kjcsa', 'nbubce bjkas bkjcs kjcsanbubce bjkas bkjcs kjcsanbubce bjkas bkjcs kjcsanbubce bjkas bkjcs kjcsanbubce bjkas bkjcs kjcsanbubce bjkas bkjcs kjcsa', '2023-06-24'),
(137, '2', '2', 'nbubce bjkas bkjcs kjcsa', 'nbubce bjkas bkjcs kjcsanbubce bjkas bkjcs kjcsanbubce bjkas bkjcs kjcsanbubce bjkas bkjcs kjcsanbubce bjkas bkjcs kjcsanbubce bjkas bkjcs ', '2023-06-24'),
(138, '2', '2', 'nbubce bjkas bkjcs kjcsa', 'nbubce bjkas bkjcs kjcsanbubce bjkas bkjcs kjcsanbubce bjkas bkjcs kjcsanbubce bjkas bkjcs kjcsanbubce bjkas bkjcs kjcsa', '2023-06-24'),
(139, '2', '2', 'nbubce bjkas bkjcs kjcsa', 'nbubce bjkas bkjcs kjcsanbubce bjkas bkjcs kjcsanbubce bjkas bkjcs kjcsanbubce bjkas bkjcs kjcsanbubce bjkas bkjcs kjcsa', '2023-06-24');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `noticias`
--

CREATE TABLE `noticias` (
  `id` int(11) NOT NULL,
  `titulo` text NOT NULL,
  `bajada` text NOT NULL,
  `cuerpo` text NOT NULL,
  `imagen` text NOT NULL,
  `fecha` date NOT NULL,
  `id_seccion` int(11) NOT NULL,
  `id_redactor` int(11) DEFAULT NULL,
  `id_estado` int(2) NOT NULL,
  `id_posicion` int(2) DEFAULT NULL,
  `id_ubicacion` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `noticias`
--

INSERT INTO `noticias` (`id`, `titulo`, `bajada`, `cuerpo`, `imagen`, `fecha`, `id_seccion`, `id_redactor`, `id_estado`, `id_posicion`, `id_ubicacion`) VALUES
(1650, 'Nueva entrada', 'Encabezado klcmskla nlcknsalkncklnsakl ncklsan lkcnklsan clsa lcsn alknlsa', '<h2>Contenido de la entrada</h2>\r\njkcbjksa kj cjksa jkcn skalnklcsn aklc nklsanclksanlkc nslkanclks alkcnlksan clk askln clkasn klcn aksln clksa lkc slan clksa lkc nlskancklsnlakcnsla clknsalkc lksanclk salkcnklsa lcknsa lkcn&nbsp;<span style=\"font-family: var(--font-family-1);\">jkcbjksa kj cjksa jkcn skalnklcsn aklc nklsanclksanlkc nslkanclks alkcnlksan clk askln clkasn klcn aksln clksa lkc slan clksa lkc nlskancklsnlakcnsla clknsalkc lksanclk salkcnklsa lcknsa lkcn&nbsp;</span><span style=\"font-family: var(--font-family-1);\">jkcbjksa kj cjksa jkcn skalnklcsn aklc nklsanclksanlkc nslkanclks alkcnlksan clk askln clkasn klcn aksln clksa lkc slan clksa lkc nlskancklsnlakcnsla clknsalkc lksanclk salkcnklsa lcknsa lkcn&nbsp;</span><span style=\"font-family: var(--font-family-1);\">jkcbjksa kj cjksa jkcn skalnklcsn aklc nklsanclksanlkc nslkanclks alkcnlksan clk askln clkasn klcn aksln clksa lkc slan clksa lkc nlskancklsnlakcnsla clknsalkc lksanclk salkcnklsa lcknsa lkcn&nbsp;</span>\r\n<h3>kcbjksa kj cjksa jkcn skalnklcsn aklc nklsanclksanlkc nslkanclks alkcnlksan clk askln</h3> clkasn klcn aksln clksa lkc slan clksa lkc nlskancklsnlakcnsla clknsalkc lksanclk salkcnklsa lcknsa lkcn&nbsp;<span style=\"font-family: var(--font-family-1);\">jkcbjksa kj cjksa jkcn skalnklcsn aklc nklsanclksanlkc nslkanclks alkcnlksan clk askln clkasn klcn aksln clksa lkc slan clksa lkc nlskancklsnlakcnsla clknsalkc lksanclk salkcnklsa lcknsa lkcn&nbsp;</span><span style=\"font-family: var(--font-family-1);\">jkcbjksa kj cjksa jkcn skalnklcsn aklc nklsanclksanlkc nslkanclks alkcnlksan clk askln clkasn klcn aksln clksa lkc slan clksa lkc nlskancklsnlakcnsla clknsalkc lksanclk salkcnklsa lcknsa lkcn&nbsp;</span><span style=\"font-family: var(--font-family-1);\">jkcbjksa kj cjksa jkcn skalnklcsn aklc nklsanclksanlkc nslkanclks alkcnlksan clk askln clkasn klcn aksln clksa lkc slan clksa lkc nlskancklsnlakcnsla clknsalkc lksanclk salkcnklsa lcknsa lkcn&nbsp;</span><span style=\"font-family: var(--font-family-1);\">jkcbjksa kj cjksa jkcn skalnklcsn aklc nklsanclksanlkc nslkanclks alkcnlksan clk askln clkasn klcn aksln clksa lkc slan clksa lkc nlskancklsnlakcnsla clknsalkc lksanclk salkcnklsa lcknsa lkcn&nbsp;</span><span style=\"font-family: var(--font-family-1);\"><br></span>', '../../api/img/atletismo.jpg', '2023-07-04', 1, 2, 3, 2, NULL),
(1651, 'Entrada del redactor', 'nskjacs klacklsan lkcnklsna kln salk cklsan cklsa lkcn salknc lksa nl', 'nskjacs klacklsan lkcnklsna kln salk cklsan cklsa lkcn salknc lksa nlnskjacs klacklsan lkcnklsna kln salk cklsan cklsa lkcn salknc lksa nlnskjacs klacklsan lkcnklsna kln salk ck<span style=\"font-weight: bold;\">lsan cklsa lkcn salknc lksa nlnskjacs klacklsan lkcnklsna kln salk cklsan cklsa lkcn salknc lksa nlnskjacs klacklsan lkcnklsna kln salk cklsan cklsa lkcn salknc lksa nlnskjacs klacklsan lkcnklsna kln salk cklsan cklsa lkcn salknc lksa nlnskjacs klacklsan lkcnklsna kln salk cklsan cklsa lkcn salknc lksa nlnskjacs klacklsan lkcnklsna kln salk cklsan cklsa lkcn salknc lksa nlnskjacs klacklsan lkcnklsna kln salk cklsan cklsa lkcn salknc lksa nlnskjacs klacklsan lkcnklsna kln salk cklsan cklsa lkcn salknc lksa nlnskjacs klacklsan lkcnklsna kln salk cklsan cklsa lkcn salknc lksa nlnskjacs klacklsan lkcnklsna kln salk cklsan cklsa lkcn salknc lksa nlnskjacs klacklsan lkcnklsna kln salk ckl</span>san cklsa lkcn salknc lksa nlnskjacs klacklsan lkcnklsna kln salk cklsan cklsa lkcn salknc lksa nlnskjacs klacklsan lkcnklsna kln salk cklsan cklsa lkcn salknc lksa nlnskjacs klacklsan lkcnklsna kln salk cklsan cklsa lkcn salknc lksa nlnskjacs klacklsan lkcnklsna kln salk cklsan cklsa lkcn salknc lksa nlnskjacs klacklsan lkcnklsna kln salk cklsan cklsa lkcn salknc lksa nl\r\nnskjacs klacklsan lkcnklsna kln salk cklsan cklsa lkcn salknc lksa nlnskjacs klacklsan lkcnklsna kln salk cklsan cklsa lkcn salknc lksa nlnskjacs klacklsan lkcnklsna kln salk cklsan cklsa lkcn salknc lksa nlnskjacs klacklsan lkcnklsna kln salk cklsan cklsa lkcn salknc lksa nlnskjacs klacklsan lkcnklsna kln salk cklsan cklsa lkcn salknc lksa nlnskjacs klacklsan lkcnklsna kln salk cklsan cklsa lkcn salknc lksa nlnsk\r\n<br><h3>jacs klacklsan lkcnklsna kln salk cklsan cklsa lkcn salknc lksa nlnskjacs klacklsan lkcnklsna kln salk cklsan cklsa lkcn salknc lksa nlnskjacs klacklsan lkcnklsna kln salk cklsan cklsa lkc</h3><div><br></div>n salknc lksa nlnskjacs klacklsan lkcnklsna kln salk cklsan cklsa lkcn salknc lksa nlnskjacs klacklsan lkcnklsna kln salk cklsan cklsa lkcn salknc lksa nlnskjacs klacklsan lkcnklsna kln salk cklsan cklsa lkcn salknc lksa nlnskjacs klacklsan lkcnklsna kln salk cklsan cklsa lkcn salknc lksa nlnskjacs klacklsan lkcnklsna kln salk cklsan cklsa lkcn salknc lksa nlnskjacs klacklsan lkcnklsna kln salk cklsan cklsa lkcn salknc lksa nlnskjacs klacklsan lkcnklsna kln salk cklsan cklsa lkcn salknc lksa nl<br>', '../../api/img/191222_Rossel_b67ff_frz_1045x588.jpg', '2023-07-04', 1, 1, 1, NULL, NULL),
(1652, 'knc klsan lkcn sakln cklsan klcn salkn', 'nklnlkcsa lnscakln cslkanlkc salknc klsan lkcn sakln cklsan klcn salkn', 'nklnlkcsa lnscakln cslkanlkc salknc klsan lkcn sakln cklsan klcn salknnklnlkcsa lnscakln <h3>cslkanlkc salknc klsan lkcn sakln cklsan klcn salknnklnlkcsa lnscakln cslkanlk<h2>c salknc klsan lkcn sakln cklsan klcn salknnklnlkcsa lnscakln cslkanlkc salknc klsan lkcn sakln cklsan k</h2>lcn salknnklnlkcsa lnscakln cslkanlkc salknc klsan lkcn sakln cklsan klcn salknnklnlkcsa lnscakln cslkanlkc salknc klsan lkcn sakln cklsan klcn</h3> salknnklnlkcsa lnscakln cslkanlkc salknc klsan lkcn sakln cklsan klcn salknnklnlkcsa lnscakln cslkanlkc salknc klsan lkcn sakln cklsan klcn salknnklnlkcsa lnscakln cslkanlkc salknc klsan lkcn sakln cklsan klcn salknnklnlkcsa lnscakln cslkanlkc salknc klsan lkcn sakln cklsan klcn salknnklnlkcsa lnscakln cslkanlkc salknc klsan lkcn sakln cklsan klcn salknnklnlkcsa lnscakln cslkanlkc salknc klsan lkcn sakln cklsan klcn salknnklnlkcsa lnscakln cslkanlkc salknc klsan lkcn sakln cklsan klcn salknnklnlkcsa lnscakln cslkanlkc salknc klsan lkcn sakln cklsan klcn salknnklnlkcsa lnscakln cslkanlkc salknc klsan lkcn sakln cklsan klcn salknnklnlkcsa lnscakln cslkanlkc salknc klsan lkcn sakln cklsan klcn salknnklnlkcsa lnscakln cslkanlkc salknc klsan lkcn sakln cklsan klcn salknnklnlkcsa lnscakln cslkanlkc salknc klsan lkcn sakln cklsan klcn salknnklnlkcsa lnscakln cslkanlkc salknc klsan lkcn sakln cklsan klcn salkn', '../../api/img/Economia.jpg', '2023-07-07', 1, 2, 2, NULL, NULL),
(1657, 'scksna c slkalkclsa lkcnskla clsna', 'nkclsba l cls alclks ak clksnac slkanclk salknclksa ncknslaknlcsa ckn', 'kcnsklanklcnsklña clnsaklncklsa lkcnskal lcknsalkkcnsklanklcnsklña clnsaklncklsa lkcnskal lcknsalk<h2>kcnsklanklcnsklña</h2> clnsaklncklsa lkcnskal lcknsalkkcnsklanklcnsklña clnsaklncklsa lkcnskal lcknsalkkcnsklanklcnsklña clnsaklncklsa lkcnskal lcknsalkkcnsklanklcnsklña clnsaklncklsa lkcnskal lcknsalkkcnsklanklcnsklña clnsaklncklsa lkcnskal lcknsalkkcnsklanklcnsklña clnsaklncklsa lkcnskal lcknsalkkcnsklanklcnsklña clnsaklncklsa lkcnskal lcknsa<h5>lkkcnsklanklcnsklña clnsakl</h5>ncklsa lkcnskal lcknsalkkcnsklanklcnsklña clnsaklncklsa lkcnskal lcknsalkkcnsklanklcnsklña clnsaklncklsa lkcnskal lcknsalkkcnsklanklcnsklña clnsaklncklsa lkcnskal lcknsalkkcnskla<h3>nklcnsklña clnsaklncklsa lk</h3>cnskal lcknsalkkcnsklanklcnsklña clnsaklncklsa lkcnskal lcknsalkkcnsklanklcnsklña clnsaklncklsa lkcnskal lcknsalkkcnsklanklcnsklña clnsaklncklsa lkcnskal lcknsalkkcnsklanklcnsklña clnsaklncklsa lkcnskal lcknsalkkcnsklanklcnsklña clnsaklncklsa lkcnskal lcknsalkkcnsklanklcnsklña clnsaklncklsa lkcnskal lcknsalkkcnsklanklcnsklña clnsaklncklsa lkcnskal lcknsalkkcnsklanklcnsklña clnsaklncklsa lkcnskal lcknsalkkcnsklanklcnsklña clnsaklncklsa lkcnskal lcknsalkkcnsklanklcnsklña clnsaklncklsa lkcnskal lcknsalkkcnsklanklcnsklña clnsaklncklsa lkcnskal lcknsalkkcnsklanklcnsklña clnsaklncklsa lkcnskal lcknsalkkcnsklanklcnsklña clnsaklncklsa lkcnskal lcknsalkkcnsklanklcnsklña clnsaklncklsa lkcnskal lcknsalkkcnsklanklcnsklña clnsaklncklsa lkcnskal lcknsalkkcnsklanklcnsklña clnsaklncklsa lkcnskal lcknsalkkcnsklanklcnsklña clnsaklncklsa lkcnskal lcknsalkkcnsklanklcnsklña clnsaklncklsa lkcnskal lcknsalkkcnsklanklcnsklña clnsaklncklsa lkcnskal lcknsalkkcnsklanklcnsklña clnsaklncklsa lkcnskal lcknsalkkcnsklanklcnsklña clnsaklncklsa lkcnskal lcknsalk', '../../api/img/futbol.webp', '2023-07-11', 1, 2, 3, 2, NULL),
(1658, 'jsca ncs alkncskla cl nsalk clksan lkcnsa', 'ncsaklsac lcslknalc salknclksa lcknsalk clsaknclkanslcsknalkcnsal', 'ncsaklsac lcslknalc salknclksa lcknsalk clsaknclkanslcsknalkcnsalncsaklsac lcslknalc salknclksa lcknsalk clsaknclkanslcsknalkcnsalncsaklsac lcslknalc salknclksa lcknsalk clsaknclkanslcsknalkcnsalncsaklsac lcslknalc salknclksa lcknsalk clsaknclkanslcsknalkcnsalncsaklsac lcslknalc salknclksa lcknsalk clsaknclkanslcsknalkcnsalncsaklsac lcslknalc salknclksa lcknsalk clsaknclkanslcsknalkcnsalncsaklsac lcslknalc salknclksa lcknsalk clsaknclkanslcsknalkcnsalncsaklsac lcslknalc salknclksa lcknsalk clsaknclkanslcsknalkcnsalncsaklsac lcslknalc salknclksa lcknsalk clsaknclkanslcsknalkcnsalncsaklsac lcslknalc salknclksa lcknsalk clsaknclkanslcsknalkcnsalncsaklsac lcslknalc salknclksa lcknsalk clsaknclkanslcsknalkcnsalncsaklsac lcslknalc salknclksa lcknsalk clsaknclkanslcsknalkcnsalncsaklsac lcslknalc salknclksa lcknsalk clsaknclkanslcsknalkcnsalncsaklsac lcslknalc salknclksa lcknsalk clsaknclkanslcsknalkcnsalncsaklsac lcslknalc salknclksa lcknsalk clsaknclkanslcsknalkcnsalncsaklsac lcslknalc salknclksa lcknsalk clsaknclkanslcsknalkcnsalncsaklsac lcslknalc salknclksa lcknsalk clsaknclkanslcsknalkcnsalncsaklsac lcslknalc salknclksa lcknsalk clsaknclkanslcsknalkcnsalncsaklsac lcslknalc salknclksa lcknsalk clsaknclkanslcsknalkcnsalncsaklsac lcslknalc salknclksa lcknsalk clsaknclkanslcsknalkcnsalncsaklsac lcslknalc salknclksa lcknsalk clsaknclkanslcsknalkcnsalncsaklsac lcslknalc salknclksa lcknsalk clsaknclkanslcsknalkcnsalncsaklsac lcslknalc salknclksa lcknsalk clsaknclkanslcsknalkcnsalncsaklsac lcslknalc salknclksa lcknsalk clsaknclkanslcsknalkcnsalncsaklsac lcslknalc salknclksa lcknsalk clsaknclkanslcsknalkcnsalncsaklsac lcslknalc salknclksa lcknsalk clsaknclkanslcsknalkcnsal', '../../api/img/home-studio.webp', '2023-07-11', 1, 2, 3, 3, NULL),
(1661, 'kclnsla lkcnslakc lksnalkncslal cknsalclskan l', 'kclnsla lkcnslakc lksnalkncslal cknsalclskan lkclnsla lkcnslakc lksnalkncslal cknsalclskan l', 'kclnsla lkcnslakc lksnalkncslal cknsalclskan lkclnsla lkcnslakc lksnalkncslal cknsalclskan lkclnsla lkcnslakc lksnalkncslal cknsalclskan lkclnsla lkcnslakc lksnalkncslal cknsalclskan lkclnsla lkcnslakc lksnalkncslal cknsalclskan lkclnsla lkcnslakc lksnalkncslal cknsalclskan lkclnsla lkcnslakc lksnalkncslal cknsalclskan lkclnsla lkcnslakc lksnalkncslal cknsalclskan lkclnsla lkcnslakc lksnalkncslal cknsalclskan lkclnsla lkcnslakc lksnalkncslal cknsalclskan lkclnsla lkcnslakc lksnalkncslal cknsalclskan lkclnsla lkcnslakc lksnalkncslal cknsalclskan lkclnsla lkcnslakc lksnalkncslal cknsalclskan lkclnsla lkcnslakc lksnalkncslal cknsalclskan lkclnsla lkcnslakc lksnalkncslal cknsalclskan lkclnsla lkcnslakc lksnalkncslal cknsalclskan lkclnsla lkcnslakc lksnalkncslal cknsalclskan lkclnsla lkcnslakc lksnalkncslal cknsalclskan lkclnsla lkcnslakc lksnalkncslal cknsalclskan lkclnsla lkcnslakc lksnalkncslal cknsalclskan lkclnsla lkcnslakc lksnalkncslal cknsalclskan lkclnsla lkcnslakc lksnalkncslal cknsalclskan lkclnsla lkcnslakc lksnalkncslal cknsalclskan lkclnsla lkcnslakc lksnalkncslal cknsalclskan lkclnsla lkcnslakc lksnalkncslal cknsalclskan lkclnsla lkcnslakc lksnalkncslal cknsalclskan lkclnsla lkcnslakc lksnalkncslal cknsalclskan lkclnsla lkcnslakc lksnalkncslal cknsalclskan lkclnsla lkcnslakc lksnalkncslal cknsalclskan lkclnsla lkcnslakc lksnalkncslal cknsalclskan lkclnsla lkcnslakc lksnalkncslal cknsalclskan l', '../../api/img/rally_b.jpg', '2023-07-11', 1, 2, 3, 2, NULL),
(1662, 'ncjksa ckosnak cksnaklcslka lkcslka ', 'ncjksa ckosnak cksnaklcslka lkcslka lcksmalkc lsancjksa ckosnak cksnaklcslka lkcslka lcksmalkc lsa', 'ncjksa<h2> ckosnak cksnaklcslka lkcslka lck</h2>smalkc lsancjksa ckosnak cksnaklcslka lkcslka lcksmalkc lsancjksa ckosnak cksnaklcslka lkcslka lcksmalkc lsancjksa ckosnak cksnaklcslka lkcslka lcksmalkc lsancjksa ckosnak cksnaklcslka lkcslka lcksmalkc lsancjksa ckosnak cksnaklcslka lkcslka lcksmalkc lsancjksa ckosnak cksnaklcslka lkcslka lcksmalkc lsancjksa ckosnak cksnaklcslka lkcslka lcksmalkc lsancjksa ckosnak cksnaklcslka lkcslka lcksmalkc lsancjksa ckosnak cksnaklcslka lkcslka lcksmalkc lsancjksa ckosnak cksnaklcslka lkcslka lcksmalkc lsancjksa ckosnak cksnaklcslka <h2>lkcslka lcksmalkc lsancjksa ckosnak cksnaklcslka lkcslka lcksmalkc lsancjksa ckosnak cksnaklcslka lkcslka lcksmalkc lsancjksa ckosnak cksnaklcslka lkcslka lcksmalkc lsancjksa ckosnak cksnaklcslka lkcslka lcksmalkc lsancjksa ckosnak cksnaklcslka lkcslka lcksmalkc lsancjksa ckosnak cksnaklcslka lkcslka lck</h2>smalkc lsancjksa ckosnak cksnaklcslka lkcslka lcksmalkc lsancjksa ckosnak cksnaklcslka lkcslka lcksmalkc lsancjksa ckosnak cksnaklcslka lkcslka lcksmalkc lsancjksa ckosnak cksnaklcslka lkcslka lcksmalkc lsancjksa ckosnak cksnaklcslka lkcslka lcksmalkc lsancjksa ckosnak cksnaklcslka lkcslka lcksmalkc lsancjksa ckosnak cksnaklcslka lkcslka lcksmalkc lsancjksa ckosnak cksnaklcslka lkcslka lcksmalkc lsancjksa ckosnak cksnaklcslka lkcslka lcksmalkc lsancjksa ckosnak cksnaklcslka lkcslka lcksmalkc lsancjksa ckosnak cksnaklcslka lkcslka lcksmalkc lsancjksa ckosnak cksnaklcslka lkcslka lcksmalkc lsa', '../../api/img/191222_Rossel_b67ff_frz_1045x588.jpg', '2023-07-11', 1, 2, 3, 2, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `posicion`
--

CREATE TABLE `posicion` (
  `id_posicion` int(2) NOT NULL,
  `posicion` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `posicion`
--

INSERT INTO `posicion` (`id_posicion`, `posicion`) VALUES
(1, 'en portada'),
(2, 'principales'),
(3, 'nota principal'),
(4, 'en sección');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `seccion`
--

CREATE TABLE `seccion` (
  `id_seccion` int(11) NOT NULL,
  `seccion` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `seccion`
--

INSERT INTO `seccion` (`id_seccion`, `seccion`) VALUES
(1, 'Principales'),
(2, 'Deportes'),
(3, 'Tecnología'),
(4, 'Cultura'),
(5, 'Espectáculo');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `administrador`
--
ALTER TABLE `administrador`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `estado`
--
ALTER TABLE `estado`
  ADD PRIMARY KEY (`id_estado`);

--
-- Indices de la tabla `mensajes`
--
ALTER TABLE `mensajes`
  ADD PRIMARY KEY (`id_mensaje`);

--
-- Indices de la tabla `noticias`
--
ALTER TABLE `noticias`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_seccion` (`id_seccion`),
  ADD KEY `id_redactor` (`id_redactor`),
  ADD KEY `id_relevancia` (`id_posicion`),
  ADD KEY `id_estado` (`id_estado`),
  ADD KEY `id_ubicacion` (`id_ubicacion`);

--
-- Indices de la tabla `posicion`
--
ALTER TABLE `posicion`
  ADD PRIMARY KEY (`id_posicion`);

--
-- Indices de la tabla `seccion`
--
ALTER TABLE `seccion`
  ADD PRIMARY KEY (`id_seccion`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `administrador`
--
ALTER TABLE `administrador`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `estado`
--
ALTER TABLE `estado`
  MODIFY `id_estado` int(2) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `mensajes`
--
ALTER TABLE `mensajes`
  MODIFY `id_mensaje` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=140;

--
-- AUTO_INCREMENT de la tabla `noticias`
--
ALTER TABLE `noticias`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1663;

--
-- AUTO_INCREMENT de la tabla `posicion`
--
ALTER TABLE `posicion`
  MODIFY `id_posicion` int(2) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `noticias`
--
ALTER TABLE `noticias`
  ADD CONSTRAINT `id_seccion` FOREIGN KEY (`id_seccion`) REFERENCES `seccion` (`id_seccion`),
  ADD CONSTRAINT `noticias_ibfk_1` FOREIGN KEY (`id_redactor`) REFERENCES `administrador` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `noticias_ibfk_2` FOREIGN KEY (`id_posicion`) REFERENCES `posicion` (`id_posicion`) ON UPDATE CASCADE,
  ADD CONSTRAINT `noticias_ibfk_3` FOREIGN KEY (`id_estado`) REFERENCES `estado` (`id_estado`) ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
