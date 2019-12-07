import React, {useState} from "react";
import {useGlobals} from "../contexts/Global";
import {Form, Nav, NavDropdown} from "react-bootstrap";
import {
    FormControlStyled,
    LinkStyled,
    Logo,
    NavbarCollapseStyled,
    NavbarToggleStyled,
    NavDropdownStyled,
    NavStyled
} from "./HeaderStyle.js";
import {useHistory, withRouter} from "react-router-dom";

import logo from "../assets/images/logo-app.png";
import useT from "../helpers/Translator";

/**
 * Returns true if we are in homepage
 * @param {string} pathname
 */
const isHome = pathname => {
    return pathname === "/";
};

/**
 * Returns true if we are in explorepage
 * @param {string} pathname
 */
const isExplore = pathname => {
    return pathname === "/explore";
};

/**
 * Returns the input bar that querys de page for blog entries
 * @param {*} props
 */
function Searcher(props) {
    const [q, setQ] = useState(null);
    const history = useHistory();

    const navigateToExplore = (e, q) => {
        e.preventDefault();
        if (q && q.length > 2) {
            history.push("/explore", {q});
            window.scrollTo(0, 0);
        }
    };

    return (
        <Form
            inline
            action="/explore"
            onSubmit={e => navigateToExplore(e, q)}
            className={props.className}
        >
            <FormControlStyled
                name="q"
                onBlur={e => navigateToExplore(e, q)}
                onChange={t => setQ(t.target.value)}
                value={q}
                defaultValue={q}
                type="text"
                placeholder="🔎"
                className="mr-sm-2"
                autoComplete="off"
            />
        </Form>
    );
}

/**
 * Button that switches the themes
 * @param {*} props
 */
const ThemeSwitcher = props => {
    return (
        <Nav className={props.className}>
            <Nav.Link className="text-white" href="#home" onClick={props.changeTheme}>
                {props.theme === "dark" ? "🌓" : "🌗"}
            </Nav.Link>
        </Nav>
    );
};

/**
 * Button that switches the language
 * @param {*} props
 */
const LanguageSwitcher = props => {

    return (
        <Nav className={props.className}>
            <NavDropdownStyled title={useT("lang", ['👅'])}>
                <NavDropdown.Item
                    onClick={() => props.changeLanguage("ca")}
                    className={props.language === "ca" ? "active" : null}
                >
                    {useT('catalan')}
                </NavDropdown.Item>
                <NavDropdown.Item
                    onClick={() => props.changeLanguage("es")}
                    className={props.language === "es" ? "active" : null}
                >
                    {useT('spanish')}
                </NavDropdown.Item>
                <NavDropdown.Item
                    onClick={() => props.changeLanguage("en")}
                    className={props.language === "en" ? "active" : null}
                >
                    {useT('english')}
                </NavDropdown.Item>
            </NavDropdownStyled>
        </Nav>
    );
};

/**
 * Main functional function that returns the navigation bar
 * @param {*} props
 */
export function Header(props) {
    const {pathname} = props.location;
    const [{theme, language}, dispatch] = useGlobals();
    const [expanded, setExpanded] = useState(false);
    const changeTheme = () => {
        dispatch({
            type: "changeTheme",
            changeTheme: theme === "dark" ? "light" : "dark"
        });
    };

    const changeLanguage = lang => {
        dispatch({
            type: "changeLanguage",
            changeLanguage: lang
        });
    };

    return (
        <NavStyled
            expand="lg"
            shadow={isHome(pathname) ? undefined : true}
            onSelect={() => console.log("hii")}
            expanded={expanded}
        >
            <LinkStyled
                to="/"
                className={isHome(pathname) ? "d-none" : "pr-3 mr-5"}
                style={{opacity: 1}}
                data-toggle="collapse"
                data-target="#navbarMobile"
            >
                <Logo src={logo}/>
            </LinkStyled>
            <ThemeSwitcher
                changeTheme={changeTheme}
                theme={theme}
                className="ml-auto mr-3 d-flex d-lg-none"
            />
            <Searcher
                className={isExplore(pathname) ? "d-none" : "mr-3 d-flex d-lg-none"}
            />
            <NavbarToggleStyled
                aria-controls="responsive-navbar-nav"
                onClick={() => setExpanded(expanded ? false : "expanded")}
            />
            <NavbarCollapseStyled id="responsive-navbar-nav">
                <Nav className="mr-auto text-center text-lg-left pt-5 pt-lg-0">
                    <LinkStyled
                        onClick={() => setExpanded(false)}
                        activeStyle={{opacity: "1"}}
                        className="my-2 my-lg-0 px-lg-4"
                        to="/explore"
                        icon="💡"
                    >
                        {useT('explore')}
                    </LinkStyled>
                    <LinkStyled
                        onClick={() => setExpanded(false)}
                        activeStyle={{opacity: "1"}}
                        className="my-2 my-lg-0 px-lg-4"
                        to="/contact"
                    >
                        {useT('contact')}
                    </LinkStyled>
                    <LinkStyled
                        onClick={() => setExpanded(false)}
                        activeStyle={{opacity: "1"}}
                        className="my-2 my-lg-0 px-lg-4"
                        to="/about"
                    >
                        {useT('about')}
                    </LinkStyled>
                </Nav>
                <LanguageSwitcher
                    changeLanguage={changeLanguage}
                    language={language}
                    className="text-center"
                />
                <ThemeSwitcher
                    changeTheme={changeTheme}
                    theme={theme}
                    className="mr-3 d-none d-lg-flex"
                />
                <Searcher
                    className={isExplore(pathname) ? "d-none" : "mr-2 d-none d-lg-flex"}
                />
            </NavbarCollapseStyled>
        </NavStyled>
    );
}

export default withRouter(Header);
