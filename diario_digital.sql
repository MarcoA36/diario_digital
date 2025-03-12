-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 12-03-2025 a las 06:42:34
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

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
(1651, 'Entrada del redactor', 'nskjacs klacklsan lkcnklsna kln salk cklsan cklsa lkcn salknc lksa nl', 'nskjacs klacklsan lkcnklsna kln salk cklsan cklsa lkcn salknc lksa nlnskjacs klacklsan lkcnklsna kln salk cklsan cklsa lkcn salknc lksa nlnskjacs klacklsan lkcnklsna kln salk ck<span style=\"font-weight: bold;\">lsan cklsa lkcn salknc lksa nlnskjacs klacklsan lkcnklsna kln salk cklsan cklsa lkcn salknc lksa nlnskjacs klacklsan lkcnklsna kln salk cklsan cklsa lkcn salknc lksa nlnskjacs klacklsan lkcnklsna kln salk cklsan cklsa lkcn salknc lksa nlnskjacs klacklsan lkcnklsna kln salk cklsan cklsa lkcn salknc lksa nlnskjacs klacklsan lkcnklsna kln salk cklsan cklsa lkcn salknc lksa nlnskjacs klacklsan lkcnklsna kln salk cklsan cklsa lkcn salknc lksa nlnskjacs klacklsan lkcnklsna kln salk cklsan cklsa lkcn salknc lksa nlnskjacs klacklsan lkcnklsna kln salk cklsan cklsa lkcn salknc lksa nlnskjacs klacklsan lkcnklsna kln salk cklsan cklsa lkcn salknc lksa nlnskjacs klacklsan lkcnklsna kln salk ckl</span>san cklsa lkcn salknc lksa nlnskjacs klacklsan lkcnklsna kln salk cklsan cklsa lkcn salknc lksa nlnskjacs klacklsan lkcnklsna kln salk cklsan cklsa lkcn salknc lksa nlnskjacs klacklsan lkcnklsna kln salk cklsan cklsa lkcn salknc lksa nlnskjacs klacklsan lkcnklsna kln salk cklsan cklsa lkcn salknc lksa nlnskjacs klacklsan lkcnklsna kln salk cklsan cklsa lkcn salknc lksa nl\r\nnskjacs klacklsan lkcnklsna kln salk cklsan cklsa lkcn salknc lksa nlnskjacs klacklsan lkcnklsna kln salk cklsan cklsa lkcn salknc lksa nlnskjacs klacklsan lkcnklsna kln salk cklsan cklsa lkcn salknc lksa nlnskjacs klacklsan lkcnklsna kln salk cklsan cklsa lkcn salknc lksa nlnskjacs klacklsan lkcnklsna kln salk cklsan cklsa lkcn salknc lksa nlnskjacs klacklsan lkcnklsna kln salk cklsan cklsa lkcn salknc lksa nlnsk\r\n<br><h3>jacs klacklsan lkcnklsna kln salk cklsan cklsa lkcn salknc lksa nlnskjacs klacklsan lkcnklsna kln salk cklsan cklsa lkcn salknc lksa nlnskjacs klacklsan lkcnklsna kln salk cklsan cklsa lkc</h3><div><br></div>n salknc lksa nlnskjacs klacklsan lkcnklsna kln salk cklsan cklsa lkcn salknc lksa nlnskjacs klacklsan lkcnklsna kln salk cklsan cklsa lkcn salknc lksa nlnskjacs klacklsan lkcnklsna kln salk cklsan cklsa lkcn salknc lksa nlnskjacs klacklsan lkcnklsna kln salk cklsan cklsa lkcn salknc lksa nlnskjacs klacklsan lkcnklsna kln salk cklsan cklsa lkcn salknc lksa nlnskjacs klacklsan lkcnklsna kln salk cklsan cklsa lkcn salknc lksa nlnskjacs klacklsan lkcnklsna kln salk cklsan cklsa lkcn salknc lksa nl<br>', '../../api/img/191222_Rossel_b67ff_frz_1045x588.jpg', '2023-07-04', 1, 1, 1, NULL, NULL),
(1667, 'Axel Kicillof pidió que una parte del nuevo acuerdo con el FMI sea destinado a Bahía Blanca', 'El gobernador bonaerense dio una conferencia de prensa junto al intendente local y anunció medidas para la reconstrucción de la ciudad. Le solicitó ayuda a la Casa Rosada y le volvió a proponer una reunión a Javier Milei', '<span style=\"font-weight: 700; color: rgb(59, 59, 59); font-family: Roboto, sans-serif; font-size: 22px;\">Axel Kicillof</span><span style=\"color: rgb(59, 59, 59); font-family: Roboto, sans-serif; font-size: 22px;\">&nbsp;sorprendió esta tarde, en una conferencia de prensa junto al intendente de&nbsp;</span><a rel=\"noopener noreferrer\" href=\"https://www.infobae.com/politica/2025/03/11/cientos-de-militares-botes-y-bombas-de-desague-como-es-el-trabajo-de-las-fuerzas-armadas-en-bahia-blanca/\" target=\"_blank\" title=\"https://www.infobae.com/politica/2025/03/11/cientos-de-militares-botes-y-bombas-de-desague-como-es-el-trabajo-de-las-fuerzas-armadas-en-bahia-blanca/\" data-mrf-link=\"https://www.infobae.com/politica/2025/03/11/cientos-de-militares-botes-y-bombas-de-desague-como-es-el-trabajo-de-las-fuerzas-armadas-en-bahia-blanca/\" cmp-ltrk=\"Links inline\" cmp-ltrk-idx=\"0\" mrfobservableid=\"a51362e1-6440-4698-b2c7-71ece4159ee2\" style=\"font-style: italic; hyphens: auto; line-height: 1.6; overflow-wrap: break-word; font-family: Roboto, sans-serif; font-size: 22px;\"><span style=\"font-weight: 700;\">Bahía Blanca</span></a><span style=\"color: rgb(59, 59, 59); font-family: Roboto, sans-serif; font-size: 22px;\">,&nbsp;</span><span style=\"font-weight: 700; color: rgb(59, 59, 59); font-family: Roboto, sans-serif; font-size: 22px;\">Federico Susbielles</span><span style=\"color: rgb(59, 59, 59); font-family: Roboto, sans-serif; font-size: 22px;\">, al pedirle al gobierno nacional que una parte del nuevo acuerdo con el Fondo Monetario Internacional (FMI) -anunciado por la Casa Rosada este lunes- sea destinado para la reconstrucción de la ciudad del sur de la provincia de Buenos Aires.</span>\r\n<span style=\"font-weight: 700;\">“Se está hablando del crédito del FMI, espero que una porción del crédito no sea utilizado para la especulación, para la timba, que una porción se use para cuestiones como esta, para la reconstrucción de la ciudad de Bahía”</span>, afirmó el mandatario provincial, quien le volvió a solicitar una reunión a Javier Milei: “Le repito al presidente de la Nación que es importante poder reunirnos para hablar de estas cosas, vuelvo a solicitar en el lugar que sea una reunión”.\r\nKicillof comenzó su intervención enumerando las acciones que se llevaron adelante desde el viernes 7 de marzo, cuando se desató el trágico temporal y enfatizó: “Es el&nbsp;<span style=\"font-weight: 700;\">Estado presente</span>, todo lo que estamos poniendo a disposición de Bahía es Estado presente, y&nbsp;<span style=\"font-weight: 700;\">sin obra pública no hay solución</span>”, sostuvo.', '../../api/img/imagenparanoticia.png', '2025-03-12', 1, 2, 3, 3, NULL),
(1668, 'La CGT rompió la tregua con el Gobierno: impulsarán un plan de lucha y marcharán el 24 de marzo', 'La mesa chica cegetista, con la presencia de Hugo Moyano, decidió endurecerse contra Javier Milei. Hubo apoyo a los sindicatos que se movilicen este miércoles con los jubilados, el 20 se analizarán medidas de fuerza y luego se saldrá a la calle contra el golpe de 1976', '<span style=\"color: rgb(59, 59, 59); font-family: Roboto, sans-serif; font-size: 22px;\">Se rompió la tregua con el Gobierno: la mesa chica de la CGT, ampliada y con la presencia de dirigentes como Hugo Moyano, decidió esta tarde impulsar un&nbsp;</span><span style=\"font-weight: 700; color: rgb(59, 59, 59); font-family: Roboto, sans-serif; font-size: 22px;\">plan de lucha&nbsp;</span><span style=\"color: rgb(59, 59, 59); font-family: Roboto, sans-serif; font-size: 22px;\">por reclamos salariales y laborales, que incluirá</span><span style=\"font-weight: 700; color: rgb(59, 59, 59); font-family: Roboto, sans-serif; font-size: 22px;\">&nbsp;una movilización callejera para el 24 de marzo</span><span style=\"color: rgb(59, 59, 59); font-family: Roboto, sans-serif; font-size: 22px;\">&nbsp;en repudio del golpe militar de 1976.</span>\r\nLa decisión, que se tomó durante un encuentro realizado en la sede de UPCN, marca el final de la pasividad cegetista y abre&nbsp;<span style=\"font-weight: 700;\">otra etapa</span>&nbsp;de su relación con la administración libertaria: hubo fuertes críticas contra el gobierno de Javier Milei y se habló del&nbsp;<span style=\"font-weight: 700;\">“momento de debilidad”</span>&nbsp;del Presidente.\r\nComo primera expresión concreta del malestar de la CGT, se resolvió darle un&nbsp;<span style=\"font-weight: 700;\">apoyo institucional&nbsp;</span>a los sindicatos que este miércoles se sumen a<span style=\"font-weight: 700;\">&nbsp;la marcha de los jubilados</span>&nbsp;ante el Congreso, que,&nbsp;<a rel=\"noopener noreferrer\" href=\"https://www.infobae.com/politica/2025/03/10/alerta-para-el-gobierno-se-reactiva-la-cgt-y-gremios-del-transporte-marcharan-con-los-jubilados/\" target=\"_blank\" data-mrf-link=\"https://www.infobae.com/politica/2025/03/10/alerta-para-el-gobierno-se-reactiva-la-cgt-y-gremios-del-transporte-marcharan-con-los-jubilados/\" cmp-ltrk=\"Links inline\" cmp-ltrk-idx=\"0\" mrfobservableid=\"cc6f6b86-1799-433b-a25e-46676030b627\" style=\"font-style: italic; hyphens: auto; line-height: 1.6; overflow-wrap: break-word;\">como anticipó&nbsp;<span style=\"font-weight: 700;\">Infobae,</span></a>&nbsp;contará con la presencia de las&nbsp;<span style=\"font-weight: 700;\">dos confederaciones gremiales del transporte</span>&nbsp;(CATT y UGATT), que compiten en el mismo sector y que&nbsp;<span style=\"font-weight: 700;\">se unirán para esta movilización.</span>', '../../api/img/fotonoti2.png', '2025-03-12', 1, 2, 3, 1, NULL),
(1669, 'Las fotos de las primeras horas de la China Suárez y Mauro Icardi en Milán: recorridas, comida y moda', 'La pareja viajó a Italia para presentarse en la audiencia por el divorcio con Wanda Nara. Sus primeras imágenes por la capital de la moda', '<a rel=\"noopener noreferrer\" href=\"https://www.infobae.com/tag/mauro-icardi/\" target=\"_blank\" title=\"https://www.infobae.com/tag/mauro-icardi/\" data-mrf-link=\"https://www.infobae.com/tag/mauro-icardi/\" cmp-ltrk=\"Links inline\" cmp-ltrk-idx=\"0\" mrfobservableid=\"01db420b-c638-4498-8fed-fc5ed294a34c\" style=\"font-style: italic; hyphens: auto; line-height: 1.6; overflow-wrap: break-word; font-family: Roboto, sans-serif; font-size: 22px;\"><span style=\"font-weight: 700;\">Mauro Icardi</span>&nbsp;</a><span style=\"color: rgb(59, 59, 59); font-family: Roboto, sans-serif; font-size: 22px;\">y la&nbsp;</span><a rel=\"noopener noreferrer\" href=\"https://www.infobae.com/tag/mauro-icardi/\" target=\"_blank\" title=\"https://www.infobae.com/tag/mauro-icardi/\" data-mrf-link=\"https://www.infobae.com/tag/mauro-icardi/\" cmp-ltrk=\"Links inline\" cmp-ltrk-idx=\"1\" mrfobservableid=\"e64a0242-ddfd-4728-9847-f67d314b28ef\" style=\"font-style: italic; hyphens: auto; line-height: 1.6; overflow-wrap: break-word; font-family: Roboto, sans-serif; font-size: 22px;\"><span style=\"font-weight: 700;\">China Suárez</span></a><span style=\"color: rgb(59, 59, 59); font-family: Roboto, sans-serif; font-size: 22px;\">&nbsp;viajaron a la ciudad de Milán con el objetivo de que el futbolista se presente en la audiencia por el divorcio con</span><span style=\"font-weight: 700; color: rgb(59, 59, 59); font-family: Roboto, sans-serif; font-size: 22px;\">&nbsp;Wanda Nara</span><span style=\"color: rgb(59, 59, 59); font-family: Roboto, sans-serif; font-size: 22px;\">, que se tramita allí por decisión de Mauro. La ciudad, que fue el hogar de la familia Icardi-Nara, se convirtió en el escenario perfecto para esta historia de amor,</span><a rel=\"noopener noreferrer\" href=\"https://www.infobae.com/tag/mauro-icardi/\" target=\"_blank\" title=\"https://www.infobae.com/tag/mauro-icardi/\" data-mrf-link=\"https://www.infobae.com/tag/mauro-icardi/\" cmp-ltrk=\"Links inline\" cmp-ltrk-idx=\"2\" mrfobservableid=\"c92a835e-cf69-45cb-8a2b-b7683bed2eaf\" style=\"font-style: italic; hyphens: auto; line-height: 1.6; overflow-wrap: break-word; font-family: Roboto, sans-serif; font-size: 22px;\">&nbsp;cabe recordar que es la segunda vez que viajan allí</a><span style=\"color: rgb(59, 59, 59); font-family: Roboto, sans-serif; font-size: 22px;\">.</span>', '../../api/img/nota3.png', '2025-03-12', 1, 2, 3, 1, NULL),
(1670, 'Guillermo Barros Schelotto se lleva a un histórico ladero de Gago para su experiencia en Vélez', 'El Mellizo integrará a su cuerpo técnico a Federico Insúa, quien se desempeñó como asistente del DT de Boca desde sus inicios en el banco hasta la gestión en Chivas de Guadalajara', '<span style=\"font-weight: 700; color: rgb(59, 59, 59); font-family: Roboto, sans-serif; font-size: 22px;\">Guillermo Barros Schelotto</span><span style=\"color: rgb(59, 59, 59); font-family: Roboto, sans-serif; font-size: 22px;\">&nbsp;volverá al fútbol argentino para asumir como director técnico de&nbsp;</span><span style=\"font-weight: 700; color: rgb(59, 59, 59); font-family: Roboto, sans-serif; font-size: 22px;\">Vélez Sarsfield</span><span style=\"color: rgb(59, 59, 59); font-family: Roboto, sans-serif; font-size: 22px;\">, tras la salida de&nbsp;</span><span style=\"font-weight: 700; color: rgb(59, 59, 59); font-family: Roboto, sans-serif; font-size: 22px;\">Sebastián Domínguez</span><span style=\"color: rgb(59, 59, 59); font-family: Roboto, sans-serif; font-size: 22px;\">. Si bien aún restan detalles para oficializar su llegada, y recién debutaría el 30 de marzo ante Deportivo Riestra, luego de la doble fecha de Eliminatorias en la que la selección argentina se probará ante Uruguay y Brasil, el entrenador ya tiene definido buena parte de su equipo de trabajo, en el que incluirá a uno de los históricos asistentes de&nbsp;</span><span style=\"font-weight: 700; color: rgb(59, 59, 59); font-family: Roboto, sans-serif; font-size: 22px;\">Fernando Gago</span><span style=\"color: rgb(59, 59, 59); font-family: Roboto, sans-serif; font-size: 22px;\">.</span>', '../../api/img/nota4.png', '2025-03-12', 2, 2, 3, 1, NULL),
(1671, 'El Gobierno reforzará la seguridad en el Congreso por la marcha de jubilados que tendrá el apoyo de barras', 'El ministerio que conduce Patricia Bullrich advirtió que será riguroso con quienes provoquen disturbios y adelantó que les aplicará derecho de admisión para espectáculos deportivos a quienes protagonicen hechos de violencia', '<span style=\"color: rgb(59, 59, 59); font-family: Roboto, sans-serif; font-size: 22px;\">A horas de una nueva&nbsp;</span><span style=\"font-weight: 700; color: rgb(59, 59, 59); font-family: Roboto, sans-serif; font-size: 22px;\">marcha de jubilados</span><span style=\"color: rgb(59, 59, 59); font-family: Roboto, sans-serif; font-size: 22px;\">&nbsp;en el Congreso de la Nación, el ministerio de Seguridad advirtió que reforzará la presencia de policías y fuerzas federales, y anticipó sanciones severas para quienes ocasionen disturbios. Si bien este tipo de movilizaciones son habituales los días miércoles, la advertencia de la cartera que conduce la ministra&nbsp;</span><span style=\"font-weight: 700; color: rgb(59, 59, 59); font-family: Roboto, sans-serif; font-size: 22px;\">Patricia Bullrich</span><span style=\"color: rgb(59, 59, 59); font-family: Roboto, sans-serif; font-size: 22px;\">&nbsp;está relacionada con la presencia de decenas de hinchadas de clubes del fútbol argentino, que expresaron su apoyo al reclamo y participarán mañana en una movilización que se anticipa numerosa y tensa.</span>', '../../api/img/nota5.png', '2025-03-12', 1, 2, 3, 1, NULL),
(1672, 'Una figura del trap que fue novio de Nicki Nicole anunció su retiro de la música: a qué se va a dedicar', 'Una figura del trap que fue novio de Nicki Nicole anunció su retiro de la música: a qué se va a dedicar', '<span style=\"color: rgb(59, 59, 59); font-family: Roboto, sans-serif; font-size: 22px;\">En las últimas horas,&nbsp;</span><a rel=\"noopener noreferrer\" href=\"https://www.infobae.com/tag/khea/\" target=\"_blank\" title=\"https://www.infobae.com/tag/khea/\" data-mrf-link=\"https://www.infobae.com/tag/khea/\" cmp-ltrk=\"Links inline\" cmp-ltrk-idx=\"0\" mrfobservableid=\"5872f823-ddd4-4cfa-9a55-b1c7cb66d5a1\" style=\"font-style: italic; hyphens: auto; line-height: 1.6; overflow-wrap: break-word; font-family: Roboto, sans-serif; font-size: 22px;\"><i><span style=\"font-weight: 700;\">Khea</span></i></a><span style=\"color: rgb(59, 59, 59); font-family: Roboto, sans-serif; font-size: 22px;\">, uno de los referentes más influyentes del&nbsp;</span><span style=\"font-weight: 700; color: rgb(59, 59, 59); font-family: Roboto, sans-serif; font-size: 22px;\">trap argentino</span><span style=\"color: rgb(59, 59, 59); font-family: Roboto, sans-serif; font-size: 22px;\">, sorprendió al&nbsp;</span><span style=\"font-weight: 700; color: rgb(59, 59, 59); font-family: Roboto, sans-serif; font-size: 22px;\">anunciar su retiro temporal de la música.</span><span style=\"color: rgb(59, 59, 59); font-family: Roboto, sans-serif; font-size: 22px;\">&nbsp;A través de un mensaje publicado en su cuenta de X (antes Twitter), el artista que en el pasado&nbsp;</span><a href=\"https://www.infobae.com/teleshow/2024/02/14/los-grandes-amores-de-nicki-nicole-romances-apasionados-anillo-de-compromiso-y-mucha-musica/\" target=\"_blank\" rel=\"noreferrer\" title=\"https://www.infobae.com/teleshow/2024/02/14/los-grandes-amores-de-nicki-nicole-romances-apasionados-anillo-de-compromiso-y-mucha-musica/\" data-mrf-link=\"https://www.infobae.com/teleshow/2024/02/14/los-grandes-amores-de-nicki-nicole-romances-apasionados-anillo-de-compromiso-y-mucha-musica/\" cmp-ltrk=\"Links inline\" cmp-ltrk-idx=\"1\" mrfobservableid=\"3976a2dd-63fc-404b-8a1c-79efdfac19a9\" style=\"font-style: italic; hyphens: auto; line-height: 1.6; overflow-wrap: break-word; font-family: Roboto, sans-serif; font-size: 22px;\"><i>tuvo un vínculo amoroso con&nbsp;</i><i><span style=\"font-weight: 700;\">Nicki Nicole</span></i></a><span style=\"color: rgb(59, 59, 59); font-family: Roboto, sans-serif; font-size: 22px;\">, explicó los motivos detrás de esta decisión. “Este año no voy a sacar música y tampoco voy a girar, la última gira va a ser España. (...) No le tengan miedo a los cambios lxs amo, espero que me entiendan. Nos vemos pronto”, escribió el músico.</span>', '../../api/img/nota6.png', '2025-03-12', 5, 2, 3, 2, NULL),
(1673, 'Cayó un dealer en Núñez: tenía más de un kilo de cocaína de máxima pureza', 'El sospechoso, de 51 años, fue detenido cuando circulaba en bicicleta. La Policía de la Ciudad allanó su departamento y, además de la droga, secuestró dinero y varios DNI, entre otras cosas', '<span style=\"color: rgb(59, 59, 59); font-family: Roboto, sans-serif; font-size: 22px;\">Un sospechoso de&nbsp;</span><span style=\"font-weight: 700; color: rgb(59, 59, 59); font-family: Roboto, sans-serif; font-size: 22px;\">51 años</span><span style=\"color: rgb(59, 59, 59); font-family: Roboto, sans-serif; font-size: 22px;\">&nbsp;fue detenido por la&nbsp;</span><span style=\"font-weight: 700; color: rgb(59, 59, 59); font-family: Roboto, sans-serif; font-size: 22px;\">Policía de la Ciudad</span><span style=\"color: rgb(59, 59, 59); font-family: Roboto, sans-serif; font-size: 22px;\">&nbsp;en el barrio porteño de&nbsp;</span><span style=\"font-weight: 700; color: rgb(59, 59, 59); font-family: Roboto, sans-serif; font-size: 22px;\">Núñez</span><span style=\"color: rgb(59, 59, 59); font-family: Roboto, sans-serif; font-size: 22px;\">, acusado de comercializar drogas.</span>\r\nSi bien el procedimiento se conoció en las últimas horas, todo comenzó el jueves pasado, cuando personal motorizado de la Comisaría Vecinal 13B detectó a un individuo que circulaba en bicicleta debajo de la avenida General Paz, a la altura del Puente Saavedra.\r\n<span style=\"text-align: center;\">Al notar la presencia policial, el sospechoso&nbsp;</span><span style=\"text-align: center; font-weight: 700;\">intentó cambiar de dirección y mostró signos de nerviosismo</span><span style=\"text-align: center;\">.</span>', '../../api/img/nota7.png', '2025-03-12', 1, 2, 3, 2, NULL),
(1674, 'Rigen desde hoy los aranceles de EEUU a las importaciones acero y aluminio: cuál será el impacto para la industria argentina', 'En el sector privado esperaban una prórroga y una negociación bilateral para que el país quede exceptuado, pero por ahora eso no ocurrió. Las consecuencias de la medida', '<span style=\"color: rgb(59, 59, 59); font-family: Roboto, sans-serif; font-size: 22px;\">Los deseos y pedidos del sector privado al Gobierno para que encare una negociación bilateral con los Estados Unidos, de forma tal de lograr que la Argentina quede exceptuada de los&nbsp;</span><span style=\"font-weight: 700; color: rgb(59, 59, 59); font-family: Roboto, sans-serif; font-size: 22px;\">aranceles del 25% impuestos por Donald Trump al ingreso de acero y aluminio,&nbsp;</span><span style=\"color: rgb(59, 59, 59); font-family: Roboto, sans-serif; font-size: 22px;\">no surtieron efecto. Hoy comenzó a regir la medida dispuesta por el presidente norteamericano para todos los países, que en el caso de Canadá, será del 50%, según se anunció este martes.&nbsp;</span><span style=\"font-weight: 700; color: rgb(59, 59, 59); font-family: Roboto, sans-serif; font-size: 22px;\">¿Cómo impactará esta aplicación de aranceles en las empresas argentinas</span><span style=\"color: rgb(59, 59, 59); font-family: Roboto, sans-serif; font-size: 22px;\">&nbsp;que le venden a ese mercado?</span>', '../../api/img/nota8.png', '2025-03-12', 1, 2, 3, 2, NULL),
(1675, 'Faltan pesos: el crédito crece más rápido que los depósitos y los bancos tienen poca liquidez para seguir prestando', 'Por ese motivo quieren que el BCRA reduzca los encajes, algo a lo que el Central se resiste. Los banqueros ven riesgos de que se frene el avance de los préstamos y de que empiecen a subir las tasas de interés. Por qué el Central no quiere cambios', '<span style=\"color: rgb(59, 59, 59); font-family: Roboto, sans-serif; font-size: 22px;\">En lo que va del año, los&nbsp;</span><span style=\"font-weight: 700; color: rgb(59, 59, 59); font-family: Roboto, sans-serif; font-size: 22px;\">préstamos en pesos</span><span style=\"color: rgb(59, 59, 59); font-family: Roboto, sans-serif; font-size: 22px;\">&nbsp;al sector privado crecieron un 11,5% mientras que los&nbsp;</span><span style=\"font-weight: 700; color: rgb(59, 59, 59); font-family: Roboto, sans-serif; font-size: 22px;\">depósitos</span><span style=\"color: rgb(59, 59, 59); font-family: Roboto, sans-serif; font-size: 22px;\">&nbsp;lo hicieron por 4,2%, menos de la mitad. En los bancos empiezan a resaltar que el crédito viene acelerando a una velocidad mucho mayor a la de los depósitos y, de a poco, empieza a escasear la materia prima, los pesos.</span>\r\nPara tener más liquidez, los bancos piden que el BCRA reduzca el exigente esquema de encajes, aquella porción de los fondos que reciben de sus clientes que están obligados a depositar (<i>encajar</i>) en el Banco Central como precaución. En medio de un riguroso plan anti-inflacionario, el BCRA no quiere tocar nada y su objetivo central es seguir quitando pesos de la economía.\r\nEn definitiva, faltan pesos. En los bancos advierten que si se sigue en este ritmo en el que los préstamos van más rápido que los depósitos con un nivel tan alto de encajes, hay dos riesgos inevitables:&nbsp;<span style=\"font-weight: 700;\">que se frene la rueda del crédit</span>o, vital para sostener la economía real, o bien&nbsp;<span style=\"font-weight: 700;\">que se tengan que subir las tasas</span>&nbsp;de interés. En este sentido, muchos pondrán el ojo en la licitación de deuda de hoy: en la licitación anterior, la secretaría de Finanzas debió elevar la tasa para lograr el resultado que deseaba.', '../../api/img/nota9.png', '2025-03-12', 1, 2, 3, 2, NULL);

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1676;

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
