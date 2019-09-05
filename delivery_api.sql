-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: 05-Set-2019 às 02:49
-- Versão do servidor: 10.1.38-MariaDB
-- versão do PHP: 7.3.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `delivery_api`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `adonis_schema`
--

CREATE TABLE `adonis_schema` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `batch` int(11) DEFAULT NULL,
  `migration_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `adonis_schema`
--

INSERT INTO `adonis_schema` (`id`, `name`, `batch`, `migration_time`) VALUES
(1, '10_product_image_schema', 1, '2019-09-02 23:04:31'),
(2, '1_uf_schema', 1, '2019-09-02 23:04:31'),
(3, '2_city_schema', 1, '2019-09-02 23:04:32'),
(4, '3_user_schema', 1, '2019-09-02 23:04:33'),
(5, '4_company_schema', 1, '2019-09-02 23:04:34'),
(6, '5_category_schema', 1, '2019-09-02 23:04:34'),
(7, '6_product_schema', 1, '2019-09-02 23:04:36'),
(8, '7_stock_schema', 1, '2019-09-02 23:04:37'),
(9, '8_user_product_schema', 1, '2019-09-02 23:04:40'),
(10, '9_token', 1, '2019-09-02 23:04:41');

-- --------------------------------------------------------

--
-- Estrutura da tabela `categories`
--

CREATE TABLE `categories` (
  `category_id` int(10) UNSIGNED NOT NULL,
  `category_name` varchar(254) NOT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `categories`
--

INSERT INTO `categories` (`category_id`, `category_name`, `created_at`, `updated_at`) VALUES
(1, 'ONGAI', '2019-09-02 20:09:11', '2019-09-02 20:09:11'),
(2, 'ASOLA', '2019-09-02 21:48:27', '2019-09-02 21:48:27'),
(3, 'GIPBO', '2019-09-02 21:48:43', '2019-09-02 21:48:43'),
(4, 'VACEJ', '2019-09-02 21:48:43', '2019-09-02 21:48:43'),
(5, 'KUBIS', '2019-09-02 21:48:43', '2019-09-02 21:48:43'),
(6, 'PEEBI', '2019-09-02 21:48:43', '2019-09-02 21:48:43'),
(7, 'ELIDU', '2019-09-02 21:48:43', '2019-09-02 21:48:43'),
(8, 'DUWAF', '2019-09-02 21:48:43', '2019-09-02 21:48:43'),
(9, 'UZOSA', '2019-09-02 21:48:43', '2019-09-02 21:48:43'),
(10, 'JEOJG', '2019-09-02 21:48:43', '2019-09-02 21:48:43'),
(11, 'UHEKU', '2019-09-02 21:48:43', '2019-09-02 21:48:43'),
(12, 'FECJI', '2019-09-02 21:48:43', '2019-09-02 21:48:43');

-- --------------------------------------------------------

--
-- Estrutura da tabela `cities`
--

CREATE TABLE `cities` (
  `city_id` int(10) UNSIGNED NOT NULL,
  `city_name` varchar(254) NOT NULL,
  `uf_id` int(10) UNSIGNED NOT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `cities`
--

INSERT INTO `cities` (`city_id`, `city_name`, `uf_id`, `created_at`, `updated_at`) VALUES
(1, 'ABEUH', 7, '2019-09-02 21:34:54', '2019-09-02 21:34:54'),
(2, 'AVDIZ', 6, '2019-09-02 21:34:54', '2019-09-02 21:34:54'),
(3, 'UHUKE', 5, '2019-09-02 21:34:54', '2019-09-02 21:34:54'),
(4, 'OFIWE', 7, '2019-09-02 21:34:54', '2019-09-02 21:34:54'),
(5, 'FABIR', 5, '2019-09-02 21:34:54', '2019-09-02 21:34:54'),
(6, 'EHOJE', 2, '2019-09-02 21:34:54', '2019-09-02 21:34:54'),
(7, 'BAOBW', 6, '2019-09-02 21:34:54', '2019-09-02 21:34:54'),
(8, 'JUCAD', 9, '2019-09-02 21:34:54', '2019-09-02 21:34:54'),
(9, 'JANAG', 7, '2019-09-02 21:34:54', '2019-09-02 21:34:54'),
(10, 'DISSO', 5, '2019-09-02 21:34:54', '2019-09-02 21:34:54');

-- --------------------------------------------------------

--
-- Estrutura da tabela `companies`
--

CREATE TABLE `companies` (
  `company_id` int(10) UNSIGNED NOT NULL,
  `company_fantasy_name` varchar(255) NOT NULL,
  `company_cnpj` varchar(255) NOT NULL,
  `company_phone` varchar(60) DEFAULT NULL,
  `company_street` varchar(254) NOT NULL,
  `company_number` varchar(60) DEFAULT NULL,
  `company_district` varchar(60) NOT NULL,
  `company_logo` varchar(254) DEFAULT NULL,
  `company_description` varchar(254) DEFAULT NULL,
  `company_url` varchar(254) DEFAULT NULL,
  `user_id` int(10) UNSIGNED NOT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `companies`
--

INSERT INTO `companies` (`company_id`, `company_fantasy_name`, `company_cnpj`, `company_phone`, `company_street`, `company_number`, `company_district`, `company_logo`, `company_description`, `company_url`, `user_id`, `created_at`, `updated_at`) VALUES
(1, 'JOCTI', 'MIADK', 'HONDE', 'JENET', 'HUKIW', 'ZADRO', '//www.gravatar.com/avatar/70c1d9d0e1f23c7d655ad1c1c72959cd.jpg', 'Acser midwu pulele makci idfutvi gawhu hocwove uz pizsajij neddintoc wu bodsa hozah daj.', 'julfu', 1, '2019-09-02 22:03:42', '2019-09-02 22:03:42'),
(2, 'UZOTK', 'TEMEH', 'BITUB', 'CUGIB', 'KEPDE', 'HADCA', '//www.gravatar.com/avatar/768c792e1231062c1a12ae0a0cc5b02e.jpg', 'Sic nuwic fenduwja zahup olatu up loszo zakerfek miniw norlo iviwar jizugij devegecev foga moicga.', 'zahak', 1, '2019-09-02 22:03:42', '2019-09-02 22:03:42'),
(3, 'KOWIP', 'IBABU', 'SOMIW', 'RAASE', 'DEIGU', 'WOGID', '//www.gravatar.com/avatar/67e0a19fbfffe3ed349e1da8e6b45dd3.jpg', 'Se wuwmuwa bekusow jasfuc pucawof wod so boci por otak kumej mubew mafod gowot wog tega iwkonuw.', 'wanfi', 1, '2019-09-02 22:03:42', '2019-09-02 22:03:42'),
(4, 'PUHRE', 'SERUH', 'ZUSEP', 'ZUZIS', 'NOCAT', 'AVISI', '//www.gravatar.com/avatar/855c933b2edf5d54fd16183df22deddd.jpg', 'Nernac ivuruzev keha po zezuzlin ze zobji fummet rabdi venloip tuftebjab biidoce wopuc.', 'gutco', 1, '2019-09-02 22:03:42', '2019-09-02 22:03:42'),
(5, 'TAHAE', 'SITLA', 'TUHBO', 'NUENI', 'NATJI', 'SENWE', '//www.gravatar.com/avatar/8f7c6ef8a2ead1fe65110ff57137e2a9.jpg', 'Riz copupju oju davuzci divlikwen fuwcoj novji pil koepco asu lamon wacwas pijfov zit.', 'bohev', 1, '2019-09-02 22:03:42', '2019-09-02 22:03:42'),
(6, 'DAGOZ', 'MUHLA', 'ZOUDE', 'DUTKI', 'JUCAK', 'VUKEM', '//www.gravatar.com/avatar/baf537826be64ed04a1561ddc45bb843.jpg', 'Zij vufim aci nuzine ujafo kekikzuz iw bo zebe balalo bis pedad delnof rilgiwal haninozap kof.', 'ratet', 1, '2019-09-02 22:03:42', '2019-09-02 22:03:42'),
(7, 'MAAGU', 'MOLIC', 'EBISA', 'CUWFO', 'UZHIL', 'IHTAF', '//www.gravatar.com/avatar/acaf2b28e286ff190b66247b5f61dd6c.jpg', 'Vihadpuw teibtek benomwo zatujuhe he ven keawvib nujujfab mubsejful ze ju kecof ek ozisoavi.', 'udiju', 1, '2019-09-02 22:03:42', '2019-09-02 22:03:42'),
(8, 'TADIS', 'NEELR', 'NABZU', 'GIWAD', 'FULBO', 'JEEHI', '//www.gravatar.com/avatar/6e6628fd1d0094279b41513ecb80a7db.jpg', 'Bawusot coj ijioz zeru avu duwug juupopi rinnimo rumij kup dafe uwi lutditvus vassoz inu.', 'soudo', 1, '2019-09-02 22:03:42', '2019-09-02 22:03:42'),
(9, 'MEKEP', 'SICZU', 'SUZAG', 'EDIFU', 'TUMWA', 'MESKO', '//www.gravatar.com/avatar/1482810be6065b01f861109197b0f659.jpg', 'Helmislu asbas okalugso woriv usa ba me du dulalso arvivtab wamtun balige tifi anaaw.', 'zabge', 1, '2019-09-02 22:03:42', '2019-09-02 22:03:42'),
(10, 'WAVAB', 'GAZBU', 'TIFEF', 'CIMES', 'VIZDU', 'HAKAT', '//www.gravatar.com/avatar/e51f9ff21d8739ce8b559fdb1f1a1880.jpg', 'Uheifiha kof ju edizubij zupicom celewi osazozu jew egili lizof nejo huto tiklo tivbi cocwah.', 'fisok', 1, '2019-09-02 22:03:42', '2019-09-02 22:03:42'),
(11, 'MIWIV', 'RAVAW', 'WIJEC', 'ATEMU', 'DUGOF', 'WAFAM', '//www.gravatar.com/avatar/ac427135af1de0af0f4afdd158f0cb46.jpg', 'Gulnifa dug ba um fadudoj feenomej iltu pabgiwpe lo luwzajup pak fudlanvuj.', 'jodcu', 1, '2019-09-02 22:03:42', '2019-09-02 22:03:42'),
(12, 'WIBUP', 'UMIRO', 'BULBO', 'HIDGO', 'SIELR', 'MUPDU', '//www.gravatar.com/avatar/5028e6bdb010bd23985c2cbcc5532e0c.jpg', 'De ne sugerlit iznarofu ce vukekob wajo emejek gurefi te rafidi jab leze we zuevav.', 'sitaf', 1, '2019-09-02 22:03:42', '2019-09-02 22:03:42'),
(13, 'MEZLA', 'UHIHH', 'VUODB', 'KAWOF', 'BILAK', 'NUFEK', '//www.gravatar.com/avatar/0eee38a4827e00861c5a20ba496988f3.jpg', 'Kulmoh nouce tifur kow ko mu todiwjur fafug anugo sise foelu owo belacew nuddo wuiji ubaigo tewnaas lic.', 'pousp', 1, '2019-09-02 22:03:42', '2019-09-02 22:03:42'),
(14, 'PIUCK', 'KUGUH', 'ORWAN', 'MIGUK', 'WAMWE', 'APUUW', '//www.gravatar.com/avatar/208bda38a6088d3d40e3a3ce17736fdb.jpg', 'Zihrusu lugakri tacdesi alu aherwis gepel pap ejrugkob zibvogiw eci let lafoic jop nadjuzume biwsiira bidiz owuba odeubonub.', 'ahihv', 1, '2019-09-02 22:03:42', '2019-09-02 22:03:42'),
(15, 'UTOOP', 'FOZIB', 'UTOSO', 'OPOTU', 'BUFIA', 'WUKOL', '//www.gravatar.com/avatar/256b97d5b5f951e05f49a322e0ae5328.jpg', 'Fizziivi nudpotam tos tebpukbor rerpaode ro fosig rusunen zibuszol houn wizli hiv vo ed zawzera ta wazez.', 'busau', 1, '2019-09-02 22:03:42', '2019-09-02 22:03:42'),
(16, 'MACAB', 'TEKBU', 'EHUNE', 'MODBU', 'BAIZZ', 'EMJUN', '//www.gravatar.com/avatar/2035dfa376a6e1bee7382b10565786c0.jpg', 'Ta gedo vuj ig tiwomed ekapi nirikmu we joid arama izo eciafi ode faibofip lim.', 'wazeh', 1, '2019-09-02 22:03:42', '2019-09-02 22:03:42'),
(17, 'DOCUL', 'COFAE', 'OKSAW', 'GAJHI', 'TOKAK', 'GUDPE', '//www.gravatar.com/avatar/8b9e2d4b11ee180a84432aef02ae089e.jpg', 'Rirarjiv huh opewe inegel beluri vaaz oje simdovoc lifiz go wuw zumuiz lekja epbihvot va fukvo.', 'tiove', 1, '2019-09-02 22:03:42', '2019-09-02 22:03:42'),
(18, 'ZUFSE', 'JITOK', 'PAGEW', 'ROZCE', 'DITOP', 'CETVU', '//www.gravatar.com/avatar/c859b1242b8d71b3b8f16c903338799e.jpg', 'Hibovate heb ti ri egari cikocu tekcacdi baski ho puc ofasese ceg ofubigej tal.', 'ijozb', 1, '2019-09-02 22:03:42', '2019-09-02 22:03:42'),
(19, 'VIZME', 'BAVZA', 'CUFNE', 'VECVU', 'ENDEE', 'ASAMA', '//www.gravatar.com/avatar/64db3ea06153237cf984f655b9e5e2cc.jpg', 'Salvobidi ut pa caevi wa nizikfa vu pev se jo rasacme la teim.', 'ivgib', 1, '2019-09-02 22:03:42', '2019-09-02 22:03:42'),
(20, 'PILPE', 'DOLAO', 'KEMRE', 'CIRMA', 'DOPME', 'CESAM', '//www.gravatar.com/avatar/f4578d0b6ab787172a4c757999b598c4.jpg', 'Linpuffi wuur ni do jeso uhovup isigilef vovkaje erdic jekju filfoomi razvejo lel.', 'rawnu', 1, '2019-09-02 22:03:42', '2019-09-02 22:03:42');

-- --------------------------------------------------------

--
-- Estrutura da tabela `products`
--

CREATE TABLE `products` (
  `product_id` int(10) UNSIGNED NOT NULL,
  `product_name` varchar(254) NOT NULL,
  `product_description` varchar(254) DEFAULT NULL,
  `product_image` varchar(254) DEFAULT NULL,
  `product_show` tinyint(1) NOT NULL DEFAULT '1',
  `company_id` int(10) UNSIGNED NOT NULL,
  `category_id` int(10) UNSIGNED NOT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `products`
--

INSERT INTO `products` (`product_id`, `product_name`, `product_description`, `product_image`, `product_show`, `company_id`, `category_id`, `created_at`, `updated_at`) VALUES
(1, 'EJHAP', 'FIJAL', '//www.gravatar.com/avatar/659e2f75f89293c865e0ea03cc426054.jpg', 1, 1, 1, '2019-09-02 21:38:18', '2019-09-02 21:38:18'),
(2, 'PAVOC', 'DOTCE', '//www.gravatar.com/avatar/866d40d8ab55b4f813dbaa3c281d6df0.jpg', 1, 1, 1, '2019-09-02 21:38:18', '2019-09-02 21:38:18'),
(3, 'GEWEJ', 'VAGTU', '//www.gravatar.com/avatar/367e5d9f5653d555ed849a91ce1d4231.jpg', 1, 1, 1, '2019-09-02 21:38:18', '2019-09-02 21:38:18'),
(4, 'MASIL', 'OWKOO', '//www.gravatar.com/avatar/dd7df54b0d025c38ffa7ac6102dace8d.jpg', 1, 1, 1, '2019-09-02 21:38:18', '2019-09-02 21:38:18'),
(5, 'HAPIW', 'FUGRE', '//www.gravatar.com/avatar/87007ad672ba464e1be1c3ddeeba93fe.jpg', 1, 1, 1, '2019-09-02 21:38:18', '2019-09-02 21:38:18'),
(6, 'NUHFA', 'AJCAS', '//www.gravatar.com/avatar/a15bb576c0d2ad9615601ddf9cf2bc62.jpg', 1, 1, 1, '2019-09-02 21:38:18', '2019-09-02 21:38:18'),
(7, 'CAWJA', 'WIMEM', '//www.gravatar.com/avatar/5393bb93213b3584691f4ce6bd6d1a0f.jpg', 1, 1, 1, '2019-09-02 21:38:18', '2019-09-02 21:38:18'),
(8, 'NEZEK', 'HEJAZ', '//www.gravatar.com/avatar/edc49561da4376381b731129c0cbebd0.jpg', 1, 1, 1, '2019-09-02 21:38:18', '2019-09-02 21:38:18'),
(9, 'ARKUS', 'BEHSA', '//www.gravatar.com/avatar/bb5b41d229d1d8f84f33d732e49efda8.jpg', 1, 1, 1, '2019-09-02 21:38:18', '2019-09-02 21:38:18'),
(10, 'USAWA', 'WOLVI', '//www.gravatar.com/avatar/1704c04fa016296650f949351283293b.jpg', 1, 1, 1, '2019-09-02 21:38:18', '2019-09-02 21:38:18'),
(11, 'UHIVA', 'VISVO', '//www.gravatar.com/avatar/04978e2cd9e9f0433dc8544faadea1d2.jpg', 1, 56, 1, '2019-09-02 21:48:13', '2019-09-02 21:48:13'),
(12, 'EVFAT', 'JOSHI', '//www.gravatar.com/avatar/8766e19e5795ee1e7e2ca19079368320.jpg', 1, 1, 1, '2019-09-02 21:48:13', '2019-09-02 21:48:13'),
(13, 'UGAJI', 'NESME', '//www.gravatar.com/avatar/1f45a694ac3b97b65602350d431db71b.jpg', 1, 103, 1, '2019-09-02 21:48:13', '2019-09-02 21:48:13'),
(14, 'MASBO', 'IFREZ', '//www.gravatar.com/avatar/0e9dbc94a942e977081d86bc42fd4482.jpg', 1, 188, 1, '2019-09-02 21:48:13', '2019-09-02 21:48:13'),
(15, 'KEJOK', 'IBONE', '//www.gravatar.com/avatar/3f0823a1da00545f1b650aab1776000e.jpg', 1, 111, 1, '2019-09-02 21:48:13', '2019-09-02 21:48:13'),
(16, 'NEGGU', 'KEBAZ', '//www.gravatar.com/avatar/8650d2aca9c539022ce90ff7826a4b84.jpg', 1, 88, 1, '2019-09-02 21:48:13', '2019-09-02 21:48:13'),
(17, 'DOMUM', 'DAGUG', '//www.gravatar.com/avatar/523cac3aeb637462ac7fc4d9385182a2.jpg', 1, 46, 1, '2019-09-02 21:48:13', '2019-09-02 21:48:13'),
(18, 'KUROW', 'REFOE', '//www.gravatar.com/avatar/d10899f58d8b9466064f9c576f444640.jpg', 1, 122, 1, '2019-09-02 21:48:13', '2019-09-02 21:48:13'),
(19, 'NOGAF', 'CIMOU', '//www.gravatar.com/avatar/3a3cb7aa2e2b4f15b3f22168fbb2f59b.jpg', 1, 197, 1, '2019-09-02 21:48:13', '2019-09-02 21:48:13'),
(20, 'VAMGA', 'GETES', '//www.gravatar.com/avatar/11c022514c16ff432d6a46d3d307bae3.jpg', 1, 42, 1, '2019-09-02 21:48:13', '2019-09-02 21:48:13'),
(21, 'PAHIW', 'ERJOO', '//www.gravatar.com/avatar/785c1bd6de3d90fac398a2cf113e3917.jpg', 1, 71, 1, '2019-09-02 21:48:27', '2019-09-02 21:48:27'),
(22, 'LOTET', 'CICEP', '//www.gravatar.com/avatar/a5e92cebe01feca7f13f8d18213db421.jpg', 1, 141, 1, '2019-09-02 21:48:27', '2019-09-02 21:48:27'),
(23, 'PICEP', 'DUZUF', '//www.gravatar.com/avatar/31fb41b5197cfce0255d2ee8dfa53e10.jpg', 1, 16, 1, '2019-09-02 21:48:27', '2019-09-02 21:48:27'),
(24, 'NUGAF', 'BUTEZ', '//www.gravatar.com/avatar/4a9092e98e0c042fd57d5a239a2242e1.jpg', 1, 198, 1, '2019-09-02 21:48:27', '2019-09-02 21:48:27'),
(25, 'LUDOC', 'SAMEB', '//www.gravatar.com/avatar/bb9eb8475adbf57e41d2dbf0197fce2c.jpg', 1, 140, 1, '2019-09-02 21:48:27', '2019-09-02 21:48:27'),
(26, 'JARUV', 'GETHO', '//www.gravatar.com/avatar/3d8612826da77ab09ca8aac35f403710.jpg', 1, 56, 1, '2019-09-02 21:48:27', '2019-09-02 21:48:27'),
(27, 'DOBWO', 'UVUIL', '//www.gravatar.com/avatar/e5dbccbdfefb2bdd8fb4ef6e0f28c3ab.jpg', 1, 88, 1, '2019-09-02 21:48:27', '2019-09-02 21:48:27'),
(28, 'MITUM', 'SINIV', '//www.gravatar.com/avatar/6af00d24ec148ba03663dcc593c56fcc.jpg', 1, 96, 1, '2019-09-02 21:48:27', '2019-09-02 21:48:27'),
(29, 'JIHOD', 'UVSIC', '//www.gravatar.com/avatar/287c0bc5d8813b9d3fa56e5b94212be4.jpg', 1, 26, 1, '2019-09-02 21:48:27', '2019-09-02 21:48:27'),
(30, 'BEPEC', 'HIZUN', '//www.gravatar.com/avatar/0b31ced2467543d118f05c235f7c2285.jpg', 1, 52, 1, '2019-09-02 21:48:27', '2019-09-02 21:48:27'),
(31, 'AMWIV', 'MEIJV', '//www.gravatar.com/avatar/314dc5cef963013b843a1af48d111e86.jpg', 1, 140, 1, '2019-09-02 21:51:53', '2019-09-02 21:51:53'),
(32, 'RUPIS', 'KOZEP', '//www.gravatar.com/avatar/bde61a4c7d949d7a218928777c01bb18.jpg', 1, 45, 1, '2019-09-02 21:51:53', '2019-09-02 21:51:53'),
(33, 'IWUOM', 'VADEC', '//www.gravatar.com/avatar/5018c07ff7c33d2be1fb09552e5d6400.jpg', 1, 120, 1, '2019-09-02 21:51:53', '2019-09-02 21:51:53'),
(34, 'TETTI', 'BEFTU', '//www.gravatar.com/avatar/8f091af035f60e03df9bf190d395166f.jpg', 1, 143, 1, '2019-09-02 21:51:53', '2019-09-02 21:51:53'),
(35, 'SORGU', 'GOSWI', '//www.gravatar.com/avatar/31a259f2c9909a07542f9a99408691a8.jpg', 1, 19, 1, '2019-09-02 21:51:53', '2019-09-02 21:51:53'),
(36, 'LAOKA', 'APSOL', '//www.gravatar.com/avatar/95cdc3e87292b5bf946e1e9b091ea50e.jpg', 1, 4, 1, '2019-09-02 21:51:53', '2019-09-02 21:51:53'),
(37, 'WEBPI', 'HICTE', '//www.gravatar.com/avatar/5606a09b083fb3387f58888893510e7a.jpg', 1, 173, 1, '2019-09-02 21:51:53', '2019-09-02 21:51:53'),
(38, 'POAGJ', 'FOFOZ', '//www.gravatar.com/avatar/f24443b42ddc3eaef4f21dedca1cef10.jpg', 1, 76, 1, '2019-09-02 21:51:53', '2019-09-02 21:51:53'),
(39, 'NIOGS', 'AFEPZ', '//www.gravatar.com/avatar/0394312e2b225369b4679ec3e635b0d5.jpg', 1, 60, 1, '2019-09-02 21:51:53', '2019-09-02 21:51:53'),
(40, 'MOSKU', 'SELUP', '//www.gravatar.com/avatar/21305bf911bd01262ce438e7661ff245.jpg', 1, 71, 1, '2019-09-02 21:51:53', '2019-09-02 21:51:53'),
(41, 'HINAL', 'HAZLU', '//www.gravatar.com/avatar/f4b5079ed943d8837b634e7445951665.jpg', 1, 3, 4, '2019-09-02 21:52:23', '2019-09-02 21:52:23'),
(42, 'BUHAC', 'EMOGO', '//www.gravatar.com/avatar/f9659a291edc561ab155bacaa35e32a8.jpg', 1, 1, 9, '2019-09-02 21:52:23', '2019-09-02 21:52:23'),
(43, 'CIBFA', 'GUNIV', '//www.gravatar.com/avatar/cb9528b5ae92a339fd965ec0a7cda12d.jpg', 1, 1, 3, '2019-09-02 21:52:23', '2019-09-02 21:52:23'),
(44, 'NUHEJ', 'BEGKI', '//www.gravatar.com/avatar/3e7aa2891b981ebaf4fa0ea338153b5b.jpg', 1, 2, 4, '2019-09-02 21:52:23', '2019-09-02 21:52:23'),
(45, 'FORFI', 'GIFEM', '//www.gravatar.com/avatar/8a5878a2162b0393f44e440ccb6740da.jpg', 1, 9, 1, '2019-09-02 21:52:23', '2019-09-02 21:52:23'),
(46, 'HEOMF', 'CIULE', '//www.gravatar.com/avatar/f0d00672ba29b37d9aaef6f4418a0b4c.jpg', 1, 6, 9, '2019-09-02 21:52:23', '2019-09-02 21:52:23'),
(47, 'WAADA', 'IBVIE', '//www.gravatar.com/avatar/1c30b1b72cc93538df226bc2ae91d075.jpg', 1, 3, 2, '2019-09-02 21:52:23', '2019-09-02 21:52:23'),
(48, 'SAGEV', 'CORTO', '//www.gravatar.com/avatar/5fe3cac350e9def5b8305a411c32dde4.jpg', 1, 8, 1, '2019-09-02 21:52:23', '2019-09-02 21:52:23'),
(49, 'RACUP', 'CAPHA', '//www.gravatar.com/avatar/ab1ac52cf734f61d0c294a7449b63729.jpg', 1, 2, 8, '2019-09-02 21:52:23', '2019-09-02 21:52:23'),
(50, 'FEHLU', 'ZAFEU', '//www.gravatar.com/avatar/64ba7d037c3b214ac2b55e7198b842d0.jpg', 1, 1, 4, '2019-09-02 21:52:23', '2019-09-02 21:52:23'),
(51, 'MEFIK', 'KITLE', '//www.gravatar.com/avatar/e3c131b977394bfe038eee03faeb5fdd.jpg', 1, 93, 8, '2019-09-02 21:53:25', '2019-09-02 21:53:25'),
(52, 'JAJUW', 'MIVUG', '//www.gravatar.com/avatar/9e1ae313d66ca3bd72b937fa8fd1d448.jpg', 1, 73, 3, '2019-09-02 21:53:25', '2019-09-02 21:53:25'),
(53, 'AFECA', 'BEMOR', '//www.gravatar.com/avatar/b59737fdd70bb8ec0f2c803459d6b70b.jpg', 1, 17, 11, '2019-09-02 21:53:25', '2019-09-02 21:53:25'),
(54, 'EMMEW', 'KEOBA', '//www.gravatar.com/avatar/3437feeb8bf029da4823e65f90dbc0ab.jpg', 1, 61, 12, '2019-09-02 21:53:25', '2019-09-02 21:53:25'),
(55, 'NAMIA', 'GIOCR', '//www.gravatar.com/avatar/4c3769559b501680ad8f6270bfe42a1c.jpg', 1, 78, 11, '2019-09-02 21:53:25', '2019-09-02 21:53:25'),
(56, 'VACUD', 'EDVAR', '//www.gravatar.com/avatar/461a8c61535875306f997d163aa7090a.jpg', 1, 42, 10, '2019-09-02 21:53:25', '2019-09-02 21:53:25'),
(57, 'FAVBU', 'GISCI', '//www.gravatar.com/avatar/848a0b6d3b009147ab737829c7a9dc83.jpg', 1, 1, 4, '2019-09-02 21:53:25', '2019-09-02 21:53:25'),
(58, 'DULAC', 'RITOF', '//www.gravatar.com/avatar/2435987b61f04ec9196931c864e180bd.jpg', 1, 72, 9, '2019-09-02 21:53:25', '2019-09-02 21:53:25'),
(59, 'JIMUG', 'CEGGU', '//www.gravatar.com/avatar/f59679041a334a8e06b6ac6d4c59ee2f.jpg', 1, 44, 10, '2019-09-02 21:53:25', '2019-09-02 21:53:25'),
(60, 'HENOT', 'MOAFO', '//www.gravatar.com/avatar/ef7a6d753bb4d650837474edebe965a7.jpg', 1, 29, 8, '2019-09-02 21:53:25', '2019-09-02 21:53:25'),
(61, 'LOLON', 'KIHEL', '//www.gravatar.com/avatar/3270435d0096b85ad9b729be377ce830.jpg', 1, 7, 4, '2019-09-02 21:53:57', '2019-09-02 21:53:57'),
(62, 'GEMGE', 'BEJIL', '//www.gravatar.com/avatar/d9f28dc85fed56fbc30ddfe45126060e.jpg', 1, 10, 10, '2019-09-02 21:53:57', '2019-09-02 21:53:57'),
(63, 'FULWO', 'IJOEG', '//www.gravatar.com/avatar/748805f59fd6d0b3edeb09e46b44fec9.jpg', 1, 3, 9, '2019-09-02 21:53:57', '2019-09-02 21:53:57'),
(64, 'DIZIM', 'VAMES', '//www.gravatar.com/avatar/93c44c44f0adede65ab57c9333be74e3.jpg', 1, 19, 11, '2019-09-02 21:53:57', '2019-09-02 21:53:57'),
(65, 'VUUCE', 'AMWEK', '//www.gravatar.com/avatar/79c4ee2121589256681a955854444155.jpg', 1, 17, 10, '2019-09-02 21:53:57', '2019-09-02 21:53:57'),
(66, 'JAJUO', 'ZILGE', '//www.gravatar.com/avatar/50242e36816d9c2d42fcd48cc58077f7.jpg', 1, 6, 12, '2019-09-02 21:53:57', '2019-09-02 21:53:57'),
(67, 'GANOC', 'IMTIT', '//www.gravatar.com/avatar/bad6294d0a355fe4b2b67c52088372a7.jpg', 1, 8, 7, '2019-09-02 21:53:57', '2019-09-02 21:53:57'),
(68, 'ZUZUN', 'PIVOG', '//www.gravatar.com/avatar/b137e18ab9ba545bf608ebf4d53a9643.jpg', 1, 16, 3, '2019-09-02 21:53:57', '2019-09-02 21:53:57'),
(69, 'LEITU', 'VIFAR', '//www.gravatar.com/avatar/1ad3c24a667504b2b18ce64f43329c4f.jpg', 1, 17, 1, '2019-09-02 21:53:57', '2019-09-02 21:53:57'),
(70, 'JOHEL', 'ETIZU', '//www.gravatar.com/avatar/83940928dc8fc2337886f394b434e4c7.jpg', 1, 15, 7, '2019-09-02 21:53:57', '2019-09-02 21:53:57'),
(71, 'WIJER', 'LIBAR', '//www.gravatar.com/avatar/2c724475ab559ac8c01a447a8351fbc6.jpg', 1, 16, 7, '2019-09-02 21:54:00', '2019-09-02 21:54:00'),
(72, 'KUBBE', 'VEFSI', '//www.gravatar.com/avatar/928718b47fe3e54e90a40017384f23d7.jpg', 1, 13, 12, '2019-09-02 21:54:00', '2019-09-02 21:54:00'),
(73, 'SUZKI', 'PISIR', '//www.gravatar.com/avatar/a39067e5b5a1724b0c4fe171b16b6841.jpg', 1, 20, 8, '2019-09-02 21:54:00', '2019-09-02 21:54:00'),
(74, 'FIVNI', 'GOFPI', '//www.gravatar.com/avatar/b2001873e5c22c204eafcd9aa8a03b4c.jpg', 1, 18, 1, '2019-09-02 21:54:00', '2019-09-02 21:54:00'),
(75, 'OZEDI', 'KIRAB', '//www.gravatar.com/avatar/dc0972150e210192d36de760e721fef0.jpg', 1, 11, 3, '2019-09-02 21:54:00', '2019-09-02 21:54:00'),
(76, 'JOBNE', 'LIVAP', '//www.gravatar.com/avatar/29e50f4fbd968dd4c14a5cdad741e10e.jpg', 1, 9, 6, '2019-09-02 21:54:00', '2019-09-02 21:54:00'),
(77, 'VUKEV', 'VOPEM', '//www.gravatar.com/avatar/fabe7b6d087503029777c3ea6f4036ff.jpg', 1, 10, 5, '2019-09-02 21:54:00', '2019-09-02 21:54:00'),
(78, 'PAKEW', 'GANGU', '//www.gravatar.com/avatar/036842eb99f34c6bc2e4f59f31d1bbcc.jpg', 1, 20, 2, '2019-09-02 21:54:00', '2019-09-02 21:54:00'),
(79, 'GOSWE', 'BECAV', '//www.gravatar.com/avatar/8c092c0dc4d133b43ad3f8a020164b86.jpg', 1, 4, 7, '2019-09-02 21:54:00', '2019-09-02 21:54:00'),
(80, 'RAWRO', 'WIBAM', '//www.gravatar.com/avatar/c6409b51f08e10ccb238ead67997735d.jpg', 1, 9, 7, '2019-09-02 21:54:00', '2019-09-02 21:54:00'),
(81, 'TUGUT', 'RUDKA', '//www.gravatar.com/avatar/d4e86ea2da790a11aa8f3a6049e31b0d.jpg', 1, 10, 7, '2019-09-02 21:54:02', '2019-09-02 21:54:02'),
(82, 'NUHEJ', 'GEGHU', '//www.gravatar.com/avatar/1b5c9c96460b8fe0efe890a05a037f0a.jpg', 1, 10, 9, '2019-09-02 21:54:02', '2019-09-02 21:54:02'),
(83, 'JUSEV', 'CIZEZ', '//www.gravatar.com/avatar/6aead522205e44928c2485368aa86b65.jpg', 1, 10, 8, '2019-09-02 21:54:02', '2019-09-02 21:54:02'),
(84, 'ZOHUS', 'IBLOJ', '//www.gravatar.com/avatar/d66745356854869908f154fd4037074d.jpg', 1, 9, 12, '2019-09-02 21:54:02', '2019-09-02 21:54:02'),
(85, 'ROCAV', 'EFGEB', '//www.gravatar.com/avatar/702d052bd7e899bd3eb5bfd1d8a6212a.jpg', 1, 5, 8, '2019-09-02 21:54:02', '2019-09-02 21:54:02'),
(86, 'ZITAH', 'JIBOE', '//www.gravatar.com/avatar/962da1720e5c01cc84afeef2bf0b96c4.jpg', 1, 14, 4, '2019-09-02 21:54:02', '2019-09-02 21:54:02'),
(87, 'ZUZKO', 'NAWWA', '//www.gravatar.com/avatar/577fcc0db5a34bc20f597fcb2e410986.jpg', 1, 4, 12, '2019-09-02 21:54:02', '2019-09-02 21:54:02'),
(88, 'JAGMO', 'IVUUK', '//www.gravatar.com/avatar/7a6cf5b16402955a802b05722a6fcd41.jpg', 1, 6, 4, '2019-09-02 21:54:02', '2019-09-02 21:54:02'),
(89, 'FOSOH', 'JEPUC', '//www.gravatar.com/avatar/9e7a4d38f76a2ce227b5b5c555f3d948.jpg', 1, 8, 3, '2019-09-02 21:54:02', '2019-09-02 21:54:02'),
(90, 'UDMAL', 'BEHAB', '//www.gravatar.com/avatar/d8af8055f7fabf80647ce570250af06d.jpg', 1, 14, 3, '2019-09-02 21:54:02', '2019-09-02 21:54:02'),
(91, 'OKCUL', 'VEROJ', '//www.gravatar.com/avatar/436a7a4724f3cea0f0a359ca952c8834.jpg', 1, 6, 3, '2019-09-02 21:59:10', '2019-09-02 21:59:10'),
(92, 'FEERU', 'ACACE', '//www.gravatar.com/avatar/3cf2004e92ade7c418c9fb572b487c4d.jpg', 1, 2, 10, '2019-09-02 21:59:10', '2019-09-02 21:59:10'),
(93, 'PISUV', 'SADUG', '//www.gravatar.com/avatar/830808aed68fbdb05c59cada57e04cf1.jpg', 1, 9, 7, '2019-09-02 21:59:10', '2019-09-02 21:59:10'),
(94, 'IRIPA', 'LOOVS', '//www.gravatar.com/avatar/2941033b4e249972c44aac5d2992406d.jpg', 1, 11, 4, '2019-09-02 21:59:10', '2019-09-02 21:59:10'),
(95, 'FEMKA', 'GUZEV', '//www.gravatar.com/avatar/dc5c75fc711e60f64e622765149a46ff.jpg', 1, 16, 6, '2019-09-02 21:59:10', '2019-09-02 21:59:10'),
(96, 'RUMAD', 'VALIH', '//www.gravatar.com/avatar/406686be5d852b709423b0d7732b89f0.jpg', 1, 14, 2, '2019-09-02 21:59:10', '2019-09-02 21:59:10'),
(97, 'METUZ', 'DUDCE', '//www.gravatar.com/avatar/5c2d220dc4058de874bc034284c3840c.jpg', 1, 12, 10, '2019-09-02 21:59:10', '2019-09-02 21:59:10'),
(98, 'OHJUM', 'EFUFU', '//www.gravatar.com/avatar/d17c0f202047246de2463d7ea929aede.jpg', 1, 11, 6, '2019-09-02 21:59:10', '2019-09-02 21:59:10'),
(99, 'PUITD', 'TEMLA', '//www.gravatar.com/avatar/cb305fe97f6514d0841efbcf2c7d22f7.jpg', 1, 1, 10, '2019-09-02 21:59:10', '2019-09-02 21:59:10'),
(100, 'VOKUT', 'VOIPA', '//www.gravatar.com/avatar/b8194907d8fed7ca356486c291b3147a.jpg', 1, 9, 6, '2019-09-02 21:59:10', '2019-09-02 21:59:10'),
(101, 'SUBOC', 'PAZIK', '//www.gravatar.com/avatar/7bd965c57328a94bf438b33260e7851f.jpg', 1, 1, 6, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(102, 'HEJIC', 'DEFOR', '//www.gravatar.com/avatar/5fa44b224b07e7c0d2aa978e9f4a3784.jpg', 1, 10, 12, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(103, 'JOPAW', 'FOJSA', '//www.gravatar.com/avatar/4e284d196d275b26df8602dde7f2c0c4.jpg', 1, 17, 12, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(104, 'KORHI', 'FUOTA', '//www.gravatar.com/avatar/58500ed140ef1f61515e6b5911071a27.jpg', 1, 7, 2, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(105, 'DOBSE', 'HUKSU', '//www.gravatar.com/avatar/d52ee9c6275e1536a155696a9fccd0ad.jpg', 1, 20, 8, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(106, 'DORCA', 'VUFJA', '//www.gravatar.com/avatar/0f85397fb254cbf2bb31fa9e7b510096.jpg', 1, 16, 6, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(107, 'JAVEB', 'HUOVG', '//www.gravatar.com/avatar/9e5d605fdf4736d1a33d8ded911c6e85.jpg', 1, 8, 11, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(108, 'URCAD', 'ROPAG', '//www.gravatar.com/avatar/0ce9c97a17d4976b94d3241613dd7843.jpg', 1, 16, 10, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(109, 'HUHUZ', 'KILOR', '//www.gravatar.com/avatar/6b4f2a85ef05d4ed2864bc5ed3a93a57.jpg', 1, 5, 5, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(110, 'FUUBK', 'GEWVO', '//www.gravatar.com/avatar/cf961d09068addf1a92d8073ca01b947.jpg', 1, 15, 1, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(111, 'EBKUL', 'LIDBO', '//www.gravatar.com/avatar/bd2c227b3f4b8a823b09342387636f20.jpg', 1, 5, 12, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(112, 'UGETA', 'ROIJU', '//www.gravatar.com/avatar/91b0c93325b875c9e633e4a5db0b1e1b.jpg', 1, 8, 7, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(113, 'GIVIH', 'NAGUG', '//www.gravatar.com/avatar/1c278ef3ae552580fc1b69c5a16e71ba.jpg', 1, 4, 5, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(114, 'TUFAZ', 'ZAKHA', '//www.gravatar.com/avatar/d8c847ee2f31d3c725ef1413899e8071.jpg', 1, 8, 7, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(115, 'IFCEO', 'HESEO', '//www.gravatar.com/avatar/7a61da21e10a5cebb79c73e401c28b28.jpg', 1, 13, 9, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(116, 'LECOT', 'ZAJAR', '//www.gravatar.com/avatar/75e9b11c875710a9cd7b1fb67daa750f.jpg', 1, 18, 12, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(117, 'NOCMU', 'WASGI', '//www.gravatar.com/avatar/c2d7655e77b725738dc3795df454e0ac.jpg', 1, 3, 3, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(118, 'VAPAN', 'OGWIB', '//www.gravatar.com/avatar/e9585f3be950872da24e20ad82f4fe9f.jpg', 1, 9, 5, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(119, 'ZIIZE', 'IWEMA', '//www.gravatar.com/avatar/692467904b37f25927ea6bca9516d706.jpg', 1, 16, 8, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(120, 'OREKA', 'FAZFU', '//www.gravatar.com/avatar/a820e23a01ae8dc8ca0f70d0428fb265.jpg', 1, 5, 11, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(121, 'EBUPI', 'ACUGZ', '//www.gravatar.com/avatar/1b06dac59c78b013465607b6f9ff27ac.jpg', 1, 15, 9, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(122, 'KUGVI', 'OBIUG', '//www.gravatar.com/avatar/5c5496b718c6d5c4b4f349a744033843.jpg', 1, 14, 4, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(123, 'MEJBA', 'RIDUR', '//www.gravatar.com/avatar/3ef6c06c9f032643af1f8773d5b4d579.jpg', 1, 11, 9, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(124, 'UJHIG', 'ANUUM', '//www.gravatar.com/avatar/37086af88085b0c867cca0ee00db8a8d.jpg', 1, 4, 9, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(125, 'DUBDO', 'CUCAZ', '//www.gravatar.com/avatar/5942bfbf684fee14697e3b54cfe3e502.jpg', 1, 18, 6, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(126, 'IGEZO', 'PUZAB', '//www.gravatar.com/avatar/25848367a933420cf9dc768ad1b12279.jpg', 1, 6, 8, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(127, 'UZANE', 'FOAPU', '//www.gravatar.com/avatar/3b42e96ed1fd11991f78e468e556905f.jpg', 1, 20, 10, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(128, 'DOVCO', 'PIDNA', '//www.gravatar.com/avatar/d25d13e798d03b0adaa68f77e675c0bc.jpg', 1, 19, 6, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(129, 'ADUEB', 'SIFOH', '//www.gravatar.com/avatar/db2f403475e1d14fb0c4ffef339950f9.jpg', 1, 19, 3, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(130, 'GEBOC', 'IJOLI', '//www.gravatar.com/avatar/f2e444c1dae7a46fad98335726b56fe4.jpg', 1, 20, 6, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(131, 'JIVEB', 'PUPCU', '//www.gravatar.com/avatar/54bf1d4ff751e649296db6490bee16d1.jpg', 1, 16, 2, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(132, 'FAZUO', 'MIDJE', '//www.gravatar.com/avatar/ad8ed316a88996afc899ba2582ee6058.jpg', 1, 12, 12, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(133, 'KAASN', 'DAJLO', '//www.gravatar.com/avatar/5a70b65b02dd6891746f697360c2d650.jpg', 1, 16, 7, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(134, 'GEJOH', 'RASCE', '//www.gravatar.com/avatar/48775eea0030d6b5b8af1c027aa498ca.jpg', 1, 20, 6, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(135, 'IVCIJ', 'CUWWI', '//www.gravatar.com/avatar/0a93a7b0b0a2a88a39a542b8c3e3e3a3.jpg', 1, 14, 3, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(136, 'MEOVE', 'UBHEW', '//www.gravatar.com/avatar/7a79e5e9098f935055b09cfad4606c5f.jpg', 1, 2, 1, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(137, 'DOKPA', 'NUMUB', '//www.gravatar.com/avatar/4163df56148e5a34b7f5c5e1260ff9b9.jpg', 1, 18, 5, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(138, 'TUKOV', 'USUVU', '//www.gravatar.com/avatar/be3ec6302ac6a7343aac9fb53ab0ff07.jpg', 1, 1, 1, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(139, 'MADTI', 'CUGEH', '//www.gravatar.com/avatar/f533043cace6478068307a9ae2433df8.jpg', 1, 9, 3, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(140, 'ADAZI', 'PAIBI', '//www.gravatar.com/avatar/67107462da307a3195f5ef69a76c340b.jpg', 1, 20, 12, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(141, 'HEGVE', 'TASNE', '//www.gravatar.com/avatar/9af16c852e00cd5256ab581ddbfab624.jpg', 1, 1, 1, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(142, 'KUHMA', 'VEIHU', '//www.gravatar.com/avatar/ee214ba1a4ef1d5ce5a8c559b29477e5.jpg', 1, 11, 7, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(143, 'OGUGA', 'WUJCA', '//www.gravatar.com/avatar/4ae96ed2659dab14f4c24cf25d0ec707.jpg', 1, 14, 5, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(144, 'UDUTO', 'JUDSI', '//www.gravatar.com/avatar/39caa8ed12bcca72da14f10edb8954fc.jpg', 1, 13, 7, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(145, 'IGOFA', 'DUROJ', '//www.gravatar.com/avatar/91472c8f91d2c1e1e7b87452aedf7f02.jpg', 1, 4, 3, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(146, 'GEDUV', 'JUNCO', '//www.gravatar.com/avatar/d4e5a22ff1a0239d01abb9f80f853795.jpg', 1, 1, 10, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(147, 'SABIS', 'KIZBI', '//www.gravatar.com/avatar/415a04df557d7e4fe08704263856eb2a.jpg', 1, 16, 4, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(148, 'IHEOM', 'VOHRU', '//www.gravatar.com/avatar/a1d2237433b3e221656ba59f486e597a.jpg', 1, 6, 3, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(149, 'WIPIR', 'MOKOV', '//www.gravatar.com/avatar/c5812a60045b1913ec176bc1fdfdce38.jpg', 1, 19, 8, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(150, 'IJIJO', 'NEVSE', '//www.gravatar.com/avatar/0946a918d8c0944cd74a450ba4092d16.jpg', 1, 14, 2, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(151, 'RAKHE', 'HOWWI', '//www.gravatar.com/avatar/d29185095f0ab2abb105db907ff19947.jpg', 1, 2, 11, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(152, 'ZOBCI', 'PIGBI', '//www.gravatar.com/avatar/52f41efef410536e91d7f3ef67a4e843.jpg', 1, 13, 9, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(153, 'RUVCU', 'ZURFU', '//www.gravatar.com/avatar/da45e3f885a9e4b1ff747aee59e56534.jpg', 1, 14, 7, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(154, 'EHOHA', 'SAODJ', '//www.gravatar.com/avatar/2fe1126d44b4e8249c565d69b93091cc.jpg', 1, 20, 8, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(155, 'WESAC', 'HORAV', '//www.gravatar.com/avatar/9b97ae4408aa10dfd5dd3d3b3d27cab3.jpg', 1, 19, 5, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(156, 'CILIB', 'FIRKI', '//www.gravatar.com/avatar/a86e0cdd06f16c81d95eec3f855cb09f.jpg', 1, 19, 10, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(157, 'TINAC', 'HAVUG', '//www.gravatar.com/avatar/04f40a636db95da231b895b9c9cb29f4.jpg', 1, 18, 3, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(158, 'SIWDU', 'HUFJE', '//www.gravatar.com/avatar/d6f339e4ac7d17c3c22bfbda1e89d662.jpg', 1, 3, 1, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(159, 'HAESU', 'BATOM', '//www.gravatar.com/avatar/0a86260afc73c23f5bd155ea5048ad1d.jpg', 1, 6, 7, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(160, 'JUIVU', 'TEHTI', '//www.gravatar.com/avatar/fecb95df5c73cadeb0a19b56c93693c0.jpg', 1, 6, 11, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(161, 'EPHAN', 'OTUHE', '//www.gravatar.com/avatar/f462c3e830809f61dd3eb3e261046c45.jpg', 1, 2, 7, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(162, 'IJUMA', 'OJUGU', '//www.gravatar.com/avatar/21eacc4337c02d6ed8d5c3dbae789166.jpg', 1, 11, 1, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(163, 'GEEFN', 'EFBAD', '//www.gravatar.com/avatar/f9c5e85f32ac2b682b684b43a92cb585.jpg', 1, 15, 8, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(164, 'AHOPA', 'KOMUD', '//www.gravatar.com/avatar/de9bc7ec1428e24c5eafd498a4efa7b9.jpg', 1, 2, 2, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(165, 'TIVES', 'KAVSU', '//www.gravatar.com/avatar/ed26bbffe28d0eef38cd39dff7bdb8d8.jpg', 1, 15, 4, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(166, 'ECAVI', 'CEKEZ', '//www.gravatar.com/avatar/7c4325dbe39a95fb2f017dd0c604409c.jpg', 1, 5, 4, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(167, 'EGCOS', 'VUIBR', '//www.gravatar.com/avatar/1a63f17fefccad20cf193357b93cc9cf.jpg', 1, 11, 7, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(168, 'DEKPA', 'FIFWE', '//www.gravatar.com/avatar/b36c17076bb5f49f71d36fab07ccf519.jpg', 1, 13, 5, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(169, 'ACFON', 'IPBAS', '//www.gravatar.com/avatar/593a5c9ea231099495117f5739ae264c.jpg', 1, 4, 10, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(170, 'LOROE', 'COROG', '//www.gravatar.com/avatar/dfc3f0ca11feec7f2b8296f06dc5cc92.jpg', 1, 16, 10, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(171, 'KEREZ', 'DUZUW', '//www.gravatar.com/avatar/951ef760bd115dcf29a8107cb2be8768.jpg', 1, 14, 8, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(172, 'BOFAM', 'JIMJO', '//www.gravatar.com/avatar/a0f34b0d547cb62716940b08a92681ba.jpg', 1, 5, 9, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(173, 'WOCRA', 'OMIOC', '//www.gravatar.com/avatar/80ae9b02c138a3fe517a0200799133c7.jpg', 1, 10, 7, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(174, 'JELKA', 'AMESI', '//www.gravatar.com/avatar/18828bf28b0c3857fba92f32d7415562.jpg', 1, 7, 11, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(175, 'JIDDO', 'VEORZ', '//www.gravatar.com/avatar/d3ad0c5342a27e3d5271e48fb1892ba0.jpg', 1, 10, 2, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(176, 'CAJEW', 'SIZEG', '//www.gravatar.com/avatar/b348f0624578d1505b8e0f8f5071ddfd.jpg', 1, 8, 5, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(177, 'UDACU', 'ZEJJO', '//www.gravatar.com/avatar/6a019e11bd678a54f2357ca599627292.jpg', 1, 9, 10, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(178, 'SENEJ', 'AVULO', '//www.gravatar.com/avatar/a2568b1bd95b5cea4b52de8c9300f07d.jpg', 1, 2, 11, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(179, 'ISIOD', 'DIDUT', '//www.gravatar.com/avatar/2e1861f5717953334ba2434423c486cf.jpg', 1, 4, 8, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(180, 'KAKON', 'VAGGO', '//www.gravatar.com/avatar/c6f1d4e8b731161b8f29bf4112d96fcd.jpg', 1, 4, 12, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(181, 'CAEVB', 'NIGAD', '//www.gravatar.com/avatar/ccf6e5c267137ccae256c673f202df19.jpg', 1, 4, 2, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(182, 'ROCHU', 'OSIJU', '//www.gravatar.com/avatar/27f94cd63b5a7ec057722f14797f2873.jpg', 1, 6, 11, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(183, 'DANOP', 'TODKO', '//www.gravatar.com/avatar/e07b95ed031d813c635e5a552929a6f5.jpg', 1, 15, 9, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(184, 'MAZFE', 'HIFUW', '//www.gravatar.com/avatar/0819c9c57fc667ce5bb422db07288928.jpg', 1, 12, 7, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(185, 'WEWUL', 'PUFZO', '//www.gravatar.com/avatar/3566730fc51dccd344542d14899d2e5e.jpg', 1, 1, 6, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(186, 'BAKAN', 'ADIDI', '//www.gravatar.com/avatar/079e7dfdf44bf0b9757e802adc97775c.jpg', 1, 14, 8, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(187, 'KIZFU', 'PIERU', '//www.gravatar.com/avatar/a40bcbcb47032f0d1b04afdbe7d0e731.jpg', 1, 20, 3, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(188, 'JAHAR', 'SEASU', '//www.gravatar.com/avatar/f9664ea712c99468f2ceeb6de930f7b6.jpg', 1, 19, 4, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(189, 'GUWVE', 'ARNUC', '//www.gravatar.com/avatar/7965afd087befdf087aa2a10694032ae.jpg', 1, 4, 8, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(190, 'LATVE', 'RALIR', '//www.gravatar.com/avatar/3fcc6802a7891ba22444d12f99583c80.jpg', 1, 11, 7, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(191, 'HIOJO', 'GEEFI', '//www.gravatar.com/avatar/3e3ff2841289d7bddf5c599c398bbf09.jpg', 1, 8, 4, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(192, 'ANMEK', 'CUKIF', '//www.gravatar.com/avatar/89202e3b6dc559d5f8249c5d47fde0b0.jpg', 1, 6, 12, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(193, 'UVVES', 'ZERIC', '//www.gravatar.com/avatar/3ad9ec218f0c05db1d8f7b55a70515a1.jpg', 1, 13, 2, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(194, 'CEPAP', 'CAHOF', '//www.gravatar.com/avatar/59c6f49a7bea9a518e7eae56ee4a62ae.jpg', 1, 14, 9, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(195, 'BOICL', 'COWID', '//www.gravatar.com/avatar/4e3019696b868b6911540bd6e68aa2b3.jpg', 1, 11, 4, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(196, 'RURCE', 'COSUZ', '//www.gravatar.com/avatar/c55450fbd86f7758cbdb0961b28ca66f.jpg', 1, 20, 5, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(197, 'OKREK', 'MIECU', '//www.gravatar.com/avatar/f040e6c526b6bfa8f0ef49eb5ab9e36f.jpg', 1, 11, 7, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(198, 'UPPEF', 'VULIR', '//www.gravatar.com/avatar/fe213e6d358f2636208263a2480715bf.jpg', 1, 12, 9, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(199, 'RORID', 'HIHUF', '//www.gravatar.com/avatar/d5e09fb297bb95a30b5a2309ea488d29.jpg', 1, 2, 5, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(200, 'GEGLO', 'GIBZI', '//www.gravatar.com/avatar/1ef2181010c7e7801db1466a7158137e.jpg', 1, 19, 8, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(201, 'TASOC', 'VUTUR', '//www.gravatar.com/avatar/7ffbd3dffcf4aa247237b3188a2d010f.jpg', 1, 6, 2, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(202, 'GUBCO', 'JOWOB', '//www.gravatar.com/avatar/913c8b177fffdbfd5615789c25f1a77f.jpg', 1, 7, 5, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(203, 'JUNDI', 'UDORE', '//www.gravatar.com/avatar/49de85fdfcba658b110c2e0ecf93b315.jpg', 1, 19, 6, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(204, 'CIJED', 'NIOHI', '//www.gravatar.com/avatar/37351aec97a6aae2697136d0227d585d.jpg', 1, 15, 3, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(205, 'GOOTJ', 'CUSCU', '//www.gravatar.com/avatar/94b69fb953d5f04fd525da6e13c67197.jpg', 1, 19, 10, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(206, 'PAHIK', 'OROVA', '//www.gravatar.com/avatar/9497fb5436571d5156716c013c7f0bb8.jpg', 1, 11, 12, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(207, 'LIZHU', 'CEGNA', '//www.gravatar.com/avatar/31c4002b00d9cd9c7b4f047b3c1de564.jpg', 1, 18, 9, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(208, 'ISRUK', 'IBJUO', '//www.gravatar.com/avatar/899dc1c4dca40f672a219c4c87624b21.jpg', 1, 10, 9, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(209, 'MIMIO', 'BEKIP', '//www.gravatar.com/avatar/834f2b9439062c042bf54b9bb966b913.jpg', 1, 9, 1, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(210, 'PIGUB', 'MAWHI', '//www.gravatar.com/avatar/73703f75798d5a557e115bfcd5a01150.jpg', 1, 11, 9, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(211, 'RUPUJ', 'SIGJU', '//www.gravatar.com/avatar/6e8a3a39a45755a2ab8f758628e75285.jpg', 1, 2, 5, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(212, 'UVAKO', 'WEDDA', '//www.gravatar.com/avatar/df8e58b4c919dd9dd04d433a443505c5.jpg', 1, 10, 7, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(213, 'MIDHI', 'RUGUG', '//www.gravatar.com/avatar/70d1deaaec5cff8eb2053204a7a1f04a.jpg', 1, 4, 5, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(214, 'DUSCO', 'FULHE', '//www.gravatar.com/avatar/d085a7764634a3084cff098bebeeab14.jpg', 1, 5, 7, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(215, 'LUKBI', 'NAWAT', '//www.gravatar.com/avatar/e80b33b60a5d53c1942040b584b134f7.jpg', 1, 16, 8, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(216, 'ULUFA', 'DAWWA', '//www.gravatar.com/avatar/3b170600086afe7a1453adc325978343.jpg', 1, 3, 5, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(217, 'FEGRU', 'VUJLO', '//www.gravatar.com/avatar/f11c494fd61e98052b29f3ace88aae8b.jpg', 1, 17, 8, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(218, 'AFBIZ', 'VASEW', '//www.gravatar.com/avatar/ea69c7972e5b4b9800cc405a07be59b7.jpg', 1, 5, 11, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(219, 'HUTOP', 'DUVIL', '//www.gravatar.com/avatar/35fc077c9a72eae3d1bd96585e603bc7.jpg', 1, 1, 7, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(220, 'CUZUG', 'HUCFA', '//www.gravatar.com/avatar/27c4971e44a7553b5238f55f65dd5e90.jpg', 1, 15, 11, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(221, 'LAWPU', 'WACUM', '//www.gravatar.com/avatar/aacbf710b41d1210e1b4e40b5849216a.jpg', 1, 7, 5, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(222, 'TEFIG', 'OTHOW', '//www.gravatar.com/avatar/b265fbea1ecd9c270ae79020fb23befa.jpg', 1, 12, 8, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(223, 'HAMAW', 'ZEUNA', '//www.gravatar.com/avatar/0d92abb3f45f6b1f6e500ef6b505b16b.jpg', 1, 1, 9, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(224, 'COPUB', 'EGBUB', '//www.gravatar.com/avatar/6cf5155e990ed8007eae52651cbfb641.jpg', 1, 20, 6, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(225, 'LOGCE', 'FADSA', '//www.gravatar.com/avatar/89d97f97ee56e7b5a27bed8ba7becf56.jpg', 1, 19, 5, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(226, 'ZIJJE', 'JEFMI', '//www.gravatar.com/avatar/d29599fc3df70a4dc55e082b7a7f4eb0.jpg', 1, 19, 11, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(227, 'VODON', 'DUORO', '//www.gravatar.com/avatar/b00f05f902089bb74ca924cbc21c4c52.jpg', 1, 20, 6, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(228, 'FEFMI', 'FOIRZ', '//www.gravatar.com/avatar/9530b22863fc9db3185323a0c79c3f41.jpg', 1, 1, 3, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(229, 'LAMEV', 'GUWAB', '//www.gravatar.com/avatar/84fd1e4258ea4622547c2ae2a45d0389.jpg', 1, 20, 7, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(230, 'OFEWU', 'ATDAW', '//www.gravatar.com/avatar/edbf9c4071a7806028ef7a5e05c43232.jpg', 1, 8, 6, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(231, 'NIJCU', 'LOFPU', '//www.gravatar.com/avatar/401af7f3f846098a5826c6369527d57c.jpg', 1, 16, 2, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(232, 'KOGSA', 'KUAHB', '//www.gravatar.com/avatar/0e9a67340060b1da8bb138a3ed573faf.jpg', 1, 9, 11, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(233, 'NOSZA', 'KAENE', '//www.gravatar.com/avatar/5f489514170a881af7771263ed2e4d81.jpg', 1, 20, 8, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(234, 'IBEBA', 'TIVOW', '//www.gravatar.com/avatar/5c51f5c597aa27ff65b6dbf9efd9bb0d.jpg', 1, 9, 11, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(235, 'HIOVI', 'VAICK', '//www.gravatar.com/avatar/7a424c3571b7d378fbbcbea5f5746c12.jpg', 1, 1, 8, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(236, 'PIDGU', 'JIHAM', '//www.gravatar.com/avatar/b94bcbe422c16e9ebb5f7101094171f0.jpg', 1, 17, 5, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(237, 'ENIBI', 'VERKA', '//www.gravatar.com/avatar/e800bf5f319141cbd5c88c11f7c34e9c.jpg', 1, 9, 9, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(238, 'CIDOM', 'KISIF', '//www.gravatar.com/avatar/2dbfdb16e7c1a5452fa0288e5e382893.jpg', 1, 14, 10, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(239, 'INRIV', 'TUZTO', '//www.gravatar.com/avatar/41eb16338088b205a077fadc74a5603e.jpg', 1, 19, 7, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(240, 'ODZAJ', 'WONCA', '//www.gravatar.com/avatar/50de177a044e9bc2f338d375fe7165d3.jpg', 1, 11, 5, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(241, 'SOJJO', 'PUTLU', '//www.gravatar.com/avatar/94501a0c9ab31cba676ce90ecdc6ed96.jpg', 1, 5, 2, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(242, 'FIDUC', 'NEBEB', '//www.gravatar.com/avatar/58ae92f15a2a7bfceab25498d3c3112a.jpg', 1, 12, 12, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(243, 'NIPFO', 'HEJEL', '//www.gravatar.com/avatar/0d1f1171240aae01755ed9e9c2b1e01a.jpg', 1, 17, 2, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(244, 'ZURMA', 'FALIT', '//www.gravatar.com/avatar/7321b70cf8c4a63eec0d9161dcf7391f.jpg', 1, 10, 11, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(245, 'FURTE', 'MAMMA', '//www.gravatar.com/avatar/496ee3d408bb591e041ae579b53e94b6.jpg', 1, 6, 4, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(246, 'CAHHU', 'CAKFO', '//www.gravatar.com/avatar/871f27513c376187fa47664b77fedbbd.jpg', 1, 19, 4, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(247, 'JUGUZ', 'HUBWU', '//www.gravatar.com/avatar/5dc4f936c9cb855b4bea2011b27b81fc.jpg', 1, 20, 3, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(248, 'EKLOI', 'CARNU', '//www.gravatar.com/avatar/2a1769f0a9bfeabad1c9d3442a0df1da.jpg', 1, 18, 1, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(249, 'OHNOJ', 'AJIRI', '//www.gravatar.com/avatar/78bdf7f074d95decef1bb471e72a0f52.jpg', 1, 4, 8, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(250, 'PEHUF', 'MIEBT', '//www.gravatar.com/avatar/eb872e31ef2db137d1257e74be4a6f28.jpg', 1, 2, 3, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(251, 'CIZAF', 'UDFEM', '//www.gravatar.com/avatar/c8a581d24909a8afe7c284a9ce99a706.jpg', 1, 2, 1, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(252, 'SAJUG', 'SIVWO', '//www.gravatar.com/avatar/fa41b21621819f1323b694933d85200c.jpg', 1, 4, 7, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(253, 'OBKEG', 'GOCPE', '//www.gravatar.com/avatar/2865a154075b0feb2193f0261591b3be.jpg', 1, 18, 1, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(254, 'BIIHD', 'SOWVE', '//www.gravatar.com/avatar/af0447592168ccfa0431a7e11ded624c.jpg', 1, 9, 7, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(255, 'LUJOI', 'OVLUN', '//www.gravatar.com/avatar/76c2ead549c9b4f9fe9b82a2ae0a5ed2.jpg', 1, 5, 11, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(256, 'TOLUB', 'WOVIB', '//www.gravatar.com/avatar/8a1e13806cbf028578d4dc2db770e7ed.jpg', 1, 12, 5, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(257, 'LATUP', 'KADED', '//www.gravatar.com/avatar/3ec2aceecf6bae1b4ca5e924b8b99009.jpg', 1, 15, 6, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(258, 'WEHAP', 'EJECA', '//www.gravatar.com/avatar/e2a64555769134279969bbf71299756b.jpg', 1, 13, 1, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(259, 'WUSHO', 'KIWGA', '//www.gravatar.com/avatar/489d0b5d52e8b50c40ca540eae383619.jpg', 1, 10, 5, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(260, 'NIATO', 'AKZUF', '//www.gravatar.com/avatar/c36d858e88ecb92510a0a556fc4198f2.jpg', 1, 8, 10, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(261, 'SUZOW', 'HENIV', '//www.gravatar.com/avatar/42414ba156a110efe6a21aa038eeff61.jpg', 1, 1, 4, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(262, 'RUNAB', 'NOLER', '//www.gravatar.com/avatar/ef576c786a866c8db336b3fb6cef00e9.jpg', 1, 16, 12, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(263, 'DEFNU', 'SUBAW', '//www.gravatar.com/avatar/24b4fdd82a282a5ebf93ab736938356d.jpg', 1, 19, 7, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(264, 'RIWTE', 'NUWNI', '//www.gravatar.com/avatar/1880d36543a0cb8247c2c300a6e79370.jpg', 1, 2, 4, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(265, 'HOKWA', 'DEMUL', '//www.gravatar.com/avatar/1aa9b94f72adcbe773843de4935fe2fd.jpg', 1, 12, 12, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(266, 'REGUD', 'HUWMU', '//www.gravatar.com/avatar/f0165d4b55c068057978022b6c9703ac.jpg', 1, 16, 11, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(267, 'ODDUP', 'UBKIV', '//www.gravatar.com/avatar/695931b17f91ea37834c8ac23d9e1a4a.jpg', 1, 13, 8, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(268, 'PODEF', 'OBNUR', '//www.gravatar.com/avatar/06214ea514e42cdcb1bac9f36dc8f7f2.jpg', 1, 5, 1, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(269, 'PINAC', 'JAHHE', '//www.gravatar.com/avatar/56e08f93314c8eccdbabddcdae5cb705.jpg', 1, 5, 9, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(270, 'DIGVI', 'JEZOS', '//www.gravatar.com/avatar/0422b29c3fee6aabfc9291c831f9bd00.jpg', 1, 10, 5, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(271, 'NUNEM', 'EPOAM', '//www.gravatar.com/avatar/45b4143d188da616aa5be0fb4c3685c6.jpg', 1, 5, 11, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(272, 'PINLA', 'GAMSO', '//www.gravatar.com/avatar/adeba3c312e93ae8d5b5c6f0ed86a106.jpg', 1, 2, 8, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(273, 'EGOGO', 'JAVSI', '//www.gravatar.com/avatar/e7741d4c6586cd011e70d1247fe8309b.jpg', 1, 6, 2, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(274, 'ACISU', 'SIUCA', '//www.gravatar.com/avatar/98df4c85ca7d7a07b06a7830a200c61e.jpg', 1, 12, 1, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(275, 'TULOZ', 'KIKAH', '//www.gravatar.com/avatar/1f2a04a1f3791c2ffb9e8aa71f3e7485.jpg', 1, 13, 7, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(276, 'SOSOR', 'BOOJA', '//www.gravatar.com/avatar/969334e11a1961dca4050540a896903e.jpg', 1, 18, 8, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(277, 'TUDTU', 'NUNTI', '//www.gravatar.com/avatar/8866a6865b9bf88a99b85995aec947b0.jpg', 1, 14, 10, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(278, 'LANHE', 'ENIFI', '//www.gravatar.com/avatar/d09c225034e9889dfc8f7f2c7e2b673f.jpg', 1, 3, 9, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(279, 'KOZOW', 'PUKUB', '//www.gravatar.com/avatar/cf854c8fe71a6afd31e30c9af051a182.jpg', 1, 9, 2, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(280, 'AGABO', 'BEFIN', '//www.gravatar.com/avatar/7a7463b8556874ee08eccd71c2d7a50f.jpg', 1, 1, 10, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(281, 'MOLOI', 'EZCOU', '//www.gravatar.com/avatar/755d6e5eb37b8b1f4c64739e322ba8d4.jpg', 1, 20, 6, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(282, 'WENIL', 'HUTAH', '//www.gravatar.com/avatar/cd6ada3aa3edf204e00acb93072b67ef.jpg', 1, 14, 12, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(283, 'KAKPA', 'FUKPE', '//www.gravatar.com/avatar/1c542055ed9f3ecbb28691154b203309.jpg', 1, 19, 1, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(284, 'IKECU', 'CUZUG', '//www.gravatar.com/avatar/01d68bf36a58dc86668438d4cdd75cc7.jpg', 1, 8, 2, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(285, 'WUGEH', 'APUMI', '//www.gravatar.com/avatar/461a14c37d5ea560408a289e5d3cc70b.jpg', 1, 8, 6, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(286, 'PUWIN', 'PASNU', '//www.gravatar.com/avatar/c7774c23f6950b2c9c23173e6a7c1c5f.jpg', 1, 18, 10, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(287, 'OKESA', 'HOHSO', '//www.gravatar.com/avatar/1254c60e04b20e76ed4d577f11c3e0b2.jpg', 1, 10, 8, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(288, 'FAIJJ', 'SUVEK', '//www.gravatar.com/avatar/f46a24b0627e50315e83e0b95b87c026.jpg', 1, 15, 6, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(289, 'AHJEV', 'VUGUP', '//www.gravatar.com/avatar/a17c107e05f1aa4bccf9147263c09a89.jpg', 1, 20, 3, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(290, 'UBDUC', 'NOSDI', '//www.gravatar.com/avatar/7c955124dd7983f604cce51c13edfc5c.jpg', 1, 2, 6, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(291, 'PUBEP', 'BIIPU', '//www.gravatar.com/avatar/cdb09ca7c5c083f307c891f97a6ff5bb.jpg', 1, 17, 10, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(292, 'OHEPA', 'FEROS', '//www.gravatar.com/avatar/5bde5d8d7fa9d2138657df10591f950e.jpg', 1, 1, 2, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(293, 'CUCTI', 'NUKDO', '//www.gravatar.com/avatar/60b82a7eebc1cee268c4841b1aeac78b.jpg', 1, 12, 7, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(294, 'VAMDE', 'IZDIS', '//www.gravatar.com/avatar/19cf5d23c2431eae6b0bbfd9a9d94ada.jpg', 1, 12, 6, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(295, 'INJIR', 'NOMOH', '//www.gravatar.com/avatar/24ea987620ffbe15aa768dbea4d24151.jpg', 1, 2, 7, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(296, 'PESOD', 'ANORA', '//www.gravatar.com/avatar/983a36cbd71ad19b8de6157b90d243e1.jpg', 1, 13, 7, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(297, 'MEWUH', 'LADAM', '//www.gravatar.com/avatar/b3a42cbabf7706d4507317bd8beef272.jpg', 1, 6, 2, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(298, 'NURLO', 'AHCER', '//www.gravatar.com/avatar/e21b6451facf49ad1a5574568400be68.jpg', 1, 10, 11, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(299, 'JUGKU', 'SUDNU', '//www.gravatar.com/avatar/d193eb32a808b23927eaedff452bfb65.jpg', 1, 10, 12, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(300, 'EFMUK', 'GATAZ', '//www.gravatar.com/avatar/d0acf9fc367e7f43e3755e417cbcd6d5.jpg', 1, 19, 6, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(301, 'GILUL', 'HETBA', '//www.gravatar.com/avatar/ba6fe633df5ae4a9fd1609d8e4b67cad.jpg', 1, 16, 2, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(302, 'ZAIHO', 'WANUN', '//www.gravatar.com/avatar/72829707607e2b9511e40b4efe91018d.jpg', 1, 10, 7, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(303, 'UTANB', 'FIFIG', '//www.gravatar.com/avatar/bf8d84d5d5cda6313ab31ff650d7d1bb.jpg', 1, 9, 8, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(304, 'UKZUN', 'LUNDE', '//www.gravatar.com/avatar/61eba859b237f8c4a0b7815e48bf67b2.jpg', 1, 8, 12, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(305, 'WOHUB', 'LADZE', '//www.gravatar.com/avatar/03120092ab70b0ad38536a8e3737dc6d.jpg', 1, 14, 7, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(306, 'LUOKA', 'MIPME', '//www.gravatar.com/avatar/af483b8abdc9a27ea371011e999afecd.jpg', 1, 11, 4, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(307, 'RELEJ', 'NOJAH', '//www.gravatar.com/avatar/9ab14d757a22352969e3a85162944634.jpg', 1, 5, 6, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(308, 'VILSI', 'VELZO', '//www.gravatar.com/avatar/151b6f159246a9f450c11233fd7a812e.jpg', 1, 10, 3, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(309, 'HOGBA', 'ILOEP', '//www.gravatar.com/avatar/17f5f8ab7131e01963bee0fd106bb06b.jpg', 1, 17, 12, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(310, 'AGFOZ', 'JOJPU', '//www.gravatar.com/avatar/618df55caefa6586e0f5461b205ffbe0.jpg', 1, 6, 11, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(311, 'PEWGA', 'ZEDFU', '//www.gravatar.com/avatar/8cfd7e75d32744a244c0124d4c862b27.jpg', 1, 5, 1, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(312, 'KAHMO', 'VESZE', '//www.gravatar.com/avatar/749884457390d383b25dee117f5343a2.jpg', 1, 17, 7, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(313, 'GUNJE', 'WAGDU', '//www.gravatar.com/avatar/8daf626e89572456df62abb7b4bb7f7c.jpg', 1, 10, 8, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(314, 'TAGOG', 'NEBHA', '//www.gravatar.com/avatar/0b5aaaaf11c4d6bfd4a29bfb6c3a9e71.jpg', 1, 20, 12, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(315, 'OMOHA', 'OGNUK', '//www.gravatar.com/avatar/ce5d62ada08a48b04b5a0b4ac95170ba.jpg', 1, 1, 7, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(316, 'OTKID', 'MACUK', '//www.gravatar.com/avatar/7be3aca5f2b422e1c2a119538e1be8e8.jpg', 1, 13, 8, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(317, 'HIVUD', 'DELKO', '//www.gravatar.com/avatar/c68d5a37318805d0b23a24fd1785b5c2.jpg', 1, 18, 2, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(318, 'IKAGN', 'JUKED', '//www.gravatar.com/avatar/13ddda54b83bc6ed32f7d3df2f6e4a85.jpg', 1, 6, 4, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(319, 'WUKEZ', 'HAMET', '//www.gravatar.com/avatar/e683511f7ef4dcf7cad0abb367cf8433.jpg', 1, 5, 8, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(320, 'JOZUS', 'ESCIN', '//www.gravatar.com/avatar/3331d427627c1ae6891a18d35b944f1c.jpg', 1, 16, 4, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(321, 'KOSAP', 'HIODU', '//www.gravatar.com/avatar/4760942bbcd9a106f4194536f5290a8d.jpg', 1, 1, 12, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(322, 'ODVAK', 'CABFE', '//www.gravatar.com/avatar/7c1b436383a9236df7fd833de27971ef.jpg', 1, 12, 8, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(323, 'VOWUV', 'ABOAM', '//www.gravatar.com/avatar/08d1bdef6b513cbb5f8fd94572978a39.jpg', 1, 12, 5, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(324, 'NIKDO', 'ALEUD', '//www.gravatar.com/avatar/5dd5e70fca130a53f25a3926b2ba3126.jpg', 1, 20, 1, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(325, 'DEKUK', 'UFIMI', '//www.gravatar.com/avatar/e7b083390d879595aaed247545110464.jpg', 1, 2, 10, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(326, 'GEVEL', 'DITKI', '//www.gravatar.com/avatar/8d16b22248c4139e90035891a2c7688b.jpg', 1, 3, 8, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(327, 'JEKOF', 'UPITA', '//www.gravatar.com/avatar/7746820396a2469cc7ea878fe74b9a53.jpg', 1, 1, 1, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(328, 'ARITA', 'RITAU', '//www.gravatar.com/avatar/96d8388b525306d967ddf7f62732ffa1.jpg', 1, 12, 11, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(329, 'MECSA', 'OSIHF', '//www.gravatar.com/avatar/3eaf742301f21b951fbf29e39ca917ed.jpg', 1, 1, 8, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(330, 'MEPIW', 'UFRAC', '//www.gravatar.com/avatar/5f6bd94fb1ad8957765a3d9f3d3c1a35.jpg', 1, 16, 7, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(331, 'RIBRO', 'ZOVUP', '//www.gravatar.com/avatar/2ce2d40a919cf4ac74ea69e730de9e58.jpg', 1, 16, 1, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(332, 'KESIW', 'LAHIF', '//www.gravatar.com/avatar/fe56db9cc3094613abfdac407a3e3f2b.jpg', 1, 12, 3, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(333, 'VOZOH', 'EGOUN', '//www.gravatar.com/avatar/61a7a0d9a30f71767de2a89199ae38a6.jpg', 1, 4, 6, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(334, 'IMCIS', 'MIJAO', '//www.gravatar.com/avatar/8f4d09a8c1aee1a1a9f4bfda266923bf.jpg', 1, 8, 6, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(335, 'UHIME', 'DIWIV', '//www.gravatar.com/avatar/539d0c84d35a223677c85e5fc9ed238f.jpg', 1, 20, 4, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(336, 'MUGJU', 'IRWAH', '//www.gravatar.com/avatar/e870b1d8e2dc03bbae2087f2cac9f66b.jpg', 1, 3, 6, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(337, 'LOKGU', 'KAHIW', '//www.gravatar.com/avatar/5e94c23c1fe182199215b60794247cc2.jpg', 1, 16, 11, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(338, 'LADUD', 'CABAN', '//www.gravatar.com/avatar/f85b30ab409287bf27f03d82d64a21f5.jpg', 1, 12, 11, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(339, 'LEKAW', 'SADPE', '//www.gravatar.com/avatar/3eb28cec0b1459fbbfa4a03ee3ac5bac.jpg', 1, 8, 7, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(340, 'OVAIL', 'KIWSO', '//www.gravatar.com/avatar/e6794d86c916d036ae3c1d625a180455.jpg', 1, 19, 8, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(341, 'MIHAD', 'KUBCA', '//www.gravatar.com/avatar/57ae7d408ba8cb25c1d54d11ae9c52ec.jpg', 1, 8, 2, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(342, 'RUNSU', 'DOHNE', '//www.gravatar.com/avatar/2796c2ab13b770052773628b8df905be.jpg', 1, 8, 4, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(343, 'IJNEP', 'BIPIT', '//www.gravatar.com/avatar/80be7b21b1ef0e1053115bced13d57ab.jpg', 1, 10, 12, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(344, 'IDIBI', 'COLRO', '//www.gravatar.com/avatar/a4e9c3bcb8cff8ba9e954d3cb1bd695a.jpg', 1, 3, 1, '2019-09-02 21:59:20', '2019-09-02 21:59:20');
INSERT INTO `products` (`product_id`, `product_name`, `product_description`, `product_image`, `product_show`, `company_id`, `category_id`, `created_at`, `updated_at`) VALUES
(345, 'ASUBE', 'BEOZU', '//www.gravatar.com/avatar/01d865931901809b047bcacd5187a822.jpg', 1, 14, 7, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(346, 'PIBLO', 'PAUPU', '//www.gravatar.com/avatar/30ac1b8c6606a6bc5d6fddd3ba8c2bf3.jpg', 1, 4, 1, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(347, 'UBUTE', 'ZUEKP', '//www.gravatar.com/avatar/b5f93781da9e134fd74b801a8d5edbec.jpg', 1, 8, 7, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(348, 'VERHA', 'MAASI', '//www.gravatar.com/avatar/040282495409adaa3cc8829b752b2e72.jpg', 1, 6, 5, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(349, 'INOOF', 'ZETOZ', '//www.gravatar.com/avatar/0fc3a152ed01d773cf012921c419809e.jpg', 1, 14, 9, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(350, 'FASEM', 'UKUVE', '//www.gravatar.com/avatar/19eeb05284a6d3ec00a9d228a716c611.jpg', 1, 3, 9, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(351, 'TOJNO', 'MIVIG', '//www.gravatar.com/avatar/1a1bed90db4c074df3e998e1f544d92b.jpg', 1, 1, 9, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(352, 'BOZHU', 'TONDE', '//www.gravatar.com/avatar/77d1a0893f4f15a3aa22f9411707e217.jpg', 1, 1, 5, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(353, 'UTDIP', 'ZEWOR', '//www.gravatar.com/avatar/4c7a4e83dc2a96b15fe7ff1e356eb2ad.jpg', 1, 17, 6, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(354, 'JEWAK', 'KATON', '//www.gravatar.com/avatar/ffc401c0cf64a1200e100ce364b441a4.jpg', 1, 10, 12, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(355, 'DUTEU', 'AHEJE', '//www.gravatar.com/avatar/bb0eb8e81110b29f6629be417ce2a7d0.jpg', 1, 6, 9, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(356, 'DAJUJ', 'PABDU', '//www.gravatar.com/avatar/96e61ce2369ffca18f3cce9f746efe18.jpg', 1, 10, 12, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(357, 'HOZOS', 'LEIME', '//www.gravatar.com/avatar/a9a1f137d6cb75c18bc57804c955a9f7.jpg', 1, 17, 6, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(358, 'PIUKH', 'ABASI', '//www.gravatar.com/avatar/860cef8dc7f725bbca3a7d6aedc99184.jpg', 1, 14, 2, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(359, 'VIZOK', 'RETAD', '//www.gravatar.com/avatar/a2c86fe62f0fc2e011c5d37d3a74854d.jpg', 1, 2, 6, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(360, 'VEOGN', 'WOFED', '//www.gravatar.com/avatar/1f6323e4ce08a3b9912b384000737879.jpg', 1, 7, 11, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(361, 'AWBIP', 'ZILGA', '//www.gravatar.com/avatar/b75b0a549b71457be0f8ecf68e0b5cbf.jpg', 1, 20, 12, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(362, 'ATILE', 'EKJET', '//www.gravatar.com/avatar/66f3ddb87e590117dda3c30bcc1d9b6a.jpg', 1, 13, 8, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(363, 'CIUZO', 'RULBA', '//www.gravatar.com/avatar/60e2fb5f294bce2bea3acf03b4245493.jpg', 1, 7, 11, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(364, 'SASER', 'TOLUR', '//www.gravatar.com/avatar/0c9bf724ea8a3b140304680d6bcedcb6.jpg', 1, 14, 4, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(365, 'PINIE', 'PUDAH', '//www.gravatar.com/avatar/5032607984e705df87cc1d5871f35007.jpg', 1, 17, 10, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(366, 'KICOW', 'AVEFE', '//www.gravatar.com/avatar/07f233640ee2e049b3ee032666e35ee1.jpg', 1, 11, 7, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(367, 'JEFIM', 'TUJOP', '//www.gravatar.com/avatar/545861595b2c3b710fdc20972573925f.jpg', 1, 13, 3, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(368, 'KIDKO', 'HOWPE', '//www.gravatar.com/avatar/2abd31eb6e5ef517e5b0162e80fe4eea.jpg', 1, 16, 9, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(369, 'LUFNI', 'POMKO', '//www.gravatar.com/avatar/b5b1e5debe5a90b28ae06d924beb0fcd.jpg', 1, 1, 10, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(370, 'ZOGCO', 'VIHSA', '//www.gravatar.com/avatar/016998efcacd29b6ad188796575e7eef.jpg', 1, 13, 2, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(371, 'RENAL', 'BIVAP', '//www.gravatar.com/avatar/9685e75f7ecb4de9b88b3af0c2a7a70b.jpg', 1, 6, 9, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(372, 'IFUFE', 'JIOPL', '//www.gravatar.com/avatar/e8880ba671ba4221dabae4cd9368d027.jpg', 1, 16, 10, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(373, 'CAJIF', 'JOWIS', '//www.gravatar.com/avatar/a89212159850610e60d1784269aafaa4.jpg', 1, 9, 3, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(374, 'PEVIH', 'KOMGE', '//www.gravatar.com/avatar/de66c2065c430b9a849d61ab15fffe6f.jpg', 1, 16, 5, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(375, 'TIZWU', 'FISOT', '//www.gravatar.com/avatar/010e107ad91d8b816a093d95ec5235a9.jpg', 1, 7, 6, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(376, 'KIBOV', 'GOSCO', '//www.gravatar.com/avatar/db0b1d7fd859c73099d82e7c8676a7df.jpg', 1, 16, 12, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(377, 'GETAA', 'IDBUL', '//www.gravatar.com/avatar/f1fc82ac7de398b1d1692724af545114.jpg', 1, 15, 10, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(378, 'MIRRA', 'JINAW', '//www.gravatar.com/avatar/95d751e6e5552d6079ea5cc13e0f9e2c.jpg', 1, 6, 7, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(379, 'JAMPI', 'VUVRE', '//www.gravatar.com/avatar/03ee2aaf56a9a35dae6f3a88848c4a79.jpg', 1, 8, 1, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(380, 'BICRA', 'AKIWC', '//www.gravatar.com/avatar/3dadc630a2b5c98c7f6ffc4269df0808.jpg', 1, 4, 8, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(381, 'SAMOR', 'EMSAN', '//www.gravatar.com/avatar/eac0e6b0e24dd1fbf855b97a2f24bf66.jpg', 1, 11, 11, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(382, 'CUVOE', 'HEWTO', '//www.gravatar.com/avatar/c55e242cc2916537dcdf13b7e0c4b7c6.jpg', 1, 3, 12, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(383, 'KOKPE', 'GOLNA', '//www.gravatar.com/avatar/66be5fe0c87c93815700dfc5f2bdcb02.jpg', 1, 10, 11, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(384, 'IBOSU', 'IBAIC', '//www.gravatar.com/avatar/4b75418fccef60e35fd1896a563429a4.jpg', 1, 5, 7, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(385, 'UWEJU', 'NORMU', '//www.gravatar.com/avatar/7b59c4112225497aacc0549f79563dd1.jpg', 1, 17, 9, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(386, 'UTCOZ', 'BAMOK', '//www.gravatar.com/avatar/ede425581946cf50c528d14681c72ade.jpg', 1, 19, 8, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(387, 'GUFUI', 'UDSIN', '//www.gravatar.com/avatar/f45b57d307f4a39bffe110fd331ca057.jpg', 1, 19, 12, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(388, 'SICCU', 'TOEWT', '//www.gravatar.com/avatar/b32aff0e67bb467e54b7ce42d6a0fc3a.jpg', 1, 1, 9, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(389, 'OTOJE', 'REZUT', '//www.gravatar.com/avatar/730b5b7b3cd5eb984a343ddeae959b5c.jpg', 1, 2, 9, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(390, 'VEVWI', 'ULFUM', '//www.gravatar.com/avatar/6b9fdf235bc7d6d24af34b821fd913dd.jpg', 1, 19, 11, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(391, 'TOCCO', 'TUIZO', '//www.gravatar.com/avatar/bf4a363c3ba38afa8ebbe923344ad5c7.jpg', 1, 1, 4, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(392, 'VUUFL', 'ZIBIS', '//www.gravatar.com/avatar/d9a2e59dedfd44d461552dd12931a577.jpg', 1, 15, 4, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(393, 'SEKPE', 'OBNAD', '//www.gravatar.com/avatar/551d25e409b5b73a3700d4f274900bf4.jpg', 1, 18, 11, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(394, 'NAHSO', 'NUEVU', '//www.gravatar.com/avatar/7b17523109adade383535a4624748925.jpg', 1, 9, 1, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(395, 'FIPAW', 'HOFAC', '//www.gravatar.com/avatar/836fc4c8cbab6d083f86a9d8c766e963.jpg', 1, 19, 3, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(396, 'KULEF', 'POGTI', '//www.gravatar.com/avatar/a1c5e23104358dd5eb4249b560d1e11f.jpg', 1, 13, 5, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(397, 'BIEKF', 'LOWRU', '//www.gravatar.com/avatar/c6512de9aff8b7641ed9d28ecdff3518.jpg', 1, 12, 9, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(398, 'UDEMA', 'HAVNE', '//www.gravatar.com/avatar/0f2ed9208c29fa1020209178687dfebe.jpg', 1, 19, 5, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(399, 'BESZO', 'WAMSO', '//www.gravatar.com/avatar/ca742b0874d922b633169ffd01855e82.jpg', 1, 10, 6, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(400, 'ZESER', 'DEKPU', '//www.gravatar.com/avatar/86cd33d0bb36ebc741e7f73fe2dabbc3.jpg', 1, 16, 12, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(401, 'CUMIJ', 'USHUE', '//www.gravatar.com/avatar/78a5df82a379b2f3e66536adb54b5bfa.jpg', 1, 20, 4, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(402, 'DASSU', 'ALEPE', '//www.gravatar.com/avatar/3e6725ef7e7c2f88bc74d19aa92e135b.jpg', 1, 20, 2, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(403, 'RAZBU', 'IMEZO', '//www.gravatar.com/avatar/d185fc11d731c19870bf6327a2c36a1b.jpg', 1, 4, 9, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(404, 'ORUOP', 'LEPHE', '//www.gravatar.com/avatar/1c7feb85e8337f067a23865c9bae9c5a.jpg', 1, 13, 7, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(405, 'CUBAT', 'OSKAZ', '//www.gravatar.com/avatar/fe7df2cc5781ecbea5d3208574dabac6.jpg', 1, 13, 7, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(406, 'WENJI', 'KIJOF', '//www.gravatar.com/avatar/7eff0485de551948b60176ef473290e9.jpg', 1, 19, 3, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(407, 'CEKIC', 'KUZAW', '//www.gravatar.com/avatar/c10a1d868a1bbb870ee69863e9eaf7a7.jpg', 1, 9, 3, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(408, 'ZOCAV', 'KUEKO', '//www.gravatar.com/avatar/720318a3de7d99ac02ebadd7e179222a.jpg', 1, 16, 7, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(409, 'NEVOZ', 'BUBGI', '//www.gravatar.com/avatar/fca69bb5d30ce97ad3b41d42748347ba.jpg', 1, 2, 6, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(410, 'JIANJ', 'WOTAS', '//www.gravatar.com/avatar/55cf0b26c72eb0aa7b8511639dc3b032.jpg', 1, 19, 8, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(411, 'AMTUL', 'POFPE', '//www.gravatar.com/avatar/582ff98b793f4c37b97844a13f60eebd.jpg', 1, 12, 11, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(412, 'OCAPU', 'NUKEH', '//www.gravatar.com/avatar/e0aa0a929849c61d899ad10733229f71.jpg', 1, 15, 3, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(413, 'PONOK', 'OFWEO', '//www.gravatar.com/avatar/4aabc56dc8fb2d7b82763612448e267c.jpg', 1, 18, 9, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(414, 'WAIJI', 'HUPJA', '//www.gravatar.com/avatar/4f4b457ac20d28d674189c40f82cc58e.jpg', 1, 12, 5, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(415, 'ACARP', 'ICDAL', '//www.gravatar.com/avatar/33815df5016bc8d5405e7970886f0a4e.jpg', 1, 14, 12, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(416, 'LOTPI', 'RONTO', '//www.gravatar.com/avatar/1f5556b6547fd64503315d33facc0108.jpg', 1, 9, 4, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(417, 'NEHNI', 'DINAJ', '//www.gravatar.com/avatar/04f6021f5ae636a313079c3b9098ac49.jpg', 1, 11, 1, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(418, 'EWBOZ', 'LENPA', '//www.gravatar.com/avatar/5672a76d58fc9c1b3118625021a5cc89.jpg', 1, 3, 11, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(419, 'AFETU', 'TIGTU', '//www.gravatar.com/avatar/1888332a6fb59004b1a4de9354c0a8f8.jpg', 1, 1, 7, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(420, 'BIVIS', 'WILHA', '//www.gravatar.com/avatar/edef11f8c9f0ece2539450d610eebe46.jpg', 1, 2, 4, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(421, 'BAPOS', 'LIVKE', '//www.gravatar.com/avatar/5d17c54a62271cb8cb7a6d7600d1c82b.jpg', 1, 2, 4, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(422, 'VINKU', 'HIZJA', '//www.gravatar.com/avatar/22c1c782432c35a60fb58711609627b4.jpg', 1, 14, 9, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(423, 'EPISV', 'DENOR', '//www.gravatar.com/avatar/0b0489c36a9ef086385e2ce160c9175f.jpg', 1, 5, 12, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(424, 'TUTBU', 'SOCIA', '//www.gravatar.com/avatar/39ab3d54c655161c3823554186a3abf1.jpg', 1, 6, 11, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(425, 'JEKUE', 'PONIG', '//www.gravatar.com/avatar/5ce8bced54dc1777cbc91d4ab3aebb54.jpg', 1, 12, 4, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(426, 'BAUZM', 'TOOTO', '//www.gravatar.com/avatar/81210f94cef528a2ef270ed83cef53d3.jpg', 1, 15, 6, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(427, 'ZUIFU', 'GASGU', '//www.gravatar.com/avatar/7e28967f1c1908ad310728de45da22bd.jpg', 1, 15, 1, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(428, 'MUBBE', 'WULUG', '//www.gravatar.com/avatar/5abb47facdf6ef239b20cc768d9b9b0c.jpg', 1, 4, 12, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(429, 'BOVOG', 'ITWIM', '//www.gravatar.com/avatar/f6296aecd109066faa2e34761237e66e.jpg', 1, 12, 1, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(430, 'OGIJA', 'GISEK', '//www.gravatar.com/avatar/377a5e7e2876102333be04e830fb3721.jpg', 1, 18, 4, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(431, 'FUHKU', 'JAJWA', '//www.gravatar.com/avatar/c7fef30524796d424d10e1a42965bd82.jpg', 1, 16, 10, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(432, 'ONUTO', 'JUGIU', '//www.gravatar.com/avatar/852703a9521cb12d97c125712ddedfe1.jpg', 1, 10, 12, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(433, 'TUSEK', 'ZAOVA', '//www.gravatar.com/avatar/a51bab368c80925261e605e7a707fd48.jpg', 1, 13, 4, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(434, 'LUTEB', 'ITEAZ', '//www.gravatar.com/avatar/528db18f74ab17340bcecf10ac45430b.jpg', 1, 7, 2, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(435, 'BOPKA', 'JICDE', '//www.gravatar.com/avatar/a7410e61bdc0d62db8bb0804f1e5dcd3.jpg', 1, 5, 2, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(436, 'ICNOD', 'GELEM', '//www.gravatar.com/avatar/eb769dccbd72162a6fee96f4fa79816d.jpg', 1, 15, 10, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(437, 'PUCVO', 'ADAOC', '//www.gravatar.com/avatar/338de16a082e339d4d95ea7c1def1aa5.jpg', 1, 16, 11, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(438, 'VOGEG', 'GAIHO', '//www.gravatar.com/avatar/afff663e93a120c0b4dfc0215b9d5e44.jpg', 1, 19, 12, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(439, 'ARJIE', 'AHNON', '//www.gravatar.com/avatar/61a9c5a128aeedbb6e570e7ca0298255.jpg', 1, 17, 7, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(440, 'JIFEW', 'POHLU', '//www.gravatar.com/avatar/5fc1dcf7eafa945e331da683f6ccf812.jpg', 1, 4, 9, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(441, 'SEUHA', 'TEENV', '//www.gravatar.com/avatar/157e693ee72924da675d61f018086d0f.jpg', 1, 7, 10, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(442, 'DOZHI', 'RADMA', '//www.gravatar.com/avatar/2d3b67bb9a73b64fc233aa6094ab2480.jpg', 1, 6, 6, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(443, 'HODAV', 'GASOS', '//www.gravatar.com/avatar/79ffafc8769260d61d5ef03c2a134084.jpg', 1, 3, 6, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(444, 'TOLVU', 'NAIGF', '//www.gravatar.com/avatar/912d3cec6e5145911365476abd9e0586.jpg', 1, 12, 1, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(445, 'IJIBO', 'OGDUP', '//www.gravatar.com/avatar/86c411217b52bfff4acf9d80b736460e.jpg', 1, 16, 7, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(446, 'JAMEG', 'KUNUB', '//www.gravatar.com/avatar/37c696557e9f334e7df502a2f794a719.jpg', 1, 3, 5, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(447, 'EHIGI', 'EJUTI', '//www.gravatar.com/avatar/75564a89a9e6f1c87e22446195b783bb.jpg', 1, 20, 5, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(448, 'ONAZW', 'ZIRRA', '//www.gravatar.com/avatar/ab9e1345b4850fe8fc0241b08123aa28.jpg', 1, 4, 8, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(449, 'NIOJI', 'UNRUF', '//www.gravatar.com/avatar/ceab18d3af1ab022abb34c04c56e9ac3.jpg', 1, 8, 8, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(450, 'COMFE', 'OMINU', '//www.gravatar.com/avatar/6861b794f1e7ab31955cd9e9ef13b87f.jpg', 1, 18, 1, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(451, 'FUTAT', 'ROCAP', '//www.gravatar.com/avatar/1a3a833a1820aad83b6728825a91f3ca.jpg', 1, 18, 9, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(452, 'TUIPU', 'REDIW', '//www.gravatar.com/avatar/c121408d49013f92c8b6b643d0fd7ae0.jpg', 1, 17, 12, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(453, 'BIOMG', 'LUURJ', '//www.gravatar.com/avatar/e7233d7a588f4ebc12549917a87aa7a0.jpg', 1, 19, 3, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(454, 'BARLO', 'AMUTA', '//www.gravatar.com/avatar/921ad33ff7b20ee96f37718af9aa0e58.jpg', 1, 11, 9, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(455, 'DUMUH', 'VANAD', '//www.gravatar.com/avatar/c289b05e23c3c8f9d4c77a2f9b0e7785.jpg', 1, 2, 10, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(456, 'VEFDU', 'GAFUZ', '//www.gravatar.com/avatar/4cba8ccda15362a6c79f0329d51044a0.jpg', 1, 3, 8, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(457, 'CUOJI', 'BIKAL', '//www.gravatar.com/avatar/de6feb4dff018d3ccaa13f73df31bd4b.jpg', 1, 11, 2, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(458, 'DOEPF', 'POMUB', '//www.gravatar.com/avatar/9fb553cccf41dc4d2b5e41bfd8c86a1a.jpg', 1, 10, 11, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(459, 'SUTUA', 'ZUGVU', '//www.gravatar.com/avatar/23ab81c793a4615228fe30a12d5f0190.jpg', 1, 16, 1, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(460, 'EFDAL', 'VUAHZ', '//www.gravatar.com/avatar/503467c0621dc84fd1b0427512a04e38.jpg', 1, 3, 9, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(461, 'JUZOC', 'KEGOJ', '//www.gravatar.com/avatar/100be1ef0677583a8391828090f4534f.jpg', 1, 5, 9, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(462, 'MOBAG', 'EFILE', '//www.gravatar.com/avatar/56420b70d1a84d11333be4755ffba5b5.jpg', 1, 20, 10, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(463, 'RIGUP', 'KOROJ', '//www.gravatar.com/avatar/38f8cfd646a27b59f7ebc4f1bc63a397.jpg', 1, 18, 8, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(464, 'JOWAH', 'UGREG', '//www.gravatar.com/avatar/21e6ccda046b0694b3882baaa524bf79.jpg', 1, 18, 2, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(465, 'FUKUV', 'OJOZI', '//www.gravatar.com/avatar/c8a9dc9399022c78445045b0529e2a7f.jpg', 1, 19, 10, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(466, 'IRZIZ', 'JUSEZ', '//www.gravatar.com/avatar/cdcd203abfc2c600ef05152728e2d4d5.jpg', 1, 18, 4, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(467, 'UZISD', 'SESHU', '//www.gravatar.com/avatar/2e44602d1c6e8b24c2b5fa16dd2e8757.jpg', 1, 7, 2, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(468, 'KANEE', 'AGEDE', '//www.gravatar.com/avatar/267cf37f3ac0c62e0059c198afc7d05d.jpg', 1, 2, 3, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(469, 'ZERAG', 'LUBET', '//www.gravatar.com/avatar/792c5094f19bd2692bc084a5fa1a8034.jpg', 1, 12, 4, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(470, 'TOGHE', 'ZUZFA', '//www.gravatar.com/avatar/a3501d74babb723019d29262c1ca2b83.jpg', 1, 1, 3, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(471, 'MOUCU', 'BEMUD', '//www.gravatar.com/avatar/58dbfc05533bae8ff993e71db6df2857.jpg', 1, 14, 5, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(472, 'POTCU', 'LAJLA', '//www.gravatar.com/avatar/361eedfed9917f57b8b34a004792634e.jpg', 1, 7, 8, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(473, 'VIKDE', 'WUJAS', '//www.gravatar.com/avatar/69e19f83d837a63e6a2596fa83fdcd6b.jpg', 1, 15, 5, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(474, 'UJEVA', 'JEILI', '//www.gravatar.com/avatar/9870f20ff8a7dbac1da85a955928f193.jpg', 1, 17, 3, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(475, 'OZACA', 'AMORI', '//www.gravatar.com/avatar/11e21a5834ecb494b2085625303bb443.jpg', 1, 10, 2, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(476, 'PODDO', 'SIMIO', '//www.gravatar.com/avatar/d741678df6c0696474666b4f1fe39823.jpg', 1, 4, 7, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(477, 'FOTIC', 'KEZVO', '//www.gravatar.com/avatar/59ca73401d75664fcd829574626269eb.jpg', 1, 4, 8, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(478, 'POCUO', 'BAUKA', '//www.gravatar.com/avatar/3628bea3b1b834455b9652e32232170f.jpg', 1, 16, 3, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(479, 'FUBWI', 'NEMUK', '//www.gravatar.com/avatar/b65655a9d39f6cf9a95e44f1caa76a5d.jpg', 1, 18, 10, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(480, 'PINCO', 'ZABUS', '//www.gravatar.com/avatar/9e9ca0f924947b30459b94d86b9a11d0.jpg', 1, 18, 2, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(481, 'FOCOF', 'SACSI', '//www.gravatar.com/avatar/514844e2a0a6ae0b41a66e7745c2163e.jpg', 1, 8, 12, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(482, 'FUNIP', 'TUMEV', '//www.gravatar.com/avatar/fed23d55a8021907d9f21398801a16f3.jpg', 1, 2, 8, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(483, 'WOOZK', 'ZUGBA', '//www.gravatar.com/avatar/b750bc848fee6b2f89372a4fe5a88eb4.jpg', 1, 4, 10, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(484, 'LIFGO', 'KOZKO', '//www.gravatar.com/avatar/96202fe21c499b420d33ec2647ee6d6c.jpg', 1, 9, 7, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(485, 'MEJKO', 'EDAJO', '//www.gravatar.com/avatar/18915a99afe8f8d1299b58bbed1d983f.jpg', 1, 5, 9, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(486, 'GUZAB', 'ZUNHA', '//www.gravatar.com/avatar/f7458665021891ec461f6bd012676427.jpg', 1, 5, 10, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(487, 'HOAKO', 'ETGIF', '//www.gravatar.com/avatar/83960d6d8e8aac88b32e801394872e94.jpg', 1, 16, 8, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(488, 'EJUPA', 'FOLEJ', '//www.gravatar.com/avatar/306961718863a1cdc014ccb9ea1196ce.jpg', 1, 6, 2, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(489, 'VOMIH', 'HOCTO', '//www.gravatar.com/avatar/f6ca8fe22ef897b07a9ad09e23d2ef2a.jpg', 1, 1, 10, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(490, 'ZEOHN', 'JATDE', '//www.gravatar.com/avatar/6655557a65dfda58e190dc48318a42f9.jpg', 1, 8, 9, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(491, 'TESIZ', 'RAROG', '//www.gravatar.com/avatar/e07bed516a6b5d6ee792ca6a9acd58d0.jpg', 1, 10, 7, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(492, 'WUFEF', 'PARUV', '//www.gravatar.com/avatar/b5f9e84fc36a93e7097a84c895def6d2.jpg', 1, 1, 11, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(493, 'EWIHO', 'HABDE', '//www.gravatar.com/avatar/5d3a3e8472ed46f3675e6f4c56e235a8.jpg', 1, 5, 1, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(494, 'OMAVE', 'TAVAZ', '//www.gravatar.com/avatar/e81f49b0531566179890b7b2f42ff2a5.jpg', 1, 12, 11, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(495, 'MOZBU', 'SOSIG', '//www.gravatar.com/avatar/126c9e9e1a0d841718a2a2653c864065.jpg', 1, 12, 3, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(496, 'CIMET', 'VUZNO', '//www.gravatar.com/avatar/7f90edfaec312c577ae2a165c79a31cb.jpg', 1, 14, 2, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(497, 'WETGU', 'LETIJ', '//www.gravatar.com/avatar/ebd6f580f51b4c35f294a5ef49b4f6a5.jpg', 1, 7, 5, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(498, 'AFOFA', 'KASMU', '//www.gravatar.com/avatar/6f23b877bfa2bc66db9fef4f2317e424.jpg', 1, 3, 6, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(499, 'RONGE', 'WONRO', '//www.gravatar.com/avatar/1ea862d919f3036aaf697540d3a1f63e.jpg', 1, 7, 7, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(500, 'LUIZF', 'GUFOR', '//www.gravatar.com/avatar/e7568916c4ba046aea763133474db01f.jpg', 1, 14, 3, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(501, 'OKVIA', 'KUHBO', '//www.gravatar.com/avatar/81e45cb3df23dc2644a77953d7b2e227.jpg', 1, 2, 2, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(502, 'DERUB', 'JOKTI', '//www.gravatar.com/avatar/3c7447336d83dcc6d0ffdeb4c6f74f36.jpg', 1, 8, 7, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(503, 'BIOBZ', 'REPED', '//www.gravatar.com/avatar/ac87ed317ccac75ebebb8f5403a66a55.jpg', 1, 18, 3, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(504, 'ASIOV', 'WAIME', '//www.gravatar.com/avatar/76ece1c494791bdaf1cbe2e89afd0233.jpg', 1, 2, 8, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(505, 'GIUCA', 'UWEMA', '//www.gravatar.com/avatar/3ecd5684080e4b21540433e72f1e893c.jpg', 1, 9, 4, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(506, 'ZUUMU', 'BAHRA', '//www.gravatar.com/avatar/3f24170aee77e60eb9acb842f517f718.jpg', 1, 5, 10, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(507, 'VEWOL', 'OVEKO', '//www.gravatar.com/avatar/00054f2eeea86a7317fcc119dc86c5db.jpg', 1, 13, 10, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(508, 'TAUVO', 'OGIPU', '//www.gravatar.com/avatar/c76b0ea4c15ab20f652e50dc54791e9b.jpg', 1, 10, 1, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(509, 'AJIHO', 'IKGOR', '//www.gravatar.com/avatar/32ad3000e93c091bf624ab208573bee9.jpg', 1, 6, 7, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(510, 'SURAG', 'WIFUR', '//www.gravatar.com/avatar/dfc389b145591f62c551b12a336cd8ad.jpg', 1, 6, 8, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(511, 'BIAFI', 'NILUJ', '//www.gravatar.com/avatar/b75a8cecebe2467b8986f8607610127f.jpg', 1, 14, 1, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(512, 'TAPAT', 'PAPIM', '//www.gravatar.com/avatar/3ec42ae9bf034f2012393bda7f00a254.jpg', 1, 4, 5, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(513, 'NEPAK', 'DIISS', '//www.gravatar.com/avatar/c08acdc95d1c1e1802b001da15c29fe9.jpg', 1, 4, 4, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(514, 'CIWRA', 'UVJAL', '//www.gravatar.com/avatar/b82ac3df08b92c754821f8d414e48c0f.jpg', 1, 13, 7, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(515, 'JIUSW', 'GUVSE', '//www.gravatar.com/avatar/490fb03ac1a7c64652f05daebc337c2d.jpg', 1, 2, 7, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(516, 'UGSOM', 'FEGGO', '//www.gravatar.com/avatar/c8489a7e4cdc2c52b9635727e6e82f50.jpg', 1, 20, 12, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(517, 'CUDUN', 'WEJFO', '//www.gravatar.com/avatar/7966f62c5a20e9a40ec96243fdf61717.jpg', 1, 7, 3, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(518, 'ICWAU', 'JEONU', '//www.gravatar.com/avatar/cce3879b97710c03edc813fa7decaa89.jpg', 1, 12, 8, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(519, 'SUBIF', 'SOTLU', '//www.gravatar.com/avatar/a8d8088f877d8b6bc5802af7b053bf97.jpg', 1, 3, 9, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(520, 'IKTUP', 'PONGO', '//www.gravatar.com/avatar/ecdae7b9f73c1a4eddc2e231884f43bf.jpg', 1, 19, 3, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(521, 'PONPU', 'GOLFO', '//www.gravatar.com/avatar/647b885bfe2c6ed46ec9145a7782768e.jpg', 1, 8, 1, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(522, 'SEMON', 'CUNUM', '//www.gravatar.com/avatar/3cb32e4ca2019885eae4da7b57dc1b38.jpg', 1, 12, 4, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(523, 'CIPUM', 'IHCAO', '//www.gravatar.com/avatar/4043a43743d709e081c4f907e0228493.jpg', 1, 20, 2, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(524, 'WUGPI', 'KITUB', '//www.gravatar.com/avatar/8073d9ad590e292919a241f1ca8e9dfa.jpg', 1, 1, 12, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(525, 'JOCMU', 'IMETI', '//www.gravatar.com/avatar/d5d7b053f4d5ccaa642c36cae255b3b0.jpg', 1, 6, 1, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(526, 'OBIGA', 'HUHIS', '//www.gravatar.com/avatar/1899c93ad99d1c5754238f64679e6de0.jpg', 1, 18, 12, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(527, 'JIZIC', 'VODOU', '//www.gravatar.com/avatar/127332febadbd1c416cce684d4546911.jpg', 1, 3, 6, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(528, 'ATGUC', 'RAZMO', '//www.gravatar.com/avatar/34c339996cbff9ccd112904a2351c563.jpg', 1, 5, 9, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(529, 'GUSIB', 'SAGME', '//www.gravatar.com/avatar/b83ed1581f2fb2669bb8d958d3604413.jpg', 1, 1, 10, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(530, 'KAGCU', 'RIDEZ', '//www.gravatar.com/avatar/c02e7fc8b5055219beeed21918542732.jpg', 1, 4, 6, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(531, 'MORBO', 'ZOLOZ', '//www.gravatar.com/avatar/51382736dab21cb9e48ca2a8bd409555.jpg', 1, 16, 7, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(532, 'ZAJIB', 'WESFA', '//www.gravatar.com/avatar/250c1e1c3e64efbf47c96fc4075d88c3.jpg', 1, 10, 4, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(533, 'TOLDO', 'WOGVE', '//www.gravatar.com/avatar/3e983f33aaa18c02d68c6e741db87d66.jpg', 1, 12, 8, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(534, 'UHAUS', 'ADEBA', '//www.gravatar.com/avatar/1c11067aab12b92a1ec999bf2dbaa2e3.jpg', 1, 15, 7, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(535, 'GOHEW', 'MOCOF', '//www.gravatar.com/avatar/a25399cfd6cc13785a321d5abd2a7bd6.jpg', 1, 15, 1, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(536, 'GELSU', 'UDUUZ', '//www.gravatar.com/avatar/d03c1681b681f6409178314685de33a3.jpg', 1, 1, 10, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(537, 'KUDZI', 'WOWZO', '//www.gravatar.com/avatar/93114cb581a476135734e7c7682d4747.jpg', 1, 2, 10, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(538, 'UZUMO', 'OSAWO', '//www.gravatar.com/avatar/c4a39981f7e57bacca5e6fe7ed8e2648.jpg', 1, 10, 10, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(539, 'ETTOZ', 'BOBKE', '//www.gravatar.com/avatar/bb3ffecdf6177ffd5f4f0fdc12cbf994.jpg', 1, 14, 6, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(540, 'OTIWT', 'MUJVA', '//www.gravatar.com/avatar/6799a332bc1784807924d0b567d5cb8d.jpg', 1, 7, 12, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(541, 'LOZCO', 'MUCKE', '//www.gravatar.com/avatar/6c0f1473665bb0154630acc3f09286e8.jpg', 1, 16, 5, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(542, 'SEPLO', 'TUVWA', '//www.gravatar.com/avatar/1b0ca9ec25b506ae27d6c6ca739b16e5.jpg', 1, 9, 3, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(543, 'ZEVFO', 'KUZEW', '//www.gravatar.com/avatar/e10a2e3ed946ebd66ed848127efedb09.jpg', 1, 2, 2, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(544, 'OSDIS', 'TABAD', '//www.gravatar.com/avatar/6850c2c57d1df7eb1f89cdee22b49e9c.jpg', 1, 14, 5, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(545, 'TEPED', 'WUMTA', '//www.gravatar.com/avatar/560e1f02ec68ba1682fe5a3de459aa7a.jpg', 1, 4, 6, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(546, 'ZANGU', 'DAMOF', '//www.gravatar.com/avatar/bb1bfde169034ad3df99ab8b5064719b.jpg', 1, 19, 3, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(547, 'LAKVI', 'HAAMF', '//www.gravatar.com/avatar/8ca96916aa9e62ed720db8b9d403d596.jpg', 1, 13, 8, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(548, 'EWITE', 'VUSAU', '//www.gravatar.com/avatar/ab291ec90f58b8fa169e5933f7d4101d.jpg', 1, 18, 11, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(549, 'LADSU', 'LIBOT', '//www.gravatar.com/avatar/4bf53989ec9c35a911cd11473e149af6.jpg', 1, 5, 5, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(550, 'KOGLU', 'ZEDPA', '//www.gravatar.com/avatar/181717e42cd4a6575fce768523ee48c2.jpg', 1, 14, 6, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(551, 'VOIPF', 'UWEPA', '//www.gravatar.com/avatar/bd9b619b61e62322dc76335efc767e7c.jpg', 1, 8, 1, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(552, 'NUJPU', 'HEGEZ', '//www.gravatar.com/avatar/ec76da0fd917664639ddb0f64120a4c3.jpg', 1, 6, 7, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(553, 'JUDAM', 'IFAAH', '//www.gravatar.com/avatar/8b2769a569b31bb5d2eb6b1ac01ad1bd.jpg', 1, 7, 11, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(554, 'CAHGI', 'PANZU', '//www.gravatar.com/avatar/2d198441def708ad2c4787c1ca98d1a7.jpg', 1, 16, 9, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(555, 'RUZAW', 'HATPA', '//www.gravatar.com/avatar/ea3e22ac72bad16e190cea0a539db0af.jpg', 1, 19, 12, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(556, 'IMIMO', 'REMEG', '//www.gravatar.com/avatar/c261c3539b0f007f5877e3767b5e3b1c.jpg', 1, 13, 1, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(557, 'SEKUS', 'COJDU', '//www.gravatar.com/avatar/9ed7907a8d00c9e3db54348e66f2d063.jpg', 1, 4, 7, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(558, 'TODDO', 'TIZUL', '//www.gravatar.com/avatar/9a571b875102a16e6215708f3d6b907a.jpg', 1, 19, 1, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(559, 'PUWGI', 'WAIFO', '//www.gravatar.com/avatar/859b2bbf550999626fd4d6bd6b7038d1.jpg', 1, 17, 12, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(560, 'ZEHTE', 'WUZAB', '//www.gravatar.com/avatar/1262814749c6cc2cd2450af4554ed55f.jpg', 1, 6, 9, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(561, 'KOFTO', 'LEANZ', '//www.gravatar.com/avatar/7ee3f01f6b7fde2c3b6c972e1ca41251.jpg', 1, 2, 6, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(562, 'TAHUA', 'PIDAH', '//www.gravatar.com/avatar/ef798fa251c03df6c1feadce75bfef8a.jpg', 1, 18, 1, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(563, 'MEIJF', 'KUFIK', '//www.gravatar.com/avatar/97cf57ddde00cc5cf61647500c83a639.jpg', 1, 11, 9, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(564, 'EWOFO', 'JALRO', '//www.gravatar.com/avatar/97874d48403e4a636c7fa9edeed579d3.jpg', 1, 9, 10, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(565, 'CIBBA', 'ZOMNU', '//www.gravatar.com/avatar/c4fbc2cc6f866f5eae06def80b2aab3f.jpg', 1, 14, 9, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(566, 'SIKOK', 'FOHKI', '//www.gravatar.com/avatar/bf17b6faa7671bc7ce3a5663af0e341a.jpg', 1, 13, 2, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(567, 'DOTOM', 'EBOZO', '//www.gravatar.com/avatar/49035fdd62aef7b8ca8bb4a19ee07de3.jpg', 1, 11, 9, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(568, 'BOHUG', 'DABIB', '//www.gravatar.com/avatar/c205130ecd68bc1fb3bfbfd19908bffb.jpg', 1, 8, 10, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(569, 'DOZLI', 'CUDOF', '//www.gravatar.com/avatar/475a76af103b970373723bc42308b42f.jpg', 1, 8, 9, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(570, 'BOKUL', 'DUZRI', '//www.gravatar.com/avatar/5f810c44b9695dcabf029936f5fe2a2f.jpg', 1, 6, 5, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(571, 'PIMCO', 'OFEGO', '//www.gravatar.com/avatar/14313fbe35838104c7261107e84c0b6b.jpg', 1, 16, 6, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(572, 'CINKA', 'WIKUN', '//www.gravatar.com/avatar/eccdf7c9dc11a7cd2e26d576af446f52.jpg', 1, 19, 11, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(573, 'FUEHA', 'RUSWO', '//www.gravatar.com/avatar/dc0418a37d3e7f0158906c296f102ab3.jpg', 1, 14, 11, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(574, 'JABUM', 'KIFOU', '//www.gravatar.com/avatar/c000983f4b0989f316fc9374fde1b7db.jpg', 1, 9, 12, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(575, 'LUNDA', 'RAVIF', '//www.gravatar.com/avatar/40ed7569f6790d84bbc85472a8ba4a1f.jpg', 1, 12, 1, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(576, 'KUWDA', 'JEGED', '//www.gravatar.com/avatar/fe369ddd1926b1c16339cac1457d4d8f.jpg', 1, 14, 3, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(577, 'LENRO', 'WAFRA', '//www.gravatar.com/avatar/dc07a501c663af4bd5a92ea3bb192d66.jpg', 1, 20, 6, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(578, 'GODKO', 'FAVUJ', '//www.gravatar.com/avatar/e83212d03a72239a66eeae6b77eab72a.jpg', 1, 1, 7, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(579, 'JOZBE', 'ZAVTE', '//www.gravatar.com/avatar/f5dea0281c8e6ef3b3babe7a34e5f207.jpg', 1, 4, 4, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(580, 'APILE', 'PEVOI', '//www.gravatar.com/avatar/f70be3e5cedb16270025c298e2f4ee75.jpg', 1, 11, 8, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(581, 'MEIJI', 'KENIM', '//www.gravatar.com/avatar/cbbd47868f924b8e2b9db5e97ab6300a.jpg', 1, 16, 7, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(582, 'UZERO', 'JEPVO', '//www.gravatar.com/avatar/06a4dac050e5e228424ca50860eab239.jpg', 1, 6, 12, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(583, 'CACJO', 'RALDA', '//www.gravatar.com/avatar/3950394f45f6da5a820eea9f299e6f7e.jpg', 1, 7, 4, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(584, 'JIVAC', 'KIWWE', '//www.gravatar.com/avatar/8d0e4774ecc34efe082025b7b77ee9ce.jpg', 1, 1, 6, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(585, 'LEMDE', 'CEJDE', '//www.gravatar.com/avatar/a447a77c0c210d928f9b686686cd10ea.jpg', 1, 17, 11, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(586, 'PIWAO', 'TIWLA', '//www.gravatar.com/avatar/0535182e3f01f56ae1b12ba392a8af0d.jpg', 1, 17, 9, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(587, 'OCMEB', 'NEVZO', '//www.gravatar.com/avatar/5f5c92b40eed7a7ae57596781f9050bd.jpg', 1, 17, 12, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(588, 'MIGOT', 'CIJIK', '//www.gravatar.com/avatar/ce5e6a67cb97bec8bff0d1410fb5474c.jpg', 1, 13, 10, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(589, 'PURGI', 'DUFOK', '//www.gravatar.com/avatar/2f04c71b38578a8c64f5d0b06ddc7c7d.jpg', 1, 20, 6, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(590, 'PIDET', 'ZAWUV', '//www.gravatar.com/avatar/45befe887ddd5b6621ff9d3ef7f929ee.jpg', 1, 8, 8, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(591, 'HITES', 'MUJIN', '//www.gravatar.com/avatar/1842b8666ea0b43823f5aac5d8e7cc2c.jpg', 1, 3, 2, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(592, 'KUZRA', 'GUZUS', '//www.gravatar.com/avatar/d7b779e120fb9f06aae159f226d7150f.jpg', 1, 2, 6, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(593, 'NANUH', 'PAZGU', '//www.gravatar.com/avatar/ce67794a0472f9e016e0ab8ba2fe8a96.jpg', 1, 3, 1, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(594, 'SOGUK', 'KORNI', '//www.gravatar.com/avatar/bd5b478204141fd473185dbd54c2208b.jpg', 1, 13, 11, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(595, 'HAHIU', 'TOWJE', '//www.gravatar.com/avatar/b16c9622f9bd1f2cbb623d5e7b260e23.jpg', 1, 17, 6, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(596, 'KICIK', 'WIPHI', '//www.gravatar.com/avatar/e535c16d0d1e7f8aac1ad861939459bc.jpg', 1, 3, 7, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(597, 'HULJU', 'VUCPO', '//www.gravatar.com/avatar/f228f61d8868b4214dab55f1495d19b7.jpg', 1, 8, 10, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(598, 'ZUJLI', 'FEKLI', '//www.gravatar.com/avatar/2ef7d56f4094230ab81f91c082a18665.jpg', 1, 9, 10, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(599, 'NICUD', 'HUHAF', '//www.gravatar.com/avatar/3e1095e1d75a78fc51474f7b33c06e8b.jpg', 1, 15, 11, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(600, 'ILOWA', 'LUWKE', '//www.gravatar.com/avatar/7ba7d7cf692ba2137acfbe77897a3844.jpg', 1, 20, 2, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(601, 'WUOTU', 'EBHIH', '//www.gravatar.com/avatar/f163dfec1cae8e59650c92eecd917fef.jpg', 1, 17, 2, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(602, 'AKHOC', 'AWIKU', '//www.gravatar.com/avatar/a099206e81e384786a5d516d56376d64.jpg', 1, 15, 5, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(603, 'GAUFA', 'HIRZA', '//www.gravatar.com/avatar/1c1dae132aad10ada77ebf14f4a6fa91.jpg', 1, 11, 5, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(604, 'UBOVE', 'OLECI', '//www.gravatar.com/avatar/98de07559e65ce222b7a8a185f3a242b.jpg', 1, 1, 8, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(605, 'UNPUN', 'RASOL', '//www.gravatar.com/avatar/62b438ab3fe9d09d846cec0ec7cf1de4.jpg', 1, 11, 2, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(606, 'DEROB', 'NAONB', '//www.gravatar.com/avatar/000a7552560ef1ae8e4d646eb5e408c2.jpg', 1, 9, 3, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(607, 'GEBFI', 'ZOWMI', '//www.gravatar.com/avatar/a3c3fb84ab4a27b3679b9a9010374771.jpg', 1, 13, 7, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(608, 'LILCI', 'ROLOK', '//www.gravatar.com/avatar/3a202de8c5c650c430733933f1140fbe.jpg', 1, 2, 12, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(609, 'MOPEN', 'OPLAV', '//www.gravatar.com/avatar/8afb34ae3d94013743087e4e51284a4d.jpg', 1, 10, 10, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(610, 'TIARU', 'UROLU', '//www.gravatar.com/avatar/107f8e23afcd630f9e21e040f4b14ef7.jpg', 1, 8, 1, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(611, 'MURZE', 'NITSE', '//www.gravatar.com/avatar/23d0ac05a899eb5aeb4278020fbfc880.jpg', 1, 8, 7, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(612, 'NITAI', 'KIKKI', '//www.gravatar.com/avatar/8fa53de5d7f70550184770ca13eac638.jpg', 1, 7, 9, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(613, 'TUTGO', 'ITCES', '//www.gravatar.com/avatar/c05ebbec3bc4ad6653b4528829019bc4.jpg', 1, 5, 4, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(614, 'PATPU', 'CUCEH', '//www.gravatar.com/avatar/1e37ec264b034d178bbbdd7f9ec0ca7b.jpg', 1, 14, 10, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(615, 'HEBOL', 'TAROB', '//www.gravatar.com/avatar/a7b4f9435ba4cb1d44a0b6c745118f82.jpg', 1, 15, 6, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(616, 'NITUT', 'MUDEE', '//www.gravatar.com/avatar/68bafe00493c3a9d2c8863edd183060a.jpg', 1, 8, 3, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(617, 'PIDPA', 'UGAUJ', '//www.gravatar.com/avatar/9f56ddc466365ba2a0c6ba3335c011dc.jpg', 1, 18, 8, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(618, 'CIRRE', 'ZOVIP', '//www.gravatar.com/avatar/c4eab369a6b193101eec2a96bdbf8ff9.jpg', 1, 11, 9, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(619, 'LOKBU', 'GEZAP', '//www.gravatar.com/avatar/78e144b2e807e3f13f897228ab68aba9.jpg', 1, 7, 1, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(620, 'EWAMA', 'HEZCA', '//www.gravatar.com/avatar/4415133c3d0b5663e922b0b62fec0b93.jpg', 1, 7, 4, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(621, 'PADHO', 'HICAV', '//www.gravatar.com/avatar/8064c78e763b0546bb7dc1b299ea4cae.jpg', 1, 7, 9, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(622, 'OKTAG', 'UGJAV', '//www.gravatar.com/avatar/a281c798d52c960ba75f4a4a4a70ad51.jpg', 1, 6, 8, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(623, 'CURUP', 'UVAZI', '//www.gravatar.com/avatar/9dadcf901608ea243cb669151c90fc8b.jpg', 1, 6, 12, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(624, 'OHKIZ', 'EKDOD', '//www.gravatar.com/avatar/0afb741fdb218b50571b22f10edb8556.jpg', 1, 19, 6, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(625, 'ORKOZ', 'RIVEB', '//www.gravatar.com/avatar/7c8f54f5d39273b7a2014cd18a41db01.jpg', 1, 17, 2, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(626, 'ZOHSU', 'CUDSA', '//www.gravatar.com/avatar/31c87511a30b07d1f602307a9345ee47.jpg', 1, 9, 5, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(627, 'OJUHE', 'WAKOE', '//www.gravatar.com/avatar/34dadc89bceadf7240a39945297d2859.jpg', 1, 20, 11, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(628, 'KUWFI', 'CIUVC', '//www.gravatar.com/avatar/5d584f798c4172d3440ac0b0f69cedc3.jpg', 1, 6, 8, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(629, 'DEVED', 'HELEE', '//www.gravatar.com/avatar/49cd424c6ed187f124ed084893722d99.jpg', 1, 1, 10, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(630, 'OKJEO', 'REAMI', '//www.gravatar.com/avatar/3e03cbebcaa40fd13dbc97646ce8a0bb.jpg', 1, 19, 9, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(631, 'OROKO', 'LESWA', '//www.gravatar.com/avatar/0819cc282845ec32e447e5c190f6c939.jpg', 1, 12, 9, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(632, 'UVUVU', 'ZOTOF', '//www.gravatar.com/avatar/0e3de306b4b2efd82fd0bb9acd8902d3.jpg', 1, 10, 10, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(633, 'CECOL', 'TESBE', '//www.gravatar.com/avatar/a36b1d96e58e9b9d8c1a17a9a3398b8c.jpg', 1, 3, 8, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(634, 'IRISI', 'VIVAM', '//www.gravatar.com/avatar/af78d5b982dc7e5ae845ece829c7c7d8.jpg', 1, 14, 4, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(635, 'POARO', 'PEPAN', '//www.gravatar.com/avatar/5194a6197641dc9e9feb7e1016f54ea0.jpg', 1, 2, 3, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(636, 'CATEE', 'SUKCI', '//www.gravatar.com/avatar/2b7be072ec490ee0d27d5305998f2d22.jpg', 1, 4, 12, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(637, 'AKJAC', 'EVAOV', '//www.gravatar.com/avatar/ea16cb8dc503ff0896abf6c36c8e8444.jpg', 1, 11, 1, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(638, 'TOKLU', 'KESMI', '//www.gravatar.com/avatar/9542def475a94e04000e1698aa3f3cbf.jpg', 1, 16, 6, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(639, 'AJDAZ', 'LIBAF', '//www.gravatar.com/avatar/ba5fcce791cda813cd983b861d902a02.jpg', 1, 19, 9, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(640, 'WANNU', 'IVFOJ', '//www.gravatar.com/avatar/7c7b045e759f7b62a82c0e752e7dd13d.jpg', 1, 11, 1, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(641, 'NEWAM', 'VULOB', '//www.gravatar.com/avatar/dc36d988202bfba495cc35eccdb0fe36.jpg', 1, 14, 2, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(642, 'ARPOM', 'GAKAC', '//www.gravatar.com/avatar/dee0f50fcb61ad64e5e6d870b6549269.jpg', 1, 11, 8, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(643, 'ZUOTU', 'KIKGA', '//www.gravatar.com/avatar/71f79ecf9170304e4d7fc78f7d265a85.jpg', 1, 12, 2, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(644, 'DALSU', 'NEOSE', '//www.gravatar.com/avatar/c15b40ac71d9528b98d9e05b6a06b026.jpg', 1, 12, 3, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(645, 'LAACL', 'TABET', '//www.gravatar.com/avatar/abaed9421c3a87dc6bbd07ffcac894e3.jpg', 1, 16, 2, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(646, 'NAHJI', 'IHUJE', '//www.gravatar.com/avatar/3a8b971e76dfb771274598b899dac0b3.jpg', 1, 14, 3, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(647, 'AVOVU', 'TUNNO', '//www.gravatar.com/avatar/9c76243ac0141407c48fbf387f2fffad.jpg', 1, 7, 8, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(648, 'GERUI', 'MUKCE', '//www.gravatar.com/avatar/22bdb953286cdd99612cc67df19b15f0.jpg', 1, 14, 5, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(649, 'ADIZU', 'RUUSI', '//www.gravatar.com/avatar/ea7f6e15fecd5445c70400494a8c1037.jpg', 1, 12, 1, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(650, 'OCEZA', 'RIVIT', '//www.gravatar.com/avatar/df170ee8abaad5667409313132f98208.jpg', 1, 15, 4, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(651, 'AKCIT', 'JIWOK', '//www.gravatar.com/avatar/6b7258f7c4a90290904a8db6cf24c617.jpg', 1, 6, 2, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(652, 'JUBLA', 'SAGFI', '//www.gravatar.com/avatar/d556c937493340f6fbab49a8abd6c966.jpg', 1, 19, 7, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(653, 'ONUJE', 'GOZIF', '//www.gravatar.com/avatar/c49f2af86eab47e4753397571e6a6bed.jpg', 1, 5, 1, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(654, 'EDAOJ', 'JADUG', '//www.gravatar.com/avatar/e84ada80d6a1719e6ac5b5c9ba72e2be.jpg', 1, 13, 2, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(655, 'KOWNO', 'MERNE', '//www.gravatar.com/avatar/f7abd0098b65bbbbd443b5fd9ba869c7.jpg', 1, 17, 10, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(656, 'DOOVI', 'BOMRU', '//www.gravatar.com/avatar/321bf8ae274df04424ab69a25dffde00.jpg', 1, 18, 8, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(657, 'SEKAK', 'TEWTE', '//www.gravatar.com/avatar/c822cafdf758fce1b6006ec0ef07a20b.jpg', 1, 4, 6, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(658, 'IPUJA', 'VOVAB', '//www.gravatar.com/avatar/b9d92be274c36aa25e7ef5bf49fd9f5b.jpg', 1, 2, 8, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(659, 'VUPAT', 'VIMZA', '//www.gravatar.com/avatar/117dfff0f94b93bd8fe20cfe17ac3f84.jpg', 1, 3, 12, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(660, 'SEICI', 'WEEVK', '//www.gravatar.com/avatar/e3157513c213c612d4bcada832ec1ed5.jpg', 1, 7, 4, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(661, 'UDUFE', 'TAFOV', '//www.gravatar.com/avatar/d3bbf4712818cae41cfc7d5cd63ae9f9.jpg', 1, 15, 2, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(662, 'HOUHE', 'ZOMLU', '//www.gravatar.com/avatar/a16f84ab5a80ed4854a8561096632a91.jpg', 1, 13, 11, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(663, 'NOCMA', 'BAPGI', '//www.gravatar.com/avatar/8024a0cd53b81613f31feeddf7c354d5.jpg', 1, 9, 11, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(664, 'SIEPU', 'OJKEF', '//www.gravatar.com/avatar/68af2da31c7783f662d1b83d42949efc.jpg', 1, 2, 10, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(665, 'FUSEM', 'IWLUF', '//www.gravatar.com/avatar/41481b66f19bd5b72e750cb7bb923d80.jpg', 1, 4, 4, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(666, 'TUPEM', 'WOSAS', '//www.gravatar.com/avatar/215b5604030d2d1b030af43d621bdebc.jpg', 1, 13, 2, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(667, 'TADOD', 'TOJNA', '//www.gravatar.com/avatar/d572e221c74844a76d733902af876e2b.jpg', 1, 7, 8, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(668, 'UHADI', 'HEWAG', '//www.gravatar.com/avatar/6a5d8aa2fcf6bed38bf886e07d94c919.jpg', 1, 7, 1, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(669, 'TECBI', 'BUDUJ', '//www.gravatar.com/avatar/065a071e6b2bf1373b570682d195f8e4.jpg', 1, 18, 7, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(670, 'KUTSO', 'IGECH', '//www.gravatar.com/avatar/5374edeb3ada1131af2966f8cb3dfcc2.jpg', 1, 7, 3, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(671, 'CORAJ', 'MUZUZ', '//www.gravatar.com/avatar/d79a027daa9c73680a42f17fae39342f.jpg', 1, 3, 3, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(672, 'VODPI', 'NIWDE', '//www.gravatar.com/avatar/135962ff243a89a491e58587443278da.jpg', 1, 14, 11, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(673, 'FONZI', 'ZEAPA', '//www.gravatar.com/avatar/c9500868343491eaad34d42c5600feb4.jpg', 1, 16, 12, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(674, 'GAOHI', 'RUJSE', '//www.gravatar.com/avatar/c26489c044559bea1df5049253b4121c.jpg', 1, 7, 5, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(675, 'JERUN', 'DUJNU', '//www.gravatar.com/avatar/dd4e2273aee4dbafed8ccfec67c41cf1.jpg', 1, 9, 1, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(676, 'FOVAO', 'TIDMA', '//www.gravatar.com/avatar/59affe6888f5d21dbf142bbc90a2b823.jpg', 1, 1, 7, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(677, 'PUHAT', 'KUMPU', '//www.gravatar.com/avatar/6235279ee2ab49aa03ed2686b1bee89f.jpg', 1, 6, 12, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(678, 'WUSIG', 'LIMOP', '//www.gravatar.com/avatar/0023a27e24bdaa3a238fb2f4a849733e.jpg', 1, 2, 8, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(679, 'EBFIV', 'KINLA', '//www.gravatar.com/avatar/9b8c340babe9a523f1c9fdf98fe45757.jpg', 1, 4, 6, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(680, 'SABOL', 'AGUOK', '//www.gravatar.com/avatar/03498c497dddee41e407fd434520a4ab.jpg', 1, 13, 11, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(681, 'VACDE', 'AGDOL', '//www.gravatar.com/avatar/e71cfbe16e924b388b84c6495d78efe5.jpg', 1, 9, 6, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(682, 'JETDA', 'TUZIN', '//www.gravatar.com/avatar/36edaa86da26057589712f252bfd9973.jpg', 1, 15, 7, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(683, 'DUNDI', 'ITDIK', '//www.gravatar.com/avatar/da0f1b9e3bf8908ec013a520f1271554.jpg', 1, 14, 8, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(684, 'RAJLU', 'VICNI', '//www.gravatar.com/avatar/558e82d9526bf7d53def6f94a230af30.jpg', 1, 17, 8, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(685, 'ELABU', 'FODLA', '//www.gravatar.com/avatar/f9c500b486e3d54dbd29a50f36937b67.jpg', 1, 8, 12, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(686, 'OSUVA', 'GITBI', '//www.gravatar.com/avatar/70bc290953fbc6dc9c2e544296f18227.jpg', 1, 12, 8, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(687, 'SEOCI', 'IMUOP', '//www.gravatar.com/avatar/6ccc90c0de01876294ef59d3c90e77b2.jpg', 1, 16, 5, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(688, 'HUPUH', 'DULER', '//www.gravatar.com/avatar/9ccae14dfa0e12d64ecb082d953b64a4.jpg', 1, 9, 12, '2019-09-02 21:59:20', '2019-09-02 21:59:20');
INSERT INTO `products` (`product_id`, `product_name`, `product_description`, `product_image`, `product_show`, `company_id`, `category_id`, `created_at`, `updated_at`) VALUES
(689, 'ERDEA', 'FOZIN', '//www.gravatar.com/avatar/11e57676eb692c910dac41dc86976054.jpg', 1, 9, 5, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(690, 'DUOMO', 'PICEK', '//www.gravatar.com/avatar/3b52910ffecf739e9f5ae834412160c5.jpg', 1, 15, 8, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(691, 'FASTE', 'WEACI', '//www.gravatar.com/avatar/981d98472e4a4e8b0df6910d2d37b514.jpg', 1, 11, 2, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(692, 'SOTFO', 'SINLU', '//www.gravatar.com/avatar/3bc751c18eef56e32dbcb2f81ec7ca24.jpg', 1, 19, 6, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(693, 'UMAMU', 'BOOSB', '//www.gravatar.com/avatar/54bd3a29f62b0d98a0d3ad47b2f4e7d2.jpg', 1, 6, 5, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(694, 'TUNBI', 'DEALI', '//www.gravatar.com/avatar/958d941ad5faf485c441af430c325b59.jpg', 1, 16, 2, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(695, 'NIUVI', 'WAJAL', '//www.gravatar.com/avatar/bfca2fbbc64060e0bcc7550207e3eb75.jpg', 1, 12, 1, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(696, 'HICAL', 'PODHU', '//www.gravatar.com/avatar/3c59f8be82f58d286994b8528b3d3d8e.jpg', 1, 10, 4, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(697, 'MUKOL', 'TUCTI', '//www.gravatar.com/avatar/f683c0ae57d1de48fb4e8dec05d1a3ed.jpg', 1, 16, 12, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(698, 'RITAF', 'MAFAH', '//www.gravatar.com/avatar/947542796cb358d1ce9b99bf07ae639d.jpg', 1, 3, 10, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(699, 'SUZUW', 'IGFOI', '//www.gravatar.com/avatar/eab8855bd892d25d07e7438c08cf2850.jpg', 1, 17, 7, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(700, 'PEJUC', 'VUCCE', '//www.gravatar.com/avatar/419a8afd7f430699ca03d8f6b286e540.jpg', 1, 16, 12, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(701, 'UMEBU', 'PODEG', '//www.gravatar.com/avatar/92e697cc65bce9909f16ac738cf9d013.jpg', 1, 9, 8, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(702, 'MUCWI', 'FOBIV', '//www.gravatar.com/avatar/35719a5d11f6ab5139e2e234377363d8.jpg', 1, 6, 1, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(703, 'TUVWE', 'MIVUP', '//www.gravatar.com/avatar/65926ff97bd964266a3703362f8b1bc7.jpg', 1, 8, 9, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(704, 'ITDAK', 'HIJIJ', '//www.gravatar.com/avatar/41e089fe3b9e7f9f9b871839f9f39a21.jpg', 1, 16, 4, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(705, 'JONNA', 'AWINI', '//www.gravatar.com/avatar/0afcf32792e6eb404bdc06dadf45ba9e.jpg', 1, 19, 4, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(706, 'PIBET', 'HUZWO', '//www.gravatar.com/avatar/355036c28de5dce7b6ac280a34804853.jpg', 1, 2, 4, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(707, 'POPSO', 'MIRAL', '//www.gravatar.com/avatar/915072fcfa853ec98f0f9e49ee89e425.jpg', 1, 11, 4, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(708, 'WUVWA', 'WAJMA', '//www.gravatar.com/avatar/44b8163e43252e3c05110bb610c88334.jpg', 1, 14, 6, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(709, 'RONHU', 'MUTOS', '//www.gravatar.com/avatar/aa1494433ccd7fc92c97dba0e1f29bfd.jpg', 1, 12, 12, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(710, 'LUKTE', 'OZACE', '//www.gravatar.com/avatar/610a73d6f09fad86f5605259759df578.jpg', 1, 11, 9, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(711, 'BUVWE', 'DAEPI', '//www.gravatar.com/avatar/84e096f7a831bbf957a7b3cfedc6b4e8.jpg', 1, 13, 5, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(712, 'ONARE', 'CABNI', '//www.gravatar.com/avatar/fd8c17b75f2c3d52138e445ec34286a1.jpg', 1, 4, 8, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(713, 'GAPVE', 'BAGID', '//www.gravatar.com/avatar/62b31a9a05ec61b319c7aec0cb7a9925.jpg', 1, 8, 6, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(714, 'FUKEM', 'TICUN', '//www.gravatar.com/avatar/ef7a7a293b2215c0c34195beb9970ef1.jpg', 1, 19, 6, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(715, 'BEDRI', 'DERTU', '//www.gravatar.com/avatar/3625fe7cffb402ca0eeb37d4b1c7aa5a.jpg', 1, 4, 2, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(716, 'SAGLE', 'VOLEB', '//www.gravatar.com/avatar/19965b60a06da9c6113547b317c5ae73.jpg', 1, 10, 4, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(717, 'WEWOV', 'AFISE', '//www.gravatar.com/avatar/02dfc5df33e47572d38637d45d221fd5.jpg', 1, 12, 7, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(718, 'EZUKA', 'ICOWA', '//www.gravatar.com/avatar/29e6aa2e6e084fd3fe52b5050db3cb48.jpg', 1, 18, 9, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(719, 'TEMUR', 'KARAR', '//www.gravatar.com/avatar/30433f0348b9bac97b5e8c2e219f3154.jpg', 1, 16, 4, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(720, 'MOJID', 'KEPIB', '//www.gravatar.com/avatar/d30cad19532d565a8ed06392bf87cb94.jpg', 1, 1, 1, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(721, 'TIHUZ', 'HEFOM', '//www.gravatar.com/avatar/a72185c7517ebccde63f3c9ed2436955.jpg', 1, 5, 3, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(722, 'WOVUR', 'WADEN', '//www.gravatar.com/avatar/ae62e7f18fbca05a2e72a554894876d4.jpg', 1, 18, 6, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(723, 'HIVKI', 'JIPSE', '//www.gravatar.com/avatar/0c83c680e2131db1c37ebc7426c9fc27.jpg', 1, 7, 1, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(724, 'UNHAJ', 'OBMOV', '//www.gravatar.com/avatar/6783e5dfa1fc69ea6888c5d8d3d6cdea.jpg', 1, 1, 4, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(725, 'GUFIR', 'LUMZU', '//www.gravatar.com/avatar/13c93c2c39ed34a2303ac8f0cc5c75ea.jpg', 1, 14, 4, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(726, 'SOTGA', 'VIBEA', '//www.gravatar.com/avatar/28f9a4f3303cd56d6f8d9b62eaa199b1.jpg', 1, 3, 9, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(727, 'ZAVIT', 'ILETI', '//www.gravatar.com/avatar/0232196eafaa4374565cceb13e688ec6.jpg', 1, 17, 7, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(728, 'WEICI', 'FOHJO', '//www.gravatar.com/avatar/7ca980b1c2b8d3b99a0f972b0f44ed1a.jpg', 1, 16, 6, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(729, 'NUUZC', 'GEFAF', '//www.gravatar.com/avatar/b80fe4e96be9f9409460e8ecf20c5dd2.jpg', 1, 18, 8, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(730, 'CIMIE', 'PUDSE', '//www.gravatar.com/avatar/b312a352fb833f3df58ecf6d32a44851.jpg', 1, 12, 1, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(731, 'BILUC', 'JOFSA', '//www.gravatar.com/avatar/a217dc8d44127d0085a60e40bca3dc21.jpg', 1, 7, 3, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(732, 'DIFGA', 'JUNIM', '//www.gravatar.com/avatar/4b9bd0163d565da143804c1af6c84645.jpg', 1, 11, 11, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(733, 'ZURDI', 'RENUM', '//www.gravatar.com/avatar/d836568229f5f35db769214e5826f7d9.jpg', 1, 3, 5, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(734, 'TULEZ', 'GIFEJ', '//www.gravatar.com/avatar/7482310e2b8de72a050f55b8f2cb876d.jpg', 1, 1, 2, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(735, 'DIKOP', 'CUJIZ', '//www.gravatar.com/avatar/08e90c97053f3290eefa1fce6b26d779.jpg', 1, 6, 5, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(736, 'BEVBI', 'IGOWA', '//www.gravatar.com/avatar/39c71a1ddabe8172d53cc3af2a16f3ec.jpg', 1, 17, 2, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(737, 'UKHOT', 'VURUT', '//www.gravatar.com/avatar/5b6685ec8060a41cb00ab61f2a94a636.jpg', 1, 13, 1, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(738, 'EFRII', 'SASPO', '//www.gravatar.com/avatar/f6e7a2d746377c88dff4750a6b5df35d.jpg', 1, 14, 11, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(739, 'MOHIJ', 'UVIGU', '//www.gravatar.com/avatar/872425caca75557d17d10e7cf146680c.jpg', 1, 7, 6, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(740, 'PABHU', 'NEJUH', '//www.gravatar.com/avatar/e6982707b0edaf9b46557f598aa283a4.jpg', 1, 12, 10, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(741, 'DEGIG', 'EJIPI', '//www.gravatar.com/avatar/64da0849f8fefe3207da569f0788ad11.jpg', 1, 14, 4, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(742, 'KENUO', 'WOALB', '//www.gravatar.com/avatar/8dbb448b7c1d5a041f2145debda74374.jpg', 1, 8, 6, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(743, 'GASUE', 'GOCDI', '//www.gravatar.com/avatar/6cb518de54dd46fb0a5108ed6d186916.jpg', 1, 11, 8, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(744, 'HUMGA', 'SOHME', '//www.gravatar.com/avatar/a8e84fd694422857705b7142ebbd0105.jpg', 1, 7, 3, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(745, 'UPEJI', 'NEDUO', '//www.gravatar.com/avatar/a1205607aea1ea28b1a2ab1573badde1.jpg', 1, 4, 2, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(746, 'DEGBA', 'PEFOM', '//www.gravatar.com/avatar/331d25c7c017279d8fe684becea0ba75.jpg', 1, 19, 1, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(747, 'RUWVA', 'AJUZA', '//www.gravatar.com/avatar/f5f79645b905fa56ae4ba65a39dc9202.jpg', 1, 16, 6, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(748, 'KUIDW', 'DOMEA', '//www.gravatar.com/avatar/44e1753d9fab521e32a6bedd525fa862.jpg', 1, 19, 11, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(749, 'TETRO', 'CUDLA', '//www.gravatar.com/avatar/a0fec20b4e28a494ff6195ff5297fd24.jpg', 1, 13, 11, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(750, 'ZOSKI', 'WOGLE', '//www.gravatar.com/avatar/da5f6ae296ac4180b6939aaf4cf2b2da.jpg', 1, 18, 9, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(751, 'GANAR', 'ZUZBI', '//www.gravatar.com/avatar/8c29da80f0fcaad75ccaa2513997a3a4.jpg', 1, 19, 6, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(752, 'FANCU', 'RIVBE', '//www.gravatar.com/avatar/caf0dde3547af1236e29b590095db81a.jpg', 1, 3, 1, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(753, 'KEWMO', 'KOTIZ', '//www.gravatar.com/avatar/a5db601ce91968c18647fae17b6f039c.jpg', 1, 13, 3, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(754, 'UZJEK', 'OJIFL', '//www.gravatar.com/avatar/63eeb5ede62f0e2a14bc4a34a64f52ee.jpg', 1, 7, 11, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(755, 'PIJUF', 'KORAP', '//www.gravatar.com/avatar/6128e4b1024e29ba152824754cbb2f5b.jpg', 1, 14, 6, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(756, 'FACEH', 'CIFET', '//www.gravatar.com/avatar/4529411a53e5d1dd8d720f5dccaf9788.jpg', 1, 16, 12, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(757, 'WIFOZ', 'OZPOB', '//www.gravatar.com/avatar/3d9c06bc9a1adbf3a4816c10be73ceba.jpg', 1, 6, 7, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(758, 'DILKI', 'PUCAL', '//www.gravatar.com/avatar/b4af9eb2d250c21598cef76654608bcd.jpg', 1, 5, 4, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(759, 'NEFAG', 'TEKRE', '//www.gravatar.com/avatar/c93dbf2943f0d5e84164e663f94b462b.jpg', 1, 12, 10, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(760, 'BIOPF', 'ZOVDO', '//www.gravatar.com/avatar/219f3f79bd163c7f5099b04b598bfd03.jpg', 1, 13, 2, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(761, 'KABUH', 'KAMOB', '//www.gravatar.com/avatar/95f4ec2cc74dcc99dda35e11cb4a83d9.jpg', 1, 1, 10, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(762, 'HEKDO', 'TIIBA', '//www.gravatar.com/avatar/68704ffb0ea3437467bbb65bdfe495d3.jpg', 1, 9, 6, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(763, 'SENGI', 'UNEAF', '//www.gravatar.com/avatar/cc289011d135cf480b44f3dc1f41a4f6.jpg', 1, 3, 1, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(764, 'IRILO', 'FAJOK', '//www.gravatar.com/avatar/0b1ab1b036da1cd51adca71c545b0013.jpg', 1, 10, 3, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(765, 'ISIFE', 'VUSGO', '//www.gravatar.com/avatar/3bc6622396858685fb5330fdc4d8c0f0.jpg', 1, 4, 8, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(766, 'DUDLO', 'FAGEG', '//www.gravatar.com/avatar/d2ab3e163b83a61c04def199f1e6d339.jpg', 1, 17, 12, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(767, 'EVIOH', 'BALIZ', '//www.gravatar.com/avatar/0b485fe09f045eac75221abce9ef944c.jpg', 1, 15, 5, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(768, 'USIDE', 'LUIPU', '//www.gravatar.com/avatar/cd38c16ebeaed33a72c2c3168b5ba063.jpg', 1, 11, 11, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(769, 'MEGOZ', 'HOKLI', '//www.gravatar.com/avatar/e55a590908a4fe9686ab74d2e2888b96.jpg', 1, 8, 11, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(770, 'BUCMI', 'EWPUM', '//www.gravatar.com/avatar/79dc2e07f7f5ca358190da9e41d9ca24.jpg', 1, 4, 6, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(771, 'UKOIS', 'ATZIT', '//www.gravatar.com/avatar/07916f91f38840f96a76ca48d1f32df0.jpg', 1, 14, 7, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(772, 'WUTDA', 'DIFUN', '//www.gravatar.com/avatar/78bae677a3f7e855243df264405d6059.jpg', 1, 14, 11, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(773, 'EHGUD', 'ERAGO', '//www.gravatar.com/avatar/6551f2d406e8575a925e7e1fe25299b5.jpg', 1, 11, 10, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(774, 'SONLI', 'UFIDO', '//www.gravatar.com/avatar/1bb3490ab0a4a59895de21ffd3ffc1db.jpg', 1, 15, 8, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(775, 'TOKEP', 'FUVFE', '//www.gravatar.com/avatar/5056f84fbe1e3737c44b5475041d5c3c.jpg', 1, 10, 8, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(776, 'IGARA', 'JIIFN', '//www.gravatar.com/avatar/d996a9fb146edde4c3dfac5bd9785aeb.jpg', 1, 1, 8, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(777, 'UHUPA', 'BITBA', '//www.gravatar.com/avatar/1709981ecc24e280884300dc3fb79d15.jpg', 1, 5, 7, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(778, 'PIVAW', 'KEFVU', '//www.gravatar.com/avatar/9ade16716e2b0508dd48d42d206b420e.jpg', 1, 2, 6, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(779, 'FOJVE', 'VOCAC', '//www.gravatar.com/avatar/a7c56a747391e36cdbf12bf7578f392a.jpg', 1, 7, 1, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(780, 'BIDIP', 'TUVZE', '//www.gravatar.com/avatar/999f9998f2ef48bd777defff9029557d.jpg', 1, 6, 1, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(781, 'OMRIR', 'TAUKI', '//www.gravatar.com/avatar/0f35545c8fa4c28f8896cad372ecc2dc.jpg', 1, 12, 4, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(782, 'OFUGI', 'AWSEM', '//www.gravatar.com/avatar/b28dd6b98122e3f90a671e60aaa3f2e2.jpg', 1, 17, 1, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(783, 'PIRUM', 'ZOFAF', '//www.gravatar.com/avatar/514b945bc496471c0cdea97092cb843d.jpg', 1, 19, 3, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(784, 'IVIPP', 'RASOK', '//www.gravatar.com/avatar/32f58fc9db3ffb4134f55d5908323d2e.jpg', 1, 8, 6, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(785, 'SUWEP', 'ZAMIT', '//www.gravatar.com/avatar/f8fab9a40a2835a83e29b4721959b889.jpg', 1, 12, 9, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(786, 'SAVDI', 'BUFFO', '//www.gravatar.com/avatar/047513101bfb47d206d6b1ad7b649aa2.jpg', 1, 8, 6, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(787, 'GEZJU', 'HAVSA', '//www.gravatar.com/avatar/f7a91b05b86a338e6e1776244f9335bf.jpg', 1, 1, 3, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(788, 'OLURA', 'INPUG', '//www.gravatar.com/avatar/8fe232c085829a532151f5589f73e97e.jpg', 1, 17, 6, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(789, 'DIONM', 'CUWKI', '//www.gravatar.com/avatar/6826c666e0352e1b9dfd95959401c25a.jpg', 1, 9, 3, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(790, 'EVIHU', 'GIFIK', '//www.gravatar.com/avatar/bf486ada174fcb38a3f9e713a2b67650.jpg', 1, 6, 3, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(791, 'KOPIM', 'VEPNU', '//www.gravatar.com/avatar/a9ed14050fa236c2e047feaa7c09ed65.jpg', 1, 13, 1, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(792, 'JIDOK', 'EMGIU', '//www.gravatar.com/avatar/0d0118512ab17e7dbcae4163bc8df4fd.jpg', 1, 4, 7, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(793, 'CINIE', 'NUUNI', '//www.gravatar.com/avatar/94a999f58299317e7ac73cfa77a4b6ba.jpg', 1, 14, 8, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(794, 'MIABI', 'ISILE', '//www.gravatar.com/avatar/ca3de1ef005a9017b0ddc7b73f13e985.jpg', 1, 2, 7, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(795, 'LOEND', 'KEHAM', '//www.gravatar.com/avatar/2c26667975796531b9b12151e9650426.jpg', 1, 8, 5, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(796, 'UCHOM', 'IGDIT', '//www.gravatar.com/avatar/8b7d6a3913b7f7c3ca6af2ff15ef3f8b.jpg', 1, 13, 6, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(797, 'RINNU', 'IMVIL', '//www.gravatar.com/avatar/33d79c974033802b300557beea005a92.jpg', 1, 12, 11, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(798, 'ZAIHE', 'VAKUP', '//www.gravatar.com/avatar/81c098d916cef639232c5080ea80fe81.jpg', 1, 16, 4, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(799, 'IKWUK', 'NEPEK', '//www.gravatar.com/avatar/e933f180136beaa1b93b4230bf8e0eeb.jpg', 1, 5, 1, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(800, 'ITENA', 'LAGKA', '//www.gravatar.com/avatar/65f8f015e2768e2a9000fe4fbeb1401c.jpg', 1, 6, 9, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(801, 'TEKOG', 'ERATI', '//www.gravatar.com/avatar/099e90706d40c5e09a721dfd7b8c1d94.jpg', 1, 11, 11, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(802, 'UFUSW', 'JILIV', '//www.gravatar.com/avatar/2f6271c9a81bd3ab1518f8366aa8d341.jpg', 1, 16, 8, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(803, 'TEVKU', 'BALPI', '//www.gravatar.com/avatar/1f4051c71ec2ceaf160a75d027a18cf0.jpg', 1, 12, 11, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(804, 'OHUJE', 'BEVIK', '//www.gravatar.com/avatar/ff634792f4ae43b64a305f2da1b9e455.jpg', 1, 7, 10, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(805, 'WAERT', 'HULBE', '//www.gravatar.com/avatar/9bb1704dd0df15c09783fa70fa3106fb.jpg', 1, 11, 1, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(806, 'SILOE', 'ESIIT', '//www.gravatar.com/avatar/769c4071ec18286c6ebab6afd389b952.jpg', 1, 12, 8, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(807, 'UCEEM', 'NABKU', '//www.gravatar.com/avatar/89932799762bf2d8e8b9a6931352d7d0.jpg', 1, 13, 6, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(808, 'IWAEC', 'TOFME', '//www.gravatar.com/avatar/7cab8d9c97b9fde870575f452e6b52e0.jpg', 1, 3, 11, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(809, 'GIWUV', 'EROSI', '//www.gravatar.com/avatar/324d265811c8dd11e5564aec8016b046.jpg', 1, 13, 8, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(810, 'LEOZU', 'MOPCE', '//www.gravatar.com/avatar/2407255f250fc3a7fe6bf9a3f2223dad.jpg', 1, 12, 11, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(811, 'IWOBI', 'LEHCU', '//www.gravatar.com/avatar/8da68895fa8c100d7548b385bafbd0b0.jpg', 1, 8, 7, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(812, 'NAUFZ', 'ICEVE', '//www.gravatar.com/avatar/2a89038070fa451156fa6b1fc2bc2ca0.jpg', 1, 17, 5, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(813, 'NIPVU', 'NASOH', '//www.gravatar.com/avatar/9916e1c0ec2ac749f10f24f6e7cca705.jpg', 1, 20, 2, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(814, 'BAPTI', 'NAVAA', '//www.gravatar.com/avatar/5d9f7d010dcc195941afbd52ddebffaa.jpg', 1, 8, 7, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(815, 'VAJET', 'ODJUC', '//www.gravatar.com/avatar/88a3e9ce78401e706c5a799a917d4925.jpg', 1, 17, 1, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(816, 'ILDAI', 'LAGUR', '//www.gravatar.com/avatar/97ff63ff6e0da10bd0cbd022d62acc30.jpg', 1, 13, 1, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(817, 'RURKA', 'EDOGO', '//www.gravatar.com/avatar/41a1950e16c5f711256c357b21948622.jpg', 1, 14, 3, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(818, 'LERTU', 'JEFLE', '//www.gravatar.com/avatar/89631784aceaf81b5a9b89bb78f10b08.jpg', 1, 12, 7, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(819, 'GURPE', 'WUFIV', '//www.gravatar.com/avatar/8022fa64d161b103eb8c717ffadb9805.jpg', 1, 18, 11, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(820, 'LASLE', 'DAGPA', '//www.gravatar.com/avatar/adedb90a1072dc0e3f915c9fd25e7aeb.jpg', 1, 15, 6, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(821, 'DOBAS', 'TOFOS', '//www.gravatar.com/avatar/78cc516baec98af4fd2c1d31ea89200c.jpg', 1, 18, 11, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(822, 'NIHDU', 'VIPEH', '//www.gravatar.com/avatar/544252f0a62ff6f0138a469a8409da87.jpg', 1, 16, 1, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(823, 'WACTA', 'POHAB', '//www.gravatar.com/avatar/b8765ceec6059a96d811cb676a5408f2.jpg', 1, 10, 12, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(824, 'BADAP', 'SAKSE', '//www.gravatar.com/avatar/c7a95b2857691e21425433d5bc8083a8.jpg', 1, 16, 2, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(825, 'NEMWU', 'GUDKU', '//www.gravatar.com/avatar/cc2b6da814854cdab9e95bc573c527d0.jpg', 1, 7, 1, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(826, 'OWRAI', 'MUTIM', '//www.gravatar.com/avatar/eb3bc0799abfdf898d37642f21716383.jpg', 1, 5, 8, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(827, 'OGIPE', 'NICED', '//www.gravatar.com/avatar/88327eefef3b8c7c599559caee3d1d8b.jpg', 1, 19, 5, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(828, 'ASIMO', 'JIKMO', '//www.gravatar.com/avatar/e1a61766a51b2c5d7cf9efcd4c4e08e4.jpg', 1, 16, 4, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(829, 'REMOS', 'IVTED', '//www.gravatar.com/avatar/a04912c2a96a7c8b39cb1aae969d4da8.jpg', 1, 14, 4, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(830, 'CACOF', 'TAVUZ', '//www.gravatar.com/avatar/9ee191c8cec6b635a677adec5ff3bf8e.jpg', 1, 10, 11, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(831, 'OREFE', 'JORDI', '//www.gravatar.com/avatar/483bb0d1bb01828be6ded57d967e96ff.jpg', 1, 18, 1, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(832, 'JELUJ', 'WOJAT', '//www.gravatar.com/avatar/607657aefa61cc2492b3d746ed006b45.jpg', 1, 9, 11, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(833, 'LIGES', 'LUPEL', '//www.gravatar.com/avatar/3e9d2601b6fbb9dc343f23874c414204.jpg', 1, 7, 3, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(834, 'HOVIL', 'IZRAN', '//www.gravatar.com/avatar/9676aaa7bdb70edc6090f0bc71a1f60c.jpg', 1, 5, 11, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(835, 'NACOH', 'CABNI', '//www.gravatar.com/avatar/483c543da866d0e18ddabb21fffd6dea.jpg', 1, 7, 8, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(836, 'JOSUT', 'JIGIZ', '//www.gravatar.com/avatar/6b4352fc0a3e053db9e7f840af0dc8e9.jpg', 1, 4, 7, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(837, 'ZUHIP', 'UCIEW', '//www.gravatar.com/avatar/d0416ca74eab12e38c75f6be2759871d.jpg', 1, 8, 8, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(838, 'FEFEU', 'SINDI', '//www.gravatar.com/avatar/4aa15aa0529794410345109efcd62cd9.jpg', 1, 5, 12, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(839, 'ABDUA', 'ELIPI', '//www.gravatar.com/avatar/93f4d6d4f0399550ab0b51c8b7a09412.jpg', 1, 15, 5, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(840, 'AFFAD', 'AJURU', '//www.gravatar.com/avatar/04b928099d8678fe39ce0ca1b82af311.jpg', 1, 18, 3, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(841, 'JEKEU', 'UTAGA', '//www.gravatar.com/avatar/c616e6cca470be92eb7da06a037f190d.jpg', 1, 3, 11, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(842, 'CIFAC', 'FULIH', '//www.gravatar.com/avatar/afa3bbef07a5ec6e216b348b22633305.jpg', 1, 11, 5, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(843, 'FOJUL', 'LUVHO', '//www.gravatar.com/avatar/37f062239769e6e5e36dcb7793f7636c.jpg', 1, 3, 3, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(844, 'PIWIM', 'VOMAE', '//www.gravatar.com/avatar/8a96b46f6ac743b9b72e3a4a10007106.jpg', 1, 19, 4, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(845, 'VOCUH', 'ROJGE', '//www.gravatar.com/avatar/572136357481db3305981cbc1be43588.jpg', 1, 1, 6, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(846, 'ADIJI', 'ZUJOF', '//www.gravatar.com/avatar/a15b96d2b76104c6f1166c77c4637358.jpg', 1, 9, 2, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(847, 'GUJBU', 'MUWRU', '//www.gravatar.com/avatar/4fec26d48dd847a57f8e98e64214137c.jpg', 1, 4, 1, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(848, 'ZIVEJ', 'CUNIH', '//www.gravatar.com/avatar/55597097cb4fcdd8b5607ee4f8d58c69.jpg', 1, 18, 7, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(849, 'VEJGE', 'EFUKO', '//www.gravatar.com/avatar/797b90f7eda3526602469aa082ac4d4d.jpg', 1, 17, 9, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(850, 'GODSI', 'NEJEL', '//www.gravatar.com/avatar/09eec65b8be57356511240c9938fb4ae.jpg', 1, 14, 2, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(851, 'HUKOG', 'VAKEN', '//www.gravatar.com/avatar/eaab83b4ef90bbdab86970384104e739.jpg', 1, 3, 3, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(852, 'TUJVE', 'UFKAO', '//www.gravatar.com/avatar/6ef373571d1a571f8113af25736399a2.jpg', 1, 19, 7, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(853, 'HIMOK', 'DADIJ', '//www.gravatar.com/avatar/a1eedccfeb9efeac535e873ae914338a.jpg', 1, 16, 3, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(854, 'CEPWA', 'TOLAN', '//www.gravatar.com/avatar/1613d4b666a0bec86d18c4e343d2432d.jpg', 1, 17, 6, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(855, 'BEDLO', 'LOFEV', '//www.gravatar.com/avatar/53c992a33d632993b99f560051807d4f.jpg', 1, 7, 2, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(856, 'ETLOF', 'SOBCI', '//www.gravatar.com/avatar/98627aec994d1a7a687b6bdeddb5ab7f.jpg', 1, 11, 5, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(857, 'SADWO', 'FITOV', '//www.gravatar.com/avatar/3ade1f3ffbbc54aa38fc1e385a476977.jpg', 1, 4, 12, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(858, 'POHER', 'FUOTF', '//www.gravatar.com/avatar/6a6f608760a050523532ec468b2c4693.jpg', 1, 6, 8, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(859, 'WOGPA', 'PARUF', '//www.gravatar.com/avatar/af9f7e8dcfe946904bf98509fa6c187a.jpg', 1, 10, 3, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(860, 'PUTFA', 'ZOOWP', '//www.gravatar.com/avatar/8196a394bd29198ca39183506ee961e6.jpg', 1, 20, 2, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(861, 'EPOTO', 'FESGI', '//www.gravatar.com/avatar/109d01c36d384f2ec7077c64334165bc.jpg', 1, 16, 9, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(862, 'LUOLA', 'MAEWU', '//www.gravatar.com/avatar/c309a7c6050801c3b9245f1c62380ce7.jpg', 1, 11, 4, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(863, 'FENES', 'KAAHO', '//www.gravatar.com/avatar/5a5c43db3cf2b16e0551aa47711a57d4.jpg', 1, 3, 2, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(864, 'IKKAN', 'RADSA', '//www.gravatar.com/avatar/cae3b80dcffc6d7c3e08b255926d3e21.jpg', 1, 1, 3, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(865, 'ZETKA', 'NUTET', '//www.gravatar.com/avatar/0e0759432ab9a942b20abeba2773f366.jpg', 1, 12, 5, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(866, 'DUSLU', 'UNUFO', '//www.gravatar.com/avatar/21a94f710e747f8ab47da1e73f66e02c.jpg', 1, 2, 2, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(867, 'NOTAR', 'HONIT', '//www.gravatar.com/avatar/7098f1d207e2baf54c7908a6c46a8451.jpg', 1, 7, 6, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(868, 'FUWEK', 'KIGAI', '//www.gravatar.com/avatar/715368f5de09f133f89da4b948e9a6db.jpg', 1, 3, 6, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(869, 'GUDVO', 'ARMAF', '//www.gravatar.com/avatar/a652429bed05ff1e16c33b4c88c20d3d.jpg', 1, 13, 8, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(870, 'TUZNU', 'JOLUD', '//www.gravatar.com/avatar/e5fdba08c74d3b9fd4965752a139e590.jpg', 1, 1, 7, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(871, 'HUVEJ', 'AZOVI', '//www.gravatar.com/avatar/f2807ddc2f6af451ba3a626ed9c2ad0f.jpg', 1, 1, 5, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(872, 'ICUOZ', 'KUTFO', '//www.gravatar.com/avatar/ed1cea84244f7ab587f892776bf555ee.jpg', 1, 13, 9, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(873, 'NUSET', 'TULWU', '//www.gravatar.com/avatar/2d82d09c0e110d423f092878f5f4cb60.jpg', 1, 12, 9, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(874, 'VOCON', 'IFAFO', '//www.gravatar.com/avatar/4c2779a816f1f47d235788ffac7a6c6f.jpg', 1, 19, 11, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(875, 'NORLO', 'TEPWA', '//www.gravatar.com/avatar/c4fd9d660aef266e76ced73e59380af2.jpg', 1, 4, 8, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(876, 'LUNRO', 'SORAW', '//www.gravatar.com/avatar/e727bc40dc3dc0792c7be123091a4438.jpg', 1, 9, 3, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(877, 'KUWHO', 'AREAT', '//www.gravatar.com/avatar/a0d22bfdd26ccdee3b9faef6d77fb9a7.jpg', 1, 5, 5, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(878, 'KIHIC', 'MOFIL', '//www.gravatar.com/avatar/6b65f763d0dc2846d127b7f288275c30.jpg', 1, 11, 9, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(879, 'REJOF', 'KEDPO', '//www.gravatar.com/avatar/b1f329d3be71cd04f8345f8b4d02be6b.jpg', 1, 7, 10, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(880, 'VEVAP', 'PIWIP', '//www.gravatar.com/avatar/2c9d4440beeeb3b6741dcf50cb4a9eef.jpg', 1, 14, 12, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(881, 'TETNE', 'WALKU', '//www.gravatar.com/avatar/88fe3a181b5d21a56048525080ff0b86.jpg', 1, 8, 7, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(882, 'KOSIJ', 'KOMAJ', '//www.gravatar.com/avatar/60495e55c056d1ae75acf7acb0967a01.jpg', 1, 7, 10, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(883, 'DISOG', 'WEGEE', '//www.gravatar.com/avatar/0bfd0cf5e170eea43f099cb45d3cbb26.jpg', 1, 1, 5, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(884, 'HAOBC', 'MOGCU', '//www.gravatar.com/avatar/290ec37a80e0105c70ff3c708672a900.jpg', 1, 18, 10, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(885, 'ZIRMO', 'SEHKI', '//www.gravatar.com/avatar/246569efdca44f00ac9545bbfe27da26.jpg', 1, 17, 1, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(886, 'VAUZC', 'CASOT', '//www.gravatar.com/avatar/204ae1f16f228e162aa13d840da4a4f7.jpg', 1, 4, 5, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(887, 'MITOS', 'KOGTE', '//www.gravatar.com/avatar/bcb69fadd3426d7e143ec343ad205ae9.jpg', 1, 18, 8, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(888, 'KIHIV', 'ULZOM', '//www.gravatar.com/avatar/a30864db9979f68d4b879272271758d4.jpg', 1, 10, 6, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(889, 'ROKEC', 'ROOVI', '//www.gravatar.com/avatar/0757a07d5c4a224babf234b175e08624.jpg', 1, 6, 4, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(890, 'OLUOZ', 'RUSUN', '//www.gravatar.com/avatar/36090eb66f79f39ef8a756003f44e6ac.jpg', 1, 15, 3, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(891, 'OGTIV', 'NOFNI', '//www.gravatar.com/avatar/518c1f2f71f3dfd844fd5f8d18420d54.jpg', 1, 15, 3, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(892, 'UWLOF', 'GUZDU', '//www.gravatar.com/avatar/207e277976a21a91c5828e90ecfcfa4d.jpg', 1, 3, 11, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(893, 'PAPEW', 'JIWBE', '//www.gravatar.com/avatar/24ea9895328dfa2132bba5a7c950cf9c.jpg', 1, 18, 9, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(894, 'WUOGA', 'IFPUH', '//www.gravatar.com/avatar/a76a014f333fea043699b211b8ad051a.jpg', 1, 13, 9, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(895, 'MECPA', 'VISGA', '//www.gravatar.com/avatar/7fdeab40eae4fe0b8e13896d2e16a550.jpg', 1, 16, 5, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(896, 'ABJOV', 'UDOPE', '//www.gravatar.com/avatar/44434c9bdd82b88c02a0e7b01fcb2626.jpg', 1, 6, 4, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(897, 'VITNI', 'FABOB', '//www.gravatar.com/avatar/a52c01a8095988a932a15cfb318b9457.jpg', 1, 7, 1, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(898, 'RUVHO', 'LASON', '//www.gravatar.com/avatar/16893041432464d9f7cde7d252d1a705.jpg', 1, 19, 12, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(899, 'DEMID', 'ENOIW', '//www.gravatar.com/avatar/b53b557ba46462aefe9d25d2b253bcaf.jpg', 1, 12, 10, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(900, 'OTUTA', 'JITMA', '//www.gravatar.com/avatar/497a54118fafd5efaaf1b0d2315b5af6.jpg', 1, 17, 2, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(901, 'INIOR', 'FAJOC', '//www.gravatar.com/avatar/67a7dec92181d2b1b9e579461482b07c.jpg', 1, 14, 10, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(902, 'VEZDA', 'INUPO', '//www.gravatar.com/avatar/748c9096d6c8c817c986cb099ba65bb1.jpg', 1, 8, 1, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(903, 'SOMWE', 'JIBOK', '//www.gravatar.com/avatar/080bb481105751c2686bc962c00d948b.jpg', 1, 7, 4, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(904, 'CUKEC', 'AZUDA', '//www.gravatar.com/avatar/9744962893deebe945e37a208de892e3.jpg', 1, 9, 4, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(905, 'HUTDO', 'TEEHE', '//www.gravatar.com/avatar/e6192b791d5327e3f64dbd82275b481c.jpg', 1, 1, 11, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(906, 'BUJIA', 'BUTWI', '//www.gravatar.com/avatar/f3bc2af6c6792bddee38cd04c9ebed39.jpg', 1, 18, 3, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(907, 'CIZWE', 'CEGMI', '//www.gravatar.com/avatar/3f895bdc42fffb427f64c07968bb7f8a.jpg', 1, 7, 2, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(908, 'FOCAB', 'JUZIV', '//www.gravatar.com/avatar/550fafe1fcdadc26b46b58b951c42675.jpg', 1, 18, 9, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(909, 'UDEJE', 'CEHIK', '//www.gravatar.com/avatar/7dc25f855200f2a146639075a124afef.jpg', 1, 11, 11, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(910, 'HUWNI', 'DEWSE', '//www.gravatar.com/avatar/a9a1af938c3034c7f983e2060a536413.jpg', 1, 10, 10, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(911, 'UMULI', 'ZOVNE', '//www.gravatar.com/avatar/c18aeaf5c744a8b79867019cb0f0df3f.jpg', 1, 5, 5, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(912, 'JIOPA', 'IJPUR', '//www.gravatar.com/avatar/2ff33e74c258a48170a5455b23b36212.jpg', 1, 14, 1, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(913, 'MIRTO', 'ZOJAL', '//www.gravatar.com/avatar/0a37d1988278b0d09bf66b04e52ef43d.jpg', 1, 17, 1, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(914, 'ITEAH', 'EMCOM', '//www.gravatar.com/avatar/91f8f50626d94c478994e9d025532e23.jpg', 1, 18, 2, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(915, 'OBZED', 'OCUBZ', '//www.gravatar.com/avatar/a39ddc229f1cdfd25f8dcceb03c1d790.jpg', 1, 18, 10, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(916, 'PULAS', 'BOWIM', '//www.gravatar.com/avatar/c9f05909e44da527073412308d5d7aa4.jpg', 1, 12, 7, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(917, 'REHHA', 'JAMAZ', '//www.gravatar.com/avatar/c4b786a3b39737e9454b6b33362e7d41.jpg', 1, 14, 6, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(918, 'DEMDE', 'REKOB', '//www.gravatar.com/avatar/a943afc7841a34ad5f429498f5900140.jpg', 1, 2, 2, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(919, 'OBUCU', 'ULADI', '//www.gravatar.com/avatar/d3815ed3890495d0b333c173e2de9b64.jpg', 1, 2, 4, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(920, 'EGOGB', 'WILVE', '//www.gravatar.com/avatar/cb4b9258f43cebc7c8958e23452bae6b.jpg', 1, 2, 4, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(921, 'PIANO', 'WUMUC', '//www.gravatar.com/avatar/154c53dccc5e775b9a11e5354bc239bc.jpg', 1, 12, 9, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(922, 'ZUDIF', 'HENOB', '//www.gravatar.com/avatar/598eeb0c92b4a4cadd77f00935545b37.jpg', 1, 15, 6, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(923, 'EVUID', 'ENPIG', '//www.gravatar.com/avatar/4dbcc48987e926ba1a7011c0b1c84de5.jpg', 1, 7, 12, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(924, 'HEPUJ', 'BIHPU', '//www.gravatar.com/avatar/aa7b8ab593fcc2e9a9a6575aa0da7e20.jpg', 1, 17, 5, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(925, 'ZEMHO', 'JODAG', '//www.gravatar.com/avatar/6b034e468de0be9c32601138602384d4.jpg', 1, 7, 6, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(926, 'SOHCE', 'REFME', '//www.gravatar.com/avatar/54d908e4a2d1c785f7bd25faa645af8c.jpg', 1, 11, 5, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(927, 'SUZNA', 'VITUA', '//www.gravatar.com/avatar/443bdc9a14f34ab348b6f9b16add9483.jpg', 1, 14, 9, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(928, 'JEKEE', 'MAGES', '//www.gravatar.com/avatar/696e684ec74074279a34b1ee9bbe2f5a.jpg', 1, 12, 6, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(929, 'UCVAV', 'GUBIH', '//www.gravatar.com/avatar/25abfb56b4a99ce90df90fd7496e618c.jpg', 1, 9, 8, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(930, 'ESMUJ', 'FIPUT', '//www.gravatar.com/avatar/0c0c477bc5762850053670d367dc5455.jpg', 1, 7, 4, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(931, 'OFOTA', 'WEKIB', '//www.gravatar.com/avatar/9ef96801e83398b6c1702440f8411ff8.jpg', 1, 13, 6, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(932, 'GEBEA', 'INNEF', '//www.gravatar.com/avatar/34103fc1035f9ec168bb028dbac49048.jpg', 1, 19, 11, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(933, 'PIJSU', 'LUSRI', '//www.gravatar.com/avatar/93f7234257b973f8461d22927c737c9b.jpg', 1, 12, 9, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(934, 'DEZAG', 'NEDJU', '//www.gravatar.com/avatar/ebc1cc3c5d721af9fd10bfbf047b0ff8.jpg', 1, 11, 9, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(935, 'SIKWU', 'UFOHI', '//www.gravatar.com/avatar/775a98cf13a828fcad0f0a4be9931892.jpg', 1, 2, 11, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(936, 'OHOUT', 'FANNU', '//www.gravatar.com/avatar/b1d85e1d9fdc045c059f31364543518b.jpg', 1, 20, 11, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(937, 'ZEFEB', 'ZEMKA', '//www.gravatar.com/avatar/dfcf8a836a80c16e93d4f7d883e0d49b.jpg', 1, 8, 8, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(938, 'RISHI', 'DUHDO', '//www.gravatar.com/avatar/14de87e3e99f92b672f775a02d7759bf.jpg', 1, 13, 3, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(939, 'JAGUP', 'TOPIC', '//www.gravatar.com/avatar/ecb81e1f7336d27e8ecaf29065e0cea7.jpg', 1, 20, 5, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(940, 'ODNUK', 'ZEUDU', '//www.gravatar.com/avatar/f82c9a842f450d0957b84f160121e274.jpg', 1, 16, 3, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(941, 'BIJAK', 'RISTI', '//www.gravatar.com/avatar/ac77c9f72d710d6d6d499d359a016db3.jpg', 1, 12, 3, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(942, 'EGUIV', 'ZOBAU', '//www.gravatar.com/avatar/429ba8429f19148bc5dd988c7fccfa70.jpg', 1, 20, 6, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(943, 'CIWIW', 'BOROG', '//www.gravatar.com/avatar/3bccaffe6f8728948b6539a7798b70c9.jpg', 1, 9, 2, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(944, 'OVIDE', 'FICUI', '//www.gravatar.com/avatar/4b67ff6af39e897ff4eb319dfe3cdde0.jpg', 1, 4, 1, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(945, 'WUDOE', 'ILAKK', '//www.gravatar.com/avatar/d998f4ea72b3e2fe763e721093e496c3.jpg', 1, 12, 8, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(946, 'METWI', 'TUWEL', '//www.gravatar.com/avatar/3e8d5bec41b4bd714f4c2f2c19d3a146.jpg', 1, 7, 12, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(947, 'VOTAZ', 'SIMUF', '//www.gravatar.com/avatar/ca26eb8aa419297cb13f5439f07167a3.jpg', 1, 19, 12, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(948, 'OSERE', 'ONNIH', '//www.gravatar.com/avatar/843cabcb767a0952429d1556fe8f7066.jpg', 1, 7, 10, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(949, 'VENAM', 'DECZA', '//www.gravatar.com/avatar/b869a53efa2f432e5c8a304a41102c1b.jpg', 1, 11, 2, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(950, 'NOVIV', 'HAKBI', '//www.gravatar.com/avatar/d4d60106f679ffbfdd2a6c902f5f1993.jpg', 1, 10, 5, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(951, 'DEBUC', 'WERAH', '//www.gravatar.com/avatar/1ea3f47d353a8bb1ff1cfb4f5b1dac1d.jpg', 1, 6, 2, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(952, 'MECEP', 'PUDOW', '//www.gravatar.com/avatar/fb84db4fe55c2a794c7894d88dc02970.jpg', 1, 2, 11, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(953, 'IREID', 'NUTUB', '//www.gravatar.com/avatar/22d2851e44c3a4122a0c07c99ebd4178.jpg', 1, 8, 1, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(954, 'KADUA', 'REFUN', '//www.gravatar.com/avatar/708eb4944b79ef1ee25f47d832ddb220.jpg', 1, 15, 6, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(955, 'CUCIC', 'JUMIG', '//www.gravatar.com/avatar/609675072b59963c11f010bc15d04d7a.jpg', 1, 11, 8, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(956, 'VAVAK', 'ROTGO', '//www.gravatar.com/avatar/556aaea407ac1320f4768920edf1b701.jpg', 1, 4, 8, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(957, 'NOPIC', 'FISIV', '//www.gravatar.com/avatar/648788b40c9aaff77950514684d58d38.jpg', 1, 4, 11, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(958, 'UTUZE', 'FESME', '//www.gravatar.com/avatar/9a43e7680901e4ffd8214b6573023083.jpg', 1, 15, 6, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(959, 'IDUSE', 'GIAKW', '//www.gravatar.com/avatar/b1e96949cf3cc61b1a302bd9e5f09e8e.jpg', 1, 4, 7, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(960, 'NUJUG', 'SESAM', '//www.gravatar.com/avatar/9f63f625ea302953752e463fed5d982f.jpg', 1, 19, 4, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(961, 'NUWPA', 'GIENK', '//www.gravatar.com/avatar/e547b5466d18f8cd7b9c17c9f3c6ef4a.jpg', 1, 4, 3, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(962, 'GEKOL', 'BEHEW', '//www.gravatar.com/avatar/73b12d0ecc8bbfe23d31c1e35744691b.jpg', 1, 18, 4, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(963, 'ZETEL', 'PULME', '//www.gravatar.com/avatar/aeaba3ebef80fdb4374f796d3cea2313.jpg', 1, 6, 9, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(964, 'EJPEI', 'SINKU', '//www.gravatar.com/avatar/f57a63dc660c67e6d2efdbe732aa5dad.jpg', 1, 8, 6, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(965, 'VOIJO', 'LEJIS', '//www.gravatar.com/avatar/666699fa0a42c45d0de27d5eb75ae78a.jpg', 1, 9, 9, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(966, 'ICUKE', 'TOMEK', '//www.gravatar.com/avatar/d64ad7f6e5d56f9f1faf86291b7895e7.jpg', 1, 14, 5, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(967, 'MATEP', 'BANVE', '//www.gravatar.com/avatar/d7d0497c62cb894bc4a178688e10ca30.jpg', 1, 13, 2, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(968, 'JATLU', 'WODSE', '//www.gravatar.com/avatar/9f87727a0013b8e7261b533bdcf69530.jpg', 1, 10, 9, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(969, 'TIVAZ', 'BUPMA', '//www.gravatar.com/avatar/d372f9ec61210e85e92e80e1a8fae0d8.jpg', 1, 5, 11, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(970, 'NEGFI', 'ZOMNO', '//www.gravatar.com/avatar/54d9bcb4ab459459d6d28acc7b4b8f21.jpg', 1, 9, 12, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(971, 'MEKGI', 'IBURA', '//www.gravatar.com/avatar/14e76a671225407ef1533a9b670f456e.jpg', 1, 2, 10, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(972, 'HOPCU', 'SAMIF', '//www.gravatar.com/avatar/539f07cce554745af3f0d653abe1e624.jpg', 1, 7, 10, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(973, 'ZUCOK', 'AHTAS', '//www.gravatar.com/avatar/82c0bceecaadba1457bb7dc5c7a618b6.jpg', 1, 17, 11, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(974, 'PARLO', 'JIZAG', '//www.gravatar.com/avatar/2071a0e028fd86e17861545f28b901be.jpg', 1, 20, 6, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(975, 'DEHUJ', 'BEUDA', '//www.gravatar.com/avatar/03a05d43b44be807538bfe4025d9e410.jpg', 1, 4, 11, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(976, 'HEKOC', 'FATAG', '//www.gravatar.com/avatar/11f8896df3b3fb6429fc9e78c8cfcc73.jpg', 1, 13, 5, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(977, 'UGWEF', 'NUAHJ', '//www.gravatar.com/avatar/381f2b04a6aec7bf545e7c1aae71b8a8.jpg', 1, 13, 3, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(978, 'DAFAT', 'JASCU', '//www.gravatar.com/avatar/0f94ededc6e4c5fe92fc80a407d08658.jpg', 1, 3, 5, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(979, 'SOSRE', 'JIGCE', '//www.gravatar.com/avatar/fb03339bf78031f507dac624e9472e87.jpg', 1, 17, 10, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(980, 'JAFIR', 'GAZRE', '//www.gravatar.com/avatar/77b83479188c1624fc5aaa8b6d8735d1.jpg', 1, 6, 4, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(981, 'GAJSA', 'KIRIV', '//www.gravatar.com/avatar/f56c17360d93ad5c44b57efb59c56968.jpg', 1, 11, 7, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(982, 'POCEK', 'LUFDI', '//www.gravatar.com/avatar/cf2d507f87718eda6f3f1077b184bb4d.jpg', 1, 19, 11, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(983, 'JOPHE', 'EREFU', '//www.gravatar.com/avatar/4cec9812226c8fe9a58372796b65ddc6.jpg', 1, 19, 6, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(984, 'EREGI', 'DAOWI', '//www.gravatar.com/avatar/9b7901c79cae0415dbfc99e1ab298214.jpg', 1, 7, 1, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(985, 'ELWER', 'JIRMO', '//www.gravatar.com/avatar/75752fca9da693ff1cfbf60ecd4088b8.jpg', 1, 16, 9, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(986, 'OHIGU', 'EDOBO', '//www.gravatar.com/avatar/eef7c1b301a7ec6beece8cbf07d4bf6d.jpg', 1, 10, 2, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(987, 'AGARA', 'UZSEP', '//www.gravatar.com/avatar/d004d6b663d251e69aa160067d4ae506.jpg', 1, 1, 4, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(988, 'JOTCO', 'IJVEV', '//www.gravatar.com/avatar/f76ea871ac0303b29b8dafbad49cc7dc.jpg', 1, 7, 2, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(989, 'HOMRA', 'SETNE', '//www.gravatar.com/avatar/8587f4673cd8b8ec8c68155871fc47ae.jpg', 1, 10, 3, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(990, 'BOJOL', 'SAVZA', '//www.gravatar.com/avatar/bb1a36dac84bdbac6349a394bed21afe.jpg', 1, 3, 5, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(991, 'PARZO', 'ZALOP', '//www.gravatar.com/avatar/61b111825f2b378e771c7035e74a6f8d.jpg', 1, 2, 4, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(992, 'GUFAW', 'DIMZE', '//www.gravatar.com/avatar/6a53cc82b6e98acd43231e912add290c.jpg', 1, 7, 1, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(993, 'ULOUH', 'DICED', '//www.gravatar.com/avatar/2d0cd40e8c1329044c538e789e113bb0.jpg', 1, 13, 8, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(994, 'NOWTI', 'KEUBZ', '//www.gravatar.com/avatar/04cae76c413ebb7438b99392f1c35221.jpg', 1, 19, 11, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(995, 'LOJDA', 'NIVNE', '//www.gravatar.com/avatar/86ce84f28a942e5138830d49a0e97d36.jpg', 1, 15, 4, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(996, 'UWAHU', 'ZESJU', '//www.gravatar.com/avatar/5a8e427919039eb62841e1a85a7dd42e.jpg', 1, 12, 8, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(997, 'ENMEV', 'BOGLU', '//www.gravatar.com/avatar/c94b6fff9881311334beacfd9573f7e4.jpg', 1, 8, 9, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(998, 'KUPEJ', 'MOZNO', '//www.gravatar.com/avatar/22ede102d3d1e9b8f5913b01afbc25fa.jpg', 1, 13, 3, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(999, 'ITETU', 'PEAPL', '//www.gravatar.com/avatar/4de9f37529a271b66eaf4f77eff80d15.jpg', 1, 5, 12, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(1000, 'SUTHI', 'ETSOT', '//www.gravatar.com/avatar/89472e6d97394683f28c0e174618d286.jpg', 1, 13, 12, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(1001, 'SEDIB', 'REKVA', '//www.gravatar.com/avatar/305c9f982a634a62db302a636a709b47.jpg', 1, 5, 3, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(1002, 'KOCRO', 'JOJUK', '//www.gravatar.com/avatar/d3fe00b50e04b2ccdf88f42e5c3d629a.jpg', 1, 17, 3, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(1003, 'VIPAZ', 'SOHTO', '//www.gravatar.com/avatar/99664b7e95c4135148dc61c142213e4d.jpg', 1, 1, 9, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(1004, 'USATO', 'MIPOC', '//www.gravatar.com/avatar/3d69aceb64bc9f4de57b55ebe9488227.jpg', 1, 4, 11, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(1005, 'USUJE', 'NITEP', '//www.gravatar.com/avatar/3150387275397e2262aecad48c78e91c.jpg', 1, 15, 1, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(1006, 'KOBIS', 'ETIRO', '//www.gravatar.com/avatar/d0506103e9bf854adab4aa9f8be644ad.jpg', 1, 19, 9, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(1007, 'EBITO', 'DASEN', '//www.gravatar.com/avatar/3d851ac0cb47a52bbc8a7e971972166f.jpg', 1, 11, 8, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(1008, 'NIFHE', 'KUDUL', '//www.gravatar.com/avatar/69dfa5c00789bc4fa4a8252305bb0d40.jpg', 1, 17, 7, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(1009, 'GABUH', 'HELWI', '//www.gravatar.com/avatar/dc2a9cce3c9c1fee5da842edc3f2bc58.jpg', 1, 20, 2, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(1010, 'ICITA', 'LOCUH', '//www.gravatar.com/avatar/a9440a55e17d584635eeec5aec0cb36a.jpg', 1, 16, 5, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(1011, 'JOTUO', 'BIMIG', '//www.gravatar.com/avatar/a76296c77c4964d6fc07f1b840a80faa.jpg', 1, 15, 2, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(1012, 'PICON', 'JERUW', '//www.gravatar.com/avatar/55bcecfc7380a98ab6e16c3a51b4a609.jpg', 1, 16, 12, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(1013, 'SAREK', 'DOUNT', '//www.gravatar.com/avatar/6d91ca4d4ab1c68801a32e3249128e25.jpg', 1, 11, 5, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(1014, 'UVNIH', 'AGADI', '//www.gravatar.com/avatar/2e29adbb1f4de0812b66f516c3d87616.jpg', 1, 7, 11, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(1015, 'UCOVI', 'COHKE', '//www.gravatar.com/avatar/beb010055e26481c182f476a93d7da1e.jpg', 1, 11, 2, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(1016, 'VODIP', 'OCAKO', '//www.gravatar.com/avatar/68b04b4876313986fc8bc9d33cade58f.jpg', 1, 12, 10, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(1017, 'OTTIV', 'RODII', '//www.gravatar.com/avatar/4ce31f974aaee149bca662d43ea3d4aa.jpg', 1, 3, 2, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(1018, 'WALFI', 'MUBOL', '//www.gravatar.com/avatar/98f350590150ef3d734b3b24819c01d5.jpg', 1, 17, 8, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(1019, 'OWFEJ', 'BOMVU', '//www.gravatar.com/avatar/fb9a1c6c581d9bdcc6bfdbd8283150fb.jpg', 1, 2, 1, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(1020, 'DONAZ', 'EJLUG', '//www.gravatar.com/avatar/bcfea4b765b246a3674c22491488841d.jpg', 1, 12, 9, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(1021, 'DAELU', 'PAJHO', '//www.gravatar.com/avatar/787f98d408eeab8dfa110f6a7c6388b7.jpg', 1, 6, 1, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(1022, 'EVHAV', 'NIRAP', '//www.gravatar.com/avatar/940a8f337201d1931a9f122157b89a5f.jpg', 1, 4, 11, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(1023, 'NUHOU', 'MEHIV', '//www.gravatar.com/avatar/8e68a1af26f9fb557ad0359b2be0d084.jpg', 1, 6, 1, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(1024, 'VESAF', 'RACEA', '//www.gravatar.com/avatar/e7ea7804fdd79e27f0b20eff1ecacb8a.jpg', 1, 19, 9, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(1025, 'ICEZO', 'IBODU', '//www.gravatar.com/avatar/d5939fb498cc5fcdfd814f5796b5ba3d.jpg', 1, 17, 7, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(1026, 'JETCI', 'NEDNO', '//www.gravatar.com/avatar/cd237e950432fa20a5fba028e848de72.jpg', 1, 12, 10, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(1027, 'WIDOD', 'BONOP', '//www.gravatar.com/avatar/b860a067d90fda8b97b2a781eb90ab58.jpg', 1, 11, 8, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(1028, 'RINEJ', 'IJNUV', '//www.gravatar.com/avatar/774dd83ee860a9c78a12b30ca18675f6.jpg', 1, 13, 4, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(1029, 'SUVLO', 'RIPEF', '//www.gravatar.com/avatar/7a003069c0267b113b3995fd4f3232a4.jpg', 1, 9, 8, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(1030, 'OBCID', 'MIFAL', '//www.gravatar.com/avatar/7456936f0ddc14a4236347476e171eb6.jpg', 1, 17, 7, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(1031, 'KEIBA', 'RUNID', '//www.gravatar.com/avatar/71c2357208d18dba6247c77c43665826.jpg', 1, 10, 9, '2019-09-02 21:59:20', '2019-09-02 21:59:20');
INSERT INTO `products` (`product_id`, `product_name`, `product_description`, `product_image`, `product_show`, `company_id`, `category_id`, `created_at`, `updated_at`) VALUES
(1032, 'HINUK', 'WAZBO', '//www.gravatar.com/avatar/f3562a1e23689cf7029f94bcdf58de30.jpg', 1, 1, 5, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(1033, 'FUZAD', 'TAWJA', '//www.gravatar.com/avatar/762fe38853a90bd9aae3ed435fd7b4ab.jpg', 1, 17, 12, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(1034, 'RAZOF', 'GEKGE', '//www.gravatar.com/avatar/a954690d216fa399a026835b484e38e2.jpg', 1, 4, 10, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(1035, 'SININ', 'ALIHO', '//www.gravatar.com/avatar/d88e0fc4704e70adde1642721d1a5cea.jpg', 1, 3, 2, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(1036, 'MUGOH', 'LIEFE', '//www.gravatar.com/avatar/02c2653fedf34367b6fe89eaf5f872c9.jpg', 1, 12, 2, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(1037, 'MODAR', 'DUKOF', '//www.gravatar.com/avatar/7a9a7b1e393ead32d3eb6fb1c79be93c.jpg', 1, 16, 12, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(1038, 'MOULC', 'GIPIF', '//www.gravatar.com/avatar/c4b8aa694ae045b6351a643bd33ea98f.jpg', 1, 6, 9, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(1039, 'RUTAN', 'DINPU', '//www.gravatar.com/avatar/f49185394ff39a73637366ae19f76d74.jpg', 1, 9, 9, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(1040, 'BIMEV', 'UNHOH', '//www.gravatar.com/avatar/0bbd7c5961b82347760662f2b1fdfa13.jpg', 1, 3, 7, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(1041, 'WOLED', 'MAUGO', '//www.gravatar.com/avatar/d7a6a05e086a18b28a19691d04b6d96e.jpg', 1, 9, 5, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(1042, 'ADDOJ', 'OPPET', '//www.gravatar.com/avatar/3103c54dfd14d3eacc1543d0ba1a2f08.jpg', 1, 4, 3, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(1043, 'GEFER', 'VODOU', '//www.gravatar.com/avatar/1f2e8e116b8629d63bfd5eb6df775fe7.jpg', 1, 3, 9, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(1044, 'FAHWO', 'WAKUD', '//www.gravatar.com/avatar/428dd4a9de30b20c0a7f98680cb8872b.jpg', 1, 5, 7, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(1045, 'FUBNO', 'EHEWU', '//www.gravatar.com/avatar/d27381345070f586d79798da46766be3.jpg', 1, 7, 8, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(1046, 'KOTHO', 'NEFIB', '//www.gravatar.com/avatar/91424c8be5995d62ce00e21abd4a0b26.jpg', 1, 11, 1, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(1047, 'AZUMI', 'RENOM', '//www.gravatar.com/avatar/f80ba3fb358d11724e702b80100c27c5.jpg', 1, 11, 6, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(1048, 'ZELIG', 'SESAL', '//www.gravatar.com/avatar/96bede8d2b7bd78a19d246668940ea8d.jpg', 1, 10, 7, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(1049, 'FEHUL', 'UGGIS', '//www.gravatar.com/avatar/741ddbc779518b98978e1f81791b5c88.jpg', 1, 1, 10, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(1050, 'GEKTU', 'JEGIJ', '//www.gravatar.com/avatar/a98189f909f6ccffb90391e4fd4d6109.jpg', 1, 5, 7, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(1051, 'PACJE', 'VUVSI', '//www.gravatar.com/avatar/2f270c5e33f0964876e2d0c77eb21e11.jpg', 1, 19, 5, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(1052, 'BOZVE', 'HAIGK', '//www.gravatar.com/avatar/0142aa8b41911b95f0d9687ff0e3b1d7.jpg', 1, 7, 5, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(1053, 'UZILE', 'GEGIJ', '//www.gravatar.com/avatar/d7d5d46323f7dc61d4e073beef3bf9e2.jpg', 1, 11, 7, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(1054, 'IHEJE', 'ESITU', '//www.gravatar.com/avatar/3f2fb3ca923afffc00db7dc4245fcc73.jpg', 1, 16, 5, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(1055, 'KOMOL', 'SAMER', '//www.gravatar.com/avatar/55cd1ab7ae97ede923a10c6730365e21.jpg', 1, 5, 9, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(1056, 'RIHWO', 'AWDOL', '//www.gravatar.com/avatar/ebcaa4b0ecb0318d99998b18fb969c0c.jpg', 1, 7, 8, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(1057, 'MAKIH', 'NACAD', '//www.gravatar.com/avatar/b2c199cf340f258452354478320528b2.jpg', 1, 16, 10, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(1058, 'SIWVO', 'FAZNO', '//www.gravatar.com/avatar/66fc6adc004d52060ea98454ac860458.jpg', 1, 11, 1, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(1059, 'RADZA', 'BIUBZ', '//www.gravatar.com/avatar/b77f09508c85246078546720bce7c21b.jpg', 1, 20, 9, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(1060, 'DUCPU', 'NUDLA', '//www.gravatar.com/avatar/90b7d8a6ab27ad3ef7b1ac979c57e278.jpg', 1, 2, 8, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(1061, 'VIGIR', 'OBPEL', '//www.gravatar.com/avatar/483487c3168cfaae7ee5b4a440922586.jpg', 1, 18, 9, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(1062, 'BAFEF', 'AZIIN', '//www.gravatar.com/avatar/a0aac31bab1dc41fc5cf1b886ccdc921.jpg', 1, 11, 1, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(1063, 'KEDIL', 'CEGUO', '//www.gravatar.com/avatar/c97cdc2594dfb60c692a37a32e42e7b2.jpg', 1, 3, 12, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(1064, 'DAGDO', 'FOLMO', '//www.gravatar.com/avatar/dad713682a4bce7d0b1038ffd9fca804.jpg', 1, 18, 6, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(1065, 'FIKJU', 'EJEAZ', '//www.gravatar.com/avatar/f9c3c0cf1bc84b3c28bd706d61d50b35.jpg', 1, 11, 10, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(1066, 'OSNIK', 'AZCUG', '//www.gravatar.com/avatar/7124f0e0c07102cf2f4143aa3ea577c6.jpg', 1, 2, 4, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(1067, 'HOSPA', 'RUTWI', '//www.gravatar.com/avatar/a53b5bf9fa92fd73437b15929db58d5f.jpg', 1, 4, 9, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(1068, 'PEVVE', 'HOFIN', '//www.gravatar.com/avatar/8ff02991893a6e90df753ab637ad0116.jpg', 1, 14, 1, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(1069, 'TAWVE', 'KEJRA', '//www.gravatar.com/avatar/4498693e1883ec0e9b36463f1e64e3fa.jpg', 1, 8, 9, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(1070, 'KALAP', 'FIUFP', '//www.gravatar.com/avatar/ef2e55f808c3f637051ecb0223df4657.jpg', 1, 3, 3, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(1071, 'OSEHE', 'DENOZ', '//www.gravatar.com/avatar/97708cda6b95678ad8fc9e4972086c0d.jpg', 1, 7, 8, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(1072, 'GENIL', 'OTBOG', '//www.gravatar.com/avatar/14f0f3b60f0a8311c4c6bcb2d82b3874.jpg', 1, 3, 8, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(1073, 'FITEG', 'PUSAG', '//www.gravatar.com/avatar/72d56761f1fef012af226337bde06db4.jpg', 1, 14, 5, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(1074, 'WOACM', 'JEZFI', '//www.gravatar.com/avatar/1e80c5aaacbc293630f8ab3df2363d54.jpg', 1, 20, 1, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(1075, 'OGIKI', 'EGCEE', '//www.gravatar.com/avatar/c87edbdadd71b261810ff7e25773fab5.jpg', 1, 13, 10, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(1076, 'KODTO', 'RINKA', '//www.gravatar.com/avatar/80220515bb3ca9b2602b485070e6a530.jpg', 1, 5, 10, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(1077, 'NAZAB', 'VICKI', '//www.gravatar.com/avatar/00c89189c108f92fa37d52a953d12a1b.jpg', 1, 14, 10, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(1078, 'CINES', 'CUDZO', '//www.gravatar.com/avatar/d6d85037242cb47776b180ce92280954.jpg', 1, 12, 12, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(1079, 'GINBI', 'MAOTA', '//www.gravatar.com/avatar/bf15d201db311889e595769cc324a236.jpg', 1, 6, 3, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(1080, 'HISBO', 'SAMIO', '//www.gravatar.com/avatar/b6a92283819f70cf2151b91e7c3c060a.jpg', 1, 8, 5, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(1081, 'PILIJ', 'ZUGLE', '//www.gravatar.com/avatar/40d61ed0e3c9c8df03bf14ffaa3af079.jpg', 1, 14, 12, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(1082, 'RECWU', 'FULON', '//www.gravatar.com/avatar/d8e10acf73d78bfa937a869a344f6732.jpg', 1, 13, 10, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(1083, 'EVLIN', 'GAWMU', '//www.gravatar.com/avatar/7179558f68d9fdb891bd2a6d2dbf2a3e.jpg', 1, 3, 3, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(1084, 'JACLU', 'RIKUZ', '//www.gravatar.com/avatar/c4bc3f2448c7b6a91a961242ab998c2a.jpg', 1, 5, 5, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(1085, 'GIDVI', 'KEPAK', '//www.gravatar.com/avatar/5b1c64fdcd39caff4c779f53ec4c1dd1.jpg', 1, 20, 7, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(1086, 'KEJWO', 'NECOB', '//www.gravatar.com/avatar/ab80e70682deb9bf8ea6ecf51b3bf857.jpg', 1, 3, 5, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(1087, 'DAGNI', 'WOUHU', '//www.gravatar.com/avatar/2462a3fc1aee9c37eeae120673ccf391.jpg', 1, 8, 8, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(1088, 'NANUN', 'MOIRG', '//www.gravatar.com/avatar/fba02cd5f2af7fb3847a137a72ed25e4.jpg', 1, 17, 7, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(1089, 'LUUST', 'HOPSU', '//www.gravatar.com/avatar/2baea2670d9c12361f523c432ed8f1d6.jpg', 1, 2, 1, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(1090, 'DUMRI', 'AHEWR', '//www.gravatar.com/avatar/f83fc9d8c71782fd4d94c29fd71b4f23.jpg', 1, 15, 10, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(1091, 'HUPUK', 'NAPUP', '//www.gravatar.com/avatar/551f9dc162fa8300c137ddad927be610.jpg', 1, 10, 9, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(1092, 'NOOTG', 'ESJAL', '//www.gravatar.com/avatar/382bedf396aa59c7bc302fdf838168d6.jpg', 1, 2, 7, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(1093, 'VACZU', 'JOTAZ', '//www.gravatar.com/avatar/03432e918ceb330bdbc49f4d5ffcebd9.jpg', 1, 17, 4, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(1094, 'JOHLA', 'IKWOB', '//www.gravatar.com/avatar/01b214fbf11b89204909cc3e9b2a1772.jpg', 1, 2, 3, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(1095, 'HUMLO', 'FEVSA', '//www.gravatar.com/avatar/d54d8d5d69c1748099f5158f05a15b9f.jpg', 1, 1, 4, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(1096, 'VECUD', 'JOWLO', '//www.gravatar.com/avatar/8ea03f11a49d5cfdef113f18b6c7de9a.jpg', 1, 7, 11, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(1097, 'DUSEM', 'ERPAG', '//www.gravatar.com/avatar/2db9ae863af24d40be7cbcda354158a1.jpg', 1, 18, 1, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(1098, 'FOJOL', 'MAJIT', '//www.gravatar.com/avatar/00cf4259c0e5a9d61911c8e86b34e255.jpg', 1, 19, 6, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(1099, 'RAKDE', 'OVIGE', '//www.gravatar.com/avatar/a95c3f22b313b796bf48dd4e0d80513d.jpg', 1, 8, 12, '2019-09-02 21:59:20', '2019-09-02 21:59:20'),
(1100, 'JIGCA', 'NIPDU', '//www.gravatar.com/avatar/c784de965f1dc7929f8b4015a4396844.jpg', 1, 4, 6, '2019-09-02 21:59:20', '2019-09-02 21:59:20');

-- --------------------------------------------------------

--
-- Estrutura da tabela `product_images`
--

CREATE TABLE `product_images` (
  `prod_img_id` int(10) UNSIGNED NOT NULL,
  `prod_img_path` varchar(255) NOT NULL,
  `prod_img_file` varchar(255) DEFAULT NULL,
  `prod_img_name` varchar(255) DEFAULT NULL,
  `prod_img_type` varchar(255) DEFAULT NULL,
  `prod_img_subtype` varchar(255) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estrutura da tabela `stocks`
--

CREATE TABLE `stocks` (
  `stock_id` int(10) UNSIGNED NOT NULL,
  `stock_price` decimal(9,2) NOT NULL,
  `stock_amount` float(9,2) NOT NULL,
  `stock_measure_type` varchar(255) NOT NULL,
  `product_id` int(10) UNSIGNED NOT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estrutura da tabela `tokens`
--

CREATE TABLE `tokens` (
  `id` int(10) UNSIGNED NOT NULL,
  `user_id` int(10) UNSIGNED DEFAULT NULL,
  `token` varchar(255) NOT NULL,
  `type` varchar(80) NOT NULL,
  `is_revoked` tinyint(1) DEFAULT '0',
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estrutura da tabela `ufs`
--

CREATE TABLE `ufs` (
  `uf_id` int(10) UNSIGNED NOT NULL,
  `uf_name` varchar(254) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `ufs`
--

INSERT INTO `ufs` (`uf_id`, `uf_name`, `created_at`, `updated_at`) VALUES
(1, 'JUWCE', '2019-09-02 23:40:35', '2019-09-02 23:40:35'),
(2, 'OWGAH', '2019-09-02 23:40:35', '2019-09-02 23:40:35'),
(3, 'LUVAG', '2019-09-02 23:40:35', '2019-09-02 23:40:35'),
(4, 'MORZE', '2019-09-02 23:40:35', '2019-09-02 23:40:35'),
(5, 'REBOR', '2019-09-02 23:40:35', '2019-09-02 23:40:35'),
(6, 'BERAV', '2019-09-02 23:40:35', '2019-09-02 23:40:35'),
(7, 'RAJUZ', '2019-09-02 23:40:35', '2019-09-02 23:40:35'),
(8, 'FINIR', '2019-09-02 23:40:35', '2019-09-02 23:40:35'),
(9, 'WUZUK', '2019-09-02 23:40:35', '2019-09-02 23:40:35'),
(10, 'VODZA', '2019-09-02 23:40:35', '2019-09-02 23:40:35');

-- --------------------------------------------------------

--
-- Estrutura da tabela `users`
--

CREATE TABLE `users` (
  `user_id` int(10) UNSIGNED NOT NULL,
  `user_name` varchar(80) NOT NULL,
  `user_email` varchar(254) NOT NULL,
  `user_password` varchar(60) NOT NULL,
  `user_cellphone` varchar(60) DEFAULT NULL,
  `user_street` varchar(254) NOT NULL,
  `user_number` varchar(60) DEFAULT NULL,
  `user_district` varchar(60) NOT NULL,
  `city_id` int(10) UNSIGNED NOT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `users`
--

INSERT INTO `users` (`user_id`, `user_name`, `user_email`, `user_password`, `user_cellphone`, `user_street`, `user_number`, `user_district`, `city_id`, `created_at`, `updated_at`) VALUES
(1, 'EKOFO', 'GENKAGJA@OH.ST', '', NULL, '', NULL, '', 1, '2019-09-02 21:35:26', '2019-09-02 21:35:26'),
(2, 'LOSWO', 'WAB@WIP.US', '', NULL, '', NULL, '', 1, '2019-09-02 21:35:26', '2019-09-02 21:35:26'),
(3, 'VAKUL', 'CITUSIT@VIM.NC', '', NULL, '', NULL, '', 1, '2019-09-02 21:35:26', '2019-09-02 21:35:26'),
(4, 'HABAH', 'SOSER@HATVE.ZW', '', NULL, '', NULL, '', 1, '2019-09-02 21:35:26', '2019-09-02 21:35:26'),
(5, 'KAMOK', 'IJITA@BIHPUZE.NP', '', NULL, '', NULL, '', 1, '2019-09-02 21:35:26', '2019-09-02 21:35:26'),
(6, 'FEFGU', 'GEJALA@NU.TM', '', NULL, '', NULL, '', 1, '2019-09-02 21:35:26', '2019-09-02 21:35:26'),
(7, 'JUTCI', 'JOKNAWU@PETUZI.LC', '', NULL, '', NULL, '', 1, '2019-09-02 21:35:26', '2019-09-02 21:35:26'),
(8, 'BIGIC', 'METEJBO@AZEG.SV', '', NULL, '', NULL, '', 1, '2019-09-02 21:35:26', '2019-09-02 21:35:26'),
(9, 'ZOKAT', 'GIKNOW@FUJ.CO', '', NULL, '', NULL, '', 1, '2019-09-02 21:35:26', '2019-09-02 21:35:26'),
(10, 'VOSOC', 'TA@FIT.TL', '', NULL, '', NULL, '', 1, '2019-09-02 21:35:26', '2019-09-02 21:35:26');

-- --------------------------------------------------------

--
-- Estrutura da tabela `user_products`
--

CREATE TABLE `user_products` (
  `user_prod_id` int(10) UNSIGNED NOT NULL,
  `user_prod_total_amount` float(9,2) NOT NULL,
  `user_prod_total_value` decimal(9,2) NOT NULL,
  `user_id` int(10) UNSIGNED NOT NULL,
  `product_id` int(10) UNSIGNED NOT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `adonis_schema`
--
ALTER TABLE `adonis_schema`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`category_id`),
  ADD UNIQUE KEY `categories_category_name_unique` (`category_name`);

--
-- Indexes for table `cities`
--
ALTER TABLE `cities`
  ADD PRIMARY KEY (`city_id`),
  ADD KEY `uf_id` (`uf_id`);

--
-- Indexes for table `companies`
--
ALTER TABLE `companies`
  ADD PRIMARY KEY (`company_id`),
  ADD UNIQUE KEY `companies_company_cnpj_unique` (`company_cnpj`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`product_id`),
  ADD KEY `company_id` (`company_id`),
  ADD KEY `category_id` (`category_id`);

--
-- Indexes for table `product_images`
--
ALTER TABLE `product_images`
  ADD PRIMARY KEY (`prod_img_id`);

--
-- Indexes for table `stocks`
--
ALTER TABLE `stocks`
  ADD PRIMARY KEY (`stock_id`),
  ADD KEY `product_id` (`product_id`);

--
-- Indexes for table `tokens`
--
ALTER TABLE `tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `tokens_token_unique` (`token`),
  ADD KEY `tokens_user_id_foreign` (`user_id`),
  ADD KEY `tokens_token_index` (`token`);

--
-- Indexes for table `ufs`
--
ALTER TABLE `ufs`
  ADD PRIMARY KEY (`uf_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`),
  ADD UNIQUE KEY `users_user_email_unique` (`user_email`),
  ADD KEY `city_id` (`city_id`);

--
-- Indexes for table `user_products`
--
ALTER TABLE `user_products`
  ADD PRIMARY KEY (`user_prod_id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `product_id` (`product_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `adonis_schema`
--
ALTER TABLE `adonis_schema`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `category_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `cities`
--
ALTER TABLE `cities`
  MODIFY `city_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `companies`
--
ALTER TABLE `companies`
  MODIFY `company_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `product_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1101;

--
-- AUTO_INCREMENT for table `product_images`
--
ALTER TABLE `product_images`
  MODIFY `prod_img_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `stocks`
--
ALTER TABLE `stocks`
  MODIFY `stock_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tokens`
--
ALTER TABLE `tokens`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `ufs`
--
ALTER TABLE `ufs`
  MODIFY `uf_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `user_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `user_products`
--
ALTER TABLE `user_products`
  MODIFY `user_prod_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Limitadores para a tabela `cities`
--
ALTER TABLE `cities`
  ADD CONSTRAINT `cities_uf_id_foreign` FOREIGN KEY (`uf_id`) REFERENCES `ufs` (`uf_id`) ON DELETE CASCADE;

--
-- Limitadores para a tabela `companies`
--
ALTER TABLE `companies`
  ADD CONSTRAINT `companies_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`) ON DELETE CASCADE;

--
-- Limitadores para a tabela `stocks`
--
ALTER TABLE `stocks`
  ADD CONSTRAINT `stocks_product_id_foreign` FOREIGN KEY (`product_id`) REFERENCES `products` (`product_id`) ON DELETE CASCADE;

--
-- Limitadores para a tabela `tokens`
--
ALTER TABLE `tokens`
  ADD CONSTRAINT `tokens_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`);

--
-- Limitadores para a tabela `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `users_city_id_foreign` FOREIGN KEY (`city_id`) REFERENCES `cities` (`city_id`) ON DELETE CASCADE;

--
-- Limitadores para a tabela `user_products`
--
ALTER TABLE `user_products`
  ADD CONSTRAINT `user_products_product_id_foreign` FOREIGN KEY (`product_id`) REFERENCES `products` (`product_id`) ON DELETE CASCADE,
  ADD CONSTRAINT `user_products_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
