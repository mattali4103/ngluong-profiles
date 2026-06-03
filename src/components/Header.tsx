import { GrLanguage } from "react-icons/gr";
// import { MdDarkMode, MdLightMode } from "react-icons/md";
import { useLanguage } from "../hooks/useLanguage";
import { useStrings } from "../hooks/useString";

const Header: React.FC = () => {
  const { language, setLanguage } = useLanguage();
  const strings = useStrings();

  const handleLanguageChange = (lang: string) => {
    setLanguage(lang);
  };

  const currentLangCode = language === "en" ? "EN" : "VI";

  return (
    <header className="App-header">
      <nav>
        <a href="#home">{strings.nav_home}</a>
        <a href="#about">{strings.nav_about}</a>
        <a href="#skills">{strings.nav_skills}</a>
        <a href="#projects">{strings.nav_projects}</a>
        <a href="#contact">{strings.nav_contact}</a>
      </nav>

      <div className="header-controls">
        <div className="language-selector">
          <button
            className="language-btn"
            type="button"
            aria-label={strings.nav_language}
          >
            <GrLanguage />
            <span className="lang-text">{currentLangCode}</span>
          </button>
          <div className="lang-menu">
            <button
              className="lang-option"
              data-lang="vi"
              onClick={() => handleLanguageChange("vi")}
              aria-pressed={language === "vi"}
            >
              <span className="flag">🇻🇳</span>
              <span>Tiếng Việt</span>
            </button>
            <button
              className="lang-option"
              data-lang="en"
              onClick={() => handleLanguageChange("en")}
              aria-pressed={language === "en"}
            >
              <span className="flag">en</span>
              <span>English</span>
            </button>
          </div>
        </div>
        {/* <button hidden
          className="theme-toggle"
          type="button"
          aria-label={strings.nav_theme}
        >
          <MdDarkMode />
          <MdLightMode/>
        </button> */}
      </div>
    </header>
  );
};
export default Header;
